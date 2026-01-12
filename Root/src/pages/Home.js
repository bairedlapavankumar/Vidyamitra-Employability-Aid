import React from 'react';

const Home = () => {
    return (
        <div className="home-page" style={{ textAlign: 'center', fontFamily: 'Verdana, sans-serif' }}>
            <h1 style={{ color: '#800080', fontFamily: 'Comic Sans MS', fontSize: '2em' }}>
                EDUCATION FOR THE UNDERPRIVILEGED
            </h1>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                <div style={{ textAlign: 'right', marginRight: '20px' }}>
                    <span style={{ color: '#ff9900', fontSize: '3em', fontFamily: 'Comic Sans MS', letterSpacing: '5pt' }}>
                        VIDYAMITRA<br />TRUST
                    </span>
                </div>
                <div>
                    {/* Image placeholder - needs asset migration */}
                    <img src="/assets/bookstack2.gif" alt="Book Stack" style={{ height: '410px' }} />
                </div>
            </div>

            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <a href="/background" style={{ color: '#666633', textDecoration: 'underline' }}>
                    Next
                </a>
                <br />
                <span style={{ fontSize: '0.8em' }}>Updated :03/12/2025</span>
            </div>

            <div style={{ fontSize: '0.8em', marginTop: '20px', textAlign: 'left' }}>
                <p>a) All donations are eligible for Income Tax Exemption under section 80G (5 ) (vi ) of I.T. Act 1961, vide F.No. DIT(E) Hyd / 80G / 27 (09 ) 07 - 08.</p>
                <p>b) FCRA Registration No.:010230904 Dt.08/08/12 Category - Educational</p>
            </div>
        </div>
    );
};

export default Home;
