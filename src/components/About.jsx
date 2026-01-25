import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-deep)', position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'center' }}>

                    {/* Visual Side */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'relative',
                            zIndex: 2,
                            borderRadius: '40px',
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid var(--glass-border)',
                            padding: '1rem',
                            boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)',
                            animation: 'float 15s infinite ease-in-out'
                        }}>
                            <img
                                src="/about-main.png"
                                alt="Aster Explorer Strategic Vision"
                                style={{
                                    width: '100%',
                                    borderRadius: '32px',
                                    display: 'block',
                                    filter: 'contrast(1.1) brightness(1.1)'
                                }}
                            />
                        </div>

                        <div style={{
                            position: 'absolute',
                            top: '-30px',
                            right: '-30px',
                            width: '120px',
                            height: '120px',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            borderRadius: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '3rem',
                            zIndex: 3,
                            boxShadow: '0 15px 40px rgba(45, 212, 191, 0.3)'
                        }}>
                            🚀
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Our Strategic Vision</span>
                        <h2 style={{ marginTop: '1.5rem', marginBottom: '2.5rem', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                            Pioneering <span className="text-gradient">Digital Frontiers</span>
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.8' }}>
                                Aster Explorer is an elite digital collective dedicated to architecting high-performance ecosystems. We bridge the gap between technical complexity and intuitive user experiences, empowering brands to dominate the digital landscape.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>50+</h4>
                                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Strategic Platforms</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>20+</h4>
                                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Global Jurisdictions</p>
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                padding: '1.8rem',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '24px',
                                border: '1px solid var(--glass-border)',
                                marginTop: '1rem'
                            }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '18px',
                                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem',
                                    color: 'white',
                                    fontWeight: '900',
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
                                }}>
                                    PD
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '800' }}>Prabhu Durairaj</h4>
                                    <p style={{ margin: '0.2rem 0 0', fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Founding Partner & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
