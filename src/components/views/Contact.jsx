import { useEffect, useState } from "react";
import "./Contact.css";
import "./Views.css"

function Contact() {
    const [animate, setAnimate] = useState(false);

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
            <span className="title">Contact</span>
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
                        <div className="info-row">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="#0B2F48"/>
                            </svg>
                            <span>+56 9 9999 9999</span>
                        </div>
                        <div className="info-row">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="#0B2F48"/>
                                <polyline points="22,6 12,13 2,6" fill="none" stroke="white" strokeWidth="2"/>
                            </svg>
                            <span>team@sea-s.com</span>
                        </div>
                        <div className="info-row">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#0B2F48"/>
                                <circle cx="12" cy="10" r="3" fill="white"/>
                            </svg>
                            <span>Valparaíso, Chile</span>
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
        </div>
    );
}

export default Contact;