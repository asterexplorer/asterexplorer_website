import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import heroVisualImg1 from '../assets/generated/hero_code.png';
import heroVisualImg2 from '../assets/generated/hero_cloud.png';
import heroVisualImg3 from '../assets/generated/hero_system.png';
import heroVisualImg4 from '../assets/generated/hero_quantum.png';

const heroImages = [heroVisualImg1, heroVisualImg2, heroVisualImg3, heroVisualImg4];
const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const imgTimer = setInterval(() => {
            setImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 30000);
        return () => {
            clearInterval(imgTimer);
        };
    }, []);


    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);

        // Update CSS variables for the spotlight effect
        e.currentTarget.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
        e.currentTarget.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--bg-deep)',
                padding: '80px 0'
            }}
        >
            {/* Dynamic Background Effects */}
            <div className="hero-bg-effects" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                {/* Animated Glow Globes */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '5%',
                        width: '40vw',
                        height: '40vw',
                        background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
                        opacity: 0.15,
                        filter: 'blur(100px)'
                    }}
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 120, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        bottom: '10%',
                        right: '5%',
                        width: '35vw',
                        height: '35vw',
                        background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)',
                        opacity: 0.15,
                        filter: 'blur(100px)'
                    }}
                />

                {/* Mouse-Tracked Grid Reveal */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `linear-gradient(var(--glass-border) 1px, transparent 1px), linear-gradient(90deg, var(--glass-border) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                    opacity: 0.1,
                    maskImage: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent 60%)',
                    WebkitMaskImage: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent 60%)'
                }} />

                {/* Subtle Static Dot Pattern */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 1px 1px, var(--glass-border) 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                    opacity: 0.05
                }} />

            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1600px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.2fr',
                    gap: '100px',
                    alignItems: 'center'
                }} className="hero-grid-simple">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
                    >

                        <div>
                            {/* High-Fidelity Clear Typography */}
                            <motion.h1
                                variants={itemVariants}
                                style={{
                                    marginBottom: '24px',
                                    fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                                    fontWeight: 900,
                                    letterSpacing: '-0.04em',
                                    lineHeight: 0.9
                                }}
                            >
                                Easy 2 way <br />
                                <span className="text-gradient">connect the world</span>
                            </motion.h1>

                            <motion.p variants={itemVariants} style={{
                                fontSize: '1.35rem',
                                color: 'var(--text-secondary)',
                                maxWidth: '540px',
                                lineHeight: '1.6',
                                fontWeight: 400
                            }}>
                                Architecting elite digital ecosystems. We deliver secure, scalable, and surgical engineering for the global enterprise.
                            </motion.p>
                        </div>

                        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '20px', marginTop: '16px' }}>
                            <a href="#solutions" className="btn btn-primary" style={{ padding: '20px 40px' }}>
                                Explore Suite <ArrowRight size={18} style={{ marginLeft: '12px' }} />
                            </a>
                        </motion.div>

                    </motion.div>

                    {/* High-Fidelity Visual Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '1',
                            borderRadius: '40px',
                            overflow: 'hidden',
                            border: '1px solid var(--glass-border)',
                            background: 'var(--bg-card)',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.4)'
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={imageIndex}
                                    style={{ position: 'absolute', inset: 0 }}
                                >
                                    <motion.img
                                        src={heroImages[imageIndex]}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 2 }}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, var(--bg-deep), transparent 60%)',
                                        opacity: 0.6
                                    }} />
                                </motion.div>
                            </AnimatePresence>

                            {/* Minimal Technical Overlay */}
                            <div style={{
                                position: 'absolute',
                                bottom: '40px',
                                left: '40px',
                                right: '40px',
                                zIndex: 2
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Active Core</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'white' }}>Aster_Protocol_v4.2</div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }} />
                                        <div style={{ width: '10px', height: '2px', background: 'var(--primary)', opacity: 0.3 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                @media (max-width: 1400px) {
                    .login-card-floating {
                        position: relative !important;
                        top: 0 !important;
                        right: 0 !important;
                        left: 0 !important;
                        width: 100% !important;
                        margin-top: 24px !important;
                        transform: none !important;
                    }
                }
                @media (max-width: 1024px) {
                    .hero-grid-simple {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    .hero-grid-simple > div {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
