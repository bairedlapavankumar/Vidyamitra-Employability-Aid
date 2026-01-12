import React from 'react';

const BeneficiaryResponsibility = () => {
    return (
        <div className="page-content" style={{ fontFamily: 'Verdana, sans-serif', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <h2 style={{ color: 'purple', fontFamily: 'Comic Sans MS', textTransform: 'uppercase' }}>Beneficiary's Responsibility:</h2>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#FF9900', fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>VIDYAMITRA<br />TRUST</span>
                </div>
                <img src="/assets/bookstack2.gif" alt="Book Stack" style={{ height: '126px' }} />
            </div>

            <div style={{ marginTop: '20px' }}>
                <p>
                    The beneficiaries are expected to:
                </p>
                <ol style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
                    <li>To do justice to the support being given.</li>
                    <li>To be hardworking and disciplined.</li>
                    <li>To attend quarterly review meetings.</li>
                    <li>To keep the trust informed about their academic performance.</li>
                    <li>Turn out to be good, honest citizens and contribute to the society.</li>
                    <li>The Trust would be in constant touch with the Beneficiaries and interact with their parents and teachers.</li>
                </ol>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <a href="/scope-of-support" style={{ textDecoration: 'none', marginRight: '20px' }}>
                    <img src="/assets/prev.gif" alt="Previous" />
                </a>
                <a href="/monitoring-and-counselling" style={{ textDecoration: 'none' }}>
                    <img src="/assets/next.gif" alt="Next" />
                </a>
            </div>
        </div>
    );
};

export default BeneficiaryResponsibility;
