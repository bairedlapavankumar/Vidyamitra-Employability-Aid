import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./assets/vidyamitra_logo.png";
import "./MaterialsManager.css";

function MaterialsManager() {
  const [materials, setMaterials] = useState([]);
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [filterFolder, setFilterFolder] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFolders();
    fetchMaterials();
  }, [filterFolder]);

  const fetchFolders = async () => {
    try {
      const res = await axios.get("/api/materials/folders");
      setFolders(res.data);
    } catch (err) {
      console.error("Fetch Folders Error:", err);
    }
  };

  const fetchMaterials = async () => {
    setLoading(true);
    try {
      const params = filterFolder ? { folder: filterFolder } : {};
      const res = await axios.get("/api/materials/materials", { params });
      console.log("Fetched Materials:", res.data); // DEBUG LOG
      if (res.data.length > 0) {
        console.log("First Material URL:", res.data[0].url);
        console.log("First Material ID:", res.data[0].id);
        console.log("First Material ResourceType:", res.data[0].resourceType);
      }
      setMaterials(res.data);
      setError("");
    } catch (err) {
      console.error("Fetch Materials Error:", err);
      setError(err.response?.data?.error || "Failed to load materials");
    }
    setLoading(false);
  };

  const handleUpload = async (e) => {
    console.log("handleUpload triggered");
    const file = e.target.files[0];
    if (!file) {
      console.log("No file selected");
      return;
    }
    console.log("File selected:", file.name);

    if (!selectedFolder) {
      alert("Please select a folder/category first!");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("folder", selectedFolder);
    formData.append("file", file);

    console.log("Sending upload request to /api/materials/upload");

    try {
      const res = await axios.post("/api/materials/upload", formData);
      console.log("Upload success:", res.data);
      fetchMaterials(); // Refresh list
      setError("");
      e.target.value = ""; // Clear file input
    } catch (err) {
      console.error("Upload error caught:", err);
      setError(err.response?.data?.error || "Upload failed");
    }
    setUploading(false);
  };

  const handleDelete = async (id, resourceType) => {
    const confirmed = window.confirm("Are you sure you want to delete this material?");
    if (!confirmed) return;
    setUploading(true);
    try {
      const url = `/api/materials/delete/${encodeURIComponent(id)}?resourceType=${resourceType || 'image'}`;
      await axios.delete(url);
      fetchMaterials();
      setError("");
    } catch (err) {
      console.error("Delete error:", err);
      setError("Delete failed");
    }
    setUploading(false);
  };

  // Helper to get download URL
  // Helper to get download URL
  // Helper to get download URL
  const getDownloadUrl = (file) => {
    if (!file || !file.url) return "";

    // Use direct download if URL has /upload/
    if (file.url.includes('/upload/')) {
      console.log(`[Download] Direct: ${file.name}`);

      // Extract filename without extension for Cloudinary fl_attachment
      // Cloudinary adds the extension automatically based on the file format
      let filename = file.name || 'download';
      if (filename.lastIndexOf('.') > 0) {
        filename = filename.substring(0, filename.lastIndexOf('.'));
      }

      // Sanitize filename: replace non-alphanumeric chars with underscores
      // Cloudinary fl_attachment doesn't like %20 or special chars
      const sanitizedFilename = filename.replace(/[^a-zA-Z0-9._-]/g, '_');

      return file.url.replace('/upload/', `/upload/fl_attachment:${sanitizedFilename}/`);
    }

    // Fallback to proxy if /upload/ is missing
    const proxyUrl = `/api/materials/proxy-download?url=${encodeURIComponent(file.url)}&filename=${encodeURIComponent(file.name)}&t=${Date.now()}`;
    console.log(`[Download] Proxy: ${file.name} -> ${proxyUrl}`);
    return proxyUrl;
  };

  return (
    <div className="materials-container">
      <div className="manager-header">
        <img src={logo} alt="Vidyamitra Logo" className="manager-logo" />
        <h1 className="materials-title">Materials</h1>
        <button
          onClick={() => navigate("/employability-aid/admin")}
          className="manager-back-btn"
        >
          Back
        </button>
      </div>

      {error && <div className="materials-error">{error}</div>}

      <div className="materials-actions">
        <div className="materials-card upload-section">
          <h3>📤 Upload Material</h3>
          <div className="form-group">
            <label>Select Category/Folder:</label>
            <select
              value={selectedFolder}
              onChange={(e) => setSelectedFolder(e.target.value)}
              className="materials-select"
            >
              <option value="">-- Choose Folder --</option>
              {folders.map((folder) => (
                <option key={folder.name} value={folder.name}>
                  {folder.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <input
              type="file"
              onChange={handleUpload}
              disabled={uploading || !selectedFolder}
              className="materials-file-input"
              aria-label="Upload material"
            />
            {uploading && <span className="uploading-text">Uploading...</span>}
            {!selectedFolder && <span className="helper-text">
              (Select a folder first)
            </span>}
          </div>
        </div>

        <div className="materials-card filter-section">
          <h3>🔍 Filter Materials</h3>
          <div className="form-group">
            <label>Filter by Folder:</label>
            <select
              value={filterFolder}
              onChange={(e) => setFilterFolder(e.target.value)}
              className="materials-select"
            >
              <option value="">All Folders</option>
              {folders.map((folder) => (
                <option key={folder.name} value={folder.name}>
                  {folder.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <table className="materials-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Folder</th>
            <th>Type</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={5}>Loading...</td>
            </tr>
          ) : materials.length === 0 ? (
            <tr>
              <td colSpan={5}>No materials found.</td>
            </tr>
          ) : (
            materials.map((file) => (
              <tr key={`${file.id}-${file.resourceType}`}>
                <td>📄 {file.name}</td>
                <td>{file.folder}</td>
                <td>{file.format?.toUpperCase() || 'File'}</td>
                <td>
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="materials-table-btn"

                  >
                    Open
                  </a>

                  {/* Download Button */}
                  <a
                    href={getDownloadUrl(file)}
                    className="materials-table-btn download-btn"
                    download={file.name}
                  >
                    Download
                  </a>
                </td>
                <td>
                  <button
                    className="materials-table-btn"
                    onClick={() => handleDelete(file.id, file.resourceType)}
                    disabled={uploading}
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

export default MaterialsManager;
