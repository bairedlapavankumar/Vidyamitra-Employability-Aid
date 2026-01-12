import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';
import './Sidebar.css';
import API_URL from '../apiConfig';

const Sidebar = () => {
    const [studentJoineesOpen, setStudentJoineesOpen] = useState(false);
    const [newslettersOpen, setNewslettersOpen] = useState(false);
    const [dynamicContent, setDynamicContent] = useState({ profiles: [], newsletters: [] });
    // Mobile Sidebar State
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Auth Modal State
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [pendingUrl, setPendingUrl] = useState('');

    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`${API_URL}/api/root/content`);
                if (response.ok) {
                    const data = await response.json();
                    const profiles = data.filter(item => item.type === 'profile').sort((a, b) => b.year.localeCompare(a.year));
                    const newsletters = data.filter(item => item.type === 'newsletter').sort((a, b) => b.year.localeCompare(a.year));
                    setDynamicContent({ profiles, newsletters });
                }
            } catch (error) {
                console.error("Failed to fetch dynamic content:", error);
            }
        };
        fetchContent();
    }, []);

    const toggleStudentJoinees = () => setStudentJoineesOpen(!studentJoineesOpen);
    const toggleNewsletters = () => setNewslettersOpen(!newslettersOpen);

    const handleRestrictedAccess = (url) => {
        navigate('/'); // Close current file by navigating to home
        setPendingUrl(url);
        setIsAuthModalOpen(true);
    };

    const handleLoginSuccess = () => {
        setIsAuthModalOpen(false);
        if (pendingUrl) {
            navigate(pendingUrl);
            setPendingUrl('');
        }
    };

    return (
        <>
            <div className={`hamburger-menu ${isMobileOpen ? 'open' : ''}`} onClick={() => setIsMobileOpen(!isMobileOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {isMobileOpen && <div className="mobile-overlay" onClick={() => setIsMobileOpen(false)}></div>}
            <div className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
                <nav>
                    <ul className="sidebar-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/background">Background</Link></li>
                        <li><Link to="/formation-and-funding">Formation And Funding</Link></li>
                        <li><Link to="/objectives">Objectives</Link></li>
                        <li><Link to="/selection-of-beneficiaries">Selection Of Beneficiaries</Link></li>
                        <li><Link to="/scope-of-support">Scope Of Support</Link></li>
                        <li><Link to="/beneficiary-responsibility">Beneficiary's Responsibility</Link></li>
                        <li><Link to="/monitoring-and-counselling">Monitoring & Counselling</Link></li>
                        <li><Link to="/typical-yearly-expenditure">Typical Yearly Expenditure</Link></li>
                        <li><Link to="/how-can-i-participate">How Can You Participate?</Link></li>
                        <li><Link to="/how-can-i-help">How Can I Help?</Link></li>

                        <li><Link to="/employability-aid">Employability Aid</Link></li>

                        <li className="section-header" onClick={toggleStudentJoinees}>
                            Student Joinees <span className={`arrow ${studentJoineesOpen ? 'open' : ''}`}>▼</span>
                        </li>
                        {studentJoineesOpen && (
                            <ul className="nested-list">
                                {/* Dynamic Profiles */}
                                {dynamicContent.profiles.map(profile => (
                                    <li key={profile._id}>
                                        <Link
                                            to="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleRestrictedAccess(`/newsletters/pdf?url=${encodeURIComponent(`${API_URL}${profile.fileUrl}`)}`);
                                            }}
                                        >
                                            {profile.year}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <li className="section-header" onClick={toggleNewsletters}>
                            Annual News Letters <span className={`arrow ${newslettersOpen ? 'open' : ''}`}>▼</span>
                        </li>
                        {newslettersOpen && (
                            <ul className="nested-list">

                                {/* Dynamic Newsletters */}
                                {dynamicContent.newsletters.map(newsletter => (
                                    <li key={newsletter._id}>
                                        <Link to={`/newsletters/pdf?url=${encodeURIComponent(`${API_URL}${newsletter.fileUrl}`)}`}>
                                            {newsletter.year}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <li>
                            <Link
                                to="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleRestrictedAccess('/admins');
                                }}
                            >
                                Admins
                            </Link>
                        </li>

                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </nav>

                <AuthModal
                    isOpen={isAuthModalOpen}
                    onClose={() => setIsAuthModalOpen(false)}
                    onSuccess={handleLoginSuccess}
                />
            </div>
        </>
    );
};

export default Sidebar;
