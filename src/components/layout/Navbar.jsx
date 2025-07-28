import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-content">
                <Link to="/" className="navbar-logo">
                        <img src="/assets/Logos/Content/Portfolio.svg" alt="Logo" height="22px" />
                        <div className="navbar-title">
                            <span>DevPortfolio</span>
                        </div>
                </Link>
                <div className="navbar-links">
                    <Link to="/about">About Us</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/news">News</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;