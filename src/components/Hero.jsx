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
            {/* Background Decorative Elemets */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(45, 212, 191, 0.05) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Digital Innovation Studio</div>
                        <h1 style={{ marginBottom: '2rem' }}>
                            We Build <br />
                            <span className="text-gradient">Digital Futures</span>
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                            maxWidth: '540px',
                            lineHeight: '1.6'
                        }}>
                            Connect with elite independent professionals. From high-performance web apps to scalable Python architectures, Aster Explorer bridges the gap between vision and execution.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href="#contact" className="btn btn-primary">Get Started</a>
                            <a href="#services" className="btn btn-outline">Our Services</a>
                        </div>

                        <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem' }}>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>99%</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: '600' }}>SATISFACTION</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>24/7</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: '600' }}>ACTIVE SUPPORT</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>CHENNAI</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: '600' }}>GLOBAL HQ</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div className="card" style={{
                            padding: '1.5rem',
                            background: 'rgba(255,255,255,0.02)',
                            animation: 'float 6s infinite ease-in-out'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '400px',
                                background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'rgba(255,255,255,0.1)',
                                border: '1px solid var(--glass-border)'
                            }}>
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </div>
                        </div>

                        {/* Floating Stats */}
                        <div className="card" style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '-20px',
                            padding: '1rem 1.5rem',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <div style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                            <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>Live Support Available</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
