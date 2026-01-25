import React from 'react';
import webDevImg from '../assets/summary/web_dev.png';
import mobileAppImg from '../assets/summary/mobile_app.png';
import databaseImg from '../assets/summary/database.png';
import webDesignImg from '../assets/summary/web_design.png';

const ServiceSummary = () => {
    const summaryItems = [
        {
            title: "Full-Stack Web Architectures",
            description: "We don't just build websites; we engineer digital ecosystems. From responsive front-end interfaces to powerful backend APIs, we ensure every layer is optimized for speed and security.",
            highlights: ["React & Next.js Experts", "Progressive Web Apps", "API Orchestration"],
            icon: "🌐",
            image: webDevImg
        },
        {
            title: "Performance Mobile Engines",
            description: "Mobile-first experiences that define brands. We specialize in cross-platform mobile apps that maintain 60FPS performance and provide native-level interactions for both iOS and Android.",
            highlights: ["React Native Mastery", "Cloud Synchronization", "Biometric Security"],
            icon: "📱",
            image: mobileAppImg
        },
        {
            title: "Secure Data Warehousing",
            description: "Sophisticated database architectures designed for data integrity and rapid retrieval. We protect your most valuable business assets with multi-layered encryption and redundant backups.",
            highlights: ["SQL/NoSQL Hybrid", "Encrypted Data Pipelines", "Auto-scaling Clusters"],
            icon: "🗄️",
            image: databaseImg
        },
        {
            title: "UX/UI Visual Discovery",
            description: "Design that speaks to humans but performs for business. Our visual Discovery process involves prototyping and user-testing to ensure your interface is as functional as it is beautiful.",
            highlights: ["Human-Centered Design", "Interactive Prototyping", "Design System Strategy"],
            icon: "🎨",
            image: webDesignImg
        }
    ];

    return (
        <section id="summary" className="section-padding" style={{ background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
            <div className="glow-bg" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: '0.1' }} />

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.85rem', fontWeight: '800' }}>Strategic Summary</span>
                    <h2 style={{ marginTop: '1.5rem' }}>The Aster <span className="text-gradient">Solutions Framework</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '2rem auto 0', fontSize: '1.1rem' }}>
                        Transforming complex technical requirements into streamlined, ROI-driven business assets.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem' }}>
                    {summaryItems.map((item, index) => (
                        <div key={index} className="card" style={{
                            padding: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            background: 'rgba(10, 10, 15, 0.4)',
                            border: '1px solid var(--glass-border)',
                            overflow: 'hidden',
                            position: 'relative',
                            transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                        }}>
                            <div style={{ width: '100%', height: '260px', position: 'relative', overflow: 'hidden' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, transition: 'all 0.6s ease' }} className="summary-img" />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(10, 10, 15, 0.95))' }}></div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '25px',
                                    left: '35px',
                                    fontSize: '2.5rem',
                                    width: '64px',
                                    height: '64px',
                                    background: 'rgba(15, 23, 42, 0.8)',
                                    backdropFilter: 'blur(12px)',
                                    borderRadius: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid rgba(45, 212, 191, 0.3)',
                                    zIndex: 2,
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
                                }}>
                                    {item.icon}
                                </div>
                            </div>

                            <div style={{ padding: '2.5rem 3.5rem 3.5rem', display: 'flex', flexDirection: 'column', gap: '1.8rem', flex: 1 }}>
                                <h3 style={{ fontSize: '1.7rem', color: 'var(--text-primary)', fontWeight: '800' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', opacity: 0.9 }}>
                                    {item.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: 'auto', paddingTop: '1.5rem' }}>
                                    {item.highlights.map((tag, i) => (
                                        <span key={i} style={{
                                            padding: '0.5rem 1.2rem',
                                            borderRadius: '100px',
                                            background: 'rgba(45, 212, 191, 0.08)',
                                            color: 'var(--primary)',
                                            fontSize: '0.75rem',
                                            fontWeight: '800',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            border: '1px solid rgba(45, 212, 191, 0.15)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .card:hover {
                    border-color: rgba(45, 212, 191, 0.4);
                    transform: translateY(-10px);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                }
                .card:hover .summary-img {
                    transform: scale(1.15);
                    opacity: 1;
                }
            `}</style>
        </section>
    );
};

export default ServiceSummary;
