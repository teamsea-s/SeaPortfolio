import React, { useState, useEffect } from 'react';
import "./News.css";
import "./Views.css";
import NewsCard from '../widgets/NewsCard';
import NewsDetailModal from '../widgets/NewsDetailModal';

function News() {
    const [selectedNews, setSelectedNews] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('date');

    // Sample news data - replace with your API data
    const newsData = [
        {
            id: 1,
            title: "Revolutionary Container Tracking Technology Implemented Across Fleet",
            content: "Sea-S has successfully implemented cutting-edge IoT tracking technology across our entire container fleet, providing real-time visibility and enhanced security for our clients' cargo.",
            fullContent: `Sea-S Maritime Services is proud to announce the successful implementation of revolutionary IoT-based container tracking technology across our entire fleet of over 500 vessels. This groundbreaking initiative represents a significant milestone in our commitment to technological innovation and operational excellence.

The new tracking system utilizes advanced sensors and satellite communication to provide real-time location data, temperature monitoring, and security alerts for all containerized cargo. This technology enables our clients to have unprecedented visibility into their shipments, from port of origin to final destination.

Key features of the new system include:
- Real-time GPS tracking with 99.9% accuracy
- Environmental monitoring (temperature, humidity, shock detection)
- Automated security alerts for unauthorized access
- Predictive analytics for route optimization
- Mobile app integration for client accessibility

"This investment in technology demonstrates our commitment to staying at the forefront of maritime innovation," said Captain James Morrison, CEO of Sea-S. "Our clients can now have complete peace of mind knowing exactly where their cargo is at any given moment."

The implementation was completed in partnership with leading technology firms and underwent extensive testing across multiple trade routes. Initial results show a 40% improvement in cargo security and a 25% reduction in delivery time discrepancies.`,
            image: "./assets/content/Carousel5.jpg",
            author: "Sarah Chen",
            date: "2024-01-15",
            category: "Technology",
            readTime: 5,
            tags: ["IoT", "Container Tracking", "Innovation", "Technology"],
            featured: true
        },
        {
            id: 2,
            title: "Sea-S Achieves Carbon Neutral Operations Milestone",
            content: "Our comprehensive sustainability program has reached a major milestone with carbon neutral operations achieved across 80% of our fleet through innovative green technologies and operational improvements.",
            fullContent: `Sea-S Maritime Services has achieved a significant environmental milestone by reaching carbon neutral operations across 80% of our fleet, setting a new standard for sustainable maritime operations in the industry.

This achievement is the result of our comprehensive three-year sustainability program that focused on reducing emissions through technological innovation, operational efficiency, and strategic partnerships with renewable energy providers.

Our sustainability initiatives include:
- Installation of advanced fuel-efficient engines reducing consumption by 30%
- Implementation of AI-powered route optimization systems
- Partnership with wind energy providers for shore power at major ports
- Investment in hybrid propulsion systems for coastal vessels
- Comprehensive waste reduction and recycling programs

"Achieving carbon neutrality is not just about meeting regulatory requirements; it's about our responsibility to future generations," stated Dr. Elena Petrov, Environmental Compliance Director. "This milestone proves that sustainable operations and business success can go hand in hand."

The program has resulted in a 45% reduction in overall carbon emissions compared to 2021 levels, while maintaining operational efficiency and cost-effectiveness. We are on track to achieve full fleet carbon neutrality by 2025, two years ahead of our original target.`,
            image: "./assets/content/Carousel4.jpeg",
            author: "Dr. Elena Petrov",
            date: "2024-01-10",
            category: "Sustainability",
            readTime: 4,
            tags: ["Carbon Neutral", "Sustainability", "Environment", "Green Technology"]
        },
        {
            id: 3,
            title: "New Strategic Partnership with Port of Rotterdam",
            content: "Sea-S announces a landmark partnership with the Port of Rotterdam, enhancing our European operations and providing improved services for trans-Atlantic shipping routes.",
            fullContent: `Sea-S Maritime Services is pleased to announce a strategic partnership with the Port of Rotterdam, Europe's largest port, significantly enhancing our operational capabilities and service offerings in the European market.

This partnership establishes Rotterdam as a key hub for Sea-S operations, providing our clients with improved access to European markets and more efficient trans-Atlantic shipping routes. The agreement includes dedicated berth space, priority handling services, and joint sustainability initiatives.

Benefits of the partnership include:
- Reduced port waiting times by up to 50%
- Enhanced cargo handling capabilities for specialized shipments
- Access to Rotterdam's advanced digital port systems
- Joint investment in green port technologies
- Expanded warehouse and logistics facilities

"This partnership with Rotterdam represents a significant expansion of our European presence," said Captain Roberto Silva, Fleet Manager. "The port's world-class facilities and commitment to innovation align perfectly with our operational standards."

The partnership is expected to increase our European shipping capacity by 35% and reduce average transit times for trans-Atlantic routes by 2-3 days. Construction of new dedicated facilities is scheduled to begin in Q2 2024.`,
            image: "./assets/content/Carousel3.jpeg",
            author: "Captain Roberto Silva",
            date: "2024-01-08",
            category: "Company",
            readTime: 3,
            tags: ["Partnership", "Rotterdam", "Europe", "Expansion"]
        },
        {
            id: 4,
            title: "Enhanced Safety Protocols Following Industry Best Practices",
            content: "Sea-S implements new comprehensive safety protocols that exceed international standards, ensuring the highest level of protection for crew and cargo.",
            fullContent: `Sea-S Maritime Services has implemented enhanced safety protocols that not only meet but exceed international maritime safety standards, reinforcing our commitment to crew welfare and cargo protection.

The new safety framework was developed in collaboration with international maritime safety experts and incorporates lessons learned from industry best practices. All crew members have undergone comprehensive training on the updated protocols.

Key enhancements include:
- Advanced bridge resource management systems
- Enhanced emergency response procedures
- Improved personal protective equipment standards
- Regular safety simulation exercises
- Mental health and wellness support programs for crew
- AI-powered risk assessment tools

"Safety is not negotiable in our operations," emphasized Captain James Morrison. "These enhanced protocols ensure that every crew member returns home safely to their families while maintaining the highest standards of cargo security."

The implementation includes mandatory certification programs for all crew members and regular third-party safety audits. Our safety record has improved by 60% since the introduction of these protocols, with zero major incidents recorded in the past 18 months.`,
            image: "./assets/content/Carousel2.jpg",
            author: "Captain James Morrison",
            date: "2024-01-05",
            category: "Safety",
            readTime: 4,
            tags: ["Safety", "Protocols", "Crew Welfare", "Standards"]
        },
        {
            id: 5,
            title: "Industry Report: Maritime Trade Growth Projections for 2024",
            content: "Latest industry analysis shows promising growth trends for maritime trade, with container shipping expected to increase by 4.2% globally in 2024.",
            fullContent: `The latest maritime industry report reveals optimistic growth projections for 2024, with global container shipping expected to increase by 4.2% compared to the previous year, driven by recovering international trade and emerging market expansion.

Key findings from the comprehensive industry analysis include:
- Asia-Europe trade routes showing strongest recovery with 6.1% growth
- Trans-Pacific shipping volumes stabilizing after post-pandemic fluctuations
- Emerging markets in Africa and South America driving new demand
- Increased focus on supply chain resilience and diversification
- Growing demand for specialized cargo handling services

The report identifies several factors contributing to this growth:
- Normalized post-pandemic trade patterns
- Infrastructure investments in developing ports
- Increased e-commerce driving container demand
- Shift towards regional supply chains
- Rising commodity prices supporting bulk shipping

"These projections align with our expansion strategy and fleet modernization plans," noted Sarah Chen, Chief Operations Officer. "We're well-positioned to capitalize on these growth opportunities while maintaining our operational excellence."

The report also highlights challenges including port congestion, environmental regulations, and crew shortage issues that the industry continues to address through technological innovation and improved working conditions.`,
            image: "./assets/content/Carousel1.jpeg",
            author: "Maritime Analytics Team",
            date: "2024-01-03",
            category: "Industry",
            readTime: 6,
            tags: ["Industry Report", "Growth", "Trade", "Analysis"]
        }
    ];

    const categories = ['All', 'Industry', 'Company', 'Technology', 'Sustainability', 'Safety'];

    const handleNewsClick = (news) => {
        setSelectedNews(news);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedNews(null);
    };

    const filteredNews = newsData.filter(news => {
        const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            news.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            news.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || news.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const sortedNews = [...filteredNews].sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(b.date) - new Date(a.date);
        } else if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortBy === 'author') {
            return a.author.localeCompare(b.author);
        }
        return 0;
    });

    const featuredNews = sortedNews.filter(news => news.featured);
    const regularNews = sortedNews.filter(news => !news.featured);

    return (
        <div className="news">
            {/* Hero Section */}
            <div className="news-hero">
                <div className="news-hero-content">
                    <h1 className="title">Industry News & Company Updates</h1>
                    <p className="news-subtitle">
                        Stay informed with the latest developments in maritime technology, industry trends, and Sea-S company updates
                    </p>
                </div>
            </div>

            {/* Filters Section */}
            <div className="news-filters-section">
                <div className="news-filters-container">
                    <div className="news-search">
                        <div className="news-search-input">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <input
                                type="text"
                                placeholder="Search news..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="news-filters">
                        <div className="news-category-filter">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        <div className="news-sort-filter">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="date">Sort by Date</option>
                                <option value="title">Sort by Title</option>
                                <option value="author">Sort by Author</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* News Content */}
            <div className="news-content">
                <div className="news-container">
                    {/* Featured News */}
                    {featuredNews.length > 0 && (
                        <section className="news-featured-section">
                            <h2 className="news-section-title">Featured Stories</h2>
                            <div className="news-featured-grid">
                                {featuredNews.map(news => (
                                    <NewsCard
                                        key={news.id}
                                        news={news}
                                        onClick={handleNewsClick}
                                        featured={true}
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Regular News */}
                    <section className="news-regular-section">
                        <h2 className="news-section-title">Latest News</h2>
                        <div className="news-grid">
                            {regularNews.map(news => (
                                <NewsCard
                                    key={news.id}
                                    news={news}
                                    onClick={handleNewsClick}
                                />
                            ))}
                        </div>
                    </section>

                    {/* No Results */}
                    {sortedNews.length === 0 && (
                        <div className="news-no-results">
                            <div className="news-no-results-icon">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h3>No news found</h3>
                            <p>Try adjusting your search terms or filters</p>
                        </div>
                    )}
                </div>
            </div>

            {/* News Detail Modal */}
            <NewsDetailModal
                news={selectedNews}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
}

export default News;