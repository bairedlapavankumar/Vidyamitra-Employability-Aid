import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';
import './Sidebar.css';

const Sidebar = () => {
    const [studentJoineesOpen, setStudentJoineesOpen] = useState(false);
    const [newslettersOpen, setNewslettersOpen] = useState(false);
    const [dynamicContent, setDynamicContent] = useState({ profiles: [], newsletters: [] });

    // Auth Modal State
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [pendingUrl, setPendingUrl] = useState('');

    const navigate = useNavigate();

    import API_URL from '../apiConfig';

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

    // ...

    {/* Dynamic Profiles */ }
    {
        dynamicContent.profiles.map(profile => (
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
        ))
    }

    // ...

    {/* Dynamic Newsletters */ }
    {
        dynamicContent.newsletters.map(newsletter => (
            <li key={newsletter._id}>
                <Link to={`/newsletters/pdf?url=${encodeURIComponent(`${API_URL}${newsletter.fileUrl}`)}`}>
                    {newsletter.year}
                </Link>
            </li>
        ))
    }
                        </ul >
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
                </ul >
            </nav >

    <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleLoginSuccess}
    />
        </div >
    );
};

export default Sidebar;
