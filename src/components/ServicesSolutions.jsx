import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Layers, Zap, Code, Layout, Smartphone, MessageSquare, Brain, Database, PenTool, ExternalLink, ChevronRight } from 'lucide-react';

// Asset Imports
import fullstackImg from '../assets/generated/fullstack.png';
import architectureImg from '../assets/generated/architecture.png';
import aiEngineImg from '../assets/generated/ai_engine.png';
import mobileAppImg from '../assets/summary/mobile_app.png';
import databaseImg from '../assets/summary/database.png';
import webDesignImg from '../assets/summary/web_design.png';
import aiChatbotImg from '../assets/summary/ai_chatbot.png';
import graphicDesignImg from '../assets/summary/graphic_design.png';

const ServiceCard = ({ sol, index }) => {
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });

        // Calculate rotation based on mouse position relative to center
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const degX = (y - centerY) / 10;
        const degY = (centerX - x) / 10;
        setRotateX(degX);
        setRotateY(degY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="card-modern"
            style={{
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                perspective: '1000px',
                '--x': `${mousePos.x}px`,
                '--y': `${mousePos.y}px`,
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: 'preserve-3d'
            }}
        >
            <div className="spotlight" style={{
                background: `radial-gradient(400px circle at var(--x) var(--y), rgba(0, 136, 255, 0.08), transparent 80%)`
            }} />

            <div style={{ position: 'relative', height: '220px', overflow: 'hidden', transform: 'translateZ(20px)' }}>
                <img
                    src={sol.image}
                    alt={sol.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="sol-img"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-surface) 0%, transparent 40%)' }} />

                {/* HUD Corners */}
                <div className="hud-corner top-left" />
                <div className="hud-corner top-right" />

                <div style={{
                    position: 'absolute',
                    top: '24px',
                    left: '24px',
                    width: '48px',
                    height: '48px',
                    background: 'var(--glass-bg)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: sol.accent,
                    border: '1px solid var(--glass-border)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
                    transform: 'translateZ(40px)'
                }}>
                    {sol.icon}
                </div>
            </div>

            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.5rem' }}>{sol.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{sol.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                    {sol.features.map((feat, i) => (
                        <span key={i} style={{
                            padding: '4px 10px',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: 'var(--primary)',
                            background: 'var(--primary-glow)',
                            borderRadius: '4px',
                            textTransform: 'uppercase'
                        }}>{feat}</span>
                    ))}
                </div>

                <Link to={`/case-study/${sol.id}`} className="nav-link-modern" style={{
                    marginTop: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: sol.accent,
                    textDecoration: 'none'
                }}>
                    EXPLORE CASE STUDY <ChevronRight size={16} />
                </Link>
            </div>
        </motion.div>
    );
};

