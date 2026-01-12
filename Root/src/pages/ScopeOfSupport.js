import React from 'react';

const ScopeOfSupport = () => {
    return (
        <div className="page-content" style={{ fontFamily: 'Verdana, sans-serif', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <h2 style={{ color: 'purple', fontFamily: 'Comic Sans MS', textTransform: 'uppercase' }}>Scope of Support:</h2>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#FF9900', fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>VIDYAMITRA<br />TRUST</span>
                </div>
                <img src="/assets/bookstack2.gif" alt="Book Stack" style={{ height: '126px' }} />
            </div>

            <div style={{ marginTop: '20px' }}>
                <p style={{ marginBottom: '15px' }}>The Trust helps the students in getting admissions in suitable Institutions and Courses.</p>
                <p style={{ marginBottom: '15px' }}>Counseling sessions for the parents (specially of girls) conducted. This is mainly to ensure continuity and completion of courses and to take up employment thereafter.</p>
                <p style={{ marginBottom: '15px' }}>During the course of their education the beneficiaries will be put through Personality Development and Communication Skills programs which will lead to brighter prospects, for employment.</p>
                <p>The Trust's support ends with the completion of the course by the beneficiary. However we would like the association with the former beneficiaries to continue as Vidyamitra well-wishers and contributors.</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <a href="/selection-of-beneficiaries" style={{ textDecoration: 'none', marginRight: '20px' }}>
                    <img src="/assets/prev.gif" alt="Previous" />
                </a>
                <a href="/beneficiary-responsibility" style={{ textDecoration: 'none' }}>
                    <img src="/assets/next.gif" alt="Next" />
                </a>
            </div>
        </div>
    );
};

export default ScopeOfSupport;
