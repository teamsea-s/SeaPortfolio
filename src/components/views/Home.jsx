import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import "./Views.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="home-hero-section">
                <div className="home-hero-overlay"></div>
                <div className="home-hero-content">
                    <h1 className="home-hero-title">Navigating the Future of Maritime Services</h1>
                    <p className="home-hero-subtitle">
                        Providing reliable, efficient, and innovative solutions for the global maritime industry. Your trusted partner on the high seas.
                    </p>
                    <div className="home-hero-buttons">
                        <button className="home-btn-primary" onClick={() => navigate('/services')}>Explore Our Services</button>
                        <button className="home-btn-secondary" onClick={() => navigate('/contact')}>Request a Quote</button>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="home-services-overview">
                <div className="home-container">
                    <h2 className="home-section-title">Our Core Services</h2>
                    <p className="home-section-subtitle">Comprehensive solutions tailored to your maritime needs.</p>
                    <div className="home-services-grid">
                        <div className="home-service-card" onClick={() => navigate('/services')}>
                            <div className="home-service-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 18H21V20H3V18ZM6.5 14.5L4 18H20L17.5 14.5L15 17H9L6.5 14.5ZM12 4L20 14H4L12 4Z" fill="white"/>
                                </svg>
                            </div>
                            <h3 className="home-service-title">Vessel Management</h3>
                            <p className="home-service-description">Full technical and crew management for a modern, efficient fleet.</p>
                        </div>
                        <div className="home-service-card" onClick={() => navigate('/services')}>
                            <div className="home-service-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"/>
                                    <path d="M19 15L20 18L23 19L20 20L19 23L18 20L15 19L18 18L19 15Z" fill="white"/>
                                    <path d="M6 14L7 16L9 17L7 18L6 20L5 18L3 17L5 16L6 14Z" fill="white"/>
                                </svg>
                            </div>
                            <h3 className="home-service-title">Cargo & Logistics</h3>
                            <p className="home-service-description">Seamless end-to-end logistics and cargo handling solutions.</p>
                        </div>
                        <div className="home-service-card" onClick={() => navigate('/services')}>
                            <div className="home-service-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H19V19H5Z" fill="white"/>
                                    <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="white"/>
                                </svg>
                            </div>
                            <h3 className="home-service-title">Port Services</h3>
                            <p className="home-service-description">Efficient port agency and husbandry services worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="home-why-choose-us">
                <div className="home-container">
                    <div className="home-why-choose-us-content">
                        <h2 className="home-section-title-light">Why Partner with Sea-S?</h2>
                        <p className="home-section-subtitle-light">
                            We combine decades of experience with cutting-edge technology to deliver unparalleled service and value.
                        </p>
                        <div className="home-features-grid">
                            <div className="home-feature-item">
                                <span className="home-feature-number">25+</span>
                                <span className="home-feature-label">Years of Experience</span>
                            </div>
                            <div className="home-feature-item">
                                <span className="home-feature-number">98%</span>
                                <span className="home-feature-label">Client Satisfaction</span>
                            </div>
                            <div className="home-feature-item">
                                <span className="home-feature-number">150+</span>
                                <span className="home-feature-label">Ports Worldwide</span>
                            </div>
                        </div>
                        <button className="home-btn-primary-light" onClick={() => navigate('/about')}>Learn More About Us</button>
                    </div>
                </div>
            </section>

            {/* Innovation & Technology Section */}
            <section className="home-innovation">
                <div className="home-container">
                    <h2 className="home-section-title">Innovation Meets Maritime Excellence</h2>
                    <p className="home-section-subtitle">Advanced solutions designed for the future of maritime operations.</p>
                    <div className="home-innovation-grid">
                        <div className="home-innovation-card">
                            <div className="home-innovation-icon">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h3 className="home-innovation-title">Smart Technology</h3>
                            <p className="home-innovation-description">Cutting-edge digital solutions including IoT monitoring, predictive analytics, and automated systems for enhanced operational efficiency.</p>
                        </div>
                        <div className="home-innovation-card">
                            <div className="home-innovation-icon">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h3 className="home-innovation-title">Sustainable Practices</h3>
                            <p className="home-innovation-description">Environmental responsibility through green shipping solutions, fuel optimization, and compliance with international sustainability standards.</p>
                        </div>
                        <div className="home-innovation-card">
                            <div className="home-innovation-icon">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 21V13H7V21" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M12 2V8" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h3 className="home-innovation-title">24/7 Support</h3>
                            <p className="home-innovation-description">Round-the-clock operational support with dedicated teams ready to assist with any maritime challenge, anywhere in the world.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="home-cta-section">
                <div className="home-container">
                    <h2 className="home-cta-title">Ready to Set a New Course for Success?</h2>
                    <p className="home-cta-subtitle">Let's discuss how our maritime expertise can benefit your business.</p>
                    <button className="home-btn-primary-large" onClick={() => navigate('/contact')}>Get in Touch</button>
                </div>
            </section>
        </div>
    );
}

export default Home;