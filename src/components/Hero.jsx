import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const stars = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5
    }));

    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '80px',
                background: 'var(--bg-deep)'
            }}
        >
            {/* Background Grain/Noise Effect */}
            <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.02,
                pointerEvents: 'none',
                backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                filter: 'contrast(150%) brightness(100%)'
            }} />

            {/* Stars/Particles */}
            {stars.map(star => (
                <div key={star.id} style={{
                    position: 'absolute',
                    top: star.top,
                    left: star.left,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    background: 'var(--primary)',
                    borderRadius: '50%',
                    opacity: 0.1,
                    animation: `twinkle ${2 + Math.random() * 3}s infinite ease-in-out`,
                    animationDelay: `${star.delay}s`
                }} />
            ))}

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>

                    <div style={{ position: 'relative', zIndex: 1 }}>

                        <h1 style={{ marginBottom: '2rem' }}>
                            The Future of <br />
                            <span className="text-gradient">Freelance Work</span>
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                            maxWidth: '540px',
                            lineHeight: '1.6'
                        }}>
                            Connect with elite independent professionals. From high-performance web apps to scalable Python architectures, Aster System bridges the gap between vision and execution.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#projects" className="btn btn-primary">
                                Find Work
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                            <a href="#freelancers" className="btn btn-outline" style={{ background: 'white', color: 'black' }}>
                                Hire Talent
                            </a>
                        </div>
                    </div>

                    {/* Floating Hero Card */}
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        <div className="card" style={{
                            width: '100%',
                            height: '450px',
                            background: 'var(--bg-surface)',
                            padding: '0',
                            overflow: 'hidden',
                            animation: 'float 6s infinite ease-in-out',
                            position: 'relative',
                            border: '1px solid var(--glass-border)'
                        }}>
                            <div style={{ height: '60px', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', padding: '0 1.5rem', gap: '0.5rem', background: 'rgba(255,255,255,0.02)' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <div style={{ width: '100%', height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', marginBottom: '1.5rem' }}></div>
                                <div style={{ width: '70%', height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', marginBottom: '2.5rem' }}></div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} style={{ height: '80px', background: 'rgba(45, 212, 191, 0.03)', border: '1px solid rgba(45, 212, 191, 0.1)', borderRadius: '12px' }}></div>
                                    ))}
                                </div>
                            </div>
                            {/* Reflection effect */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)',
                                pointerEvents: 'none'
                            }}></div>
                        </div>

                        {/* Interactive Elements floating around */}
                        <div className="card" style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            padding: '1rem 1.5rem',
                            borderRadius: '16px',
                            zIndex: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            transform: 'rotate(5deg)',
                            background: 'var(--bg-surface)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                            border: '1px solid var(--primary-glow)'
                        }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>System Load</div>
                                <div style={{ fontSize: '1rem', fontWeight: '700' }}>98.4%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.4; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
