import React from 'react';

const HowCanIParticipate = () => {
    return (
        <div className="page-content" style={{ fontFamily: 'Verdana, sans-serif', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <h2 style={{ color: 'purple', fontFamily: 'Comic Sans MS', textTransform: 'uppercase' }}>How Can You Participate?</h2>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#FF9900', fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>VIDYAMITRA<br />TRUST</span>
                </div>
                <img src="/assets/bookstack2.gif" alt="Book Stack" style={{ height: '126px' }} />
            </div>

            <div style={{ marginTop: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                <h3 style={{ color: 'purple', textTransform: 'uppercase' }}>BE A SPONSOR</h3>
                <p>You can underwrite to support one or more students for the entire duration of the chosen course. Many options are available. The term could be anywhere from 3yrs to 7yrs. The cost for the courses would be in the range, Rs.12,00,000/- to Rs.18,00,000/-.</p>

                <h3 style={{ color: 'purple', textTransform: 'uppercase', marginTop: '20px' }}>BE A DONOR</h3>
                <p>If you decide not to have a long-term association with the Trust but would still like to participate, you could make periodic financial contributions of any amount. The details of expenditure towards full sponsorship are given here.</p>

                <h3 style={{ color: 'purple', textTransform: 'uppercase', marginTop: '20px' }}>SPONSORSHIP:</h3>
                <p>A beneficiary would be identified and would be deemed to be the sponsored student of the sponsor.<br />
                    Sponsorship must be for the entire duration of the course.<br />
                    <a href="#!" style={{ color: 'blue' }}>For amounts in USD.</a></p>

                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', border: '1px solid #ccc' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f0f0f0' }}>
                            <th rowSpan="2" style={{ border: '1px solid #ccc', padding: '5px' }}>Courses</th>
                            <th rowSpan="2" style={{ border: '1px solid #ccc', padding: '5px' }}>Duration (Yrs)</th>
                            <th rowSpan="2" style={{ border: '1px solid #ccc', padding: '5px' }}>Sponsorship Fees (Rs.)</th>
                            <th colSpan="4" style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'center' }}>Payment Schedule (Rs.)<br />Years</th>
                        </tr>
                        <tr style={{ backgroundColor: '#f0f0f0' }}>
                            <th style={{ border: '1px solid #ccc', padding: '5px' }}>1</th>
                            <th style={{ border: '1px solid #ccc', padding: '5px' }}>2</th>
                            <th style={{ border: '1px solid #ccc', padding: '5px' }}>3</th>
                            <th style={{ border: '1px solid #ccc', padding: '5px' }}>4 to 8 yrs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid #ccc', padding: '5px' }}>Intermediate</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'center' }}>2</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>80,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>40,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>40,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}></td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}></td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ccc', padding: '5px' }}>Intermediate + Engg.</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'center' }}>6</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>7,80,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>2,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>2,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>2,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>1,80,000</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ccc', padding: '5px' }}>Intermediate + Med*</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'center' }}>7</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>7,80,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>40,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>40,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>2,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>5,00,000</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ccc', padding: '5px' }}>Intermediate + B.sc (Nursing)</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'center' }}>6</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>4,80,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>40,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>40,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>1,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>3,00,000</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ccc', padding: '5px' }}>Intermediate + Graduation</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'center' }}>5</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>3,05,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>40,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>40,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>75,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>1,50,000</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ccc', padding: '5px' }}>Engg</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'center' }}>4</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>8,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>2,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>2,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>2,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>2,00,000</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ccc', padding: '5px' }}>Medical*</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'center' }}>5</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>7,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>1,40,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>1,40,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>1,40,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>2,80,000</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ccc', padding: '5px' }}>B.sc (Nursing)</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'center' }}>4</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>4,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>1,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>1,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>1,00,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>1,00,000</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #ccc', padding: '5px' }}>Graduation</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'center' }}>3</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>1,80,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>60,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>60,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}>60,000</td>
                            <td style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'right' }}></td>
                        </tr>

                    </tbody>
                </table>

                <p>Sponsorships are renewed on a yearly basis based on performances.</p>
                <p>In case of unsatisfactory performance, the sponsorship of the student will be terminated. </p>
                <p style={{ fontStyle: 'italic' }}>*We will support only those who are able to get admission under the government quota.</p>

                <p style={{ marginTop: '20px' }}>We have been managing this activity since 1992 at a low level, through our own funds. We now see our beneficiaries completing their education and getting employed very gainfully. This has enthused us to increase our coverage to the extent we can continue to effectively monitor the students.</p>
                <p>You can participate in extending education support to the underprivileged.</p>

                <h3 style={{ color: 'purple', textTransform: 'uppercase', marginTop: '20px' }}>CONTRIBUTIONS</h3>
                <p>a). Contribute Rs.1000/- or more and be a <strong>WELL-WISHER</strong>.</p>
                <p>b). Contribute Rs.60,000/- or more and be a <strong>SPONSOR</strong>. (Sponsorship – Rs.60,000/Year/Student)</p>
                <p>c) Contribute Rs.10.00 Lakhs or more and be a <strong>CORPUS FUND PATRON</strong></p>

                <h4 style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>WE REQUEST YOU TO CONTRIBUTE TOWARDS YEARLY EXPENDITURE AS WELL AS TOWARDS OUR CORPUS FUND.</h4>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
                    <div style={{ width: '48%' }}>
                        <h4 style={{ textAlign: 'center', textDecoration: 'underline' }}>IDBI Bank Ltd</h4>
                        <p>9 - 1 - 164 A,<br />
                            Amsri Faust Building<br />
                            Opp. Deccan Chronicle,<br />
                            S.D. Road, Secunderabad,<br />
                            Andhra Pradesh 500003<br />
                            Bank Account Name : <strong>Vidyamitra Charitable Trust</strong><br />
                            Account Number : <strong>297104000006095</strong><br />
                            IFSC Code No. : <strong>IBKL0000297</strong></p>
                    </div>
                </div>

                <h3 style={{ marginTop: '20px', textDecoration: 'underline' }}>ALL CONTRIBUTIONS ARE ELIGIBLE FOR INCOME TAX EXEMPTION AS PER DETAILS GIVEN BELOW:</h3>
                <p>a) All donations are eligible for <strong>Income Tax Exemption</strong> under section 80G (5 ) (vi ) of I.T. Act 1961, vide F.No. DIT(E) Hyd / 80G / 27 (09 ) 07 - 08.</p>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <a href="/typical-yearly-expenditure" style={{ textDecoration: 'none', marginRight: '20px' }}>
                    <img src="/assets/prev.gif" alt="Previous" />
                </a>
                <a href="/how-can-i-help" style={{ textDecoration: 'none' }}>
                    <img src="/assets/next.gif" alt="Next" />
                </a>
            </div>
        </div>
    );
};

export default HowCanIParticipate;
