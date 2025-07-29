import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../widgets/LanguageSwitcher";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return(
        <div className="navbar">
            <div className="navbar-content">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <img src="/assets/logos/content/Ship.svg" alt="Logo" height="36px" />
                    <div className="navbar-title">
                        <span>Sea-S</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className={`navbar-links ${isMenuOpen ? 'navbar-links-open' : ''}`}>
                    <Link to="/about" onClick={closeMenu}>About Us</Link>
                    <Link to="/services" onClick={closeMenu}>Services</Link>
                    <Link to="/news" onClick={closeMenu}>News</Link>
                    <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
                    <Link to="/faq" onClick={closeMenu}>FAQ</Link>
                    <div className="navbar-desktop-lang">
                        <LanguageSwitcher />
                    </div>
                </div>

                {/* Mobile Controls */}
                <div className="navbar-mobile-controls">
                    <LanguageSwitcher />
                    <button 
                        className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Desktop Language Switcher */}
                
            </div>
        </div>
    );
}

export default Navbar;