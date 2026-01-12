import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./assets/vidyamitra_logo.png";
import "./NewsLetterManager.css";
import API_URL from '../apiConfig';

function NewsLetterManager() {
    const [newsletters, setNewsletters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchNewsletters();
    }, []);

    const fetchNewsletters = async () => {
        setLoading(true);
        try {
            const res = await axios.get("/api/root/content");
            // Filter for newsletters if the API returns mixed content
            const newsletterData = res.data.filter(item => item.type === 'newsletter');
            setNewsletters(newsletterData);
            setError("");
        } catch (err) {
            console.error("Fetch Newsletters Error:", err);
            setError("Failed to load newsletters");
        }
        setLoading(false);
    };

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const token = localStorage.getItem("token");
            await axios.post("/api/root/upload", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            fetchNewsletters();
            setError("");
            e.target.value = ""; // Clear input
        } catch (err) {
            console.error("Upload error:", err);
            setError(err.response?.data?.message || "Upload failed");
        }
        setUploading(false);
    };

    const handleDelete = async (filename) => {
        if (!window.confirm(`Are you sure you want to delete ${filename}?`)) return;

        try {
            const token = localStorage.getItem("token");
            await axios.delete(`/api/root/${filename}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchNewsletters();
        } catch (err) {
            console.error("Delete error:", err);
            setError("Delete failed");
        }
    };

    return (
        <div className="newsletter-container">
            <img src={logo} alt="Vidyamitra Logo" style={{ position: 'absolute', top: '20px', left: '20px', height: '100px', zIndex: 1000 }} />
            <button
                onClick={() => navigate("/admins")}
                className="btn-back"
            >
                Back
            </button>
            <div className="newsletter-title">Annual News Letters</div>

            {error && <div className="newsletter-error">{error}</div>}

            <div className="newsletter-actions">
                <div className="newsletter-card upload-section">
                    <h3>📤 Upload News Letter</h3>
                    <div className="form-group">
                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={handleUpload}
                            disabled={uploading}
                            className="newsletter-file-input"
                        />
                        {uploading && <span className="uploading-text">Uploading...</span>}
                    </div>
                </div>
            </div>

            <table className="newsletter-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr><td colSpan={4} style={{ textAlign: 'center' }}>Loading...</td></tr>
                    ) : newsletters.length === 0 ? (
                        <tr><td colSpan={4} style={{ textAlign: 'center' }}>No newsletters found.</td></tr>
                    ) : (
                        newsletters.map((item) => (
                            <tr key={item._id}>
                                <td>📄 {item._id}</td>
                                <td>{item.year}</td>
                                <td>
                                    <a
                                        href={`/newsletters/pdf?url=${encodeURIComponent(`${API_URL}${item.fileUrl}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-action btn-open"
                                    >
                                        Open
                                    </a>
                                </td>
                                <td>
                                    <button
                                        className="btn-action btn-delete"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default NewsLetterManager;
