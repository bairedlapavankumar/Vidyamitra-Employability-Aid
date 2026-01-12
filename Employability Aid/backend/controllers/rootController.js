const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Define storage for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const type = req.body.type || req.query.type;
        let uploadPath;

        if (type === 'profile') {
            uploadPath = path.join(__dirname, '../Student Joinees');
        } else {
            // Default to newsletter
            uploadPath = path.join(__dirname, '../Annual News Letters');
        }

        // Ensure directory exists
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        // Use original name
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Get Content (List files from both directories)
exports.getContent = (req, res) => {
    const newsletterPath = path.join(__dirname, '../Annual News Letters');
    const profilePath = path.join(__dirname, '../Student Joinees');

    let content = [];

    // Helper to read directory
    const readDir = (dirPath, type, urlPrefix) => {
        if (fs.existsSync(dirPath)) {
            const files = fs.readdirSync(dirPath);
            return files.map(file => ({
                _id: file,
                type: type,
                year: file.replace('.pdf', ''),
                fileUrl: `${urlPrefix}/${file}`
            }));
        }
        return [];
    };

    try {
        const newsletters = readDir(newsletterPath, 'newsletter', '/annual-news-letters');
        const profiles = readDir(profilePath, 'profile', '/student-joinees');
        content = [...newsletters, ...profiles];
        res.json(content);
    } catch (err) {
        console.error("Error reading content directories:", err);
        res.status(500).json({ message: "Unable to scan files!" });
    }
};

// Upload Content
exports.uploadContent = [
    upload.single('file'),
    (req, res) => {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        res.status(201).json({ message: "File uploaded successfully", file: req.file });
    }
];

// Delete Content
exports.deleteContent = (req, res) => {
    const filename = req.params.filename;
    // We don't know the type from the ID (filename) alone easily unless we pass it.
    // But filenames should be unique enough or we check both.
    // Let's check both directories.

    const newsletterPath = path.join(__dirname, '../Annual News Letters', filename);
    const profilePath = path.join(__dirname, '../Student Joinees', filename);

    let deleted = false;

    if (fs.existsSync(newsletterPath)) {
        fs.unlinkSync(newsletterPath);
        deleted = true;
    } else if (fs.existsSync(profilePath)) {
        fs.unlinkSync(profilePath);
        deleted = true;
    }

    if (deleted) {
        res.status(200).json({ message: "File deleted successfully" });
    } else {
        res.status(404).json({ message: "File not found" });
    }
};
