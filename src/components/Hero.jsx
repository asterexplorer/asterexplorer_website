import React from 'react';

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
            {/* Subtle Animated Background Grid */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.3,
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

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
                </div>

                {/* Main Headline */}
                <h1 style={{
                    marginBottom: '2rem',
                    fontSize: 'clamp(3.5rem, 6vw, 6rem)',
                    lineHeight: '1.1',
                    fontWeight: '900',
                    textAlign: 'center',
                    maxWidth: '1000px'
                }}>
                    Building the <span className="text-gradient">Digital Tomorrow</span>
                </h1>

                {/* Description */}
                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '3.5rem',
                    maxWidth: '700px',
                    textAlign: 'center',
                    lineHeight: '1.6'
                }}>
                    We engineer high-performance digital ecosystems. From robust AI architectures to immersive user experiences, we help ambitious brands dominate their market.
                </p>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '5rem' }}>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem', fontSize: '1.1rem' }}>Start Project</a>
                    <a href="#services" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>View Solutions</a>
                </div>


            </div>
        </section>
    );
};

export default Hero;
