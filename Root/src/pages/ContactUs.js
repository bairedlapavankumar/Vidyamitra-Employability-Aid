import React from 'react';

const ContactUs = () => {
    return (
        <div className="page-content" style={{ fontFamily: 'Verdana, sans-serif', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <h2 style={{ color: 'purple', fontFamily: 'Comic Sans MS', textTransform: 'uppercase' }}>Contact Us:</h2>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#FF9900', fontFamily: 'Comic Sans MS', fontWeight: 'bold' }}>VIDYAMITRA<br />TRUST</span>
                </div>
                <img src="/assets/bookstack2.gif" alt="Book Stack" style={{ height: '126px' }} />
            </div>

            <div style={{ marginTop: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                <h3 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Trust Address:</h3>
                <p>
                    Vidyamitra Trust<br />
                    9-1-164, 4th Floor,<br />
                    Amsri Plaza, S.D. Road,<br />
                    Secunderabad - 500 003.<br />
                    Phone: 91 40 27701047, 27701282<br />
                    Fax: 91-40-27703262<br />
                    mail: <a href="mailto:info@vidyamitratrust.org" style={{ color: 'red' }}>info@vidyamitratrust.org</a>
                </p>

                <h3 style={{ textTransform: 'uppercase', marginTop: '30px', marginBottom: '10px' }}>OUR BANK DETAILS:</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #999' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f0f0f0' }}>
                            <th style={{ border: '1px solid #999', padding: '10px', textAlign: 'center', width: '50%' }}>A. Donations in Indian Rupees (Electronically to)</th>
                            <th style={{ border: '1px solid #999', padding: '10px', textAlign: 'center', width: '50%' }}>B. Donations in Foreign Currency (Electronically to)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid #999', padding: '15px', verticalAlign: 'top' }}>
                                <h4 style={{ marginBottom: '10px' }}>IDBI Bank Ltd</h4>
                                <p>
                                    AMSRI FAUST,<br />
                                    MUNICIPAL NO. 9-1-164/A, 9-1-16<br />
                                    Sarojini Devi Road,<br />
                                    Secunderabad – 500 003<br />
                                    Hyderabad, Telangana (India)<br />
                                    Bank Account Name : <strong>Vidyamitra Charitable Trust</strong><br />
                                    Account Number : <strong>297104000006095</strong><br />
                                    IFSC Code No. : <strong>IBKL0000297</strong>
                                </p>
                            </td>
                            <td style={{ border: '1px solid #999', padding: '15px', verticalAlign: 'top' }}>
                                <h4 style={{ marginBottom: '10px' }}>State Bank of India</h4>
                                <p>
                                    New Delhi Main Branch,<br />
                                    11, Sansad Marg,<br />
                                    New Delhi,<br />
                                    Delhi - 110001<br />
                                    Bank Account Name : <strong>Vidyamitra Charitable Trust</strong><br />
                                    Account Number : <strong>CA 40140850200</strong><br />
                                    IFSC Code No. : <strong>SBIN0000691</strong><br />
                                    SWIFT Code No : <strong>SBININBB104</strong>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <a href="/" style={{ textDecoration: 'none' }}>
                    <img src="/assets/prev.gif" alt="Home" />
                </a>
            </div>
        </div>
    );
};

export default ContactUs;
