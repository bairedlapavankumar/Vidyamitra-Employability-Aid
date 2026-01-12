import React from 'react';
import Navbar from './components/Navbar';
import './About.css';

function About() {
    return (
        <div className="about-page">
            <Navbar />
            <div className="about-container">
                <div className="about-content">
                    <h1>About Employability Aid</h1>
                    <p className="about-description">
                        The Employability Aid is a dedicated platform designed to empower students
                        with the essential resources needed to excel in their professional journey.
                        It provides access to high-quality materials that help students strengthen
                        their interview preparation, enhance their personality development, and
                        improve their communication skills — all of which are crucial for building
                        confidence and succeeding in today's competitive job market. This platform
                        aims to support every learner in becoming industry-ready and achieving their
                        career goals.
                    </p>

                    <div className="about-features">
                        <div className="feature-card">
                            <h3>📚 Interview Preparation</h3>
                            <p>Access comprehensive materials to ace your interviews</p>
                        </div>
                        <div className="feature-card">
                            <h3>🎯 Personality Development</h3>
                            <p>Build confidence and professional presence</p>
                        </div>
                        <div className="feature-card">
                            <h3>💬 Communication Skills</h3>
                            <p>Enhance your verbal and written communication</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
