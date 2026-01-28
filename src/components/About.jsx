import React, { useState } from 'react';

// Import images
import graphicImg from '../assets/summary/graphic_design.png';
import aiImg from '../assets/summary/ai_web.png';
import devImg from '../assets/summary/web_dev.png';

const About = () => {
    const [visionIndex, setVisionIndex] = useState(0);

    const visions = [
        {
            id: 'innovation',
            title: 'Innovation Hub',
            subtitle: 'Where ideas meet execution.',
            image: graphicImg,
            filter: 'contrast(1.1) brightness(1.1)',
            borderColor: 'var(--primary)',
            accent: 'var(--primary)',
            description: 'Where true creativity thrives.'
        },
        {
            id: 'intelligence',
            title: 'Digital Intelligence',
            subtitle: 'Powered by advanced AI.',
            image: aiImg,
            filter: 'hue-rotate(20deg) contrast(1.2)',
            borderColor: 'var(--secondary)',
            accent: 'var(--secondary)',
            description: 'Data-driven decision engines.'
        },
        {
            id: 'architecture',
            title: 'System Architecture',
            subtitle: 'Built for massive scale.',
            image: devImg,
            filter: 'grayscale(1) contrast(1.1) brightness(1.2)',
            borderColor: '#64748b',
            accent: '#64748b',
            description: 'Robust engineering foundations.'
        }
    ];

    const currentVision = visions[visionIndex];

    const nextVision = () => {
        setVisionIndex((prev) => (prev + 1) % visions.length);
    };

    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
            <div className="glow-bg" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '1000px', height: '1000px', opacity: '0.05' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Header Section - Centered for better focus */}
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 6rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.5rem 1.2rem',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '100px',
                        border: '1px solid var(--glass-border)',
                        marginBottom: '1.5rem'
                    }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></div>
                        <span style={{
                            color: 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2rem',
                            fontSize: '0.75rem',
                            fontWeight: '800'
                        }}>Our Vision</span>
                    </div>

                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                        Architecting the <span className="text-gradient">Digital Future</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        Aster Explorer Technologies is a premier diverse digital force. We blend creative artistry with engineering precision to build systems that define tomorrow.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    {/* Visual Element - Interactive */}
                    <div
                        style={{ position: 'relative', padding: '1rem', cursor: 'pointer', perspective: '1000px' }}
                        onClick={nextVision}
                        title="Click to change vision"
                    >
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: `linear-gradient(135deg, ${currentVision.accent}, var(--bg-deep))`,
                            borderRadius: '30px',
                            opacity: 0.2,
                            transform: 'rotate(-5deg) scale(0.95)',
                            transition: 'all 0.5s ease',
                            zIndex: 1
                        }}></div>

                        <div style={{
                            position: 'relative',
                            zIndex: 2,
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: `0 30px 60px -10px ${currentVision.accent}40`,
                            border: `1px solid ${currentVision.borderColor}`,
                            transition: 'all 0.5s ease',
                            transformStyle: 'preserve-3d'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: 'rgba(0,0,0,0.6)',
                                padding: '5px 10px',
                                borderRadius: '20px',
                                fontSize: '0.7rem',
                                color: 'white',
                                zIndex: 10,
                                backdropFilter: 'blur(5px)',
                                pointerEvents: 'none'
                            }}>
                                ⏱ Click to Switch
                            </div>

                            <img
                                src={currentVision.image}
                                alt={currentVision.title}
                                style={{
                                    width: '100%',
                                    display: 'block',
                                    transform: 'scale(1.05)',
                                    filter: currentVision.filter,
                                    transition: 'all 0.5s ease'
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(10,10,15,0.9), transparent)',
                                transition: 'all 0.5s ease'
                            }}></div>

                            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                                <h4 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem', transition: 'all 0.3s' }}>
                                    {currentVision.title}
                                </h4>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{currentVision.subtitle}</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats & Details - Clearer Layout */}
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
                                <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.5rem', lineHeight: '1' }}>50+</div>
                                <div style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-tertiary)' }}>Projects Delivered</div>
                            </div>
                            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
                                <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '0.5rem', lineHeight: '1' }}>20+</div>
                                <div style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-tertiary)' }}>Global Clients</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '40px', height: '40px', borderRadius: '12px', background: 'rgba(45, 212, 191, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.2rem' }}>💎</div>
                                <div>
                                    <h5 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.3rem' }}>Premium Craftsmanship</h5>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>We don't just write code; we craft digital experiences with pixel-perfect attention to detail.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '40px', height: '40px', borderRadius: '12px', background: 'rgba(147, 51, 234, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', fontSize: '1.2rem' }}>🚀</div>
                                <div>
                                    <h5 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.3rem' }}>Future-Proof Tech</h5>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Leveraging modern frameworks and AI strategies to ensure your platform scales indefinitely.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
