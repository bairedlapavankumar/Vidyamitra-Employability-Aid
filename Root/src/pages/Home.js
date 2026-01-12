import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <h1 className="main-title">
                EDUCATION FOR THE UNDERPRIVILEGED
            </h1>

            <div className="logo-container">
                <div className="logo-text-wrapper">
                    <span className="logo-text">
                        VIDYAMITRA<br />TRUST
                    </span>
                </div>
                <div>
                    <img src="/assets/bookstack2.gif" alt="Book Stack" className="book-stack-img" />
                </div>
            </div>

            <div className="footer-section">
                <a href="/background" style={{ color: '#666633', textDecoration: 'underline' }}>
                    Next
                </a>
                <br />
                <span style={{ fontSize: '0.8em' }}>Updated :12/01/2026</span>
            </div>

            <div className="disclaimer-section">
                <p>a) All donations are eligible for Income Tax Exemption under section 80G (5 ) (vi ) of I.T. Act 1961, vide F.No. DIT(E) Hyd / 80G / 27 (09 ) 07 - 08.</p>

            </div>
        </div>
    );
};

export default Home;
