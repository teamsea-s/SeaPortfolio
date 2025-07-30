import React from 'react';
import './NewsCard.css';

function NewsCard({ news, onClick, featured = false }) {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const truncateContent = (content, maxLength = 150) => {
        if (content.length <= maxLength) return content;
        return content.substr(0, maxLength) + '...';
    };

    return (
        <article 
            className={`news-card ${featured ? 'news-card-featured' : ''}`}
            onClick={() => onClick(news)}
        >
            <div className="news-card-image">
                <img 
                    src={news.image} 
                    alt={news.title}
                    className="news-card-img"
                />
                <div className="news-card-category">
                    <span className={`news-category-tag news-category-${news.category.toLowerCase().replace(' ', '-')}`}>
                        {news.category}
                    </span>
                </div>
                {featured && (
                    <div className="news-featured-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26" fill="currentColor"/>
                        </svg>
                        Featured
                    </div>
                )}
            </div>
            
            <div className="news-card-content">
                <div className="news-card-meta">
                    <span className="news-card-date">{formatDate(news.date)}</span>
                    <span className="news-card-author">By {news.author}</span>
                </div>
                
                <h3 className="news-card-title">{news.title}</h3>
                
                <p className="news-card-excerpt">
                    {truncateContent(news.content)}
                </p>
                
                <div className="news-card-footer">
                    <span className="news-card-read-time">{news.readTime} min read</span>
                    <button className="news-card-read-more">
                        Read More
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    );
}

export default NewsCard;