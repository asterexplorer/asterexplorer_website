import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServicesSolutions from './ServicesSolutions';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Terminal, Shield, Cpu, Activity, ArrowRight, Settings, MousePointer2, Box } from 'lucide-react';
import solutionsHeroImg from '../assets/generated/hero_quantum.png';

const SolutionsPage = () => {
    const { scrollYProgress } = useScroll();
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            className="solutions-page-root"
            style={{
                minHeight: '100vh',
                position: 'relative',
                overflowX: 'hidden',
                background: 'var(--bg-deep)'
            }}
        >
            <div style={{ position: 'relative', zIndex: 10 }}>
                {/* Modern Cinematic Hero */}
                <div
                    className="solutions-hero"
                    style={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        padding: '120px 0'
                    }}
                >
                    <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '8px 24px',
                                    background: 'rgba(0, 242, 255, 0.05)',
                                    borderRadius: '100px',
                                    border: '1px solid rgba(0, 242, 255, 0.1)',
                                    marginBottom: '40px'
                                }}
                            >
                                <span className="pulse-dot"></span>
                                <span style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--primary)' }}>
                                    Neural Engineering Suite
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
                                    fontWeight: '900',
                                    lineHeight: '0.9',
                                    marginBottom: '40px',
                                    letterSpacing: '-0.04em'
                                }}
                            >
                                Engineering <br />
                                <span className="text-gradient">Possibility</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '1.4rem',
                                    maxWidth: '800px',
                                    margin: '0 auto 60px',
                                    lineHeight: '1.6'
                                }}
                            >
                                Architecting high-fidelity digital systems. We bridge the gap between abstract creative vision and surgical technical execution.
                            </motion.p>
                        </div>

                        {/* Interactive Hero Schematic */}
                        <motion.div
                            style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '1000px',
                                margin: '0 auto',
                                perspective: '2000px',
                                transformStyle: 'preserve-3d',
                                scale: heroScale
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, rotateX: 20 }}
                                animate={{ opacity: 1, rotateX: 0 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    position: 'relative',
                                    borderRadius: '40px',
                                    overflow: 'hidden',
                                    border: '1px solid var(--glass-border)',
                                    boxShadow: '0 40px 100px -20px rgba(0,0,0,0.8), 0 0 40px rgba(0, 242, 255, 0.1)',
                                    background: 'var(--bg-card)'
                                }}
                            >
                                <img
                                    src={solutionsHeroImg}
                                    alt="Quantum Engineering"
                                    style={{ width: '100%', display: 'block' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-deep) 0%, transparent 60%)' }} />

                                {/* Technical HUD Overlays */}
                                <div className="scan-line-horizontal" />
                                <div style={{
                                    position: 'absolute',
                                    top: '32px',
                                    right: '32px',
                                    padding: '12px 20px',
                                    background: 'var(--glass-bg)',
                                    backdropFilter: 'blur(20px)',
                                    borderRadius: '12px',
                                    border: '1px solid var(--glass-border)',
                                    fontSize: '0.65rem',
                                    fontWeight: 900,
                                    color: 'var(--primary)',
                                    letterSpacing: '2px'
                                }}>
                                    SCHEMATIC_LOADED::8K_RES
                                </div>

                                <div style={{
                                    position: 'absolute',
                                    bottom: '32px',
                                    left: '32px',
                                    display: 'flex',
                                    gap: '16px'
                                }}>
                                    <div className="hud-metric">
                                        <Activity size={12} style={{ opacity: 0.6 }} />
                                        <span>SYSTEM_SYNC_99.9%</span>
                                    </div>
                                    <div className="hud-metric">
                                        <Settings size={12} style={{ opacity: 0.6 }} />
                                        <span>ARCH_CORE_ACTIVE</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Ambient Background Elements */}
                    <div style={{ position: 'absolute', top: '15%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'var(--primary-glow)', filter: 'blur(100px)', opacity: 0.1, zIndex: 0 }} />
                    <div style={{ position: 'absolute', bottom: '15%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'var(--secondary-glow)', filter: 'blur(120px)', opacity: 0.1, zIndex: 0 }} />
                </div>

                {/* Performance Readout Grid */}
                <div className="container" style={{ position: 'relative', marginTop: '-100px', zIndex: 15, marginBottom: '150px' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px'
                    }}>
                        {[
                            { icon: <Shield />, val: '256-Bit', label: 'End-to-End Sec', sub: 'Military-grade logic encryption' },
                            { icon: <Cpu />, val: '0.004ms', label: 'Logic Latency', sub: 'Optimized neural hot-paths' },
                            { icon: <Box />, val: 'Infinity', label: 'Cloud Scale', sub: 'Horizontal node multiplication' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    padding: '40px',
                                    background: 'var(--bg-card)',
                                    borderRadius: '32px',
                                    border: '1px solid var(--glass-border)',
                                    textAlign: 'left'
                                }}
                            >
                                <div style={{ color: 'var(--primary)', marginBottom: '24px' }}>{stat.icon}</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '8px' }}>{stat.val}</div>
                                <div style={{ fontSize: '0.8rem', fontWeight: '900', textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '2px', marginBottom: '12px' }}>{stat.label}</div>
                                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', margin: 0 }}>{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Main Capabilities: ServicesSolutions with Deep Integration */}
                <div style={{ position: 'relative' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>Technical <span className="text-gradient">Capabilities</span></h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '20px auto 0' }}>Surgical execution across every layer of the digital stack.</p>
                    </div>
                    <ServicesSolutions />
                </div>

                {/* Advanced Methodology: The Workflow */}
                <div className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', position: 'relative' }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                            <span style={{ color: 'var(--primary)', letterSpacing: '4px', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.75rem' }}>Our Protocol</span>
                            <h2 style={{ fontSize: '3.5rem', marginTop: '24px' }}>The <span className="text-gradient">Engineering Workflow</span></h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '40px',
                            position: 'relative'
                        }}>
                            {[
                                { n: '01', t: 'Neural Mapping', d: 'Extracting deep business logic and mapping multi-dimensional data flows.' },
                                { n: '02', t: 'Precision Prototyping', d: 'High-fidelity technical mocks for immediate validation of core systems.' },
                                { n: '03', t: 'Surgical Development', d: 'Production of highly-optimized, sovereign codebases built for zero-downtime.' },
                                { n: '04', t: 'Edge Sync', d: 'Deployment across global edge points with sub-millisecond consistency.' }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{ position: 'relative' }}
                                >
                                    <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--primary)', opacity: 0.1, position: 'absolute', top: '-20px', left: '-10px' }}>{step.n}</div>
                                    <div style={{ position: 'relative', zIndex: 2 }}>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '20px', color: 'var(--text-primary)' }}>{step.t}</h4>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>{step.d}</p>
                                    </div>
                                    {i < 3 && (
                                        <div className="workflow-connector desktop-only" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final Call to Action */}
                <div className="container" style={{ padding: '150px 0' }}>
                    <motion.div
                        whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
                        style={{
                            padding: '100px 60px',
                            borderRadius: '60px',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--glass-border)',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div className="mesh-circle mesh-1" style={{ top: '-40%', left: '-20%', opacity: 0.1, width: '600px', height: '600px' }} />
                        <div style={{ position: 'relative', zIndex: 5 }}>
                            <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '24px' }}>Ready for <span className="text-gradient">Tactical Shift?</span></h2>
                            <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 60px' }}>
                                We don't just build websites; we design digital sovereign systems. Partner with our engineering core today.
                            </p>
                            <Link to="/innovation" className="btn" style={{
                                padding: '24px 60px',
                                background: 'var(--primary)',
                                color: 'white',
                                fontSize: '1.1rem',
                                fontWeight: 900,
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '16px'
                            }}>
                                Explore Innovation Core <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .solutions-page-root {
                    background-image: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: var(--primary);
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--primary);
                    animation: pulse 2s infinite;
                }
                .scan-line-horizontal {
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, var(--primary), transparent);
                    top: -100%;
                    animation: scan-vertical 6s linear infinite;
                    opacity: 0.3;
                    z-index: 10;
                }
                @keyframes scan-vertical {
                    0% { top: -10%; }
                    100% { top: 110%; }
                }
                .hud-metric {
                    padding: 8px 16px;
                    background: rgba(0,0,0,0.5);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px;
                    display: flex;
                    alignItems: center;
                    gap: 8px;
                    font-size: 0.6rem;
                    font-weight: 900;
                    letter-spacing: 1px;
                }
                .workflow-connector {
                    position: absolute;
                    top: 25px;
                    right: -20px;
                    width: 40px;
                    height: 1px;
                    background: linear-gradient(90deg, var(--primary), transparent);
                    opacity: 0.3;
                }
                @media (max-width: 1024px) {
                    .desktop-only { display: none; }
                }
                @media (max-width: 768px) {
                    .solutions-hero h1 { font-size: 3.5rem !important; }
                    .solutions-hero p { font-size: 1.1rem !important; }
                }
            `}</style>
        </div>
    );
};

export default SolutionsPage;
