import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import logo from "./assets/vidyamitra_logo.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      if (res.data.role === "admin") {
        navigate("/employability-aid/admin");
      } else {
        navigate("/employability-aid/user");
      }
    } catch {
      setMsg("Login failed. Try again.");
    }
  };

  return (
    <div className="login-bg">
      <img src={logo} alt="Vidyamitra Logo" style={{ position: 'absolute', top: '20px', left: '20px', height: '100px', zIndex: 1000 }} />
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email or Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        {msg && <div className="login-error">{msg}</div>}
        <p>
          Don't have an account? <Link to="/employability-aid/signup">Sign up</Link>
        </p>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <Link to="/" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>Back to Vidyamitra Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
