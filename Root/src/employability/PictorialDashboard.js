import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import logo from "./assets/vidyamitra_logo.png";
import "./PictorialDashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

function PictorialDashboard() {
  const [admins, setAdmins] = useState(0);
  const [students, setStudents] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api/admin/users", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setAdmins(res.data.filter((u) => u.role && u.role.toLowerCase() === "admin").length);
        setStudents(
          res.data.filter(
            (u) =>
              u.role &&
              (u.role.toLowerCase() === "student" ||
                u.role.toLowerCase() === "user")
          ).length
        );
      } catch (error) {
        setAdmins(0);
        setStudents(0);
      }
    };
    fetchUsers();
  }, []);

  const pieData = {
    labels: ["Admins", "Students"],
    datasets: [
      {
        data: [admins, students],
        backgroundColor: ["#42A5F5", "#66BB6A"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const barData = {
    labels: ["Admins", "Students"],
    datasets: [
      {
        label: "Count",
        data: [admins, students],
        backgroundColor: ["#42A5F5", "#66BB6A"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="pictorial-dashboard">
      <div className="pictorial-header">
        <img src={logo} alt="Vidyamitra Logo" className="pictorial-logo" />
        <h2 className="pictorial-title">Pictorial Dashboard</h2>
        <button
          onClick={() => navigate("/employability-aid/admin")}
          className="pictorial-back-btn"
        >
          Back
        </button>
      </div>

      <div className="charts-container">
        <div className="chart-wrapper">
          <h3>User Distribution (Pie Chart)</h3>
          <Pie data={pieData} />
        </div>
        <div className="chart-wrapper">
          <h3>User Distribution (Bar Chart)</h3>
          <Bar data={barData} />
        </div>
      </div>

      <div className="summary-section">
        <h3>Summary</h3>
        <p>
          <strong>Admins:</strong> {admins}
        </p>
        <p>
          <strong>Students:</strong> {students}
        </p>
      </div>
    </div>
  );
}

export default PictorialDashboard;
