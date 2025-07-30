import React from 'react';
import './TeamMemberCard.css';

function TeamMemberCard({ image, name, role, description, linkedin, email }) {
    return (
        <div className="about-team-card">
            <div className="about-team-image-container">
                <img 
                    src={image} 
                    alt={name}
                    className="about-team-image"
                />
                <div className="about-team-overlay">
                    <div className="about-team-social">
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="about-team-social-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        )}
                        {email && (
                            <a href={`mailto:${email}`} className="about-team-social-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="about-team-info">
                <h3 className="about-team-name">{name}</h3>
                <p className="about-team-role">{role}</p>
                <p className="about-team-description">{description}</p>
            </div>
        </div>
    );
}

export default TeamMemberCard;