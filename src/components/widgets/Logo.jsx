import React, { useRef, useEffect, useState } from "react";
import "./Logo.css";

function Logo({ svgPath, text, altText = "Icon", link, copyable = false }) {
    const textRef = useRef(null);
    const [textWidth, setTextWidth] = useState(0);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (textRef.current) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            context.font = '14px system-ui, -apple-system, sans-serif';
            const measuredWidth = context.measureText(text).width;
            setTextWidth(measuredWidth);
        }
    }, [text]);

    const handleClick = async () => {
        if (copyable) {
            try {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        } else if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div 
            className="logo-icon-with-text" 
            onClick={handleClick}
            style={{ 
                '--expanded-width': `${copied? 120 : 50 + textWidth + 20}px`,
                position: 'relative'
            }}
        >
            <div className="logo-icon-container">
                <img src={svgPath} alt={altText} className="logo-icon-svg" />
            </div>
            <div className="logo-text-container">
                <span className="logo-icon-text" ref={textRef}>{copied? "✓ Copied!" : text}</span>
            </div>
        </div>
    );
}

export default Logo;