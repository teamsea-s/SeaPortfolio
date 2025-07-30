import { useEffect, useState } from "react";
import "./Contact.css";
import "./Views.css"
import ExpandableCard from "../widgets/ExpandableCard";
import { useNavigate } from "react-router-dom";

function Contact() {
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Trigger animation when component mounts
        setAnimate(true);
        
        // Reset animation state after animation completes
        const timer = setTimeout(() => {
            setAnimate(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return(
        <div className="contact">
            <div className="page-hero page-hero--large">
                {/* <img src="/assets/logos/content/FAQ.svg" width="65rem" alt="FAQ" className="faq-image" /> */}
                <div className="page-hero-content">
                    <h1 className="title">Contact</h1>
                    <p className="subtitle">
                    Ready to optimize your maritime operations? Get in touch with our experts and discover how we can help you achieve your goals.
                    </p>
                </div>
            </div>
            <div className="contact-hero">
                <div className="hero-content">
                    <h2>Get in Touch with Maritime Experts</h2>
                    <p>Ready to navigate your next maritime challenge? Our experienced team is here to provide tailored solutions for your shipping, logistics, and port operation needs.</p>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">25+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Successful Projects</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Support Available</span>
                    </div>
                </div>
            </div>
            <div className="form-cards">
                <div className={`card ${animate ? 'animate-left' : ''}`}>
                    <span className="card-title">Contact Us</span>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className={`card ${animate ? 'animate-right' : ''}`}>
                    <span className="card-title">Contact Info</span>
                    <div className="contact-info">
                        <div className="contact-info-row">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="#0B2F48"/>
                            </svg>
                            <span>+56 9 9999 9999</span>
                        </div>
                        <div className="contact-info-row">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="#0B2F48"/>
                                <polyline points="22,6 12,13 2,6" fill="none" stroke="white" strokeWidth="2"/>
                            </svg>
                            <span>team@sea-s.com</span>
                        </div>
                        <div className="contact-info-row">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#0B2F48"/>
                                <circle cx="12" cy="10" r="3" fill="white"/>
                            </svg>
                            <span>Valparaíso, Chile</span>
                        </div>
                        <div className="contact-info-row">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="4" width="18" height="6" rx="2" ry="2" fill="#0B2F48"/>
                                <line x1="16" y1="2" x2="16" y2="6" stroke="#0B2F48" strokeWidth="2"/>
                                <line x1="8" y1="2" x2="8" y2="6" stroke="#0B2F48" strokeWidth="2"/>
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#0B2F48" strokeWidth="2"/>
                            </svg>
                                <span>Mon-Fri: 9:00 AM - 5:00 PM (GMT-4)</span>
                            </div>
                    </div>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.0954087374745!2d-71.6275!3d-33.0458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de0c33f0e0e3%3A0x3c8a9a7b1f0e0e0e!2sValparaiso%2C%20Chile!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&style=feature:all|element:labels|visibility:off&style=feature:water|element:geometry|color:0x8cc8e8&style=feature:landscape|element:geometry|color:0xf2f2f2&style=feature:road|element:geometry|color:0xffffff"
                            width="100%"
                            height="200"
                            style={{ border: 0, borderRadius: '8px', filter: 'grayscale(30%) contrast(0.8)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <span className="title">Other Important Features</span>
            <div className="faq-container">
                <ExpandableCard 
                    question="What safety regulations do you follow?"
                    answer="We strictly adhere to international maritime safety standards including SOLAS, MARPOL, and ISM Code. Our vessels undergo regular inspections and our crew receives continuous safety training to ensure the highest level of maritime safety."
                />
                <ExpandableCard
                    question="What types of vessels do you operate?"
                    answer="We operate a diverse fleet including container ships, bulk carriers, tankers, and specialized cargo vessels. All our vessels are maintained to the highest standards and equipped with modern navigation and communication systems."
                />
                <ExpandableCard 
                    question="How do you ensure environmental compliance?"
                    answer="Environmental protection is a core value. We comply with all IMO environmental regulations, use eco-friendly technologies, and continuously monitor our emissions. Our goal is to minimize our environmental footprint while maintaining operational efficiency."
                />
                <div style={{ display: "flex", justifyContent:"end", marginBottom: '2rem' }}>
                    <button className="learn-more" onClick={() => navigate("/faq")}>
                        <span>Learn more</span>
                        <svg 
                        className="expandable-arrow"
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"

                        >
                            <path 
                                d="M9 18L15 12L9 6" 
                                stroke="white" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;