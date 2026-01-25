import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-deep)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                    <div>
                        <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>About Aster</span>
                        <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                            Human-Centric <br />
                            <span className="text-gradient">Digital Solutions</span>
                        </h2>
                        <div className="card" style={{ padding: '2.5rem', background: 'var(--bg-surface)' }}>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                Aster Explorer is a digital solutions company specializing in website and mobile app development. We help businesses and startups transform their ideas into powerful, user-friendly digital products. Our focus is on clean design, high performance, and secure systems that deliver real results. From business websites to advanced mobile applications, we build solutions that are scalable, reliable, and future-ready. At Aster Explorer, innovation meets technology to explore new possibilities for your brand’s digital growth.
                            </p>

                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', color: 'var(--text-primary)', fontWeight: '600' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Expert Devs
                                </li>
                                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', color: 'var(--text-primary)', fontWeight: '600' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Secure Core
                                </li>
                                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', color: 'var(--text-primary)', fontWeight: '600' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Global Scale
                                </li>
                                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', color: 'var(--text-primary)', fontWeight: '600' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    Cloud Ready
                                </li>
                            </ul>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                padding: '1.5rem',
                                background: 'rgba(255,255,255,0.02)',
                                borderRadius: '16px',
                                border: '1px solid var(--glass-border)'
                            }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--primary), #6366f1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                                }}>
                                    PD
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>Prabhu Durairai</h4>
                                    <p style={{ margin: '0.2rem 0 0', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Chief Executive Officer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏗️</div>
                            <h3>50+</h3>
                            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', fontWeight: '700' }}>PLATFORMS BUILT</p>
                        </div>
                        <div className="card" style={{ padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌐</div>
                            <h3>20+</h3>
                            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', fontWeight: '700' }}>COUNTRIES SERVED</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
