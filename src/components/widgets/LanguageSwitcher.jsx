import React, { useState } from 'react';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
    const [currentLanguage, setCurrentLanguage] = useState('EN');
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const toggleLanguage = () => {
        setIsClicked(true);
        setCurrentLanguage(prev => prev === 'EN' ? 'ES' : 'EN');
        
        // Reset click animation after delay
        setTimeout(() => {
            setIsClicked(false);
        }, 200);
    };

    return (
        <div 
            className={`language-switcher ${isClicked ? 'clicked' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={toggleLanguage}
        >
            <div className="language-content">
                <svg 
                    className={`globe-icon ${isHovered || isClicked ? 'slide-up' : ''}`}
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className={`language-text ${isHovered || isClicked ? 'slide-down' : ''}`}>
                    {currentLanguage}
                </span>
            </div>
        </div>
    );
}

export default LanguageSwitcher;