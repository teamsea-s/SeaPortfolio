import React, { useEffect } from 'react';
import './NewsDetailModal.css';

function NewsDetailModal({ news, isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !news) return null;

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="news-modal-overlay" onClick={onClose}>
            <div className="news-modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="news-modal-close" onClick={onClose} aria-label="Close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                
                <div className="news-modal-content">
                    <div className="news-modal-header">
                        <div className="news-modal-image">
                            <img src={news.image} alt={news.title} />
                            <div className="news-modal-category">
                                <span className={`news-category-tag news-category-${news.category.toLowerCase().replace(' ', '-')}`}>
                                    {news.category}
                                </span>
                            </div>
                        </div>
                        
                        <div className="news-modal-meta">
                            <h1 className="news-modal-title">{news.title}</h1>
                            <div className="news-modal-info">
                                <span className="news-modal-date">{formatDate(news.date)}</span>
                                <span className="news-modal-author">By {news.author}</span>
                                <span className="news-modal-read-time">{news.readTime} min read</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="news-modal-body">
                        <div className="news-modal-text">
                            {news.fullContent ? news.fullContent.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            )) : (
                                <p>{news.content}</p>
                            )}
                        </div>
                        
                        {news.tags && news.tags.length > 0 && (
                            <div className="news-modal-tags">
                                <h3>Tags</h3>
                                <div className="news-tags-list">
                                    {news.tags.map((tag, index) => (
                                        <span key={index} className="news-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        <div className="news-modal-share">
                            <h3>Share this article</h3>
                            <div className="news-share-buttons">
                                <button className="news-share-btn news-share-linkedin">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2"/>
                                        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
                                        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    LinkedIn
                                </button>
                                <button className="news-share-btn news-share-twitter">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    Twitter
                                </button>
                                <button className="news-share-btn news-share-email">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    Email
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsDetailModal;