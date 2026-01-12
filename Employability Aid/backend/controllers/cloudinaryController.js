const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const axios = require('axios');

// Simple in-memory cache
let cache = {
    folders: null,
    materials: null,
    lastFetch: 0
};
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes


// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer Storage for Cloudinary
const createStorage = () => {
    return new CloudinaryStorage({
        cloudinary: cloudinary,
        params: async (req, file) => {
            const isPdf = file.mimetype === 'application/pdf' || file.originalname.toLowerCase().endsWith('.pdf');
            const resourceType = isPdf ? 'raw' : 'auto';

            // Sanitize filename
            const sanitizedName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');

            const publicId = resourceType === 'raw'
                ? sanitizedName
                : sanitizedName.replace(/\.[^/.]+$/, "");

            // Determine folder from req.body (requires folder field to be sent BEFORE file)
            const subfolder = req.body.folder || 'Uncategorized';
            const folderPath = `materials/${subfolder}`;

            return {
                folder: folderPath,
                allowed_formats: ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'jpg', 'png', 'jpeg', 'mp4'],
                resource_type: resourceType,
                public_id: publicId,
                use_filename: true,
                unique_filename: false,
                overwrite: true,
                context: { original_name: file.originalname }
            };
        },
    });
};

// List all subfolders in materials
exports.listFolders = async (req, res) => {
    try {
        // Check cache
        if (cache.folders && (Date.now() - cache.lastFetch < CACHE_TTL)) {
            console.log("Returning cached folders");
            return res.json(cache.folders);
        }

        let allFolders = new Set();

        // Explicitly add "Aptitude and Reasoning" so it always appears
        allFolders.add("Aptitude and Reasoning");

        // Search all resource types to find unique folders
        for (const resourceType of ['image', 'video', 'raw']) {
            try {
                const result = await cloudinary.api.resources({
                    type: 'upload',
                    resource_type: resourceType,
                    max_results: 500,
                });

                // Extract unique folder names
                result.resources.forEach(file => {
                    if (file.asset_folder) {
                        const folderParts = file.asset_folder.split('/');
                        const folderName = folderParts[folderParts.length - 1];
                        allFolders.add(folderName);
                    }
                });
            } catch (err) {
                // Ignore errors for resource types that don't exist
            }
        }

        // Convert Set to array of folder objects
        const folders = Array.from(allFolders).map(name => ({
            name: name,
            path: `materials/${name}`,
        }));

        console.log("Folders found:", folders.map(f => f.name));

        // Update cache
        cache.folders = folders;
        cache.lastFetch = Date.now();

        res.json(folders);
    } catch (err) {
        console.error("List Folders Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// List all materials
exports.listMaterials = async (req, res) => {
    try {
        const filterFolder = req.query.folder; // Get folder filter from query params

        // Check cache for materials (we cache the full list)
        // if (cache.materials && (Date.now() - cache.lastFetch < CACHE_TTL)) {
        //     console.log("Returning cached materials");
        //     let cachedMaterials = cache.materials;
        //     if (filterFolder) {
        //         cachedMaterials = cachedMaterials.filter(material => material.folder === filterFolder);
        //     }
        //     return res.json(cachedMaterials);
        // }

        let allMaterials = [];

        console.log("listMaterials called, filter folder:", filterFolder);

        // Search at root level for all resource types
        for (const resourceType of ['image', 'video', 'raw']) {
            try {
                const result = await cloudinary.api.resources({
                    type: 'upload',
                    resource_type: resourceType,
                    max_results: 500,
                    context: true,
                });

                console.log(`Found ${result.resources.length} ${resourceType} files`);

                const materials = result.resources.map((file, index) => {
                    if (index < 3) {
                        console.log(`[${resourceType}] File: ${file.public_id}, Context:`, JSON.stringify(file.context));
                    }

                    // Extract folder from asset_folder field (Cloudinary's folder organization)
                    let folderName = 'Uncategorized';

                    if (file.asset_folder) {
                        // asset_folder contains the full path like "materials/Body Language"
                        // Extract just the folder name
                        const folderParts = file.asset_folder.split('/');
                        folderName = folderParts[folderParts.length - 1];
                    } else if (file.folder) {
                        folderName = file.folder;
                    } else if (file.public_id.includes('/')) {
                        const parts = file.public_id.split('/');
                        if (parts.length > 1) {
                            folderName = parts[parts.length - 2];
                        }
                    }

                    // Use original name from context if available, otherwise fallback
                    const displayName = file.context?.custom?.original_name || file.original_filename || file.public_id.split('/').pop();

                    return {
                        id: file.public_id,
                        name: displayName,
                        url: file.secure_url,
                        format: file.format,
                        createdAt: file.created_at,
                        folder: folderName,
                        resourceType: resourceType,
                    };
                });

                allMaterials = allMaterials.concat(materials);
            } catch (err) {
                console.log(`No ${resourceType} files found:`, err.message);
            }
        }

        console.log(`Total materials returned: ${allMaterials.length}`);

        // Update cache with FULL list
        cache.materials = allMaterials;
        cache.lastFetch = Date.now();

        // Filter for response if needed
        let responseMaterials = allMaterials;
        if (filterFolder) {
            responseMaterials = allMaterials.filter(material => material.folder === filterFolder);
            console.log(`Filtered to ${responseMaterials.length} materials in folder: ${filterFolder}`);
        }

        res.json(responseMaterials);
    } catch (err) {
        console.error("List Materials Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// Upload middleware with dynamic folder
exports.uploadMiddleware = (req, res, next) => {
    const storage = createStorage();
    const upload = multer({ storage: storage }).single('file');

    upload(req, res, (err) => {
        if (err) {
            console.error("Multer Upload Error:", err);
            return res.status(500).json({ error: err.message });
        }
        next();
    });
};

// Upload handler
exports.uploadMaterial = async (req, res) => {
    try {
        console.log("Upload Request Body:", req.body);
        if (!req.file) {
            console.log("No file in req.file");
            return res.status(400).json({ error: 'No file uploaded' });
        }

        console.log("Uploaded File Details:", req.file);

        console.log("Uploaded File Details:", req.file);

        // Invalidate cache
        cache.folders = null;
        cache.materials = null;

        res.json({
            id: req.file.filename,
            name: req.file.originalname,
            url: req.file.path,
            format: req.file.format,
            folder: req.body.folder || 'root',
        });
    } catch (err) {
        console.error("Upload Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// Delete material
exports.deleteMaterial = async (req, res) => {
    try {
        const publicId = req.params.id;
        const resourceType = req.query.resourceType || 'image'; // Default to 'image' for backward compatibility

        console.log(`Deleting file: ${publicId}, resourceType: ${resourceType}`);

        await cloudinary.uploader.destroy(publicId, {
            resource_type: resourceType,
            type: 'upload'
        });

        // Invalidate cache
        cache.folders = null;
        cache.materials = null;

        res.json({ message: "Material deleted successfully" });
    } catch (err) {
        console.error("Delete Error:", err);
        res.status(500).json({ error: err.message });
    }
};

// Proxy download for files that cannot be downloaded directly (e.g. legacy PDFs stored as images)
exports.proxyDownload = async (req, res) => {
    const fs = require('fs');
    const logFile = 'debug_proxy.log';
    const log = (msg) => fs.appendFileSync(logFile, `[${new Date().toISOString()}] ${msg}\n`);

    try {
        const { url, filename, disposition } = req.query;
        let targetUrl = url;
        let targetFilename = filename;

        log(`Request for: ${url}, Filename: ${filename}`);
        console.log(`[Proxy] Request for: ${url}`);

        if (!url || !url.includes('cloudinary.com')) {
            log(`Invalid URL: ${url}`);
            return res.status(400).json({ error: "Invalid URL" });
        }

        let response;
        try {
            response = await axios({
                url: targetUrl,
                method: 'GET',
                responseType: 'stream'
            });
        } catch (err) {
            log(`Initial fetch failed: ${err.message}`);
            // Fallback for legacy PDFs stored as images (401/404 on .pdf)
            if ((err.response?.status === 401 || err.response?.status === 404) && targetUrl.toLowerCase().endsWith('.pdf')) {
                console.log('[Proxy] PDF fetch failed, trying JPG fallback...');
                log('Trying JPG fallback...');
                targetUrl = targetUrl.replace(/\.pdf$/i, '.jpg');
                try {
                    response = await axios({
                        url: targetUrl,
                        method: 'GET',
                        responseType: 'stream'
                    });
                    // Update filename to .jpg to match content
                    if (targetFilename && targetFilename.toLowerCase().endsWith('.pdf')) {
                        targetFilename = targetFilename.replace(/\.pdf$/i, '.jpg');
                    }
                    log('Fallback success');
                } catch (fallbackErr) {
                    console.error("[Proxy] Fallback failed:", fallbackErr.message);
                    log(`Fallback failed: ${fallbackErr.message}`);
                    throw err; // Throw original error if fallback also fails
                }
            } else {
                throw err;
            }
        }

        console.log(`[Proxy] Upstream Status: ${response.status}`);
        log(`Upstream Status: ${response.status}`);

        const contentDisposition = disposition === 'inline' ? 'inline' : 'attachment';
        res.setHeader('Content-Disposition', `${contentDisposition}; filename="${targetFilename || 'download.pdf'}"`);

        // Use upstream Content-Type (will be image/jpeg for fallback, application/pdf for raw)
        res.setHeader('Content-Type', response.headers['content-type']);

        response.data.pipe(res);

        response.data.on('end', () => log('Stream ended successfully'));
        response.data.on('error', (err) => log(`Stream error: ${err.message}`));

    } catch (err) {
        console.error("Proxy Download Error:", err.message);
        log(`Proxy Error: ${err.message}`);
        if (err.response) {
            console.error("[Proxy] Upstream Error Status:", err.response.status);
            log(`Upstream Error Status: ${err.response.status}`);
            return res.status(err.response.status).json({ error: "Failed to download file from upstream" });
        }
        res.status(500).json({ error: "Failed to download file" });
    }
};
