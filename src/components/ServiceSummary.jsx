import React from 'react';
import webDevImg from '../assets/summary/web_dev.png';
import mobileAppImg from '../assets/summary/mobile_app.png';
import databaseImg from '../assets/summary/database.png';
import webDesignImg from '../assets/summary/web_design.png';

const ServiceSummary = () => {
    const solutions = [
        {
            title: "Scalable Web Infrastructure",
            description: "Enterprise-grade web architectures engineered for high traffic and global scale. Optimized for maximum performance and security.",
            features: ["Cloud Native", "Next.js 14", "Edge Compute"],
            image: webDevImg,
            accent: 'var(--primary)'
        },
        {
            title: "Mobile Force Platforms",
            description: "High-performance mobile solutions with sub-100ms response times and seamless native integration for iOS and Android.",
            features: ["React Native", "Swift/Kotlin", "Biometrics"],
            image: mobileAppImg,
            accent: 'var(--secondary)'
        },
        {
            title: "Cognitive Data Hubs",
            description: "Intelligent data systems that aggregate information across jurisdictions to provide real-time strategic insights.",
            features: ["Big Data", "AI Analysis", "Encryption"],
            image: databaseImg,
            accent: '#38bdf8'
        },
        {
            title: "Visual Product Strategy",
            description: "Conversion-optimized design systems that define the digital presence of market-leading enterprises.",
            features: ["Design Ops", "Product Audit", "UI/UX"],
            image: webDesignImg,
            accent: 'var(--accent)'
        }
    ];

    return (
        <section id="solutions" className="section-padding" style={{ background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
            <div className="glow-bg" style={{ bottom: '-10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', opacity: '0.05' }}></div>

            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}>
                    <div style={{ maxWidth: '600px' }}>
                        <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.4rem', fontSize: '0.9rem', fontWeight: '800' }}>Operational Excellence</span>
                        <h2 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>The Aster <span className="text-gradient">Solutions Framework</span></h2>
                    </div>
                    <p style={{ color: 'var(--text-tertiary)', maxWidth: '400px', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                        We transform technical complexity into competitive advantages through rigorous engineering and strategic vision.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '4rem' }}>
                    {solutions.map((sol, index) => (
                        <div key={index} className="card solution-card" style={{
                            padding: 0,
                            background: 'rgba(10, 10, 15, 0.6)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                        }}>
                            <div style={{ position: 'relative', height: '100%', minHeight: '350px', overflow: 'hidden' }}>
                                <img src={sol.image} alt={sol.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="sol-img" />
                                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, transparent, rgba(10, 10, 15, 0.9))` }}></div>
                            </div>

                            <div style={{ padding: '3.5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: '800', lineHeight: '1.2' }}>{sol.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>{sol.description}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                    {sol.features.map((feat, i) => (
                                        <span key={i} style={{
                                            padding: '0.5rem 1rem',
                                            borderRadius: '8px',
                                            border: '1px solid var(--glass-border)',
                                            color: 'var(--text-primary)',
                                            fontSize: '0.7rem',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            background: 'rgba(255,255,255,0.02)'
                                        }}>{feat}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .solution-card:hover {
                    border-color: var(--primary);
                    transform: translateY(-5px) scale(1.01);
                    box-shadow: 0 40px 80px rgba(0,0,0,0.6);
                }
                .solution-card:hover .sol-img {
                    transform: scale(1.1);
                }
            `}</style>
        </section>
    );
};
export default ServiceSummary;
