import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Website Development",
            description: "End-to-end full-stack development using modern frameworks like React and Next.js. We build scalable, high-performance web applications tailored to your business logic and growth requirements.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>,
            tag: "Core Engineering"
        },
        {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile solutions for iOS and Android. Our apps focus on seamless user experience, offline capabilities, and high-speed performance for the modern mobile user.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
            tag: "Mobile Solutions"
        },
        {
            title: "Database Development",
            description: "Architecting robust data models and secure storage systems. We handle SQL/NoSQL integrations, data migration, and cloud-native database solutions to ensure your business data is always safe and accessible.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
            tag: "Data Architecture"
        },
        {
            title: "Website Designing",
            description: "Creative UI/UX design that prioritizes brand identity and conversion. We create visually stunning, accessible, and user-centric designs that turn visitors into loyal customers through intuitive interfaces.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
            tag: "Creative UX"
        }
    ];

    return (
        <section id="services" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2rem', fontSize: '0.9rem', fontWeight: '600' }}>Our Capabilities</span>
                    <h2 style={{ marginTop: '1rem' }}>Specialized <span className="text-gradient">Services</span></h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                    {services.map((service, index) => (
                        <div key={index} className="card">
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '16px',
                                background: 'rgba(45, 212, 191, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                marginBottom: '2rem',
                                border: '1px solid var(--glass-border)'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
