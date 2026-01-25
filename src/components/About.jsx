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

                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
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
