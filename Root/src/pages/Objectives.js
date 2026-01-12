import React from 'react';

const Objectives = () => {
    return (
        <div className="page-content" style={{ fontFamily: 'Verdana, sans-serif', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <div>
                    <h2 style={{ color: 'purple', fontFamily: 'Comic Sans MS', textTransform: 'uppercase' }}>OBJECTIVES:</h2>
                    <img src="/assets/Objectives_files/students_walking_v2.jpg" alt="Students walking" style={{ width: '200px', height: '150px', marginTop: '10px' }} />
                </div>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#ff9900', fontFamily: 'Comic Sans MS', fontSize: '1.5em' }}>VIDYAMITRA TRUST</span>
                    <br />
                    <img src="/assets/bookstack2.gif" alt="Book Stack" style={{ height: '126px' }} />
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <ol style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
                    <li style={{ marginBottom: '10px' }}>
                        To provide fees, books, freeships and /or scholarships to deserving student.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        To arrange loans for pursuance of higher studies and advancement of education.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        To conduct seminars/workshops and arrange special tuition/training for students.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        To make donations to other Public Charitable Trusts/Institutions recognized u/s. 80 G of the Income Tax Act,1961.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        To provide Monetary Assistance and Social Service in case of natural calamities.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        To promote and advance Moral Education, Charity and General Welfare of the People.
                    </li>
                </ol>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <a href="/formation-and-funding" style={{ textDecoration: 'none', marginRight: '20px' }}>
                    <img src="/assets/prev.gif" alt="Previous" />
                </a>
                <a href="/selection-of-beneficiaries" style={{ textDecoration: 'none' }}>
                    <img src="/assets/next.gif" alt="Next" />
                </a>
            </div>
        </div>
    );
};

export default Objectives;
