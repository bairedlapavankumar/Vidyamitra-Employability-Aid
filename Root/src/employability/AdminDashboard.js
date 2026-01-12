import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./AdminDashboard.css";
import logo from "./assets/vidyamitra_logo.png";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api/admin/users", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setUsers(res.data);
        setAdmins(res.data.filter((u) => u.role && u.role.toLowerCase() === "admin"));
        setStudents(res.data.filter((u) => u.role && (u.role.toLowerCase() === "user" || u.role.toLowerCase() === "student")));
      } catch (error) {
        setUsers([]);
        setAdmins([]);
        setStudents([]);
      }
    };
    fetchUsers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };



  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div className="header-logo-title">
          <img src={logo} alt="Logo" className="dashboard-logo" />
          <h1 className="admin-title">Admin Dashboard</h1>
        </div>
        <nav className="header-nav">
          <Link to="/employability-aid/pictorial-dashboard" className="dashboard-link">
            Pictorial Dashboard
          </Link>
          <Link to="/employability-aid/materials" className="dashboard-link">
            Material
          </Link>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </nav>
      </header>
      <main>
        <section className="summary-section">
          <div className="summary-card">
            <div className="summary-label">Total Users</div>
            <div className="summary-value">{users.length}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Total Admins</div>
            <div className="summary-value">{admins.length}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Total Students</div>
            <div className="summary-value">{students.length}</div>
          </div>
        </section>



        <section className="list-section">
          <div className="list-card">
            <h3>Admins</h3>
            <ul className="user-list">
              {admins.map((admin) => (
                <li key={admin.id || admin._id}>{admin.username}</li>
              ))}
            </ul>
          </div>
          <div className="list-card">
            <h3>Students</h3>
            <ul className="user-list">
              {students.length === 0 ? (
                <li>No students found.</li>
              ) : (
                students.map((student) => (
                  <li key={student.id || student._id}>{student.username}</li>
                ))
              )}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;

