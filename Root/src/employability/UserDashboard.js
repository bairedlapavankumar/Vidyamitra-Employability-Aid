import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./assets/vidyamitra_logo.png";
import "./UserDashboard.css";

function UserDashboard() {
  const [materials, setMaterials] = useState([]);
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [loading, setLoading] = useState(true);
  const [showFolders, setShowFolders] = useState(false); // Mobile toggle
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchFolders();
    fetchMaterials();
  }, []);

  const fetchFolders = async () => {
    try {
      const res = await axios.get("/api/materials/folders");
      setFolders(res.data);
    } catch (error) {
      console.error("Fetch Folders Error:", error);
    }
  };
  const getDownloadUrl = (file) => {
    if (!file || !file.url) return "";
    if (file.url.includes('/upload/')) {
      let filename = file.name || 'download';
      if (filename.lastIndexOf('.') > 0) {
        filename = filename.substring(0, filename.lastIndexOf('.'));
      }
      const sanitizedFilename = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
      return file.url.replace('/upload/', `/upload/fl_attachment:${sanitizedFilename}/`);
    }
    return file.url;
  };

  const getThumbnailUrl = (file) => {
    if (!file || !file.url) return null;

    // For images, use the original URL
    if (file.format === 'jpg' || file.format === 'png' || file.format === 'jpeg' || file.format === 'gif') {
      return file.url;
    }

    // For videos (Cloudinary), generate a thumbnail
    if ((file.format === 'mp4' || file.format === 'webm' || file.format === 'mov') && file.url.includes('/upload/')) {
      // Replace extension with .jpg for thumbnail
      let url = file.url;
      const lastDotIndex = url.lastIndexOf('.');
      if (lastDotIndex !== -1) {
        url = url.substring(0, lastDotIndex) + '.jpg';
      } else {
        url = url + '.jpg';
      }
      return url;
    }

    return null;
  };

  const fetchMaterials = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/materials/materials", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setMaterials(res.data || []);
    } catch (error) {
      console.error("UserDashboard - Fetch error:", error);
      setMaterials([]);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // Filter materials based on selection
  const filteredMaterials = (selectedFolder
    ? materials.filter(m => m.folder === selectedFolder)
    : materials
  ).filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Group materials by folder
  const groupedMaterials = filteredMaterials.reduce((acc, material) => {
    const folder = material.folder || 'Uncategorized';
    if (!acc[folder]) {
      acc[folder] = [];
    }
    acc[folder].push(material);
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="user-dashboard">
        <div className="loading">Loading materials...</div>
      </div>
    );
  }

  return (
    <div className="user-dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <img src={logo} alt="Vidyamitra Logo" className="dashboard-logo" />
          <h1 className="dashboard-title">📚 Learning Materials</h1>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      <div className="dashboard-container">
        {/* Mobile Folder Toggle */}
        <button className="mobile-folder-toggle" onClick={() => setShowFolders(!showFolders)}>
          {showFolders ? '✖ Close Folders' : '📁 Browse Folders'}
        </button>

        <aside className={`dashboard-sidebar ${showFolders ? 'mobile-visible' : ''}`}>
          <h3>📁 Folders</h3>
          <div className="folder-list">
            <button
              className={`folder-item ${!selectedFolder ? 'active' : ''}`}
              onClick={() => {
                setSelectedFolder("");
                setShowFolders(false);
              }}
            >
              <span className="folder-icon">📂</span>
              All Materials
              <span className="count">{materials.length}</span>
            </button>
            {folders.map((folder) => {
              const count = materials.filter(m => m.folder === folder.name).length;
              return (
                <button
                  key={folder.name}
                  className={`folder-item ${selectedFolder === folder.name ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedFolder(folder.name);
                    setShowFolders(false);
                  }}
                >
                  <span className="folder-icon">📁</span>
                  {folder.name}
                  <span className="count">{count}</span>
                </button>
              );
            })}
          </div>
        </aside>

        <main className="content">
          {selectedFolder && (
            <div className="breadcrumb">
              <span onClick={() => setSelectedFolder("")} style={{ cursor: 'pointer', color: '#007bff' }}>
                All Materials
              </span>
              <span> / </span>
              <span>{selectedFolder}</span>
            </div>
          )}

          {/* Search Bar */}
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="🔍 Search materials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {filteredMaterials.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📭</div>
              <h3>No materials found</h3>
              <p>There are no materials in this folder yet.</p>
            </div>
          ) : (
            <div className="materials-grid">
              {Object.entries(groupedMaterials).map(([folderName, folderMaterials]) => (
                <div key={folderName} className="folder-section">
                  {!selectedFolder && (
                    <h2 className="folder-title">
                      <span className="folder-icon">📁</span>
                      {folderName}
                      <span className="folder-count">({folderMaterials.length})</span>
                    </h2>
                  )}
                  <div className="materials-list">
                    {folderMaterials.map((material, idx) => (
                      <div key={`${material.id}-${idx}`} className="material-card">
                        <div className="material-icon">
                          {getThumbnailUrl(material) ? (
                            <img
                              src={getThumbnailUrl(material)}
                              alt={material.name}
                              className="material-thumbnail"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.classList.add('fallback-icon');
                              }}
                            />
                          ) : (
                            material.format === 'pdf' ? '📄' :
                              material.format === 'jpg' || material.format === 'png' ? '🖼️' :
                                material.format === 'mp4' ? '🎥' : '📎'
                          )}
                        </div>
                        <div className="material-info">
                          <h4 className="material-name">{material.name}</h4>
                          <span className="material-type">{material.format?.toUpperCase() || 'File'}</span>
                        </div>
                        <div className="material-actions">
                          <a
                            href={material.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-btn"
                          >
                            👁️ View
                          </a>
                          <a
                            href={getDownloadUrl(material)}
                            className="download-btn"
                          >
                            ⬇️ Download
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default UserDashboard;
