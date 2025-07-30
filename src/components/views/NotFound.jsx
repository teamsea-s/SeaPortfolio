import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./NotFound.css";
import "./Views.css";

function NotFound() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="not-found-page">
            <div className="not-found-container">
                <div className="not-found-content">
                    <div className="not-found-visual">
                        <div className="error-code">404</div>
                        <div className="ship-icon">
                            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 50L60 20L110 50L105 60L60 35L15 60L10 50Z" fill="#1D8CA1"/>
                                <path d="M60 20V35" stroke="#0B2F48" strokeWidth="3" strokeLinecap="round"/>
                                <path d="M45 25V30" stroke="#0B2F48" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M75 25V30" stroke="#0B2F48" strokeWidth="2" strokeLinecap="round"/>
                                <circle cx="60" cy="30" r="2" fill="#4ECDC4"/>
                                <path d="M20 65C20 65 40 70 60 65C80 60 100 65 100 65" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M25 70C25 70 40 72 60 70C80 68 95 70 95 70" stroke="#4ECDC4" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div className="not-found-text">
                        <h1 className="not-found-title">Page Not Found</h1>
                        <p className="not-found-subtitle">
                            Looks like this page has sailed away! The page you're looking for doesn't exist or has been moved.
                        </p>
                        
                        <div className="not-found-actions">
                            <button className="btn-primary" onClick={goHome}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Go Home
                            </button>
                            
                            <button className="btn-secondary" onClick={goBack}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="helpful-links">
                    <h3>Maybe you were looking for:</h3>
                    <div className="links-grid">
                        <button className="link-card" onClick={() => navigate('/services')}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Our Services</span>
                        </button>
                        
                        <button className="link-card" onClick={() => navigate('/about')}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>About Us</span>
                        </button>
                        
                        <button className="link-card" onClick={() => navigate('/contact')}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Contact Us</span>
                        </button>
                        
                        <button className="link-card" onClick={() => navigate('/faq')}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                <path d="M9.09 9A3 3 0 0 1 12 6.36A3 3 0 0 1 14.91 9" stroke="currentColor" strokeWidth="2"/>
                                <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>FAQ</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;