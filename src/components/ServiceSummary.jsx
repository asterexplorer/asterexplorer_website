import React, { useState } from 'react';
import webDevImg from '../assets/summary/web_dev.png';
import mobileAppImg from '../assets/summary/mobile_app.png';
import databaseImg from '../assets/summary/database.png';
import webDesignImg from '../assets/summary/web_design.png';
import aiChatbotImg from '../assets/summary/ai_chatbot.png';
import aiWebImg from '../assets/summary/ai_web.png';
import autoCadImg from '../assets/summary/autocad.png';
import graphicDesignImg from '../assets/summary/graphic_design.png';

const ServiceCard = ({ sol }) => {
    const [viewMode, setViewMode] = useState(0);

    const modes = [
        { name: 'Standard View', filter: 'none', borderColor: 'var(--glass-border)', bg: 'rgba(10, 10, 15, 0.6)' },
        { name: 'Analytical Mode', filter: 'hue-rotate(45deg) contrast(1.2)', borderColor: sol.accent, bg: 'rgba(15, 23, 42, 0.8)' },
        { name: 'Schematic Mode', filter: 'grayscale(1) contrast(1.1) brightness(0.8)', borderColor: '#ffffff50', bg: 'rgba(20, 20, 20, 0.9)' }
    ];

    const currentMode = modes[viewMode];

    const toggleMode = () => {
        setViewMode((prev) => (prev + 1) % modes.length);
    };

    return (
        <div className="card solution-card" style={{
            padding: 0,
            background: currentMode.bg,
            border: `1px solid ${currentMode.borderColor}`,
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            height: '100%',
            position: 'relative'
        }}>
            <div
                style={{ position: 'relative', height: '160px', overflow: 'hidden', cursor: 'pointer' }}
                onClick={toggleMode}
                title="Click to cycle view modes"
            >
                {/* Mode Badge */}
                <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(4px)',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '0.7rem',
                    color: '#fff',
                    fontWeight: '600',
                    zIndex: 10,
                    border: '1px solid rgba(255,255,255,0.1)',
                    pointerEvents: 'none'
                }}>
                    {currentMode.name}
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(0,0,0,0.5)',
                    padding: '4px',
                    borderRadius: '50%',
                    color: '#fff',
                    zIndex: 10,
                    fontSize: '0.8rem',
                    pointerEvents: 'none'
                }}>
                    🔄
                </div>

                <img
                    src={sol.image}
                    alt={sol.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'all 0.5s ease',
                        filter: currentMode.filter
                    }}
                    className="sol-img"
                />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(10, 10, 15, 0.9), transparent)` }}></div>
            </div>

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '900', lineHeight: '1.2', letterSpacing: '-0.02em', color: viewMode === 1 ? sol.accent : 'inherit' }}>{sol.title}</h3>
                <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
                    {sol.description.split('\n').map((line, i) => (
                        <div key={i} style={{
                            marginBottom: '0.8rem',
                            paddingLeft: '1rem',
                            borderLeft: `2px solid ${line.includes('Problem') ? 'var(--text-tertiary)' : sol.accent}`,
                            background: 'rgba(255,255,255,0.01)',
                            padding: '0.5rem 0.5rem 0.5rem 1rem',
                            borderRadius: '0 8px 8px 0'
                        }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                                {line.includes(':') ? (
                                    <>
                                        <strong style={{
                                            display: 'block',
                                            color: line.includes('Problem') ? 'var(--text-tertiary)' : sol.accent,
                                            marginBottom: '0.2rem',
                                            fontSize: '0.75rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}>{line.split(':')[0]}</strong>
                                        {line.split(':').slice(1).join(':').trim()}
                                    </>
                                ) : (
                                    line
                                )}
                            </p>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto', marginBottom: '1.5rem' }}>
                    {sol.features.map((feat, i) => (
                        <span key={i} style={{
                            padding: '0.3rem 0.6rem',
                            borderRadius: '4px',
                            color: '#fff',
                            fontSize: '0.7rem',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            background: 'rgba(255,255,255,0.08)'
                        }}>{feat}</span>
                    ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: sol.accent, fontWeight: '700', fontSize: '0.9rem', marginTop: 'auto' }}>
                    Explore Solution <span style={{ transition: 'transform 0.3s ease' }} className="arrow-icon">→</span>
                </div>
            </div>
        </div>
    );
};

const ServiceSummary = () => {
    const solutions = [
        {
            title: "Full Stack Development",
            description: "Problem: Disjointed systems causing performance bottlenecks. \nSolution: Unified, scalable architectures using Next.js/MERN for seamless data flow and high availability.",
            features: ["MERN Stack", "Next.js", "Scalable API"],
            image: webDevImg,
            accent: 'var(--primary)'
        },
        {
            title: "Graphic Design",
            description: "Problem: Generic visuals failing to capture brand identity. \nSolution: Custom, high-impact assets created with Adobe Creative Suite to forge a memorable brand presence.",
            features: ["Adobe Suite", "Brand Identity", "Vector Art"],
            image: graphicDesignImg,
            accent: 'var(--secondary)'
        },
        {
            title: "Modern Web Design",
            description: "Problem: Outdated interfaces driving users away. \nSolution: Cutting-edge, responsive designs utilizing the latest software to deliver intuitive cross-device experiences.",
            features: ["Figma/XD", "Responsive", "UI/UX"],
            image: webDesignImg,
            accent: '#38bdf8'
        },
        {
            title: "Mobile App Development",
            description: "Problem: Poor engagement on mobile channels. \nSolution: High-performance native and cross-platform apps tailored for speed, stability, and user retention.",
            features: ["React Native", "iOS & Android", "Optimized"],
            image: mobileAppImg,
            accent: 'var(--accent)'
        },
        {
            title: "AI Chatbot Agents",
            description: "Problem: Overwhelmed support and delayed responses. \nSolution: Intelligent, 24/7 AI-driven conversational agents that automate interactions and enhance satisfaction.",
            features: ["NLP/LLM", "24/7 Support", "Automation"],
            image: aiChatbotImg,
            accent: '#8b5cf6'
        },
        {
            title: "AI Website Integration",
            description: "Problem: Static content that doesn't convert. \nSolution: Dynamic, AI-enhanced web platforms that personalize content in real-time to maximize user engagement.",
            features: ["Personalization", "AI Analytics", "Dynamic Content"],
            image: aiWebImg,
            accent: '#f43f5e'
        },
        {
            title: "Database Development",
            description: "Problem: Data silos and slow retrieval speeds. \nSolution: Robust, secure, and optimized database architectures designed for rapid access and zero data loss.",
            features: ["SQL/NoSQL", "Optimization", "Security"],
            image: databaseImg,
            accent: '#10b981'
        },
        {
            title: "Auto CAD Design",
            description: "Problem: Inaccurate drafts and costly errors. \nSolution: Precision engineering and architectural drafts using Auto CAD for error-free implementation and planning.",
            features: ["2D/3D Drafting", "Precision", "Blueprints"],
            image: autoCadImg,
            accent: '#f59e0b'
        }
    ];

    return (
        <section id="solutions" className="section-padding" style={{ background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
            <div className="glow-bg" style={{ bottom: '-10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', opacity: '0.05' }}></div>

            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}>
                    <div style={{ maxWidth: '600px' }}>
                        <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.4rem', fontSize: '0.9rem', fontWeight: '800' }}>Operational Excellence</span>
                        <h2 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>Engineered for <span className="text-gradient">Impact</span></h2>
                    </div>
                    <p style={{ color: 'var(--text-tertiary)', maxWidth: '400px', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                        Cutting-edge solutions designed to transform technical complexity into your greatest competitive advantage.
                    </p>
                </div>

                <style>{`
                    @media (min-width: 768px) {
                         .solutions-grid {
                            grid-template-columns: repeat(2, 1fr) !important;
                         }
                    }
                     @media (min-width: 1200px) {
                         .solutions-grid {
                            grid-template-columns: repeat(3, 1fr) !important;
                         }
                    }
                    .solution-card:hover {
                         transform: translateY(-5px);
                         box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                    }
                    .solution-card:hover .arrow-icon {
                        transform: translateX(5px);
                    }
                    .solution-card:hover .sol-img {
                        transform: scale(1.1);
                    }
                `}</style>
                <div className="solutions-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                    {solutions.map((sol, index) => (
                        <ServiceCard key={index} sol={sol} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ServiceSummary;
