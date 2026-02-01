import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Radio, Box } from 'lucide-react';
import neuralCoreImg from '../assets/generated/neural_innovation.png';

const InnovationCore = () => {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const degX = (y - centerY) / 20;
        const degY = (centerX - x) / 20;
        setRotateX(degX);
        setRotateY(degY);
    };

    return (
        <section id="innovation" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }} className="innovation-grid">

                    {/* Visual Section */}
                    <motion.div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => { setRotateX(0); setRotateY(0); }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: 'relative',
                            perspective: '1000px',
                            rotateX: rotateX,
                            rotateY: rotateY,
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        <div style={{
                            position: 'relative',
                            borderRadius: '40px',
                            overflow: 'hidden',
                            boxShadow: '0 0 80px rgba(0, 242, 255, 0.15)',
                            border: '1px solid var(--glass-border)',
                            background: 'var(--bg-card)',
                            transform: 'translateZ(0px)'
                        }}>
                            <img
                                src={neuralCoreImg}
                                alt="Neural Innovation Core"
                                style={{ width: '100%', display: 'block', scale: 1.1, transform: 'translateZ(20px)' }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, var(--bg-surface) 0%, transparent 40%)',
                                opacity: 0.6
                            }} />

                            {/* Interactive HUD Overlays */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    position: 'absolute',
                                    top: '10%',
                                    left: '10%',
                                    width: '80%',
                                    height: '80%',
                                    border: '1px dashed var(--primary)',
                                    borderRadius: '50%',
                                    pointerEvents: 'none',
                                    opacity: 0.15,
                                    transform: 'translateZ(40px)'
                                }}
                            />

                            <motion.div
                                animate={{ top: ['-10%', '110%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    height: '2px',
                                    background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                                    boxShadow: '0 0 20px var(--primary)',
                                    zIndex: 3,
                                    opacity: 0.3
                                }}
                            />
                        </div>

                        {/* Floating Labels */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: '15%',
                                right: '-30px',
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(12px)',
                                padding: '16px 24px',
                                borderRadius: '16px',
                                border: '1px solid var(--glass-border)',
                                zIndex: 10,
                                boxShadow: 'var(--shadow-premium)',
                                transform: 'translateZ(100px)'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                <Box size={14} className="text-secondary" />
                                <div style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: 900, letterSpacing: '2px' }}>NEURAL.EXEC</div>
                            </div>
                            <div style={{ fontSize: '1rem', fontWeight: 800 }}>CORE_ACT_V4</div>
                        </motion.div>
                    </motion.div>

                    {/* Content Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span style={{ color: 'var(--primary)', letterSpacing: '4px', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Engineering Excellence</span>
                            <h2 style={{ marginTop: '24px', marginBottom: '32px' }}>
                                The Neural <br />
                                <span className="text-gradient">Intelligence Core</span>
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '48px', lineHeight: 1.8 }}>
                                At the heart of every project is our proprietary Neural Engine. It's not just code; it's a self-optimizing architecture designed to adapt to market volatility and user behavior in real-time.
                            </p>
                        </motion.div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                            {[
                                { icon: <Cpu size={20} />, title: "Quantum Logic", text: "Processing complex datasets with sub-millisecond precision." },
                                { icon: <Zap size={20} />, title: "Instant Scale", text: "Auto-multiplying nodes to handle traffic spikes globally." },
                                { icon: <Activity size={20} />, title: "Live Sync", text: "Continuous state synchronization across all edge points." },
                                { icon: <Radio size={20} />, title: "Neural Mesh", text: "Interconnected algorithms that learn and evolve weekly." }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
                                >
                                    <div style={{ color: 'var(--primary)' }}>{feature.icon}</div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{feature.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{feature.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <style>{`
                @media (max-width: 1024px) {
                    .innovation-grid { grid-template-columns: 1fr !important; gap: 60px !important; text-align: center; }
                    .innovation-grid > div { display: flex; flexDirection: column; alignItems: center; }
                }
            `}</style>
        </section>
    );
};

export default InnovationCore;
