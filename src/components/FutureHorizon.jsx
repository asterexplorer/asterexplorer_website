import React, { useEffect, useState } from 'react';

const FutureHorizon = () => {
    const roadmapItems = [
        {
            quarter: "Q1 2026",
            title: "Neural Engine v2.0",
            status: "In Development",
            description: "Implementing advanced transformer models for sub-50ms latency in AI-driven interface adaptation.",
            tags: ["AI", "R&D", "Edge Computing"],
            color: "var(--primary)"
        },
        {
            quarter: "Q2 2026",
            title: "Quantum Secure Mesh",
            status: "Conceptual",
            description: "Researching post-quantum cryptographic layers for the VaultCloud database infrastructure.",
            tags: ["Security", "Encryption", "Enterprise"],
            color: "var(--secondary)"
        },
        {
            quarter: "Q3 2026",
            title: "Holographic UX Core",
            status: "Research Phase",
            description: "Developing 3D spatial user interfaces for next-gen AR/VR web experiences using WebXR.",
            tags: ["UX", "WebXR", "Spatial"],
            color: "var(--accent)"
        },
        {
            quarter: "Q4 2026",
            title: "Autonomous DevOps",
            status: "Planning",
            description: "Self-healing infrastructure agents that predict and resolve bottle-necks before they occur.",
            tags: ["Ops", "Automation", "Self-Healing"],
            color: "#10b981"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
    };

    return (
        <section
            id="future"
            className="section-padding"
            style={{
                background: 'var(--bg-deep)',
                position: 'relative',
                overflow: 'hidden',
                '--mouse-x': `${mousePos.x}%`,
                '--mouse-y': `${mousePos.y}%`
            }}
            onMouseMove={handleMouseMove}
        >
            <div className="roadmap-active-bg" style={{ opacity: 0.4 }}></div>

            {/* Ambient Background Elements */}
            <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)', filter: 'blur(100px)', opacity: 0.1 }}></div>
            <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.1 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '8rem', alignItems: 'center' }}>

                    {/* Left Side: Text & Navigation */}
                    <div className="reveal">
                        <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '2.5rem' }}>Future <span className="text-gradient">Horizon</span></h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '4rem', maxWidth: '500px' }}>
                            We don't wait for the future; we architect it. Explore our strategic roadmap for 2026 and beyond.
                        </p>

                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {roadmapItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setActiveIndex(idx)}
                                    style={{
                                        padding: '1.5rem 2rem',
                                        background: activeIndex === idx ? 'rgba(255,255,255,0.03)' : 'transparent',
                                        border: '1px solid',
                                        borderColor: activeIndex === idx ? 'var(--glass-border)' : 'transparent',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '2rem'
                                    }}
                                >
                                    <div style={{
                                        fontSize: '0.8rem',
                                        fontWeight: '900',
                                        color: activeIndex === idx ? item.color : 'var(--text-tertiary)',
                                        width: '80px'
                                    }}>
                                        {item.quarter}
                                    </div>
                                    <div style={{
                                        fontSize: '1.3rem',
                                        fontWeight: '800',
                                        color: activeIndex === idx ? 'var(--text-primary)' : 'rgba(255,255,255,0.3)'
                                    }}>
                                        {item.title}
                                    </div>
                                    {activeIndex === idx && (
                                        <div style={{ marginLeft: 'auto', width: '8px', height: '8px', borderRadius: '50%', background: item.color, boxShadow: `0 0 15px ${item.color}` }}></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Visual Detail Card */}
                    <div className="reveal" style={{ position: 'relative' }}>
                        <div className="card future-detail-card" style={{
                            padding: '4rem',
                            minHeight: '520px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            background: 'rgba(10, 10, 15, 0.4)',
                            backdropFilter: 'blur(30px)',
                            borderColor: roadmapItems[activeIndex].color,
                            boxShadow: `0 40px 100px -30px ${roadmapItems[activeIndex].color}25`,
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Scanning HUD Line */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '2px',
                                background: `linear-gradient(to right, transparent, ${roadmapItems[activeIndex].color}, transparent)`,
                                opacity: 0.5,
                                animation: 'futureScan 4s linear infinite',
                                zIndex: 5
                            }}></div>

                            {/* HUD Element */}
                            <div style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '3rem',
                                fontFamily: "'Space Mono', monospace",
                                fontSize: '0.7rem',
                                color: roadmapItems[activeIndex].color,
                                opacity: 0.8,
                                letterSpacing: '0.1em'
                            }}>
                                [PROTOCOL::{roadmapItems[activeIndex].title.toUpperCase().replace(/\s/g, '_')}]
                            </div>

                            <div style={{
                                display: 'inline-block',
                                padding: '0.4rem 1.2rem',
                                borderRadius: '100px',
                                border: `1px solid ${roadmapItems[activeIndex].color}50`,
                                background: `${roadmapItems[activeIndex].color}10`,
                                color: roadmapItems[activeIndex].color,
                                fontSize: '0.65rem',
                                fontWeight: '900',
                                textTransform: 'uppercase',
                                letterSpacing: '0.3em',
                                marginBottom: '2.5rem',
                                width: 'fit-content'
                            }}>
                                {roadmapItems[activeIndex].status}
                            </div>

                            <h3 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1', fontWeight: '900', letterSpacing: '-0.02em' }}>
                                {roadmapItems[activeIndex].title}
                            </h3>

                            <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '3.5rem', maxWidth: '90%' }}>
                                {roadmapItems[activeIndex].description}
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                                    <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Projected Impact</div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: '900', color: roadmapItems[activeIndex].color }}>+{(activeIndex + 1) * 35}% Eff</div>
                                </div>
                                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                                    <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Core Stack</div>
                                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                                        {roadmapItems[activeIndex].tags.slice(0, 2).map((tag, i) => (
                                            <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: roadmapItems[activeIndex].color, opacity: 0.6 + (i * 0.2) }}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                {roadmapItems[activeIndex].tags.map((tag, i) => (
                                    <span key={i} style={{
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '8px',
                                        fontSize: '0.75rem',
                                        fontWeight: '800',
                                        color: 'var(--text-primary)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Decorative Elements */}
                            <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', opacity: 0.05, transform: 'scale(1.5)' }}>
                                <svg width="100" height="100" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                                    <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
                                </svg>
                            </div>
                        </div>

                        {/* Background Floating Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            width: '40px',
                            height: '40px',
                            borderTop: '2px solid var(--primary)',
                            borderLeft: '2px solid var(--primary)',
                            opacity: 0.5
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            width: '40px',
                            height: '40px',
                            borderBottom: '2px solid var(--secondary)',
                            borderRight: '2px solid var(--secondary)',
                            opacity: 0.5
                        }}></div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes futureScan {
                    0% { top: 0; opacity: 0; }
                    10% { opacity: 0.5; }
                    90% { opacity: 0.5; }
                    100% { top: 100%; opacity: 0; }
                }
                .future-detail-card {
                    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .roadmap-active-bg {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.05) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.5s ease;
                    pointer-events: none;
                }
            `}</style>
        </section>
    );
};

export default FutureHorizon;
