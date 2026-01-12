import React from 'react';

const MonitoringAndCounselling = () => {
    return (
        <div className="page-content" style={{ fontFamily: 'Verdana, sans-serif', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <h2 style={{ color: 'purple', fontFamily: 'Comic Sans MS', textTransform: 'uppercase' }}>Monitoring & Counselling:</h2>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#FF9900', fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>VIDYAMITRA<br />TRUST</span>
                </div>
                <img src="/assets/bookstack2.gif" alt="Book Stack" style={{ height: '126px' }} />
            </div>

            <div style={{ marginTop: '20px' }}>
                <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                    <li style={{ marginBottom: '10px' }}>Monitoring the progress and needs of the beneficiaries is an important activity of the Trust.</li>
                    <li style={{ marginBottom: '10px' }}>With frequent visits to the Institutions and interaction with the Teachers, the Trust is always apprised of the beneficiary's situation.</li>
                    <li style={{ marginBottom: '10px' }}>Additional academic support is provided by arranging special study material and individual tutoring.</li>
                    <li style={{ marginBottom: '10px' }}>Periodic reports on the beneficiaries will be sent to the concerned sponsor. The sponsor is encouraged to keep in touch, counsel and advise the beneficiary to improve their performance.</li>
                </ul>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <a href="/beneficiary-responsibility" style={{ textDecoration: 'none', marginRight: '20px' }}>
                    <img src="/assets/prev.gif" alt="Previous" />
                </a>
                <a href="/typical-yearly-expenditure" style={{ textDecoration: 'none' }}>
                    <img src="/assets/next.gif" alt="Next" />
                </a>
            </div>
        </div>
    );
};

export default MonitoringAndCounselling;
