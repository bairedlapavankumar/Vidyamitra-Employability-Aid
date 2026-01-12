import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./assets/vidyamitra_logo.png";
import "./StudentJoineesManager.css";

function StudentJoineesManager() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProfiles();
    }, []);

    const fetchProfiles = async () => {
        setLoading(true);
        try {
            const res = await axios.get("/api/root/content");
            const profileData = res.data.filter(item => item.type === 'profile');
            setProfiles(profileData);
            setError("");
        } catch (err) {
            console.error("Fetch Profiles Error:", err);
            setError("Failed to load profiles");
        }
        setLoading(false);
    };

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("type", "profile"); // Specify type first for Multer
        formData.append("file", file);

        try {
            const token = localStorage.getItem("token");
            await axios.post("/api/root/upload?type=profile", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            fetchProfiles();
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
            fetchProfiles();
        } catch (err) {
            console.error("Delete error:", err);
            setError("Delete failed");
        }
    };

    return (
        <div className="joinees-container">
            <img src={logo} alt="Vidyamitra Logo" style={{ position: 'absolute', top: '20px', left: '20px', height: '100px', zIndex: 1000 }} />
            <button
                onClick={() => navigate("/admins")}
                className="btn-back"
            >
                Back
            </button>
            <div className="joinees-title">Student Joinees</div>

            {error && <div className="joinees-error">{error}</div>}

            <div className="joinees-actions">
                <div className="joinees-card upload-section">
                    <h3>📤 Upload Student Profile</h3>
                    <div className="form-group">
                        <input
                            type="file"
                            accept="application/pdf"
                            onChange={handleUpload}
                            disabled={uploading}
                            className="joinees-file-input"
                        />
                        {uploading && <span className="uploading-text">Uploading...</span>}
                    </div>
                </div>
            </div>

            <table className="joinees-table">
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
                    ) : profiles.length === 0 ? (
                        <tr><td colSpan={4} style={{ textAlign: 'center' }}>No profiles found.</td></tr>
                    ) : (
                        profiles.map((item) => (
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

export default StudentJoineesManager;