const ServicesSolutions = () => {
    const solutions = [
        { id: 'full-stack-development', title: "Scalable Web Eco-Systems", description: "High-performance architectures with integrated AI layers built for massive scale.", features: ["Next.js", "AI Integration", "Edge"], image: fullstackImg, accent: 'var(--primary)', icon: <Code size={24} /> },
        { id: 'graphic-design', title: "Cinematic Brand Identity", description: "High-fidelity visual storytelling and cohesive digital-first branding for elite brands.", features: ["Branding", "Motion", "UI/UX"], image: graphicDesignImg, accent: 'var(--secondary)', icon: <PenTool size={24} /> },
        { id: 'modern-web-design', title: "Conversion First UX", description: "Intuitive, science-backed UI design that drives user action and ensures retention.", features: ["Figma", "Behavioral", "A/B"], image: webDesignImg, accent: '#38bdf8', icon: <Layout size={24} /> },
        { id: 'mobile-app-development', title: "Ecosystem Mobile Sync", description: "Native-parity cross-platform apps with real-time health and data synchronization.", features: ["Flutter", "Firebase", "Realtime"], image: mobileAppImg, accent: 'var(--accent)', icon: <Smartphone size={24} /> },
        { id: 'ai-chatbot-agents', title: "Neural Support Agents", description: "Language-agnostic AI agents with complex intent classification and reasoning.", features: ["LLM", "NLP", "Python"], image: aiChatbotImg, accent: '#8b5cf6', icon: <MessageSquare size={24} /> },
        { id: 'ai-website-integration', title: "Adaptive AI Portals", description: "Real-time portal personalization using behavioral AI modeling and predictive analytics.", features: ["Machine Learning", "FastAPI"], image: aiEngineImg, accent: '#f43f5e', icon: <Brain size={24} /> },
        { id: 'database-development', title: "Distributed Data Mesh", description: "Horizontally scalable distributed database systems with zero-loss architecture.", features: ["Postgres", "Redis", "Cloud"], image: databaseImg, accent: '#10b981', icon: <Database size={24} /> },
        { id: 'auto-cad-design', title: "Engineering Blueprints", description: "Millimeter-perfect 3D blueprints for industrial complexes and precision hardware.", features: ["AutoCAD", "BIM", "3D"], image: architectureImg, accent: '#f59e0b', icon: <Layers size={24} /> }
    ];

    const { scrollYProgress } = useScroll();
    const bannerScale = useTransform(scrollYProgress, [0.1, 0.3], [1, 1.1]);
    const bannerOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0.8]);

    return (
        <section id="services-solutions" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        style={{ color: 'var(--primary)', letterSpacing: '4px', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}
                    >
                        Capabilities Hub
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        style={{ marginTop: '24px', fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
                    >
                        Services & <span className="text-gradient">Solutions</span>
                    </motion.h2>
                </div>

                {/* Cinematic Banner */}
                <motion.div
                    style={{
                        height: '600px',
                        borderRadius: '40px',
                        overflow: 'hidden',
                        position: 'relative',
                        marginBottom: '100px',
                        scale: bannerScale,
                        opacity: bannerOpacity
                    }}
                >
                    <div className="scan-line" />
                    <img
                        src={fullstackImg}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        alt="Core Architecture"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-deep) 20%, transparent 80%)' }} />
                    <div style={{ position: 'absolute', bottom: '64px', left: '64px', maxWidth: '600px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                            <div style={{ height: '2px', width: '40px', background: 'var(--primary)' }} />
                            <span style={{ fontWeight: 800, letterSpacing: '2px', fontSize: '0.8rem' }}>THE CORE PROTOCOL</span>
                        </div>
                        <h3 style={{ fontSize: '3.5rem', marginBottom: '24px', lineHeight: 1 }}>Architecting <span className="text-gradient">Resilience.</span></h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6 }}>Converting technical complexity into sovereign business advantages through elite engineering.</p>
                    </div>
                </motion.div>

                {/* Solutions Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
                    {solutions.map((sol, index) => (
                        <ServiceCard key={sol.id} sol={sol} index={index} />
                    ))}
                </div>

                {/* Tactical Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: '100px',
                        padding: '80px',
                        borderRadius: '32px',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div className="mesh-circle mesh-1" style={{ top: '-10%', left: '-10%', opacity: 0.1 }} />
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Ready for a <span className="text-gradient">Strategic Shift?</span></h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 48px' }}>
                        Audit your current architecture and design a future-proof ecosystem with our engineering team.
                    </p>
                    <a href="#contact" className="btn btn-primary">Initiate Proposal <ExternalLink size={18} style={{ marginLeft: '12px' }} /></a>
                </motion.div>
            </div>

            <style>{`
                .card-modern {
                    position: relative;
                    background: var(--bg-card);
                    border: 1px solid var(--glass-border);
                    border-radius: 24px;
                    overflow: hidden;
                    transition: border-color 0.4s ease, box-shadow 0.4s ease;
                }
                .card-modern:hover {
                    border-color: var(--primary);
                    box-shadow: var(--shadow-premium);
                }
                .spotlight {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 2;
                }
                .sol-img {
                    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .card-modern:hover .sol-img {
                    transform: scale(1.1) translateZ(10px);
                }
                .hud-corner {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    border: 2px solid var(--primary);
                    opacity: 0;
                    transition: 0.4s ease;
                }
                .card-modern:hover .hud-corner { opacity: 0.4; }
                .top-left { top: 12px; left: 12px; border-right: none; border-bottom: none; }
                .top-right { top: 12px; right: 12px; border-left: none; border-bottom: none; }
                
                .scan-line {
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, var(--primary), transparent);
                    top: -100%;
                    animation: scan 4s linear infinite;
                    opacity: 0.2;
                }
                @keyframes scan {
                    0% { top: -100%; }
                    100% { top: 200%; }
                }
            `}</style>
        </section>
    );
};

export default ServicesSolutions;
