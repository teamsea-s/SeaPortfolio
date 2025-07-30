import { useNavigate } from "react-router-dom";
import ExpandableCard from "../widgets/ExpandableCard";
import "./FAQ.css";
import "./Views.css";

function FAQ() {
    const navigate = useNavigate();
    return(
        <div className="faq">
            <div className="page-hero page-hero--large">
                {/* <img src="/assets/logos/content/FAQ.svg" width="65rem" alt="FAQ" className="faq-image" /> */}
                <div className="page-hero-content">
                    <h1 className="title">Frequently Asked Questions</h1>
                    <p className="subtitle">
                        Find answers to common questions about our maritime services, regulations, and operational procedures.
                    </p>
                </div>
            </div>
            
            <div className="quick-access-section">
                <div className="quick-access-header">
                    <h2>Need Immediate Help?</h2>
                    <p>Quick access to support and information</p>
                </div>
                
                <div className="quick-access-cards">
                    <div className="access-card">
                        <div className="card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="currentColor"/>
                            </svg>
                        </div>
                        <h3>Contact Support</h3>
                        <p>Get immediate assistance from our maritime experts available 24/7</p>
                        <button className="card-button" onClick={() => {navigate("/contact")}}>Contact Now</button>
                    </div>
                    
                    <div className="access-card">
                        <div className="card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="currentColor"/>
                                <polyline points="14,2 14,8 20,8" fill="white"/>
                                <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2"/>
                                <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2"/>
                                <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="2"/>
                            </svg>
                        </div>
                        <h3>Request Quote</h3>
                        <p>Get a customized quote for your maritime services and operations</p>
                        <button className="card-button" onClick={() => {navigate("/contact")}} >Get Quote</button>
                    </div>
                    
                    <div className="access-card">
                        <div className="card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="currentColor"/>
                                <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                                <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                                <circle cx="7" cy="8" r="1" fill="white"/>
                                <circle cx="12" cy="8" r="1" fill="white"/>
                                <circle cx="17" cy="8" r="1" fill="white"/>
                                <circle cx="7" cy="12" r="1" fill="white"/>
                                <circle cx="12" cy="12" r="1" fill="white"/>
                                <circle cx="17" cy="12" r="1" fill="white"/>
                            </svg>
                        </div>
                        <h3>View Services</h3>
                        <p>Explore our comprehensive range of maritime and port services</p>
                        <button className="card-button" onClick={() => {navigate("/services")}}>View All</button>
                    </div>
                </div>
            </div>

            <div className="faq-content">
                <span className="title">Browse by Category</span>
                <div className="faq-section-description">
                    Organized answers to help you find exactly what you're looking for
                </div>
                <div className="faq-categories">
                    <div className="faq-category">
                        <div className="faq-categorie-title">
                        <img src="/assets/logos/content/Cargo.svg" width="28px" height="28px" alt="Vessel Management" className="faq-category-icon" />
                            <span>
                                General Questions
                            </span>
                        </div>
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
                        <ExpandableCard 
                            question="How do you ensure environmental compliance?"
                            answer="Environmental protection is a core value. We comply with all IMO environmental regulations, use eco-friendly technologies, and continuously monitor our emissions. Our goal is to minimize our environmental footprint while maintaining operational efficiency."
                        />
                    </div>
                    <div className="faq-category">
                        <div className="faq-categorie-title">
                        <img src="/assets/logos/content/Shield.svg" width="28px" height="28px" alt="Vessel Management" className="faq-category-icon" />
                            <span>
                                Complinace & Regulations
                            </span>
                        </div>
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
                        <ExpandableCard 
                            question="How do you ensure environmental compliance?"
                            answer="Environmental protection is a core value. We comply with all IMO environmental regulations, use eco-friendly technologies, and continuously monitor our emissions. Our goal is to minimize our environmental footprint while maintaining operational efficiency."
                        />
                    </div>
                    <div className="faq-category">
                        <div className="faq-categorie-title">
                            <img src="/assets/logos/content/Users.svg" width="28px" height="28px" alt="Vessel Management" className="faq-category-icon" />
                            <span>
                                Vessel Management
                            </span>
                        </div>
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
                        <ExpandableCard 
                            question="How do you ensure environmental compliance?"
                            answer="Environmental protection is a core value. We comply with all IMO environmental regulations, use eco-friendly technologies, and continuously monitor our emissions. Our goal is to minimize our environmental footprint while maintaining operational efficiency."
                        />
                    </div>
                    <div className="faq-category">
                        <div className="faq-categorie-title">
                        <img src="/assets/logos/content/Market.svg" width="28px" height="28px" alt="Vessel Management" className="faq-category-icon" />
                            <span>
                                Commercial Services
                            </span>
                        </div>
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
                        <ExpandableCard 
                            question="How do you ensure environmental compliance?"
                            answer="Environmental protection is a core value. We comply with all IMO environmental regulations, use eco-friendly technologies, and continuously monitor our emissions. Our goal is to minimize our environmental footprint while maintaining operational efficiency."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;