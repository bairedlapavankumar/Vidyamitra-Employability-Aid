import React from 'react';

const SelectionOfBeneficiaries = () => {
    return (
        <div className="page-content" style={{ fontFamily: 'Verdana, sans-serif', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <h2 style={{ color: 'purple', fontFamily: 'Comic Sans MS', textTransform: 'uppercase' }}>Selection of Beneficiaries:</h2>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#FF9900', fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>VIDYAMITRA<br />TRUST</span>
                </div>
                <img src="/assets/bookstack2.gif" alt="Book Stack" style={{ height: '126px' }} />
            </div>

            <div style={{ marginTop: '20px' }}>
                <p>The criteria used in selecting Beneficiaries are:-</p>
                <ol style={{ listStyleType: 'decimal', marginLeft: '20px', marginTop: '10px' }}>
                    <li style={{ marginBottom: '10px' }}>The greater proportion of the beneficiaries are girls.</li>
                    <li style={{ marginBottom: '10px' }}>The performance in the qualifying exams should be satisfactory.</li>
                    <li style={{ marginBottom: '10px' }}>The potential beneficiaries should pursue such courses and in such Institutions where employment possibilities are high.</li>
                    <li style={{ marginBottom: '10px' }}>The financial position of the parents is such that the beneficiary may not be able to pursue further education without outside help.</li>
                    <li style={{ marginBottom: '10px' }}>Should be committed to finish the course and take up employment.</li>
                    <li style={{ marginBottom: '10px' }}>Should involve themselves in social welfare activities especially in supporting our Trust.</li>
                </ol>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <a href="/objectives" style={{ textDecoration: 'none', marginRight: '20px' }}>
                    <img src="/assets/prev.gif" alt="Previous" />
                </a>
                <a href="/scope-of-support" style={{ textDecoration: 'none' }}>
                    <img src="/assets/next.gif" alt="Next" />
                </a>
            </div>
        </div>
    );
};

export default SelectionOfBeneficiaries;
