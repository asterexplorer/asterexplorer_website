import React from 'react';

const About = () => {
    return (
        <section id="about" style={{ padding: '8rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    {/* Text Content */}
                    <div>
                        <h2 style={{ marginBottom: '2rem' }}>
                            <span className="text-gradient">Professional Solutions</span>
                        </h2>
                        <div className="card" style={{ padding: '2.5rem', background: 'var(--bg-surface)' }}>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                Aster System is a digital solutions company specializing in website and mobile app development. We help businesses and startups transform their ideas into powerful, user-friendly digital products. Our focus is on clean design, high performance, and secure systems that deliver real results. From business websites to advanced mobile applications, we build solutions that are scalable, reliable, and future-ready. At Aster System, innovation meets technology to explore new possibilities for your brand’s digital growth.
                            </p>

                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                {[
                                    { label: 'Website', icon: '🌐' },
                                    { label: 'Mobile Apps', icon: '📱' },
                                    { label: 'Graphic Design', icon: '🎨' },
                                    { label: 'Database Manage', icon: '🗄️' }
                                ].map(service => (
                                    <li key={service.label} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '600' }}>
                                        <span style={{ fontSize: '1.2rem' }}>{service.icon}</span> {service.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Visual Element (Abstract or Image) */}
                    <div style={{ position: 'relative' }}>
                        <div
                            className="glass-panel"
                            style={{
                                aspectRatio: '1',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle at 30% 30%, rgba(112,0,255,0.4), rgba(0,0,0,0) 70%)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080&auto=format&fit=crop")',
                                backgroundSize: 'cover',
                                opacity: 0.6,
                                mixBlendMode: 'overlay'
                            }} />
                            <span style={{ fontSize: '27rem' }}>👨‍🚀</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
