import { Link } from "react-router-dom";
import Logo from "../widgets/Logo";
import "./Footer.css";

function Footer() {
    return(
        <div className="footer">
            <div className="footer-links">
                <Link href="/about">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/news">News</Link>
                <Link href="/contact">Contact Us</Link>
            </div>
            <div className="footer-links">
                <Link href="/privacy">Privacy policy</Link>
                <Link href="/cookies">Cookie Policy</Link>
                <Link href="/terms">Terms of Service</Link>
            </div>
            <div className="footer-widgets">
                <Logo svgPath="./assets/logos/social/Phone.svg" text="+56 9 9999 9999" copyable={true} />
                <Logo svgPath="./assets/logos/social/LinkedIn.svg" text="@sea-s" link="https://www.linkedin.com/in/bsaldivia" />
                <Logo svgPath="./assets/logos/social/Email.svg" text="team@sea-s.com" copyable={true} />
            </div>
            <div className="footer-text">@2025 Sea-S. All rights reserved</div>
        </div>
    );
}

export default Footer;