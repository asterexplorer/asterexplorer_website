import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Website",
            description: "Boutique high-fidelity websites. Built with modern tech like React and Vite for ultimate speed and SEO.",
            features: ["Portfolio Sites", "Business Landing Pages", "E-commerce"],
            icon: "🌐"
        },
        {
            title: "Mobile Apps",
            description: "Premium cross-platform mobile experiences for iOS and Android. Smooth, native-like performance.",
            features: ["React Native", "UI/UX Optimization", "App Store Launch"],
            icon: "📱"
        },
        {
            title: "Graphic Design",
            description: "Visual identities that stand out. From logo design to modern interface layouts and marketing assets.",
            features: ["Logo & Branding", "UI/UX Design", "Social Media Kits"],
            icon: "🎨"
        },
        {
            title: "Database Manage",
            description: "Secure and scalable database architectures. Expert management of SQL and NoSQL environments.",
            features: ["Database Architecture", "Performance Tuning", "Backup Solutions"],
            icon: "�️"
        }
    ];

    return (
        <section id="services" style={{ padding: '8rem 0', background: 'var(--bg-surface)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Specialized <span className="text-gradient">Services</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}> Delivering technical excellence across multiple domains to help your business scale.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    {services.map((service, index) => (
                        <div key={index} className="card" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            borderTop: index === 1 ? '4px solid var(--primary)' : '1px solid var(--glass-border)'
                        }}>
                            <div style={{ fontSize: '3rem' }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.5rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{service.description}</p>
                            <div style={{ marginTop: 'auto' }}>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {service.features.map(feat => (
                                        <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
