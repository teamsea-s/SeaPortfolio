import "./About.css";
import "./Views.css";
import ImageCarousel from "../widgets/Carousel";
import TeamMemberCard from "../widgets/TeamMemberCard";

function About() {
    // Sample images for the carousel
    const carouselImages = [
        {
            src: "/assets/content/Carousel1.jpeg",
            alt: "Maritime operations"
        },
        {
            src: "/assets/content/Carousel2.jpg", 
            alt: "Port facilities"
        },
        {
            src: "/assets/content/Carousel3.jpeg",
            alt: "Vessel management"
        },
        {
            src: "/assets/content/Carousel4.jpeg",
            alt: "Cargo operations"
        },
        {
            src: "/assets/content/Carousel5.jpg",
            alt: "Cargo operations"
        }
    ];

    // Team members data
    const teamMembers = [
        {
            image: "/assets/content/PersonCard.jpg",
            name: "Captain James Morrison",
            role: "Chief Executive Officer",
            description: "With over 25 years of maritime experience, Captain Morrison leads our company with vision and expertise in global shipping operations.",
            linkedin: "https://linkedin.com/in/jamesmorrison",
            email: "j.morrison@seas.com"
        },
        {
            image: "/assets/content/PersonCard.jpg",
            name: "Sarah Chen",
            role: "Chief Operations Officer",
            description: "Sarah oversees our global operations with a focus on efficiency and innovation in maritime logistics and vessel management.",
            linkedin: "https://linkedin.com/in/sarahchen",
            email: "s.chen@seas.com"
        },
        {
            image: "/assets/content/PersonCard.jpg",
            name: "Captain Roberto Silva",
            role: "Fleet Manager",
            description: "Captain Silva manages our diverse fleet with 20+ years of experience in vessel operations and maritime safety standards.",
            linkedin: "https://linkedin.com/in/robertosilva",
            email: "r.silva@seas.com"
        },
        {
            image: "/assets/content/PersonCard.jpg",
            name: "Dr. Elena Petrov",
            role: "Environmental Compliance Director",
            description: "Dr. Petrov ensures our operations meet the highest environmental standards while driving sustainable maritime practices.",
            linkedin: "https://linkedin.com/in/elenapetrov",
            email: "e.petrov@seas.com"
        }
    ];

    return(
        <div className="about">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="about-hero-content">
                    <span className="title">About Sea-S</span>
                    <p className="about-hero-subtitle">
                        Leading the maritime industry with innovation, expertise, and unwavering commitment to excellence
                    </p>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="about-story-section">
                <div className="about-story-container">
                    <div className="about-story-content">
                        <h2>Our Story</h2>
                        <div className="about-story-text">
                            <p>
                                Founded in 1998 by a group of seasoned maritime professionals, MaritimePro began as a small consultancy with a big vision: to transform the maritime industry through innovative solutions and unwavering commitment to excellence.
                            </p>
                            <p>
                                Today, we are a globally recognized maritime services company, managing over 500 vessels and serving clients in more than 50 countries. Our success is built on the foundation of trust, expertise, and the relentless pursuit of maritime excellence.
                            </p>
                        </div>
                        
                        <div className="about-story-stats">
                            <div className="about-stat-item">
                                <span className="about-stat-number">500+</span>
                                <span className="about-stat-label">Vessels Managed</span>
                            </div>
                            <div className="about-stat-item">
                                <span className="about-stat-number">50+</span>
                                <span className="about-stat-label">Countries Served</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="about-story-carousel">
                        <ImageCarousel images={carouselImages} autoSlideInterval={5000} />
                    </div>
                </div>
            </div>

            {/* Foundation Section */}
            <div className="about-foundation-section">
                <div className="about-foundation-container">
                    <div className="about-section-header">
                        <h2>Our Foundation</h2>
                        <p>Built on strong values and unwavering principles that guide every decision we make</p>
                    </div>

                    <div className="about-foundation-grid">
                        <div className="about-foundation-card">
                            <div className="about-foundation-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M21 11h-4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h3>Mission</h3>
                            <p>To provide exceptional maritime services that exceed client expectations while maintaining the highest standards of safety, reliability, and environmental responsibility.</p>
                        </div>

                        <div className="about-foundation-card">
                            <div className="about-foundation-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h3>Vision</h3>
                            <p>To be the world's most trusted maritime services partner, setting new standards for innovation, sustainability, and operational excellence in the global shipping industry.</p>
                        </div>

                        <div className="about-foundation-card">
                            <div className="about-foundation-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h3>Values</h3>
                            <p>Integrity, excellence, and innovation drive everything we do. We believe in transparent communication, continuous improvement, and sustainable practices.</p>
                        </div>

                        <div className="about-foundation-card">
                            <div className="about-foundation-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h3>Safety First</h3>
                            <p>Safety is our top priority. We implement rigorous safety protocols and continuous training to ensure the wellbeing of our crew and protection of our assets.</p>
                        </div>

                        <div className="about-foundation-card">
                            <div className="about-foundation-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h3>Integrity</h3>
                            <p>We conduct business with honesty, transparency, and ethical practices. Our reputation is built on trust and reliable partnerships with clients worldwide.</p>
                        </div>

                        <div className="about-foundation-card">
                            <div className="about-foundation-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h3>Global Reach</h3>
                            <p>With operations spanning 50+ countries, we provide comprehensive maritime services wherever our clients need us, maintaining local expertise with global standards.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="about-team-section">
                <div className="about-team-container">
                    <div className="about-section-header">
                        <h2>Our Leadership Team</h2>
                        <p>Meet the experienced professionals who guide our company towards maritime excellence</p>
                    </div>

                    <div className="about-team-grid">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard
                                key={index}
                                image={member.image}
                                name={member.name}
                                role={member.role}
                                description={member.description}
                                linkedin={member.linkedin}
                                email={member.email}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Certifications Section */}
            <div className="about-certifications-section">
                <div className="about-certifications-container">
                    <div className="about-section-header">
                        <h2>Certifications & Accreditations</h2>
                        <p>Our commitment to excellence is validated by industry-leading certifications and accreditations</p>
                    </div>

                    <div className="about-certifications-grid">
                        <div className="about-certification-card">
                            <div className="about-certification-icon">
                                <img src="./assets/content/Certification.png" alt="ISO 9001" />
                            </div>
                            <h3>ISO 9001:2015</h3>
                            <p>Quality Management Systems certification ensuring consistent delivery of high-quality maritime services.</p>
                        </div>

                        <div className="about-certification-card">
                            <div className="about-certification-icon">
                                <img src="./assets/content/Certification.png" alt="ISO 14001" />
                            </div>
                            <h3>ISO 14001:2015</h3>
                            <p>Environmental Management Systems certification demonstrating our commitment to environmental protection.</p>
                        </div>

                        <div className="about-certification-card">
                            <div className="about-certification-icon">
                                <img src="./assets/content/Certification.png" alt="ISM Code" />
                            </div>
                            <h3>ISM Code Certified</h3>
                            <p>International Safety Management certification ensuring the highest standards of maritime safety operations.</p>
                        </div>

                        <div className="about-certification-card">
                            <div className="about-certification-icon">
                                <img src="./assets/content/Certification.png" alt="MARPOL" />
                            </div>
                            <h3>MARPOL Compliant</h3>
                            <p>Full compliance with International Convention for the Prevention of Pollution from Ships regulations.</p>
                        </div>

                        <div className="about-certification-card">
                            <div className="about-certification-icon">
                                <img src="./assets/content/Certification.png" alt="SOLAS" />
                            </div>
                            <h3>SOLAS Certified</h3>
                            <p>Safety of Life at Sea certification ensuring comprehensive maritime safety standards compliance.</p>
                        </div>

                        <div className="about-certification-card">
                            <div className="about-certification-icon">
                                <img src="./assets/content/Certification.png" alt="OHSAS 18001" />
                            </div>
                            <h3>OHSAS 18001</h3>
                            <p>Occupational Health and Safety Management Systems certification prioritizing crew wellbeing and safety.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;