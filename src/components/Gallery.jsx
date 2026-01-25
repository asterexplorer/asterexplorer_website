import React from 'react';

const projects = [
    {
        title: 'Nebula Dashboard',
        desc: 'A futuristic analytics platform visualizing deep space data trajectories.',
        tags: ['React', 'D3.js', 'WebGL'],
        color: '#00C2FF',
        icon: '📊'
    },
    {
        title: 'Cosmic Chat',
        desc: 'Real-time encrypted communication across the galaxy using quantum entanglement protocols.',
        tags: ['Socket.io', 'Node', 'Crypto'],
        color: '#7D00FF',
        icon: '💬'
    },
    {
        title: 'Stellar Commerce',
        desc: 'Seamless e-commerce solution for interstellar trade and asset management.',
        tags: ['Next.js', 'Stripe', 'Solidity'],
        color: '#FF00E5',
        icon: '💳'
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
                                group: 'card'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                e.currentTarget.style.borderColor = `rgba(${parseInt(project.color.slice(1, 3), 16)}, ${parseInt(project.color.slice(3, 5), 16)}, ${parseInt(project.color.slice(5, 7), 16)}, 0.5)`;
                                e.currentTarget.querySelector('.icon-bg').style.transform = 'scale(1.2) rotate(10deg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.querySelector('.icon-bg').style.transform = 'scale(1) rotate(0deg)';
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
                                    transition: 'opacity 0.3s ease',
                                    zIndex: 0
                                }}
                            />

                            <div
                                className="icon-bg"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}11 100%)`,
                                    marginBottom: '2rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: `1px solid ${project.color}44`,
                                    fontSize: '1.8rem',
                                    transition: 'transform 0.5s var(--transition-bounce)',
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
