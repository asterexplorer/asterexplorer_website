import React, { useState, useEffect, useRef } from 'react';

const ProjectBridge = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sectionRef = useRef(null);
    const lastScrollY = useRef(0);

    // Initial project types
    const initialProjects = [
        { title: 'Full Stack App', icon: '💻', desc: 'Custom enterprise solutions', link: '#contact' },
        { title: 'AI Integration', icon: '🤖', desc: 'Machine learning workflows', link: '#contact' },
        { title: 'Mobile App', icon: '📱', desc: 'iOS & Android excellence', link: '#contact' },
        { title: 'UI/UX Design', icon: '🎨', desc: 'Premium user experiences', link: '#contact' }
    ];

    const [projects, setProjects] = useState(() => {
        const saved = localStorage.getItem('aster_project_blueprints');
        return saved ? JSON.parse(saved) : initialProjects;
    });

    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!isOpen || editingIndex !== null) {
                lastScrollY.current = window.scrollY;
                return;
            }

            const currentScrollY = window.scrollY;
            const scrollDistance = Math.abs(currentScrollY - lastScrollY.current);

            // If user scrolls more than 400px away from the point where they opened it, close it
            if (scrollDistance > 400) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen, editingIndex]);

    const handleSave = (index) => {
        setEditingIndex(null);
        localStorage.setItem('aster_project_blueprints', JSON.stringify(projects));
    };

    const updateProject = (index, field, value) => {
        const newProjects = [...projects];
        newProjects[index] = { ...newProjects[index], [field]: value };
        setProjects(newProjects);
    };

    return (
        <section ref={sectionRef} style={{
            padding: '6rem 0',
            background: 'var(--bg-deep)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10,
            overflow: 'hidden'
        }}>
            {/* Background Visual Effects */}
            <div className="bridge-aurora" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(45, 212, 191, 0.05) 0%, transparent 60%)',
                filter: 'blur(80px)',
                zIndex: -1,
                animation: 'auroraPulse 10s ease-in-out infinite alternate'
            }}></div>

            <div className="scanning-grid" style={{
                position: 'absolute',
                inset: 0,
                backgroundSize: '80px 80px',
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
                maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                zIndex: -1,
                opacity: 0.5
            }}></div>

            {/* The Bridge Line */}
            <div className="bridge-line-container" style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '50%',
                width: '1px',
                zIndex: -1
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent, var(--primary), transparent)',
                    opacity: 0.2
                }}></div>
                <div className="bridge-pulse" style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-2px',
                    width: '5px',
                    height: '25%',
                    background: 'linear-gradient(to bottom, transparent, var(--primary), transparent)',
                    filter: 'blur(4px)',
                    animation: 'pulseFlow 6s linear infinite'
                }}></div>
            </div>

            {/* Interaction Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: isOpen ? 'var(--accent)' : 'var(--primary)',
                    border: 'none',
                    color: 'var(--bg-deep)',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                    boxShadow: isOpen ? '0 0 40px var(--accent)' : '0 0 30px var(--primary)',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    zIndex: 2
                }}
            >
                +
            </button>

            {/* Reveal Content */}
            <div style={{
                maxHeight: isOpen ? '1500px' : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                width: '100%',
                marginTop: isOpen ? '3rem' : '0'
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Launch New Initiative</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Select a project blueprint to begin your digital transformation</p>
                    </div>

                    <div className="project-blueprint-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {projects.map((project, index) => (
                            <div key={index} className="blueprint-card" style={{
                                padding: '2rem',
                                background: editingIndex === index ? 'rgba(45, 212, 191, 0.05)' : 'rgba(255,255,255,0.02)',
                                border: editingIndex === index ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                borderRadius: '24px',
                                textAlign: 'center',
                                transition: 'all 0.4s ease',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                {editingIndex === index ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                        <input
                                            value={project.icon}
                                            onChange={(e) => updateProject(index, 'icon', e.target.value)}
                                            style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: 'white', textAlign: 'center', fontSize: '2rem', width: '100%', borderRadius: '12px', padding: '0.5rem' }}
                                            placeholder="Emoji icon"
                                        />
                                        <input
                                            value={project.title}
                                            onChange={(e) => updateProject(index, 'title', e.target.value)}
                                            style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: 'white', fontWeight: 'bold', textAlign: 'center', padding: '0.8rem', borderRadius: '12px', width: '100%' }}
                                            placeholder="Project Title"
                                        />
                                        <textarea
                                            value={project.desc}
                                            onChange={(e) => updateProject(index, 'desc', e.target.value)}
                                            style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.85rem', width: '100%', borderRadius: '12px', padding: '0.8rem', resize: 'none' }}
                                            rows="2"
                                            placeholder="Description"
                                        />
                                        <input
                                            value={project.link || ''}
                                            onChange={(e) => updateProject(index, 'link', e.target.value)}
                                            style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: 'var(--primary)', fontSize: '0.8rem', textAlign: 'center', padding: '0.8rem', borderRadius: '12px', width: '100%' }}
                                            placeholder="URL Link (e.g. #contact)"
                                        />
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button
                                                onClick={() => handleSave(index)}
                                                className="btn-primary"
                                                style={{ flex: 1, padding: '0.8rem', fontSize: '0.8rem', borderRadius: '12px', marginTop: '0.5rem' }}
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const newProjects = projects.filter((_, i) => i !== index);
                                                    setProjects(newProjects);
                                                    localStorage.setItem('aster_project_blueprints', JSON.stringify(newProjects));
                                                    setEditingIndex(null);
                                                }}
                                                className="btn-outline"
                                                style={{ flex: 1, padding: '0.8rem', fontSize: '0.8rem', borderRadius: '12px', marginTop: '0.5rem', borderColor: 'var(--accent)', color: 'var(--accent)' }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {project.isNew && (
                                            <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--primary)', color: 'var(--bg-deep)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.6rem', fontWeight: '900', zIndex: 5 }}>NEW</div>
                                        )}
                                        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{project.icon}</div>
                                        <h4 style={{ color: 'white', fontSize: '1.25rem' }}>{project.title}</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', flexGrow: 1 }}>{project.desc}</p>

                                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                            <a
                                                href={project.link}
                                                className="btn-primary"
                                                style={{ flex: 2, padding: '0.7rem', fontSize: '0.75rem', borderRadius: '10px' }}
                                            >
                                                Launch
                                            </a>
                                            <button
                                                onClick={() => setEditingIndex(index)}
                                                className="btn-outline"
                                                style={{ flex: 1, padding: '0.7rem', fontSize: '0.75rem', borderRadius: '10px' }}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <div className="blueprint-hover-effect"></div>
                                    </>
                                )}
                            </div>
                        ))}

                        {/* Add New Project Card */}
                        <div
                            onClick={() => {
                                const newProject = { title: 'New Initiative', icon: '🚀', desc: 'Define your next vision', link: '#contact', isNew: true };
                                const newProjects = [...projects, newProject];
                                setProjects(newProjects);
                                setEditingIndex(newProjects.length - 1);
                            }}
                            className="blueprint-card add-new-card"
                            style={{
                                padding: '2.5rem',
                                background: 'rgba(255,255,255,0.01)',
                                border: '2px dashed var(--glass-border)',
                                borderRadius: '24px',
                                textAlign: 'center',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '320px',
                                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div className="add-new-glow"></div>
                            <div style={{
                                fontSize: '3rem',
                                color: 'var(--primary)',
                                padding: '1.5rem',
                                background: 'rgba(45, 212, 191, 0.05)',
                                borderRadius: '50%',
                                marginBottom: '1.5rem',
                                transition: '0.3s'
                            }} className="add-icon-wrapper">
                                +
                            </div>
                            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '800', letterSpacing: '0.05em' }}>Initiate New Blueprint</h4>
                            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>Strategic Expansion</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .add-new-card:hover {
                    border-color: var(--primary) !important;
                    background: rgba(45, 212, 191, 0.03) !important;
                    transform: translateY(-12px) scale(1.02) !important;
                }
                .add-new-card:hover .add-icon-wrapper {
                    transform: scale(1.1) rotate(90deg);
                    background: rgba(45, 212, 191, 0.15);
                    box-shadow: 0 0 30px rgba(45, 212, 191, 0.2);
                }
                .add-new-glow {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, var(--primary) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.5s ease;
                    pointer-events: none;
                }
                .add-new-card:hover .add-new-glow {
                    opacity: 0.05;
                }
                .blueprint-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--primary);
                    background: rgba(45, 212, 191, 0.05);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
                .blueprint-hover-effect {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, var(--primary) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                }
                .blueprint-card:hover .blueprint-hover-effect {
                    opacity: 0.1;
                }
                @keyframes auroraPulse {
                    from { opacity: 0.3; transform: translate(-50%, -50%) scale(0.9) rotate(0deg); }
                    to { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1) rotate(5deg); }
                }
                @keyframes pulseFlow {
                    0% { top: -25%; opacity: 0; }
                    20% { opacity: 0.8; }
                    80% { opacity: 0.8; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </section>
    );
};

export default ProjectBridge;
