import "./Services.css";
import "./Views.css";
import ServiceCard from "../widgets/ServiceCard";
import { useNavigate } from "react-router-dom";

function Services() {
    // Services data
    const navigate = useNavigate();
    const servicesData = [
        {
            id: 1,
            name: "Vessel Management",
            description: "Comprehensive vessel management services ensuring optimal performance, compliance, and operational efficiency for your maritime fleet.",
            category: "Operations",
            image: "./assets/content/Carousel1.jpeg",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 20L12 4L21 20H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            features: [
                "24/7 operational monitoring",
                "Crew management and training",
                "Maintenance scheduling",
                "Performance optimization",
                "Regulatory compliance"
            ],
            link: "https://example.com/vessel-management"
        },
        {
            id: 2,
            name: "Cargo Operations",
            description: "Efficient cargo handling and logistics solutions with real-time tracking and specialized handling for various cargo types.",
            category: "Logistics",
            image: "./assets/content/Carousel2.jpg",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
            ),
            features: [
                "Container handling services",
                "Bulk cargo operations",
                "Real-time cargo tracking",
                "Temperature-controlled storage",
                "Specialized equipment handling"
            ],
            link: "https://example.com/cargo-operations"
        },
        {
            id: 3,
            name: "Port Services",
            description: "Complete port services including berthing, pilotage, stevedoring, and port agency services at major international ports.",
            category: "Port Operations",
            image: "./assets/content/Carousel3.jpeg",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M2 12H4L6 8H8L10 12H12L14 8H16L18 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 16H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            features: [
                "Berth scheduling and management",
                "Pilotage services",
                "Stevedoring operations",
                "Port agency services",
                "Customs clearance support"
            ],
            link: "https://example.com/port-services"
        },
        {
            id: 4,
            name: "Maritime Consulting",
            description: "Expert maritime consulting services covering regulatory compliance, operational efficiency, and strategic planning for maritime businesses.",
            category: "Consulting",
            image: "./assets/content/Carousel4.jpeg",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9.09 9A3 3 0 0 1 12 6.36A3 3 0 0 1 14.91 9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 12V16" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="20" r="1" stroke="currentColor" strokeWidth="2"/>
                </svg>
            ),
            features: [
                "Regulatory compliance guidance",
                "Operational efficiency analysis",
                "Strategic planning support",
                "Risk assessment and management",
                "Technology integration consulting"
            ],
            link: "https://example.com/maritime-consulting"
        },
        {
            id: 5,
            name: "Ship Chandling",
            description: "Comprehensive ship supply services providing everything from provisions and technical supplies to crew essentials at competitive rates.",
            category: "Supply",
            image: "./assets/content/Carousel5.jpg",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2"/>
                </svg>
            ),
            features: [
                "Provisions and catering supplies",
                "Technical equipment and spare parts",
                "Safety equipment and gear",
                "Crew personal items",
                "24/7 emergency supply service"
            ],
            link: "https://example.com/ship-chandling"
        },
        {
            id: 6,
            name: "Environmental Services",
            description: "Comprehensive environmental services ensuring compliance with maritime environmental regulations and sustainable operations.",
            category: "Environment",
            image: "./assets/content/Carousel1.jpeg",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
            ),
            features: [
                "Waste management services",
                "Ballast water treatment",
                "Environmental compliance monitoring",
                "Carbon footprint assessment",
                "Green technology implementation"
            ],
            link: "https://example.com/environmental-services"
        }
    ];

    const regularServices = servicesData

    return (
        <div className="services">
            {/* Hero Section */}
            <div className="page-hero page-hero--large">
                {/* <img src="/assets/logos/content/FAQ.svg" width="65rem" alt="FAQ" className="faq-image" /> */}
                <div className="page-hero-content">
                    <h1 className="title">Our Services</h1>
                    <p className="subtitle">
                    Explore our comprehensive range of maritime services designed to meet your specific needs
                    </p>
                </div>
            </div>

            {/* Services Content */}
            <div className="services-content">
                <div className="services-container">
                    {/* Featured Services */}
                    {/* <section className="services-featured-section">
                        <h2 className="services-section-title">Featured Services</h2>
                        <div className="services-featured-grid">
                            {featuredServices.map(service => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    layout="featured"
                                />
                            ))}
                        </div>
                    </section> */}

                    {/* All Services */}
                    <section className="services-all-section">
                        <h2 className="services-section-title">All Services</h2>
                        <div className="services-grid">
                            {regularServices.map(service => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    layout="standard"
                                />
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="services-cta-section">
                        <div className="services-cta-content">
                            <h2>Need a Custom Solution?</h2>
                            <p>
                                Our team of maritime experts can develop tailored solutions to meet your specific operational requirements. 
                                Contact us to discuss your unique challenges and discover how we can help optimize your maritime operations.
                            </p>
                            <div className="services-cta-buttons">
                                <button className="services-cta-primary" onClick={() => navigate('/contact')}>
                                    Contact Our Experts
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                                <button className="services-cta-secondary" onClick={() => navigate('/contact')}>
                                    Request Quote
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Services;