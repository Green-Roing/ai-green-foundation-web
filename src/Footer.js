import React from "react";

export default function Footer() {
    return (
        <footer className="footer-adv footer-adv-layout-4">
            <div className="footer-adv-overlay" style={{margin: "20px"}}>
                <div className="ast-container">
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                        gap: '40px',
                        alignItems: 'start'
                    }}>
                        {/* Logo and About Section */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                margin: '0 auto 20px',
                                border: '2px solid #ccc'
                            }}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/AI green Foundation.png`}
                                    alt="AI Green Foundation"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <h3 style={{ color: '#5d9c04', marginBottom: '15px', fontSize: '1.2rem' }}>AI Green Foundation</h3>
                            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                                Creating a greener, cleaner future through environmental stewardship and community participation.
                            </p>
                        </div>

                        {/* Get Involved Section */}
                        <div>
                            <h3 style={{ color: '#5d9c04', marginBottom: '15px', fontSize: '1.2rem' }}>Get Involved</h3>
                            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                                <p style={{ marginBottom: '10px' }}>
                                    <strong>• Volunteer:</strong> Join our campaigns and activities
                                </p>
                                <p style={{ marginBottom: '10px' }}>
                                    <strong>• Partner:</strong> Collaborate through CSR initiatives
                                </p>
                                <p style={{ marginBottom: '10px' }}>
                                    <strong>• Donate:</strong> Support our environmental projects
                                </p>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h3 style={{ color: '#5d9c04', marginBottom: '15px', fontSize: '1.2rem' }}>Contact Us</h3>
                            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                                <p style={{ marginBottom: '8px' }}>
                                    <strong>Phone:</strong> <a href="tel:+91 8414841234" style={{ color: '#ffffff', textDecoration: 'none' }}>+91 8414841234</a>
                                </p>
                                <p style={{ marginBottom: '8px' }}>
                                    <strong>Email:</strong> <a href="mailto:aigreenfoundation45@gmail.com" style={{ color: '#ffffff', textDecoration: 'none' }}>aigreenfoundation45@gmail.com</a>
                                </p>
                                <p style={{ marginBottom: '15px' }}>
                                    <strong>Address:</strong> C/O Ibi Mepo, Roing Electrical Sub Division Lower Market, Roing, Lower Dibang Valley District-792110, Arunachal Pradesh, India
                                </p>
                                
                                {/* Social Media Icons */}
                                <div style={{ display: 'flex', gap: '15px', marginTop: '15px' ,justifyContent: 'center'}}>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61565108856666&mibextid=rS40aB7S9Ucbxw6v"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        style={{ 
                                            color: '#3b5998', 
                                            fontSize: '1.5rem',
                                            transition: 'transform 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/ai_greenfoundation?igsh=aDZ4aWczM2tsejk3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        style={{ 
                                            color: '#C13584', 
                                            fontSize: '1.5rem',
                                            transition: 'transform 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}