import React from "react";

export default function Footer() {
    return (
        <footer className="footer-adv footer-adv-layout-4">
            <div className="footer-adv-overlay" style={{margin: "20px"}}>
                <div className="ast-container">
                    <div className="ast-row" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <div
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%', // Makes the div circular
                                overflow: 'hidden', // Ensures the image does not exceed the div bounds
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '2px solid #ccc', // Optional: Adds a border to the circle
                            }}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/AI green Foundation.png`}
                                alt="AI Green Foundation"
                                style={{
                                    width: '100%', // Make the image take the full width of the div
                                    height: '100%', // Make the image take the full height of the div
                                    objectFit: 'cover', // Ensures the image covers the entire div without distortion
                                }}
                            />
                        </div>
                        <div className="ast-col-lg-3 ast-col-md-6 ast-col-sm-12 footer-adv-widget footer-adv-widget-2" style={{ marginBottom: '20px' }}>
                            <div id="text-2" className="widget widget_text" style={{ textAlign: 'left' }}>
                                <div className="textwidget">
                                    <p>
                                        AIGF invites individuals, corporations, and organizations to participate in its mission of creating a greener, cleaner future.
                                    </p>
                                    <p>
                                        There are several ways to get involved:<br />
                                        <strong>• Volunteer:</strong> Join AIGF’s campaigns and on-ground activities.<br />
                                        <strong>• Partner:</strong> Collaborate with AIGF to amplify its impact through CSR initiatives.<br />
                                        <strong>• Donate:</strong> Contribute to AIGF’s various projects and help sustain its mission.<br />
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="ast-col-lg-3 ast-col-md-6 ast-col-sm-12 footer-adv-widget footer-adv-widget-3" style={{ marginBottom: '20px' }}>
                            <div id="text-4" className="widget widget_text" style={{ textAlign: 'left' }}>
                                <div className="textwidget">
                                    <p style={{ color: "#5d9c04", fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>
                                        We would love to hear from you.
                                    </p>
                                    <p>
                                        <strong>Phone:&nbsp;</strong><a href="tel:+91 7005628093" style={{ color: '#ffffff' }}>7005628093</a><br />
                                        <strong>Email:&nbsp;</strong><a href="mailto:aigreenfoundation45@gmail.com" style={{ color: '#ffffff' }}>aigreenfoundation45@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            {/* Social Media Icons */}
                            <div className="social-media-button-container" style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                                <a
                                    className="sow-social-media-button facebook"
                                    href="https://www.facebook.com/profile.php?id=61565108856666&mibextid=rS40aB7S9Ucbxw6v"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    style={{ color: '#3b5998', fontSize: '1.5rem' }}
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a
                                    className="sow-social-media-button instagram"
                                    href="https://www.instagram.com/ai_greenfoundation?igsh=aDZ4aWczM2tsejk3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    style={{ color: '#C13584', fontSize: '1.5rem' }}
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
