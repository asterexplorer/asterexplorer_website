import React from 'react';

const projects = [
    {
        title: 'Enterprise ERP System',
        desc: 'A comprehensive management platform with real-time analytics and inventory tracking.',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        color: '#00C2FF',
        icon: '📊'
    },
    {
        title: 'Secure FinTech App',
        desc: 'Mobile application featuring end-to-end encrypted banking and global asset management.',
        tags: ['React Native', 'Swift', 'AWS'],
        color: '#7D00FF',
        icon: '💳'
    },
    {
        title: 'AI Commerce Engine',
        desc: 'Seamless e-commerce integration with AI-driven personalized product recommendations.',
        tags: ['Next.js', 'PyTorch', 'Stripe'],
        color: '#FF00E5',
        icon: '🛍️'
    }
];

const Gallery = () => {
    return (
        <section id="portfolio" style={{ padding: '10rem 0', background: 'var(--bg-surface)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <span style={{
                        color: 'var(--primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2rem',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                    }}>
                        Selected Work
                    </span>
                    <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>
                        Mission <span className="text-gradient">Log</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="glass-panel"
                            style={{
                                padding: '2.5rem',
                                transition: 'var(--transition-smooth)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '16px',
                                background: 'rgba(255,255,255,0.02)'
                            }}
                        >
                            {/* Decorative Background Blur */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '-50px',
                                    right: '-50px',
                                    width: '150px',
                                    height: '150px',
                                    background: project.color,
                                    filter: 'blur(80px)',
                                    opacity: 0.2,
                                    zIndex: 0
                                }}
                            />

                            <div
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    background: 'rgba(255,255,255,0.03)',
                                    marginBottom: '2rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid var(--glass-border)',
                                    fontSize: '1.8rem',
                                    zIndex: 1
                                }}
                            >
                                {project.icon}
                            </div>

                            <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem', zIndex: 1 }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1, zIndex: 1, fontSize: '1.1rem' }}>
                                {project.desc}
                            </p>

                            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', zIndex: 1 }}>
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        style={{
                                            fontSize: '0.85rem',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '100px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid var(--glass-border)',
                                            color: '#fff',
                                            fontWeight: '500'
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
