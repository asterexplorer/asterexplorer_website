import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Asset Imports (Matches ServiceSummary.jsx)
import webDevImg from '../assets/summary/web_dev.png';
import mobileAppImg from '../assets/summary/mobile_app.png';
import databaseImg from '../assets/summary/database.png';
import webDesignImg from '../assets/summary/web_design.png';
import aiChatbotImg from '../assets/summary/ai_chatbot.png';
import aiWebImg from '../assets/summary/ai_web.png';
import autoCadImg from '../assets/summary/autocad.png';
import graphicDesignImg from '../assets/summary/graphic_design.png';

const ServiceCard = ({ sol }) => {
    const [viewMode, setViewMode] = useState(0);

    const modes = [
        { name: 'Standard View', filter: 'none', borderColor: 'var(--glass-border)', bg: 'rgba(10, 10, 15, 0.6)' },
        { name: 'Analytical Mode', filter: 'hue-rotate(45deg) contrast(1.2)', borderColor: sol.accent, bg: 'rgba(15, 23, 42, 0.8)' },
        { name: 'Schematic Mode', filter: 'grayscale(1) contrast(1.1) brightness(0.8)', borderColor: '#ffffff50', bg: 'rgba(20, 20, 15, 0.9)' }
    ];

    const currentMode = modes[viewMode];

    const toggleMode = () => {
        setViewMode((prev) => (prev + 1) % modes.length);
    };

    return (
        <div
            className="card solution-card"
            style={{
                padding: 0,
                background: currentMode.bg,
                border: `1px solid ${currentMode.borderColor}`,
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                height: '100%',
                position: 'relative'
            }}
        >
            <div
                style={{ position: 'relative', height: '160px', overflow: 'hidden', cursor: 'pointer' }}
                onClick={toggleMode}
                title="Click to cycle view modes"
            >
                <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(4px)',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '0.7rem',
                    color: '#fff',
                    fontWeight: '600',
                    zIndex: 10,
                    border: '1px solid rgba(255,255,255,0.1)',
                    pointerEvents: 'none'
                }}>
                    {currentMode.name}
                </div>
                <img
                    src={sol.image}
                    alt={sol.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'all 0.5s ease',
                        filter: currentMode.filter
                    }}
                    className="sol-img"
                />
            </div>

            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{
                    fontSize: '1.4rem',
                    marginBottom: '1.5rem',
                    fontWeight: '900',
                    color: viewMode === 1 ? sol.accent : 'inherit'
                }}>{sol.title}</h3>

                <div style={{ marginBottom: '2rem', flexGrow: 1 }}>
                    {sol.description.split('\n').map((line, i) => (
                        <div key={i} style={{
                            marginBottom: '0.8rem',
                            paddingLeft: '1rem',
                            borderLeft: `2px solid ${line.includes('Problem') ? 'var(--text-tertiary)' : sol.accent}`,
                            background: 'rgba(255,255,255,0.01)',
                            padding: '0.5rem 1rem',
                            borderRadius: '0 8px 8px 0'
                        }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
                                {line.includes(':') ? (
                                    <>
                                        <strong style={{
                                            display: 'block',
                                            color: line.includes('Problem') ? 'var(--text-tertiary)' : sol.accent,
                                            marginBottom: '0.2rem',
                                            fontSize: '0.7rem',
                                            textTransform: 'uppercase'
                                        }}>{line.split(':')[0]}</strong>
                                        {line.split(':').slice(1).join(':').trim()}
                                    </>
                                ) : line}
                            </p>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {sol.features.map((feat, i) => (
                        <span key={i} style={{
                            padding: '0.3rem 0.6rem',
                            borderRadius: '4px',
                            color: '#fff',
                            fontSize: '0.65rem',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            background: 'rgba(255,255,255,0.08)'
                        }}>{feat}</span>
                    ))}
                </div>

                <Link
                    to={`/case-study/${sol.id}`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        color: sol.accent,
                        fontWeight: '800',
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        textDecoration: 'none'
                    }}
                >
                    View Case Study <span className="arrow-icon">→</span>
                </Link>
            </div>
        </div>
    );
};

const ServicesSolutions = () => {
    const services = [
        { title: "Full Stack Development", description: "End-to-end web solutions using modern stacks for scalable applications.", tech: ["React", "Node.js", "PostgreSQL"], icon: "💻" },
        { title: "Graphic Design", description: "Creative visual identity and branding using industry-standard Adobe tools.", tech: ["Photoshop", "Illustrator", "InDesign"], icon: "🎨" },
        { title: "Website Design", description: "Modern, responsive, and aesthetic website designs tailored to your brand.", tech: ["Figma", "UI/UX", "Wireframing"], icon: "🌐" },
        { title: "Mobile App Dev", description: "Native and cross-platform mobile applications for iOS and Android.", tech: ["Flutter", "React Native"], icon: "📱" },
        { title: "AI Chatbots", description: "Intelligent conversational agents to automate support and engagement.", tech: ["NLP", "Python", "LLMs"], icon: "🤖" },
        { title: "AI Integration", description: "Next-gen websites integrated with artificial intelligence features.", tech: ["AI Tools", "Automation"], icon: "🧠" },
        { title: "Database Systems", description: "Robust and secure database architecture for data-driven applications.", tech: ["SQL", "NoSQL", "DB Mesh"], icon: "💾" },
        { title: "Auto CAD", description: "Precision 2D/3D drafting and design services for engineering and architecture.", tech: ["AutoCAD", "3D Modeling"], icon: "📐" }
    ];

    const solutions = [
        { id: 'full-stack-development', title: "Scalable Web Eco-Systems", description: "Problem: Technical debt slowing growth. \nSolution: High-performance Next.js architectures with integrated AI layers.", features: ["Edge Runtime", "MERN Stack", "Real-time Sync"], image: webDevImg, accent: 'var(--primary)' },
        { id: 'graphic-design', title: "Cinematic Brand Identity", description: "Problem: Generic market positioning. \nSolution: High-fidelity visual storytelling and cohesive digital-first branding.", features: ["Vector Art", "Brand Guide", "Motion"], image: graphicDesignImg, accent: 'var(--secondary)' },
        { id: 'modern-web-design', title: "Conversion First UX", description: "Problem: High drop-off rates. \nSolution: Intuitive, science-backed UI design that drives user action.", features: ["A/B Tested", "Figma Pro", "Responsive"], image: webDesignImg, accent: '#38bdf8' },
        { id: 'mobile-app-development', title: "Ecosystem Mobile Sync", description: "Problem: Limited multi-device reach. \nSolution: Native-parity cross-platform apps with real-time health/data sync.", features: ["Flutter", "Firebase", "Wearables"], image: mobileAppImg, accent: 'var(--accent)' },
        { id: 'ai-chatbot-agents', title: "Neural Support Agents", description: "Problem: Support bottlenecks. \nSolution: Language-agnostic AI agents with complex intent classification.", features: ["LLM Training", "Redis", "Sentiment-AI"], image: aiChatbotImg, accent: '#8b5cf6' },
        { id: 'ai-website-integration', title: "Adaptive AI Portals", description: "Problem: Static content stagnation. \nSolution: Real-time portal personalization using behavioral AI modeling.", features: ["Edge AI", "TensorFlow.js", "ML Analytics"], image: aiWebImg, accent: '#f43f5e' },
        { id: 'database-development', title: "VaultCloud Data Mesh", description: "Problem: Data fragmentation. \nSolution: Horizontally scalable distributed database systems with zero loss.", features: ["PostgreSQL", "Cloud Native", "Redundancy"], image: databaseImg, accent: '#10b981' },
        { id: 'auto-cad-design', title: "Industrial Precision Drafts", description: "Problem: Drafting inaccuracies. \nSolution: Millimeter-perfect 3D engineering blueprints for large-scale complexes.", features: ["AutoCAD 3D", "Revit", "BIM Hub"], image: autoCadImg, accent: '#f59e0b' }
    ];

    const impactImages = [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
    ];

    const [currentImpactIndex, setCurrentImpactIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImpactIndex((prev) => (prev + 1) % impactImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="services-solutions" className="section-padding" style={{ background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient Background */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '20%', left: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '0%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)', filter: 'blur(120px)' }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.4rem', fontSize: '0.9rem', fontWeight: '800' }}>Platform Hub</span>
                    <h2 style={{ marginTop: '1.5rem', marginBottom: '2.5rem', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>Services & <span className="text-gradient">Solutions</span></h2>
                    <p style={{ color: 'var(--text-tertiary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
                        A comprehensive ecosystem where technical precision meets operational impact. We don't just build features; we engineer business advantages.
                    </p>
                </div>

                {/* Part 1: Service Capabilities Grid */}
                <div style={{ marginBottom: '12rem', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-15%', right: '-10%', width: '45%', height: '70%', opacity: 0.12, zIndex: -1, pointerEvents: 'none', filter: 'blur(20px)' }}>
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072" style={{ width: '100%', height: '100%', objectFit: 'contain', animation: 'float 30s infinite' }} alt="bg" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', whiteSpace: 'nowrap' }}>01. Core Capabilities</h3>
                        <div style={{ height: '1px', width: '100%', background: 'linear-gradient(to right, var(--primary), transparent)' }}></div>
                    </div>

                    <div className="perspective-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {services.map((service, index) => (
                            <div key={index} className="service-card-reveal" style={{
                                padding: '2.5rem',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '20px',
                                transition: 'all 0.4s ease'
                            }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', opacity: 0.8 }}>{service.icon}</div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '800' }}>{service.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{service.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {service.tech.map((t, i) => (
                                        <span key={i} style={{ fontSize: '0.6rem', fontWeight: '800', color: 'var(--primary)', opacity: 0.6 }}>#{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cinematic Impact Visual Break */}
                <div style={{
                    height: '450px',
                    marginBottom: '10rem',
                    borderRadius: '40px',
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid rgba(255,255,255,0.05)',
                    boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
                    background: '#000'
                }}>
                    {/* Background Image Layer with Zoom Effect */}
                    {impactImages.map((img, idx) => (
                        <div key={idx} style={{
                            position: 'absolute',
                            inset: 0,
                            opacity: currentImpactIndex === idx ? 0.6 : 0,
                            transition: 'opacity 2s ease-in-out, transform 10s linear',
                            transform: currentImpactIndex === idx ? 'scale(1.15)' : 'scale(1)',
                            zIndex: 1
                        }}>
                            <img
                                src={img}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                alt="Impact Visual"
                            />
                        </div>
                    ))}

                    {/* Tactical Overlays */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-deep) 10%, transparent 60%)', zIndex: 2 }}></div>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent, rgba(0,0,0,0.4))', zIndex: 2 }}></div>



                    {/* Content Layer */}
                    <div style={{ position: 'absolute', bottom: '15%', left: '8%', maxWidth: '600px', zIndex: 10 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.4em', color: 'var(--primary)', textTransform: 'uppercase' }}>Strategic Core</span>
                        </div>
                        <h3 style={{ fontSize: '3.5rem', marginBottom: '1rem', lineHeight: '1', fontWeight: '900' }}>Architecting <span className="text-gradient">Resilience.</span></h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '450px', lineHeight: '1.6' }}>
                            Converting technical infrastructure into sovereign competitive advantages.
                        </p>
                    </div>

                    {/* HUD Corner Brackets */}
                    <div style={{ position: 'absolute', top: '30px', left: '30px', width: '20px', height: '20px', borderTop: '2px solid rgba(255,255,255,0.2)', borderLeft: '2px solid rgba(255,255,255,0.2)', zIndex: 3 }}></div>
                    <div style={{ position: 'absolute', bottom: '30px', right: '30px', width: '20px', height: '20px', borderBottom: '2px solid rgba(255,255,255,0.2)', borderRight: '2px solid rgba(255,255,255,0.2)', zIndex: 3 }}></div>
                </div>

                {/* Part 2: High Impact Solutions */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--secondary)', whiteSpace: 'nowrap' }}>02. Impact Solutions</h3>
                        <div style={{ height: '1px', width: '100%', background: 'linear-gradient(to right, var(--secondary), transparent)' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                        {solutions.map((sol, index) => (
                            <ServiceCard key={index} sol={sol} />
                        ))}
                    </div>
                </div>

                {/* Tactical Footer Overlay */}
                <div style={{
                    marginTop: '10rem',
                    padding: '4rem',
                    borderRadius: '30px',
                    background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.05), rgba(147, 51, 234, 0.05))',
                    border: '1px solid rgba(255,255,255,0.05)',
                    textAlign: 'center'
                }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Ready for a <span className="text-gradient">Strategic Shift?</span></h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Schedule a specialized engineering session to audit your current stack and design your future-proof architecture.
                    </p>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1rem' }}>Initiate Proposal</a>
                </div>
            </div>

            <style>{`
                .service-card-reveal:hover {
                    transform: translateY(-8px);
                    background: rgba(255,255,255,0.05);
                    border-color: var(--primary);
                }
                .solution-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                }
                .solution-card:hover .sol-img {
                    transform: scale(1.1);
                }
                .arrow-icon {
                    transition: transform 0.3s ease;
                }
                .solution-card:hover .arrow-icon {
                    transform: translateX(5px);
                }
                @media (max-width: 768px) {
                    .container { padding: 0 1.5rem; }
                    .section-padding { padding: 6rem 0; }
                }
                .perspective-reveal {
                    perspective: 1000px;
                }
                .perspective-reveal > div {
                    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .perspective-reveal:hover > div {
                    transform: rotateX(2deg) rotateY(-2deg) translateZ(10px);
                }
            `}</style>
        </section>
    );
};

export default ServicesSolutions;
