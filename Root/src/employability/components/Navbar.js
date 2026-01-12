import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/vidyamitra_logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Vidyamitra Logo" style={{ height: '85px', marginLeft: '10px' }} />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Back to Vidyamitra Home</Link>
        <Link to="/employability-aid/about" className="nav-link">About</Link>
        <Link to="/employability-aid/login" className="nav-link">Sign In</Link>
        <Link to="/employability-aid/signup" className="nav-link">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
