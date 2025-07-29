import React, { useState } from 'react';
import './ExpandableCard.css';

function ExpandableCard({ question, answer }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const getArrowRotation = () => {
        if (isExpanded && isHovered) return 'rotate(270deg)'; // Up arrow
        if (isHovered) return 'rotate(90deg)'; // Down arrow
        return 'rotate(0deg)'; // Right arrow
    };

    return (
        <div className="expandable-card">
            <div 
                className="expandable-header"
                onClick={toggleExpanded}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span className="expandable-question">{question}</span>
                <svg 
                    className="expandable-arrow"
                    style={{ transform: getArrowRotation() }}
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        d="M9 18L15 12L9 6" 
                        stroke="#161616" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className={`expandable-content ${isExpanded ? 'expanded' : ''}`}>
                <p className="expandable-answer">{answer}</p>
            </div>
        </div>
    );
}

export default ExpandableCard;