import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Zap, Code, Layout, Smartphone, MessageSquare, Brain, Database, PenTool, ExternalLink, ChevronRight } from 'lucide-react';

// Asset Imports
import fullstackImg from '../assets/generated/service_fullstack.png';
import architectureImg from '../assets/generated/architecture.png';
import aiEngineImg from '../assets/generated/ai_engine.png';
import mobileAppImg from '../assets/generated/service_mobile.png';
import databaseImg from '../assets/summary/database.png';
import webDesignImg from '../assets/generated/service_ux.png';
import aiChatbotImg from '../assets/summary/ai_chatbot.png';
import graphicDesignImg from '../assets/generated/service_brand.png';

const ServiceCard = ({ sol }) => {
    return (
        <div
            className="service-card-clean"
            style={{
                background: 'var(--bg-card)',
                borderRadius: '32px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                    src={sol.image}
                    alt={sol.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 60%)' }} />

                <div style={{
                    position: 'absolute',
                    top: '24px',
                    left: '24px',
                    width: '48px',
                    height: '48px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: sol.accent,
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                    {sol.icon}
                </div>
            </div>

            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{sol.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>{sol.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                    {sol.features.map((feat, i) => (
                        <span key={i} style={{
                            padding: '6px 12px',
                            fontSize: '0.7rem',
                            fontWeight: 900,
                            color: 'var(--primary)',
                            background: 'rgba(0, 242, 255, 0.05)',
                            borderRadius: '100px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>{feat}</span>
                    ))}
                </div>

            </div>
        </div>
    );
};

const ServicesSolutions = () => {
    const solutions = [
        { id: 'full-stack-development', title: "Cloud Ecosystems", description: "High-performance architectures built for massive scale.", features: ["Next.js", "AI Integration", "Edge"], image: fullstackImg, accent: 'var(--primary)', icon: <Code size={24} /> },
        { id: 'graphic-design', title: "Brand Identity", description: "Cohesive visual storytelling and digital-first branding.", features: ["Branding", "Motion", "UI/UX"], image: graphicDesignImg, accent: 'var(--secondary)', icon: <PenTool size={24} /> },
        { id: 'modern-web-design', title: "UX/UI Engineering", description: "Science-backed design that drives retention.", features: ["Figma", "Behavioral", "A/B"], image: webDesignImg, accent: '#38bdf8', icon: <Layout size={24} /> },
        { id: 'mobile-app-development', title: "Mobile Sync", description: "Real-time cross-platform synchronization.", features: ["Flutter", "Firebase", "Realtime"], image: mobileAppImg, accent: 'var(--accent)', icon: <Smartphone size={24} /> },
        { id: 'ai-chatbot-agents', title: "AI Agents", description: "Sophisticated agents with complex reasoning.", features: ["LLM", "NLP", "Python"], image: aiChatbotImg, accent: '#8b5cf6', icon: <MessageSquare size={24} /> },
        { id: 'ai-website-integration', title: "AI Integration", description: "Portal personalization via behavioral modeling.", features: ["Machine Learning", "FastAPI"], image: aiEngineImg, accent: '#f43f5e', icon: <Brain size={24} /> },
        { id: 'database-development', title: "Distributed Data", description: "Distributed systems with zero-loss architecture.", features: ["Postgres", "Redis", "Cloud"], image: databaseImg, accent: '#10b981', icon: <Database size={24} /> },
        { id: 'auto-cad-design', title: "Digital Blueprints", description: "Precision 3D hardware blueprints.", features: ["AutoCAD", "BIM", "3D"], image: architectureImg, accent: '#f59e0b', icon: <Layers size={24} /> }
    ];

    return (
        <section id="services-solutions" className="section-padding" style={{ background: 'var(--bg-deep)' }}>
            <div className="container">
                {/* Clean Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span style={{ color: 'var(--primary)', letterSpacing: '4px', fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase' }}>
                        Capabilities Hub
                    </span>
                    <h2 style={{ marginTop: '24px', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.04em' }}>
                        Services & <span className="text-gradient">Solutions</span>
                    </h2>
                </div>

                {/* Simplified High-Fidelity Banner */}

                {/* Solutions Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
                    {solutions.map((sol) => (
                        <ServiceCard key={sol.id} sol={sol} />
                    ))}
                </div>

                {/* Strategy Block */}
                <div
                    style={{
                        marginTop: '40px',
                        padding: '80px 60px',
                        borderRadius: '48px',
                        background: 'var(--bg-card)',
                        textAlign: 'center',
                        position: 'relative'
                    }}
                >
                    <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px' }}>Ready for a <span className="text-gradient">Strategic Shift?</span></h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.6 }}>
                        Audit your current architecture and design a future-proof ecosystem with our engineering team.
                    </p>
                    <Link to="/innovation" className="btn" style={{
                        background: 'var(--primary)',
                        color: 'white',
                        padding: '20px 48px',
                        fontSize: '1rem',
                        fontWeight: 900,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        Explore Innovation <ExternalLink size={18} />
                    </Link>
                </div>
            </div>

            <style>{`
                .service-card-clean {
                    transition: transform 0.3s ease, background 0.3s ease;
                }
                .service-card-clean:hover {
                    background: rgba(255, 255, 255, 0.02);
                }
                @media (max-width: 768px) {
                    .container { padding: 0 20px; }
                    .service-card-clean { border-radius: 24px; }
                }
            `}</style>
        </section>
    );
};

export default ServicesSolutions;
