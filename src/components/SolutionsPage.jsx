import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ServicesSolutions from './ServicesSolutions';
import { motion, AnimatePresence } from 'framer-motion';
import solutionsHeroImg from '../assets/generated/solutions_premium_hero.png';

const SolutionsPage = () => {
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
                overflowX: 'hidden'
            }}
        >
            <div style={{ position: 'relative', zIndex: 10 }}>
                {/* Cinematic Hero Header */}
                <div
                    className="solutions-hero section-padding"
                    style={{
                        paddingTop: '160px',
                        paddingBottom: '100px',
                        textAlign: 'center',
                        position: 'relative'
                    }}
                >
                    <div className="container reveal">
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '0.6rem 1.5rem',
                            background: 'var(--glass-bg)',
                            borderRadius: '100px',
                            border: '1px solid var(--glass-border)',
                            marginBottom: '2rem',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div className="pulse-dot"></div>
                            <span style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
                                Technical Excellence
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                            fontWeight: '900',
                            lineHeight: '0.9',
                            marginBottom: '2rem',
                            letterSpacing: '-0.04em'
                        }}>
                            Engineering <span className="text-gradient">Possibility</span>
                        </h1>

                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '1.25rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            High-fidelity digital systems architecture. We bridge the gap between creative vision and surgical technical execution.
                        </p>

                        {/* Interactive Hero Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                position: 'relative',
                                marginTop: '4rem',
                                perspective: '1200px',
                                zIndex: 5
                            }}
                        >
                            <motion.div
                                whileHover={{ rotateX: 5, rotateY: -5 }}
                                style={{
                                    position: 'relative',
                                    borderRadius: '48px',
                                    overflow: 'hidden',
                                    border: '1px solid var(--glass-border)',
                                    boxShadow: 'var(--shadow-premium), 0 40px 100px rgba(0, 136, 255, 0.1)',
                                    background: 'var(--bg-surface)',
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                <img
                                    src={solutionsHeroImg}
                                    alt="Neural Architecture"
                                    style={{ width: '100%', display: 'block', scale: 1.05 }}
                                />

                                {/* Tactical HUD Layers */}
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-surface) 0%, transparent 40%)', opacity: 0.6 }} />

                                <motion.div
                                    animate={{ top: ['-10%', '110%'] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                                        boxShadow: '0 0 20px var(--primary)',
                                        opacity: 0.4
                                    }}
                                />

                                <div style={{
                                    position: 'absolute',
                                    top: '40px',
                                    right: '40px',
                                    padding: '12px 24px',
                                    background: 'var(--glass-bg)',
                                    backdropFilter: 'blur(12px)',
                                    borderRadius: '16px',
                                    border: '1px solid var(--glass-border)',
                                    fontSize: '0.6rem',
                                    fontWeight: 900,
                                    letterSpacing: '2px',
                                    color: 'var(--primary)',
                                    transform: 'translateZ(40px)'
                                }}>SYSTEM.MAPPING_ACTIVE</div>
                            </motion.div>
                        </motion.div>

                        {/* Interactive Data Metrics */}
                        <div className="solutions-stats-grid" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '4rem',
                            marginTop: '4rem',
                            flexWrap: 'wrap'
                        }}>
                            {[
                                { val: '99.9%', label: 'Sys Resilience' },
                                { val: '<50ms', label: 'Edge Latency' },
                                { val: '256-bit', label: 'Sec Layer' }
                            ].map((stat, i) => (
                                <div key={i} style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.4rem' }}>{stat.val}</div>
                                    <div style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-tertiary)', letterSpacing: '2px' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: '40px',
                        left: '40px',
                        width: '30px',
                        height: '30px',
                        borderTop: '2px solid var(--glass-border)',
                        borderLeft: '2px solid var(--glass-border)'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        bottom: '40px',
                        right: '40px',
                        width: '30px',
                        height: '30px',
                        borderBottom: '2px solid var(--glass-border)',
                        borderRight: '2px solid var(--glass-border)'
                    }}></div>

                    {/* Background Holographic Elements */}
                    <div style={{
                        position: 'absolute',
                        top: '20%',
                        right: '-5%',
                        width: '30%',
                        height: '60%',
                        opacity: 0.03,
                        zIndex: -1,
                        transform: 'rotate(10deg)'
                    }}>
                        <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
                            <path d="M 0 100 Q 50 0 100 100 T 200 100" fill="none" stroke="white" strokeWidth="0.5" />
                            <path d="M 0 110 Q 50 10 100 110 T 200 110" fill="none" stroke="white" strokeWidth="0.5" />
                            <path d="M 0 120 Q 50 20 100 120 T 200 120" fill="none" stroke="white" strokeWidth="0.5" />
                        </svg>
                    </div>
                </div>

                {/* Main Content: Reusing ServicesSolutions with optimized layout */}
                <div style={{ position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100px',
                        background: 'linear-gradient(to bottom, var(--bg-deep), transparent)',
                        zIndex: 2
                    }}></div>

                    <ServicesSolutions />
                </div>

                {/* Specialized Methodology Section */}
                <div className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div className="reveal">
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>The <span className="text-gradient">Process</span></h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    Our methodology is rooted in **Precision Engineering**. We don't just draft; we simulate, stress-test, and refine until the digital architecture is unbreakable.
                                </p>

                                <div style={{ marginTop: '3rem', display: 'grid', gap: '1.5rem' }}>
                                    {[
                                        { n: '01', t: 'Discovery & Schema', d: 'Extracting core business logic and mapping data flow.' },
                                        { n: '02', t: 'Visual Prototype', d: 'High-fidelity interactive UI mocks for early validation.' },
                                        { n: '03', t: 'Surgical Build', d: 'Clean, optimized, and scalable code production.' },
                                        { n: '04', t: 'Optimization Pulse', d: 'Performance tuning and edge delivery configuration.' }
                                    ].map((step, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', background: 'var(--bg-surface)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                                            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)', opacity: 0.5 }}>{step.n}</div>
                                            <div>
                                                <div style={{ fontWeight: '800', marginBottom: '0.4rem' }}>{step.t}</div>
                                                <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>{step.d}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div className="hologram-cube" style={{
                                    width: '300px',
                                    height: '300px',
                                    background: 'linear-gradient(135deg, var(--primary) 20%, var(--secondary))',
                                    borderRadius: '30px',
                                    opacity: 0.1,
                                    filter: 'blur(40px)',
                                    animation: 'pulse-glow 5s infinite alternate'
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    padding: '3rem',
                                    border: '1px solid var(--primary)',
                                    borderRadius: '50%',
                                    width: '350px',
                                    height: '350px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚡</div>
                                        <div style={{ fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.7rem' }}>Sovereign Tech</div>
                                    </div>
                                    <div className="orbit-line" style={{ position: 'absolute', width: '100%', height: '100%', border: '1px dashed var(--primary)', borderRadius: '50%', opacity: 0.2, animation: 'spin 20s linear infinite' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: var(--primary);
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--primary);
                    animation: pulse 2s infinite;
                }
                @keyframes pulse-glow {
                    from { transform: scale(1); opacity: 0.1; }
                    to { transform: scale(1.2); opacity: 0.2; }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .solutions-page-root .section-padding {
                    padding: clamp(4rem, 8vw, 8rem) 0;
                }
                @media (max-width: 1024px) {
                    .solutions-hero h1 { font-size: 4.5rem !important; }
                    .solutions-stats-grid { gap: 2rem !important; }
                }
                @media (max-width: 768px) {
                    .solutions-hero h1 { font-size: 3rem !important; }
                    .solutions-hero { padding-top: 120px !important; }
                    .hologram-cube { width: 220px !important; height: 220px !important; }
                    .solutions-hero p { font-size: 1.1rem !important; }
                }
            `}</style>
        </div>
    );
};

export default SolutionsPage;
