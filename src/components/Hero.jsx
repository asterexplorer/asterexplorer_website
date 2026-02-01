import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Globe, Cpu, Network, Database } from 'lucide-react';
import heroVisualImg from '../assets/generated/hero_ultimate.png';

const Hero = () => {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const { scrollY } = useScroll();

    // Scroll-based parallax transforms
    const bgY = useTransform(scrollY, [0, 1000], [0, 400]);
    const visualY = useTransform(scrollY, [0, 1000], [0, -150]);
    const contentY = useTransform(scrollY, [0, 1000], [0, 80]);
    const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);
    const titleScale = useTransform(scrollY, [0, 500], [1, 0.95]);

    // Spring physics for smooth parallax
    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [7, -7]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-7, 7]), springConfig);

    // Multi-layered mouse parallax intensities
    const layer1X = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig);
    const layer1Y = useSpring(useTransform(mouseY, [-300, 300], [-15, 15]), springConfig);
    const layer2X = useSpring(useTransform(mouseX, [-300, 300], [-30, 30]), springConfig);
    const layer2Y = useSpring(useTransform(mouseY, [-300, 300], [-30, 30]), springConfig);
    const layer3X = useSpring(useTransform(mouseX, [-300, 300], [-45, 45]), springConfig);
    const layer3Y = useSpring(useTransform(mouseY, [-300, 300], [-45, 45]), springConfig);

    const [particles] = useState(() => {
        return [...Array(12)].map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: 5 + Math.random() * 5,
            delay: Math.random() * 5
        }));
    });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);

        // Set CSS variables for spotlight
        const mousePctX = (e.clientX / window.innerWidth) * 100;
        const mousePctY = (e.clientY / window.innerHeight) * 100;
        e.currentTarget.style.setProperty('--mouse-x', `${mousePctX}%`);
        e.currentTarget.style.setProperty('--mouse-y', `${mousePctY}%`);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                padding: '8rem 0 4rem',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'flex-start',
                position: 'relative',
                overflow: 'hidden',
                perspective: '1200px'
            }}
        >
            {/* Neural Grid Background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(0, 136, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 136, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '100px 100px',
                maskImage: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent 80%)',
                zIndex: -1,
                opacity: 0.5
            }} />

            {/* Parallax Background Elements */}
            <motion.div
                style={{ y: bgY, opacity: opacityFade }}
                className="parallax-bg"
            >
                {/* Background Glows */}
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute', top: '15%', left: '5%', width: '40vw', height: '40vw',
                        background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
                        zIndex: 0, opacity: 0.2, filter: 'blur(80px)'
                    }}
                />
                <motion.div
                    animate={{ x: [0, -40, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute', bottom: '10%', right: '10%', width: '35vw', height: '35vw',
                        background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)',
                        zIndex: 0, opacity: 0.2, filter: 'blur(80px)'
                    }}
                />

                {/* Technical HUD Scan Lines */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px)',
                    backgroundSize: '100% 3px',
                    pointerEvents: 'none',
                    zIndex: 2,
                    opacity: 0.1
                }} />

                {/* Floating Particles/Nodes */}
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, (i % 2 === 0 ? 20 : -20), 0],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay
                        }}
                        style={{
                            position: 'absolute',
                            top: p.top,
                            left: p.left,
                            width: '2px',
                            height: '2px',
                            background: i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)',
                            boxShadow: `0 0 10px ${i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'}`,
                            zIndex: 0
                        }}
                    />
                ))}
            </motion.div>

            <div className="container" style={{ position: 'relative', zIndex: 1, marginTop: '2vh' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 480px', gap: '40px', alignItems: 'center' }} className="hero-grid-modern">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ y: contentY, x: layer1X }}
                        className="hero-content"
                    >
                        {/* Animated Badge */}
                        <motion.div variants={itemVariants} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '8px 16px',
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '100px',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--primary)',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '32px',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <Sparkles size={16} className="animate-pulse" />
                            <span>System Active: Global Core</span>
                        </motion.div>

                        {/* Main Title with Magnetic Effect */}
                        <motion.h1
                            variants={itemVariants}
                            style={{
                                marginBottom: '24px',
                                letterSpacing: '-0.04em',
                                fontWeight: 900,
                                lineHeight: 0.95,
                                scale: titleScale,
                                perspective: '1000px'
                            }}
                        >
                            <motion.span
                                style={{
                                    display: 'inline-block',
                                    rotateY: layer1X,
                                    rotateX: layer1Y,
                                    transition: 'transform 0.1s ease-out'
                                }}
                            >
                                Next-Gen <br />
                                <span className="text-gradient">Digital Intelligence</span>
                            </motion.span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p variants={itemVariants} style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '48px',
                            maxWidth: '600px',
                            lineHeight: '1.6'
                        }}>
                            Deploying resilient cloud architectures and neural interfaces. We bridge the gap between abstract vision and high-performance reality.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn btn-primary" style={{ padding: '20px 40px' }}>
                                Start Integration <ArrowRight size={20} style={{ marginLeft: '12px' }} />
                            </a>
                            <a href="#solutions" className="btn btn-outline" style={{ padding: '20px 40px' }}>
                                Explore Stack
                            </a>
                        </motion.div>

                        {/* Metrics Parallax Layer */}
                        <motion.div
                            variants={itemVariants}
                            style={{
                                marginTop: '80px',
                                display: 'flex',
                                gap: '48px',
                                x: layer1X
                            }}
                        >
                            <div className="metric-item">
                                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                    99.9<span style={{ fontSize: '1rem', color: 'var(--primary)' }}>%</span>
                                </div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Uptime Reliability</div>
                            </div>
                            <div className="metric-item">
                                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                    250<span style={{ fontSize: '1rem', color: 'var(--secondary)' }}>ms</span>
                                </div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Average Response</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Multi-Layered Visual Engine */}
                    <motion.div
                        style={{ y: visualY, rotateX, rotateY }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-visual"
                    >
                        <div style={{
                            position: 'relative',
                            height: '650px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transformStyle: 'preserve-3d'
                        }}>
                            {/* Depth Layer 1: Background Glow */}
                            <div style={{
                                position: 'absolute',
                                width: '120%',
                                height: '120%',
                                background: 'radial-gradient(circle, rgba(0, 242, 255, 0.05) 0%, transparent 70%)',
                                transform: 'translateZ(-100px)',
                                pointerEvents: 'none'
                            }} />

                            {/* Depth Layer 2: HUD Frame */}
                            <motion.div
                                style={{
                                    x: layer1X,
                                    y: layer1Y,
                                    translateZ: '20px',
                                    position: 'absolute',
                                    inset: '-30px',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '60px',
                                    pointerEvents: 'none',
                                    zIndex: 0
                                }}
                            />

                            {/* Depth Layer 3: Main Visual Core */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: '48px',
                                overflow: 'hidden',
                                border: '1px solid var(--glass-border)',
                                boxShadow: 'var(--shadow-premium), inset 0 0 40px rgba(0, 136, 255, 0.05)',
                                background: 'var(--bg-surface)',
                                transform: 'translateZ(0px)'
                            }} className="image-premium-wrapper">
                                <motion.img
                                    src={heroVisualImg}
                                    alt="Neural Core"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        opacity: 1,
                                        scale: 1.1,
                                        x: layer1X,
                                        y: layer1Y
                                    }}
                                />
                                <div className="image-premium-overlay" />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-surface) 10%, transparent 60%)', opacity: 0.8 }} />

                                {/* Interactive Scanning Line */}
                                <motion.div
                                    animate={{ top: ['-10%', '110%'] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        height: '1px',
                                        background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                                        boxShadow: '0 0 20px var(--primary)',
                                        zIndex: 3,
                                        opacity: 0.4
                                    }}
                                />

                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-surface) 10%, transparent 60%)' }} />

                                {/* Inner Grid Web */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: 'radial-gradient(var(--glass-border) 1px, transparent 1px)',
                                    backgroundSize: '30px 30px',
                                    opacity: 0.2,
                                    zIndex: 1
                                }} />
                            </div>

                            {/* Depth Layer 4: Floating UI Components */}
                            <motion.div
                                style={{ x: layer2X, y: layer2Y, translateZ: '100px' }}
                                className="hud-floating-elements"
                            >
                                {/* Active Node Label */}
                                <div style={{
                                    position: 'absolute',
                                    top: '60px',
                                    right: '-60px',
                                    background: 'var(--glass-bg)',
                                    backdropFilter: 'blur(12px)',
                                    padding: '16px 24px',
                                    borderRadius: '16px',
                                    border: '1px solid var(--glass-border)',
                                    zIndex: 10,
                                    boxShadow: 'var(--shadow-premium)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                        <div className="pulse-dot" />
                                        <div style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: 900, letterSpacing: '2px' }}>CORE.LINK</div>
                                    </div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>ENCRYPTED_STREAM</div>
                                </div>

                                {/* Mini Chart Element */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '100px',
                                    left: '-80px',
                                    background: 'var(--bg-card)',
                                    backdropFilter: 'blur(12px)',
                                    padding: '20px',
                                    borderRadius: '20px',
                                    border: '1px solid var(--glass-border)',
                                    zIndex: 10,
                                    width: '180px'
                                }}>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.6rem', marginBottom: '12px', fontWeight: 700 }}>NEURAL_TRAFFIC</div>
                                    <div style={{ display: 'flex', alignItems: 'end', gap: '4px', height: '40px' }}>
                                        {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ delay: i * 0.1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                                                style={{ flex: 1, background: 'var(--secondary)', borderRadius: '2px', opacity: 0.6 }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Depth Layer 5: Data Stream Overlay */}
                            <motion.div
                                style={{
                                    x: layer3X,
                                    y: layer3Y,
                                    translateZ: '150px',
                                    position: 'relative',
                                    zIndex: 15,
                                    width: '75%',
                                    height: '60%',
                                    overflow: 'hidden',
                                    maskImage: 'linear-gradient(to bottom, transparent, var(--text-primary) 20%, var(--text-primary) 80%, transparent)'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px',
                                    animation: 'scrollUp 30s linear infinite'
                                }}>
                                    {[...Array(3)].map((_, i) => (
                                        <React.Fragment key={i}>
                                            <div className="stream-card" style={{ padding: '20px', background: 'var(--bg-card)', backdropFilter: 'blur(20px)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                                    <div style={{ color: 'var(--primary)', fontSize: '0.6rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '6px' }}><Cpu size={12} /> TASK_RUNNER</div>
                                                    <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>ID: 0x92f</div>
                                                </div>
                                                <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '4px' }}>Optimizing Asset Pipeline...</div>
                                                <div className="progress-bar-mini" />
                                            </div>
                                            <div className="stream-card" style={{ padding: '20px', background: 'var(--bg-card)', backdropFilter: 'blur(20px)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                                    <div style={{ color: 'var(--secondary)', fontSize: '0.6rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '6px' }}><Network size={12} /> P2P_SYNC</div>
                                                    <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>PEERS: 12.4k</div>
                                                </div>
                                                <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>Node Consistency: 99.8%</div>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .parallax-bg {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 0;
                }
                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: var(--primary);
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--primary);
                    animation: pulse-ring 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
                }
                @keyframes pulse-ring {
                    0% { transform: scale(.7); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.5; }
                    100% { transform: scale(.7); opacity: 1; }
                }
                .progress-bar-mini {
                    height: 2px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 2px;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                }
                .progress-bar-mini::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 60%;
                    background: var(--primary);
                    box-shadow: 0 0 10px var(--primary);
                }
                @media (max-width: 1024px) {
                    .hero-grid-modern {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                        gap: 120px !important;
                    }
                    .hero-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-visual {
                        max-width: 500px;
                        margin: 0 auto;
                        height: 500px !important;
                    }
                    .hud-floating-elements, .metric-item:last-child {
                        display: none;
                    }
                }
                @keyframes scrollUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .stream-card {
                    transition: transform 0.3s ease;
                }
                .stream-card:hover {
                    transform: scale(1.02);
                }
            `}</style>
        </section>
    );
};

export default Hero;


