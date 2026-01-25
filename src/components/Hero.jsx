import React from 'react';

const Hero = () => {
    return (
        <section style={{
            padding: '12rem 0 8rem',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorative Elements */}
            <div className="glow-bg" style={{ top: '10%', right: '5%' }} />
            <div className="glow-bg" style={{ bottom: '10%', left: '-5%', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem', alignItems: 'center' }}>
                    <div>
                        <div style={{
                            color: 'var(--primary)',
                            fontWeight: '800',
                            fontSize: '0.95rem',
                            marginBottom: '2rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.3em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <span style={{ width: '40px', height: '1.5px', background: 'var(--primary)' }}></span>
                            Enterprise Business Strategic Growth
                        </div>
                        <h1 style={{ marginBottom: '2.5rem' }}>
                            Optimizing <br />
                            <span className="text-gradient">Business Performance</span>
                        </h1>
                        <p style={{
                            fontSize: '1.35rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '3.5rem',
                            maxWidth: '580px',
                            lineHeight: '1.7',
                            fontWeight: '500'
                        }}>
                            Aster Explorer is a premier business consultancy and technology integrator. We empower global corporations to scale through data-driven strategies, optimized operational architectures, and elite talent acquisition.
                        </p>

                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn btn-primary">Analyze ROI</a>
                            <a href="#services" className="btn btn-outline" style={{ backdropFilter: 'blur(10px)' }}>Solutions Portfolio</a>
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div className="card" style={{
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.02)',
                            borderRadius: '32px',
                            animation: 'float 8s infinite ease-in-out',
                            border: '1px solid var(--glass-border)',
                            boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '480px',
                                background: 'linear-gradient(135deg, #0f172a 0%, #030305 100%)',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'rgba(45, 212, 191, 0.1)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>

                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(45deg, transparent 45%, rgba(45, 212, 191, 0.05) 50%, transparent 55%)',
                                    backgroundSize: '200% 200%',
                                    animation: 'twinkle 4s infinite'
                                }}></div>
                            </div>
                        </div>

                        {/* Floating Status Card */}
                        <div className="card" style={{
                            position: 'absolute',
                            bottom: '40px',
                            left: '-30px',
                            padding: '1.2rem 2rem',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.2rem',
                            background: 'rgba(10, 10, 15, 0.9)',
                            border: '1px solid var(--primary)',
                            boxShadow: '0 0 30px rgba(45, 212, 191, 0.2)'
                        }}>
                            <div style={{ width: '10px', height: '10px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }}></div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: '700', textTransform: 'uppercase' }}>System Status</div>
                                <span style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--text-primary)' }}>All Systems Nominal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
