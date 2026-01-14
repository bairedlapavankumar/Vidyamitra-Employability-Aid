import React from 'react';

const TypicalYearlyExpenditure = () => {
    return (
        <div className="page-content" style={{ fontFamily: 'Verdana, sans-serif', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <h2 style={{ color: 'purple', fontFamily: 'Comic Sans MS', textTransform: 'uppercase' }}>TYPICAL YEARLY EXPENDITURE ON BENEFICIARIES:</h2>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#FF9900', fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>VIDYAMITRA<br />TRUST</span>
                </div>
                <img src="/assets/bookstack2.gif" alt="Book Stack" style={{ height: '126px' }} />
            </div>

            <div style={{ marginTop: '20px', fontSize: '14px' }}>
                <p>Full tuition fees, transportation, books, and stationery. (Some cases- clothes and pocket money) and Hostel expenses.</p>
                <p>Sponsorship must be for the entire duration of the course.</p>
                <p style={{ fontWeight: 'bold' }}>Typical Costs</p>

                <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #999', backgroundColor: '#e8e8e8' }}>
                    <tbody>
                        {/* Row 1 */}
                        <tr style={{ borderBottom: '1px solid #999' }}>
                            <td style={{ borderRight: '1px solid #999', padding: '5px', verticalAlign: 'top', width: '30px' }}>1)</td>
                            <td style={{ borderRight: '1px solid #999', padding: '5px', verticalAlign: 'top' }}>
                                <div style={{ marginBottom: '10px' }}>Intermediate (2 years)</div>
                                <div style={{ fontWeight: 'bold' }}>Typical costs for 2 years would be Rs.80, 000</div>
                            </td>
                            <td style={{ padding: '5px', verticalAlign: 'top', width: '300px' }}>
                                <div>Yearly Tuition - Rs.25, 000</div>
                                <div style={{ borderBottom: '1px solid black' }}>Miscellaneous/yr - Rs.15, 000</div>
                                <div style={{ fontWeight: 'bold' }}>Total/yr - Rs.40, 000</div>
                            </td>
                        </tr>

                        {/* Row 2 */}
                        <tr style={{ borderBottom: '1px solid #999' }}>
                            <td style={{ borderRight: '1px solid #999', padding: '5px', verticalAlign: 'top' }}>2)</td>
                            <td style={{ borderRight: '1px solid #999', padding: '5px', verticalAlign: 'top' }}>
                                <div>BSc. (Nursing)- 4 years</div>
                                <div style={{ marginBottom: '10px' }}>B.Com (CA)) - 4 years</div>
                                <div>Rs.1,00,000/yr as a Hosteller</div>
                                <div style={{ fontWeight: 'bold', marginTop: '5px' }}>Typical Cost for the 4 years would be Rs.4,00,000/-.</div>
                            </td>
                            <td style={{ padding: '5px', verticalAlign: 'top' }}>
                                <div>Concessional Tuition fees/yr-Rs.30,000</div>
                                <div>Miscellaneous/yr - Rs.20, 000</div>
                                <div style={{ fontWeight: 'bold' }}>Hostel/yr - Rs.50, 000</div>
                            </td>
                        </tr>

                        {/* Row 3 */}
                        <tr>
                            <td style={{ borderRight: '1px solid #999', padding: '5px', verticalAlign: 'top' }}>3)</td>
                            <td style={{ borderRight: '1px solid #999', padding: '5px', verticalAlign: 'top' }}>
                                <div style={{ marginBottom: '10px' }}>Engineering (4 years)</div>
                                <div>Rs.1,60,000/yr As a Day-Scholar</div>
                                <div>Rs.2,15, 000/yr As a Hosteller</div>
                                <div style={{ fontWeight: 'bold', marginTop: '5px' }}>Typical Cost for the 4 years would be between Rs.6,40,000/- to Rs.8,60,000/-.</div>
                            </td>
                            <td style={{ padding: '5px', verticalAlign: 'top' }}>
                                <div>Fees -Rs.1,35,000/-yr</div>
                                <div>Bus ets -Rs.25, 000-yr</div>
                                <div>Hostel/yr -Rs.80, 000/-yr</div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p style={{ marginTop: '15px' }}>Depending on colleges there would be some changes in expenditure.</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <a href="/monitoring-and-counselling" style={{ textDecoration: 'none', marginRight: '20px' }}>
                    <img src="/assets/prev.gif" alt="Previous" />
                </a>
                <a href="/how-can-i-participate" style={{ textDecoration: 'none' }}>
                    <img src="/assets/next.gif" alt="Next" />
                </a>
            </div>
        </div>
    );
};

export default TypicalYearlyExpenditure;
