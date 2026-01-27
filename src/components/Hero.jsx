import React from 'react';

const Hero = () => {
    const benefits = [
        {
            text: "Full Stack Development",
            icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        },
        {
            text: "Graphic Design with Adobe Softwares",
            icon: <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l3.5 14.5L13 18l5-5M2 2l15.5 9.5" />
        },

        {
            text: "Website Design with latest Softwares",
            icon: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>
        },
        {
            text: "Mobile App Development",
            icon: <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        },

        {
            text: "AI Chatbot Development",
            icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        },
        {
            text: "AI Website Development",
            icon: <path d="M12 2a10 10 0 1 0 10 10H12V2z" /> // Pie chart / analysis-ish or simple
        },
        {
            text: "Database Development", // Fixed "Data base" typo
            icon: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>
        },
    ];

    return (
        <section style={{
            padding: '6rem 0 4rem',
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
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
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
                            Aster Explorer Technologies empowers global enterprises through advanced engineering and strategic intelligence.
                            We bridge the gap between complex technology and explosive market expansion.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '4rem' }}>
                            {benefits.map((benefit, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                                    <div style={{
                                        color: 'var(--primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '32px',
                                        height: '32px',
                                        background: 'rgba(45, 212, 191, 0.1)',
                                        borderRadius: '8px',
                                        padding: '6px'
                                    }}>
                                        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            {benefit.icon}
                                        </svg>
                                    </div>
                                    <span style={{ fontSize: '0.95rem' }}>{benefit.text}</span>
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
