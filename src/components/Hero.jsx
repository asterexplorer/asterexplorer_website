import React from 'react';
import Background from './Background';

const Hero = () => {
    return (
        <section style={{
            padding: '10rem 0 8rem',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'radial-gradient(ellipse at center, rgba(45, 212, 191, 0.03) 0%, var(--bg-deep) 70%)'
        }}>
            <Background />
            {/* Subtle Animated Background Grid */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.3,
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }}></div>

            <div className="container hero-grid" style={{
                position: 'relative',
                zIndex: 1
            }}>
                <div className="hero-content">
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.6rem 1.4rem',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '100px',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--primary)',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        marginBottom: '2.5rem',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 0 20px rgba(45, 212, 191, 0.1)'
                    }}>
                        <span style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></span>
                        Next-Generation Systems
                        <span style={{
                            marginLeft: '0.8rem',
                            padding: '0.2rem 0.6rem',
                            background: 'var(--accent)',
                            borderRadius: '4px',
                            fontSize: '0.65rem',
                            color: 'white',
                            fontWeight: '900',
                            animation: 'pulse 2s infinite'
                        }}>NEW</span>
                    </div>

                    {/* Main Headline */}
                    <h1 style={{
                        marginBottom: '2rem',
                        fontSize: 'clamp(3rem, 5vw, 5rem)',
                        lineHeight: '1.1',
                        fontWeight: '900',
                        maxWidth: '800px'
                    }}>
                        Building the <br />
                        <span className="text-gradient">Digital Tomorrow</span>
                    </h1>

                    {/* Description */}
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '3.5rem',
                        maxWidth: '600px',
                        lineHeight: '1.6'
                    }}>
                        We engineer high-performance digital ecosystems. From robust AI architectures to immersive user experiences, we help ambitious brands dominate their market.
                    </p>

                    {/* CTAs */}
                    <div className="hero-ctas" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                        <a href="#contact" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem', fontSize: '1.1rem' }}>Start Project</a>
                        <a href="#services" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>View Solutions</a>
                    </div>
                </div>

                {/* Right side - Upcoming Projects Scroll */}
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '450px', marginLeft: 'auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                        <span style={{
                            fontSize: '0.95rem',
                            color: 'var(--primary)',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            textShadow: '0 0 15px rgba(45, 212, 191, 0.4)'
                        }}>
                            Upcoming Projects
                        </span>
                    </div>
                    <div className="projects-scroll-container">
                        <div className="projects-scroll-track">
                            {/* Duplicate items for seamless loop */}
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
                                    <div className="mini-project-card">
                                        <span className="tag">AI System</span>
                                        <h4>Neural Nexus</h4>
                                        <p>Next-gen autonomous processing unit for enterprise clusters.</p>
                                    </div>
                                    <div className="mini-project-card">
                                        <span className="tag">Cloud Infrastructure</span>
                                        <h4>SkyNet V2</h4>
                                        <p>Distributed ledger technology for massive data scaling.</p>
                                    </div>
                                    <div className="mini-project-card">
                                        <span className="tag">Web Platform</span>
                                        <h4>Lumina OS</h4>
                                        <p>Browser-based operating system with native speed.</p>
                                    </div>
                                    <div className="mini-project-card">
                                        <span className="tag">FinTech</span>
                                        <h4>Quantum Pay</h4>
                                        <p>Zero-latency global transaction network.</p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
