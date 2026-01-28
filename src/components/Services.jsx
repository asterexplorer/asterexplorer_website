import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Full Stack Development",
            description: "End-to-end web solutions using modern stacks for scalable applications.",
            tech: ["React", "Node.js", "PostgreSQL"],
            icon: "💻"
        },
        {
            title: "Graphic Design with Adobe Softwares",
            description: "Creative visual identity and branding using industry-standard Adobe tools.",
            tech: ["Photoshop", "Illustrator", "InDesign"],
            icon: "🎨"
        },
        {
            title: "Website Design with latest Softwares",
            description: "Modern, responsive, and aesthetic website designs tailored to your brand.",
            tech: ["Figma", "UI/UX", "Wireframing"],
            icon: "🌐"
        },
        {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android.",
            tech: ["Flutter", "React Native", "iOS/Android"],
            icon: "📱"
        },
        {
            title: "AI Chatbot Development",
            description: "Intelligent conversational agents to automate support and engagement.",
            tech: ["NLP", "Python", "Machine Learning"],
            icon: "🤖"
        },
        {
            title: "AI Website Development",
            description: "Next-gen websites integrated with artificial intelligence features.",
            tech: ["AI Integration", "Automation", "Personalization"],
            icon: "🧠"
        },
        {
            title: "Database Development",
            description: "Robust and secure database architecture for data-driven applications.",
            tech: ["SQL", "NoSQL", "Optimization"],
            icon: "💾"
        },
        {
            title: "Auto CAD Design",
            description: "Precision 2D/3D drafting and design services for engineering and architecture.",
            tech: ["AutoCAD", "Revit", "3D Modeling"],
            icon: "📐"
        }
    ];

    return (
        <section id="services" className="section-padding" style={{ background: 'var(--bg-surface)', position: 'relative', overflow: 'hidden' }}>
            <div className="glow-bg" style={{ top: '20%', left: '-10%', width: '500px', height: '500px', opacity: '0.05' }}></div>

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8rem', alignItems: 'center' }}>

                    {/* Left Side: Services Info */}
                    <div>
                        <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.3rem', fontSize: '0.85rem', fontWeight: '800' }}>Platform Capabilities</span>
                        <h2 style={{ marginTop: '1.5rem', marginBottom: '3.5rem', fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
                            The Aster <span className="text-gradient">Ecosystem</span>
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {services.map((service, index) => (
                                <div key={index} className="card" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: '1.5rem',
                                    padding: '1.8rem',
                                    background: 'rgba(255,255,255,0.01)',
                                    border: '1px solid var(--glass-border)',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    height: '100%'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--primary)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--glass-border)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.01)';
                                    }}>
                                    <div style={{
                                        fontSize: '2rem',
                                        width: '50px',
                                        height: '50px',
                                        background: 'rgba(45, 212, 191, 0.05)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        border: '1px solid rgba(45, 212, 191, 0.1)'
                                    }}>
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', fontWeight: '800' }}>{service.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>{service.description}</p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {service.tech.map((t, i) => (
                                                <span key={i} style={{
                                                    fontSize: '0.6rem',
                                                    fontWeight: '800',
                                                    color: 'var(--primary)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    background: 'rgba(45, 212, 191, 0.05)',
                                                    padding: '0.25rem 0.6rem',
                                                    borderRadius: '4px'
                                                }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Visualization */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'relative',
                            zIndex: 2,
                            borderRadius: '40px',
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid var(--glass-border)',
                            padding: '1rem',
                            boxShadow: '0 60px 120px -30px rgba(0,0,0,0.7)',
                            animation: 'float 10s infinite ease-in-out'
                        }}>
                            <img
                                src="/services-main.png"
                                alt="Aster Ecosystem Visualization"
                                style={{
                                    width: '100%',
                                    borderRadius: '32px',
                                    display: 'block'
                                }}
                            />
                        </div>

                        {/* Glow effect */}
                        <div style={{
                            position: 'absolute',
                            inset: '-30px',
                            background: 'radial-gradient(circle, var(--primary) 0%, var(--secondary) 100%)',
                            filter: 'blur(80px)',
                            opacity: '0.1',
                            zIndex: 1
                        }}></div>

                        <div className="card" style={{
                            marginTop: '3rem',
                            padding: '2.5rem',
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.05), rgba(147, 51, 234, 0.05))',
                            border: '1px solid var(--glass-border)'
                        }}>
                            <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Ready to scale?</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                Let our engineers audit your current architecture and propose a high-performance roadmap.
                            </p>
                            <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '0.9rem' }}>Get Free Consultation</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


export default Services;
