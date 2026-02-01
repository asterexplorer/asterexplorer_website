import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Lightbulb, ShieldCheck, Gem, Rocket, MapPin } from 'lucide-react';

// Import images
import aiEngineImg from '../assets/generated/ai_engine.png';
import architectureImg from '../assets/generated/architecture.png';
import securityImg from '../assets/generated/security.png';

const About = () => {
    const [visionIndex, setVisionIndex] = useState(0);
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
        setRotateX((y - centerY) / 15);
        setRotateY((centerX - x) / 15);
    };

    const visions = [
        {
            id: 'intelligence',
            title: 'Digital Intelligence',
            subtitle: 'Neural Core Adaptation.',
            image: aiEngineImg,
            accent: 'var(--primary)',
            icon: <Target size={24} />,
            description: 'Advanced AI integration for autonomous scale.'
        },
        {
            id: 'architecture',
            title: 'System Architecture',
            subtitle: 'Bespoke Digital Blueprints.',
            image: architectureImg,
            accent: 'var(--secondary)',
            icon: <ShieldCheck size={24} />,
            description: 'Engineering resilient foundations for global commerce.'
        },
        {
            id: 'security',
            title: 'Sovereign Security',
            subtitle: 'Encrypted Digital Vaults.',
            image: securityImg,
            accent: 'var(--accent)',
            icon: <Lightbulb size={24} />,
            description: 'Military-grade protection protocols for your ecosystem.'
        }
    ];

    const currentVision = visions[visionIndex];

    const nextVision = () => {
        setVisionIndex((prev) => (prev + 1) % visions.length);
    };

    return (
        <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Large Watermark */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '25vw',
                fontWeight: '900',
                color: 'rgba(0,0,0,0.03)',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                zIndex: 0,
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
            }}>VISION</div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 6rem' }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 16px',
                        background: 'var(--glass-bg)',
                        borderRadius: '100px',
                        border: '1px solid var(--glass-border)',
                        marginBottom: '24px',
                        color: 'var(--primary)',
                        fontSize: '0.8rem',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        <Target size={16} />
                        Our Mission
                    </div>

                    <h2 style={{ marginBottom: '24px' }}>
                        Architecting the <span className="text-gradient">Digital Tomorrow</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                        Aster Tech is a diverse digital collective. We blend complex engineering with modern aesthetics to build systems that define the next era of commerce.
                    </p>
                </motion.div>

                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '40px', alignItems: 'center' }}>

                    {/* Vision Switcher */}
                    <motion.div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => { setRotateX(0); setRotateY(0); }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            position: 'relative',
                            cursor: 'pointer',
                            perspective: '1000px',
                            rotateX: rotateX,
                            rotateY: rotateY,
                            transformStyle: 'preserve-3d'
                        }}
                        onClick={nextVision}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentVision.id}
                                initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 1.05, rotateY: 10 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="card-modern"
                                style={{ padding: 0, borderRadius: '32px', border: `1px solid ${currentVision.accent}40` }}
                            >
                                <div style={{ position: 'relative', height: '420px', overflow: 'hidden', transform: 'translateZ(0px)' }}>
                                    <img
                                        src={currentVision.image}
                                        alt={currentVision.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.1) translateZ(20px)' }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-surface) 0%, transparent 50%)' }} />

                                    {/* Vision HUD Scanner */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                        style={{
                                            position: 'absolute',
                                            top: '15%',
                                            right: '15%',
                                            width: '100px',
                                            height: '100px',
                                            border: '1px solid var(--primary)',
                                            borderRadius: '50%',
                                            opacity: 0.2,
                                            borderLeftColor: 'transparent',
                                            transform: 'translateZ(40px)'
                                        }}
                                    />

                                    <motion.div
                                        animate={{ top: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            background: 'linear-gradient(90deg, transparent, var(--secondary), transparent)',
                                            opacity: 0.4,
                                            zIndex: 5
                                        }}
                                    />

                                    <div style={{ position: 'absolute', bottom: '32px', left: '32px', transform: 'translateZ(60px)' }}>
                                        <div style={{ color: currentVision.accent, marginBottom: '8px' }}>{currentVision.icon}</div>
                                        <h3 style={{ fontSize: '2rem', marginBottom: '8px', lineHeight: 1 }}>{currentVision.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{currentVision.subtitle}</p>
                                    </div>
                                    <div style={{
                                        position: 'absolute',
                                        top: '24px',
                                        right: '24px',
                                        padding: '8px 16px',
                                        background: 'var(--glass-bg)',
                                        backdropFilter: 'blur(12px)',
                                        borderRadius: '100px',
                                        fontSize: '0.65rem',
                                        fontWeight: 900,
                                        color: 'var(--primary)',
                                        border: '1px solid var(--glass-border)',
                                        letterSpacing: '1px',
                                        transform: 'translateZ(80px)'
                                    }}>ANALYZING VISION</div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Stats & Points */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <div className="card-modern" style={{ padding: '32px' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '4px' }}>50+</div>
                                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Shipments</div>
                            </div>
                            <div className="card-modern" style={{ padding: '32px' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '4px' }}>20+</div>
                                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Global Partners</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            {[
                                {
                                    icon: <Gem className="text-gradient" />,
                                    title: 'Sovereign Precision',
                                    text: 'We engineering digital infrastructure with surgical accuracy and uncompromising quality.'
                                },
                                {
                                    icon: <Rocket style={{ color: 'var(--secondary)' }} />,
                                    title: 'Interstellar Speed',
                                    text: 'Leveraging modern stacks and AI automation to deliver results at the speed of light.'
                                },
                                {
                                    icon: <MapPin style={{ color: 'var(--accent)' }} />,
                                    title: 'Global Remote',
                                    text: 'Based in Chennai, India, operating everywhere. Bridging the gap between elite talent and global scale.'
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    style={{ display: 'flex', gap: '24px' }}
                                >
                                    <div style={{
                                        minWidth: '56px',
                                        height: '56px',
                                        borderRadius: '16px',
                                        background: 'var(--glass-bg)',
                                        border: '1px solid var(--glass-border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{item.title}</h4>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <style>{`
                @media (max-width: 1024px) {
                    .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
                    .about-grid > div:last-child { margin-top: 40px; }
                }
                @media (max-width: 640px) {
                    .about-grid { grid-template-columns: 1fr !important; }
                    .container { padding: 0 20px; }
                }
            `}</style>
        </section>
    );
};

export default About;
