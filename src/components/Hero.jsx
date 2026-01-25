import React from 'react';

const Hero = () => {
    const benefits = [
        "Dynamic Tech Stack Integration",
        "Strategic Scaling Architecture",
        "Enterprise-Grade Security"
    ];

    return (
        <section style={{
            padding: '12rem 0 10rem',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'radial-gradient(circle at 20% 30%, rgba(45, 212, 191, 0.05) 0%, transparent 50%)'
        }}>
            {/* Background Decorative Elements */}
            <div className="glow-bg" style={{ top: '-10%', right: '-5%', width: '800px', height: '800px', opacity: '0.08' }} />
            <div className="glow-bg" style={{ bottom: '0', left: '10%', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)', opacity: '0.05' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '8rem', alignItems: 'center' }}>
                    <div>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            padding: '0.6rem 1.2rem',
                            background: 'rgba(45, 212, 191, 0.05)',
                            borderRadius: '100px',
                            border: '1px solid rgba(45, 212, 191, 0.15)',
                            color: 'var(--primary)',
                            fontSize: '0.85rem',
                            fontWeight: '800',
                            letterSpacing: '0.2rem',
                            textTransform: 'uppercase',
                            marginBottom: '2.5rem'
                        }}>
                            <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></span>
                            Next-Gen Innovation
                        </div>

                        <h1 style={{ marginBottom: '2.5rem', fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', lineHeight: '1.05' }}>
                            Easy 2 Way <br />
                            <span className="text-gradient">Business Growth</span>
                        </h1>

                        <p style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                            maxWidth: '540px',
                            lineHeight: '1.8'
                        }}>
                            Aster Explorer empowers global enterprises through advanced engineering and strategic intelligence.
                            We bridge the gap between complex technology and explosive market expansion.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
                            {benefits.map((benefit, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                                    <div style={{ color: 'var(--primary)' }}>✔</div>
                                    {benefit}
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn btn-primary" style={{ padding: '1.4rem 3.5rem' }}>Start Project</a>
                            <a href="#services" className="btn btn-outline" style={{ padding: '1.4rem 3rem' }}>Explore Services</a>
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'relative',
                            zIndex: 2,
                            borderRadius: '40px',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid var(--glass-border)',
                            boxShadow: '0 50px 100px -20px rgba(0,0,0,0.6)',
                            animation: 'float 12s infinite ease-in-out'
                        }}>
                            <img
                                src="/hero-main.png"
                                alt="Aster Technology Visualization"
                                style={{
                                    width: '100%',
                                    borderRadius: '32px',
                                    display: 'block'
                                }}
                            />
                        </div>

                        {/* Decorative background element for the image */}
                        <div style={{
                            position: 'absolute',
                            inset: '-20px',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            borderRadius: '50px',
                            filter: 'blur(60px)',
                            opacity: '0.15',
                            zIndex: 1
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
