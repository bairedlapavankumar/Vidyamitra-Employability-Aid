import React from 'react';

const Background = () => {
    return (
        <div className="background-page" style={{ fontFamily: 'Verdana, sans-serif', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <h2 style={{ color: 'purple', fontFamily: 'Comic Sans MS' }}>BACKGROUND:</h2>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#FF9900', fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>VIDYAMITRA<br />TRUST</span>
                </div>
                <img src="/assets/bookstack2.gif" alt="Book Stack" style={{ height: '126px' }} />
            </div>

            <div style={{ marginTop: '20px' }}>
                <p>
                    The founding Trustees of the Vidyamitra Trust in their individual capacity have been supporting <b><u>students</u></b> since 1992. Initial support was to SOS Children's Village, where the first child was sponsored in 1992.
                </p>
                <p style={{ marginTop: '10px' }}>
                    Similarly the Trustees in their individual capacity have been extending total <b><u>educational support</u></b> to <b><u>children at school</u></b> and college level in Hyderabad.
                </p>
                <p style={{ marginTop: '10px' }}>
                    The Trustees decided to formalize this activity and enhance the scope and coverage of the same. With this in view a Trust in the name and style of VIDYAMITRA TRUST was formed on 07/05/2007.
                </p>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h3 style={{ fontFamily: 'Comic Sans MS', textTransform: 'uppercase', textDecoration: 'underline' }}>Founder Trustees</h3>
                <ol style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
                    <li>G. NARAYAN RAO</li>
                    <li>G. USHA RAO</li>
                    <li>A.S. RAMA RAJU</li>
                    <li>K. SUBBA LAXMI</li>
                </ol>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                <a href="/" style={{ textDecoration: 'none' }}>
                    <img src="/assets/prev.gif" alt="Previous" />
                </a>
                <a href="/formation-and-funding" style={{ textDecoration: 'none' }}>
                    <img src="/assets/next.gif" alt="Next" />
                </a>
            </div>
        </div>
    );
};

export default Background;
