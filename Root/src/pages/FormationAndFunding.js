import React from 'react';

const FormationAndFunding = () => {
    return (
        <div className="page-content" style={{ fontFamily: 'Verdana, sans-serif', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <h2 style={{ color: 'purple', fontFamily: 'Comic Sans MS', textTransform: 'uppercase' }}>Formation and Funding:</h2>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#FF9900', fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>VIDYAMITRA<br />TRUST</span>
                </div>
                <img src="/assets/bookstack2.gif" alt="Book Stack" style={{ height: '126px' }} />
            </div>

            <div style={{ marginTop: '20px' }}>
                <p>
                    The Vidyamitra Trust has taken over all the activities of the individual Founder Trustees and all such activities related to education support is being routed through this Trust. The Trust has expanded the scope and has extended education support to many more children.
                </p>
            </div>

            <div style={{ marginTop: '20px' }}>
                <p>
                    The trustees are funding the present level of activity fully by themselves. All the administrative and other works of the trust are being done on voluntary basis, and as such there are no administrative salaries and other expenses.
                </p>
                <p style={{ marginTop: '10px' }}>
                    The amount required for education support to students is being brought by the trustees in their individual capacity.
                </p>
                <p style={{ marginTop: '10px' }}>
                    For the academic year 2012-2013 and onwards the Trust from the academic year 2012-2013, the Trust has expand its activities. The Trust feels it has the capacity to extend financial support for education to cover up to 200 students without diluting its commitment to have regular monitoring of the student's academic progress and to provide appropriate counseling to the students and their families whenever necessary.
                </p>
                <p style={{ marginTop: '10px' }}>
                    The Trust has been able to run all the activities entirely from the trustees own funds.
                </p>
                <p style={{ marginTop: '10px' }}>
                    It is very gratifying that past beneficiaries are contributing enthusiastically to the Trust. Similarly some close associates/relatives of the Trustee too have been contributing. The total amounts received from our past beneficiaries/associates/relatives has been kept as a corpus fund. This corpus fund (inclusive of interest earned) has grown to approx 1.5Cr. We hope to increase the Corpus to Rs.5 Cr. So that the Trust, in future, could function purely on the interest income of the Corpus fund.
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                <a href="/background" style={{ textDecoration: 'none' }}>
                    <img src="/assets/prev.gif" alt="Previous" />
                </a>
                <a href="/objectives" style={{ textDecoration: 'none' }}>
                    <img src="/assets/next.gif" alt="Next" />
                </a>
            </div>
        </div>
    );
};

export default FormationAndFunding;
