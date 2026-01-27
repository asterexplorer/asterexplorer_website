import React from 'react';

const Portfolio = () => {
    const works = [
        {
            title: "Quantum Banking App",
            category: "Fintech",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1080&auto=format&fit=crop",
            description: "A high-security mobile banking application featuring quantum-safe encryption."
        },
        {
            title: "Nexus OS Dashboard",
            category: "Enterprise",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop",
            description: "A comprehensive administration panel for managing distributed cloud networks."
        },
        {
            title: "Aura Health Platform",
            category: "Healthcare",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1080&auto=format&fit=crop",
            description: "AI-driven diagnostics and patient monitoring system for modern clinics."
        },
        {
            title: "Stellar Marketplace",
            category: "E-Commerce",
            image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1080&auto=format&fit=crop",
            description: "A fast, SEO-optimized marketplace built with Next.js and Headless CMS."
        }
    ];

    return (
        <section id="portfolio" className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Featured <span className="text-gradient">Portfolio</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        A selection of high-impact digital products crafted with precision and technical excellence.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem' }}>
                    {works.map((work, index) => (
                        <div key={index} className="portfolio-item" style={{
                            position: 'relative',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--glass-border)',
                            transition: 'var(--transition-smooth)'
                        }}>
                            <div style={{ height: '300px', overflow: 'hidden' }}>
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
                                    }}
                                    className="portfolio-img"
                                />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--primary)',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    marginBottom: '0.5rem'
                                }}>
                                    {work.category}
                                </div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{work.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{work.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .portfolio-item:hover {
                    border-color: var(--primary);
                    transform: translateY(-5px);
                }
                .portfolio-item:hover .portfolio-img {
                    transform: scale(1.1);
                }
            `}</style>
        </section>
    );
};

export default Portfolio;
