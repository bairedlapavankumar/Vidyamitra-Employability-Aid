import React from "react";
import Navbar from "./Navbar";
// Adjust the path if your image is in another folder
import logo from '../assets/vidyamitra_logo.png';
import heroImage from '../assets/landing_hero.png';
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <Navbar />

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Empowering Your Career Journey</h1>
          <p className="hero-subtitle">
            Bridging the gap between education and employment with expert guidance and resources.
          </p>
          <div className="hero-buttons">
            <a href="/employability-aid/signup" className="btn btn-primary">Get Started</a>
            <a href="/employability-aid/login" className="btn btn-secondary">Login</a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="Employability Aids Powered by Vidyamitra" className="landing-logo" />
        </div>
      </header>



      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} Vidyamitra Trust. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
