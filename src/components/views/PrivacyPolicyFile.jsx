import React from 'react';
import "./Policy.css";
import "./Views.css";

function PrivacyPolicy() {
    return (
        <div className="policy-page">
            <div className="page-hero page-hero--compact page-hero--light">
                <div className="page-hero-content">
                    <h1 className="page-hero-title">Privacy Policy</h1>
                    <p className="page-hero-subtitle">
                        Your privacy is important to us. Learn how we protect and handle your information.
                    </p>
                </div>
            </div>

            <div className="policy-content">
                <div className="policy-container">
                    <div className="policy-last-updated">
                        Last updated: January 15, 2024
                    </div>

                    <div className="policy-section">
                        <h2>Introduction</h2>
                        <p>
                            Sea-S is committed to protecting your privacy and ensuring transparency 
                            about how we collect, use, and safeguard your information. This Privacy Policy explains our 
                            practices regarding personal data when you visit our website or use our maritime services.
                        </p>
                        <p>
                            This website serves as an informational platform about our maritime services and does not 
                            directly collect or process personal user data. However, our operational services may involve 
                            data processing, which is covered under this policy.
                        </p>
                    </div>

                    <div className="policy-section">
                        <h2>Information We Collect</h2>
                        
                        <h3>Website Information</h3>
                        <p>
                            Our corporate website is primarily informational and does not require personal data submission. 
                            We may collect basic analytics data such as:
                        </p>
                        <ul>
                            <li>Browser type and version</li>
                            <li>Operating system information</li>
                            <li>Pages visited and time spent on site</li>
                            <li>Referring website information</li>
                            <li>General geographic location (country/region level)</li>
                        </ul>

                        <h3>Service-Related Information</h3>
                        <p>
                            When you engage with our maritime services, we may collect:
                        </p>
                        <ul>
                            <li>Contact information (name, email, phone number, company details)</li>
                            <li>Shipping and cargo information necessary for service delivery</li>
                            <li>Transaction and billing information</li>
                            <li>Communication records for service support</li>
                            <li>Operational data required for maritime compliance and safety</li>
                        </ul>
                    </div>

                    <div className="policy-section">
                        <h2>How We Use Your Information</h2>
                        <p>We use collected information exclusively for legitimate business purposes:</p>
                        <ul>
                            <li><strong>Service Delivery:</strong> To provide, maintain, and improve our maritime services</li>
                            <li><strong>Communication:</strong> To respond to inquiries and provide customer support</li>
                            <li><strong>Compliance:</strong> To meet legal, regulatory, and safety requirements in maritime operations</li>
                            <li><strong>Business Operations:</strong> To manage contracts, billing, and administrative processes</li>
                            <li><strong>Website Improvement:</strong> To analyze website usage and enhance user experience</li>
                        </ul>
                        <p>
                            <strong>We do not sell, rent, or share your personal information with third parties for 
                            marketing purposes.</strong>
                        </p>
                    </div>

                    <div className="policy-section">
                        <h2>Data Security and Protection</h2>
                        <p>
                            We implement robust security measures to protect your information:
                        </p>
                        <ul>
                            <li><strong>Encryption:</strong> All sensitive data is encrypted both in transit and at rest using industry-standard protocols</li>
                            <li><strong>Access Controls:</strong> Strict access controls ensure only authorized personnel can access personal data</li>
                            <li><strong>Regular Security Audits:</strong> We conduct regular security assessments and updates</li>
                            <li><strong>Secure Infrastructure:</strong> Our systems are hosted on secure, monitored servers</li>
                            <li><strong>Employee Training:</strong> All staff receive regular privacy and security training</li>
                        </ul>
                        <p>
                            While we strive to protect your information, no method of transmission over the internet 
                            or electronic storage is 100% secure. We cannot guarantee absolute security but maintain 
                            industry-leading practices.
                        </p>
                    </div>

                    <div className="policy-section">
                        <h2>Information Sharing and Disclosure</h2>
                        <p>
                            We respect your privacy and do not share personal information except in limited circumstances:
                        </p>
                        <ul>
                            <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in service delivery (under strict confidentiality agreements)</li>
                            <li><strong>Legal Requirements:</strong> When required by law, regulation, or court order</li>
                            <li><strong>Safety and Security:</strong> To protect the safety of individuals or maritime operations</li>
                            <li><strong>Business Transfers:</strong> In the event of a merger or acquisition (with continued privacy protection)</li>
                        </ul>
                        <p>
                            All third-party service providers are carefully vetted and contractually bound to maintain 
                            the same level of data protection we provide.
                        </p>
                    </div>

                    <div className="policy-section">
                        <h2>Data Retention</h2>
                        <p>
                            We retain personal information only as long as necessary for:
                        </p>
                        <ul>
                            <li>Providing requested services</li>
                            <li>Meeting legal and regulatory requirements</li>
                            <li>Resolving disputes and enforcing agreements</li>
                            <li>Maintaining business records as required by maritime regulations</li>
                        </ul>
                        <p>
                            Website analytics data is typically retained for 24 months. Service-related data retention 
                            periods vary based on regulatory requirements and business needs, typically ranging from 
                            3 to 7 years.
                        </p>
                    </div>

                    <div className="policy-section">
                        <h2>Your Rights and Choices</h2>
                        <p>
                            Depending on your location, you may have certain rights regarding your personal information:
                        </p>
                        <ul>
                            <li><strong>Access:</strong> Request information about personal data we hold about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
                            <li><strong>Portability:</strong> Request a copy of your data in a structured format</li>
                            <li><strong>Objection:</strong> Object to certain processing of your personal information</li>
                            <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
                        </ul>
                        <p>
                            To exercise these rights, please contact us using the information provided below. 
                            We will respond to your request within the timeframe required by applicable law.
                        </p>
                    </div>

                    <div className="policy-section">
                        <h2>International Data Transfers</h2>
                        <p>
                            As a global maritime services provider, we may transfer personal information across borders 
                            for legitimate business purposes. All international transfers are conducted with appropriate 
                            safeguards, including:
                        </p>
                        <ul>
                            <li>Standard contractual clauses approved by relevant authorities</li>
                            <li>Adequacy decisions by competent authorities</li>
                            <li>Appropriate technical and organizational security measures</li>
                        </ul>
                    </div>

                    <div className="policy-section">
                        <h2>Children's Privacy</h2>
                        <p>
                            Our services are designed for businesses and adults. We do not knowingly collect personal 
                            information from children under 16 years of age. If we become aware that we have collected 
                            such information, we will take steps to delete it promptly.
                        </p>
                    </div>

                    <div className="policy-section">
                        <h2>Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy periodically to reflect changes in our practices, 
                            technology, legal requirements, or other factors. We will notify you of significant 
                            changes through our website or direct communication when appropriate.
                        </p>
                        <p>
                            We encourage you to review this Privacy Policy regularly to stay informed about how 
                            we protect your information.
                        </p>
                    </div>

                    <div className="policy-section">
                        <h2>Contact Information</h2>
                        <p>
                            If you have questions, concerns, or requests regarding this Privacy Policy or our 
                            data practices, please contact us:
                        </p>
                        <div className="policy-contact-info">
                            <p><strong>Sea-S Privacy Office</strong></p>
                            <p>Email: privacy@sea-s.com</p>
                            <p>Phone: +1 (555) 123-4567</p>
                            <p>Address: 123 Maritime Plaza, Harbor City, HC 12345</p>
                        </div>
                        <p>
                            We are committed to resolving any privacy concerns promptly and professionally.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;