import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import logo from "./assets/vidyamitra_logo.png";
import "./Signup.css"; // Use your Signup-specific styles

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setMsg("");
    setIsSuccess(false);
    try {
      await axios.post("/api/auth/register", { email, username, password, role: "student" });
      setIsSuccess(true);
      setMsg("Signup successful! Please login.");
      setTimeout(() => navigate("/employability-aid/login"), 1500);
    } catch (err) {
      setIsSuccess(false);
      setMsg(err.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="signup-bg">
      <img src={logo} alt="Vidyamitra Logo" style={{ position: 'absolute', top: '20px', left: '20px', height: '100px', zIndex: 1000 }} />
      <div className="signup-card">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
        {/* Show message ONLY if it exists */}
        {/* Show message ONLY if it exists */}
        {msg && <div className={isSuccess ? "signup-success" : "signup-error"}>{msg}</div>}
        <p>
          Already have an account? <Link to="/employability-aid/login">Login</Link>
        </p>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <Link to="/" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>Back to Vidyamitra Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
