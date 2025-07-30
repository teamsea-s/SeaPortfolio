import React from 'react';
import './ServiceCard.css';

function ServiceCard({ service, layout = 'standard' }) {
    const handleLearnMore = () => {
        // Placeholder for external link
        window.open(service.link || '#', '_blank');
    };

    return (
        <div className={`service-card service-card-${layout}`}>
            <div className="service-card-image">
                <img 
                    src={service.image} 
                    alt={service.name}
                    className="service-image"
                />
                <div className="service-card-overlay">
                    <div className="service-card-category">
                        {service.category}
                    </div>
                </div>
            </div>
            
            <div className="service-card-content">
                <div className="service-card-header">
                    <div className="service-icon">
                        {service.icon}
                    </div>
                    <h3 className="service-name">{service.name}</h3>
                </div>
                
                <p className="service-description">
                    {service.description}
                </p>
                
                <ul className="service-features">
                    {service.features.map((feature, index) => (
                        <li key={index} className="service-feature">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="feature-check">
                                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
                
                <button 
                    className="service-learn-more"
                    onClick={handleLearnMore}
                >
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ServiceCard;