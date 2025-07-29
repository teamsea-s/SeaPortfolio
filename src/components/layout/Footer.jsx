import { Link } from "react-router-dom";
import Logo from "../widgets/Logo";
import "./Footer.css";

function Footer() {
    return(
        <div className="footer">
            <div className="footer-section">
                <div className="footer-title footer-columns">
                    <div className="footer-logo">
                        <img src="/assets/logos/content/Ship.svg" alt="Logo" height="36px" />
                        <span className="footer-name">Sea-S</span>
                    </div>
                    <span className="footer-slogan">Providing trusted maritime solutions for over 25 years. We deliver excellence in maritime consultancy, vessel operations, and port services worldwide.</span>
                    <div className="footer-widgets">
                        <Logo svgPath="./assets/logos/social/Phone.svg" text="+56 9 9999 9999" copyable={true} />
                        <Logo svgPath="./assets/logos/social/LinkedIn.svg" text="@sea-s" link="https://www.linkedin.com/in/bsaldivia" />
                        <Logo svgPath="./assets/logos/social/Email.svg" text="team@sea-s.com" copyable={true} />
                    </div>
                </div>
                <div className="footer-columns">
                    <span className="footer-small-title">Quick Links</span>
                    <Link to="/about">About Us</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/news">News</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/faq">FAQ</Link>
                </div>
                <div className="footer-info footer-columns">
                    <span className="footer-small-title">Contact Info</span>
                    <div className="info-row">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="white"/>
                            </svg>
                        <span>+56 9 9999 9999</span>
                    </div>
                    <div className="info-row">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="white"/>
                                <polyline points="22,6 12,13 2,6" fill="none" stroke="#0B2F48" strokeWidth="2"/>
                            </svg>
                        <span>team@sea-s.com</span>
                    </div>
                    <div className="info-row">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="white"/>
                                <circle cx="12" cy="10" r="3" fill="#0B2F48"/>
                            </svg>
                        <span>Valparaíso, Chile</span>
                    </div>
                    <div className="info-row">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="6" rx="2" ry="2" fill="white"/>
                        <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="2"/>
                        <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2"/>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    </svg>
                        <span>Mon-Fri: 9:00 AM - <br />5:00 PM (GMT-4)</span>
                    </div>
                </div>
            </div>
            <div className="footer-divisor"></div>
            <div className="footer-section">
            <div className="footer-text">© 2025 Sea-S. All rights reserved</div>
                <div className="footer-links">
                    <Link to="/privacy">Privacy policy</Link>
                    <Link to="/cookies">Cookie Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;