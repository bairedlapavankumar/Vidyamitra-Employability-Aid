import React from 'react';

const HowCanIHelp = () => {
    return (
        <div className="page-content" style={{ fontFamily: 'Verdana, sans-serif', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <h2 style={{ color: 'purple', fontFamily: 'Comic Sans MS', textTransform: 'uppercase' }}>How Can I Help?</h2>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#FF9900', fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>VIDYAMITRA<br />TRUST</span>
                </div>
                <img src="/assets/bookstack2.gif" alt="Book Stack" style={{ height: '126px' }} />
            </div>

            <div style={{ marginTop: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                <p>We have been managing this activity since 1992 at a low level, through our own funds. We now see our beneficiaries completing their education and getting employed very gainfully. This has enthused us to increase our coverage to the extent we can continue to effectively monitor the students.</p>
                <p>You can participate in extending education support to the underprivileged.</p>

                <h3 style={{ color: 'purple', textTransform: 'uppercase', marginTop: '20px', textDecoration: 'underline' }}>CONTRIBUTIONS</h3>
                <p>a) &nbsp;&nbsp;Contribute Rs.1000/- or more and be a <strong>WELL-WISHER</strong>.</p>
                <p>b) &nbsp;&nbsp;Contribute Rs.30,000/- or more and be a <strong>SPONSOR</strong>.</p>
                <p style={{ marginLeft: '20px' }}>(Sponsorship – Rs.30,000/year/student)</p>
                <p>c) &nbsp;&nbsp;Contribute Rs.10.00 Lakhs or more and be a <strong>CORPUS FUND PATRON</strong></p>

                <p style={{ marginTop: '20px' }}>WE REQUEST YOU TO CONTRIBUTE TOWARDS YEARLY EXPENDITURE AS WELL AS TOWARDS OUR CORPUS FUND.</p>

                <div style={{ marginTop: '40px', fontSize: '12px' }}>
                    <p>All donations are eligible for Income Tax Exemption under section 80G (5 ) (vi ) of I.T. Act 1961,vide F.No. DIT(E) Hyd / 80G / 27 (09 ) 07 - 08.</p>

                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <a href="/how-can-i-participate" style={{ textDecoration: 'none', marginRight: '20px' }}>
                    <img src="/assets/prev.gif" alt="Previous" />
                </a>
                <a href="/contact-us" style={{ textDecoration: 'none' }}>
                    <img src="/assets/next.gif" alt="Next" />
                </a>
            </div>
        </div>
    );
};

export default HowCanIHelp;
