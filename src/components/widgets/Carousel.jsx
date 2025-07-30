import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

function ImageCarousel({ images, autoSlideInterval = 4000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null);
    const progressRef = useRef(0);

    // Clear intervals and reset progress when index changes
    useEffect(() => {
        progressRef.current = 0;
        setProgress(0);
        
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, [currentIndex]);

    // Auto-slide logic
    useEffect(() => {
        if (!isHovered && images.length > 1) {
            const progressStep = 100 / (autoSlideInterval / 100);
            
            intervalRef.current = setInterval(() => {
                progressRef.current += progressStep;
                setProgress(progressRef.current);
                
                if (progressRef.current >= 100) {
                    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
                }
            }, 100);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isHovered, images.length, autoSlideInterval, currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if (!images || images.length === 0) {
        return <div className="carousel-placeholder">No images available</div>;
    }

    return (
        <div 
            className="image-carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="carousel-container">
                <div 
                    className="carousel-track" 
                    style={{ 
                        transform: `translateX(-${currentIndex * 100}%)`
                    }}
                >
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className="carousel-slide"
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt || `Slide ${index + 1}`}
                                className="carousel-image"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button 
                            className={`carousel-arrow carousel-arrow-prev ${isHovered ? 'visible' : ''}`}
                            onClick={prevSlide}
                            aria-label="Previous image"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button 
                            className={`carousel-arrow carousel-arrow-next ${isHovered ? 'visible' : ''}`}
                            onClick={nextSlide}
                            aria-label="Next image"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </>
                )}

                {/* Progress Indicators */}
                {images.length > 1 && (
                    <div className="carousel-indicators">
                        {images.map((_, index) => (
                            <div 
                                key={index} 
                                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            >
                                <div 
                                    className="indicator-progress"
                                    style={{ 
                                        width: index === currentIndex ? `${Math.min(progress, 100)}%` : '0%'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImageCarousel;