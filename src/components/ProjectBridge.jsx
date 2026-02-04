
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Rocket, Terminal, Layers, Layout, Save, Trash2, Edit2 } from 'lucide-react';

const ProjectBridge = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const initialProjects = [
        { title: 'Full Stack App', icon: <Terminal size={24} />, desc: 'Custom enterprise solutions with high-performance architectures.', link: '#contact' },
        { title: 'AI Integration', icon: <Rocket size={24} />, desc: 'Machine learning workflows and neural automation cores.', link: '#contact' },
        { title: 'Mobile App', icon: <Plus size={24} />, desc: 'iOS & Android excellence for global-scale impact.', link: '#contact' },
        { title: 'UI/UX Design', icon: <Layout size={24} />, desc: 'Premium user experiences with surgical precision.', link: '#contact' }
    ];

    const [projects, setProjects] = useState(() => {
        const saved = localStorage.getItem('aster_project_blueprints');
        return saved ? JSON.parse(saved) : initialProjects;
    });

    const handleSave = () => {
        setEditingIndex(null);
        localStorage.setItem('aster_project_blueprints', JSON.stringify(projects));
    };

    const updateProject = (index, field, value) => {
        const newProjects = [...projects];
        newProjects[index] = { ...newProjects[index], [field]: value };
        setProjects(newProjects);
    };

    return (
        <section style={{ padding: '40px 0', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: isOpen ? 'var(--accent)' : 'var(--primary)',
                    color: 'var(--bg-deep)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: isOpen ? '0 0 30px var(--accent)' : '0 0 30px var(--primary)',
                    zIndex: 20
                }}
            >
                {isOpen ? <X size={28} /> : <Plus size={28} />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{ width: '100%', overflow: 'hidden', marginTop: '48px' }}
                    >
                        <div className="container">
                            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Launch New <span className="text-gradient">Initiative</span></h3>
                                <p style={{ color: 'var(--text-tertiary)' }}>Define or modify your project blueprints below</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="card-modern"
                                        style={{ padding: '40px', border: editingIndex === index ? '1px solid var(--primary)' : '1px solid var(--glass-border)' }}
                                    >
                                        {editingIndex === index ? (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                                <input
                                                    value={project.title}
                                                    onChange={(e) => updateProject(index, 'title', e.target.value)}
                                                    placeholder="Title"
                                                    style={{ background: 'var(--bg-surface)', border: '1px solid var(--glass-border)', color: 'white', padding: '12px', borderRadius: '8px' }}
                                                />
                                                <textarea
                                                    value={project.desc}
                                                    onChange={(e) => updateProject(index, 'desc', e.target.value)}
                                                    placeholder="Description"
                                                    style={{ background: 'var(--bg-surface)', border: '1px solid var(--glass-border)', color: 'white', padding: '12px', borderRadius: '8px', minHeight: '100px' }}
                                                />
                                                <div style={{ display: 'flex', gap: '12px' }}>
                                                    <button onClick={() => handleSave(index)} className="btn btn-primary" style={{ flex: 1, padding: '8px' }}><Save size={18} /></button>
                                                    <button onClick={() => {
                                                        const np = projects.filter((_, i) => i !== index);
                                                        setProjects(np);
                                                        localStorage.setItem('aster_project_blueprints', JSON.stringify(np));
                                                        setEditingIndex(null);
                                                    }} className="btn btn-outline" style={{ flex: 1, padding: '8px', borderColor: 'var(--accent)', color: 'var(--accent)' }}><Trash2 size={18} /></button>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div style={{ color: 'var(--primary)', marginBottom: '24px' }}>{project.icon || <Layers size={24} />}</div>
                                                <h4 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{project.title}</h4>
                                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '32px', flexGrow: 1 }}>{project.desc}</p>
                                                <div style={{ display: 'flex', gap: '12px' }}>
                                                    <a href={project.link} className="btn btn-primary" style={{ flex: 2, padding: '10px' }}>LAUNCH</a>
                                                    <button onClick={() => setEditingIndex(index)} className="btn btn-outline" style={{ flex: 1, padding: '10px' }}><Edit2 size={16} /></button>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                ))}

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => {
                                        const np = [...projects, { title: 'New Blueprint', desc: 'Define your mission', link: '#contact' }];
                                        setProjects(np);
                                        setEditingIndex(np.length - 1);
                                    }}
                                    style={{
                                        border: '2px dashed var(--glass-border)',
                                        borderRadius: '24px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minHeight: '350px',
                                        cursor: 'pointer',
                                        color: 'var(--text-tertiary)'
                                    }}
                                >
                                    <Plus size={48} />
                                    <span style={{ marginTop: '16px', fontWeight: 800, fontSize: '0.9rem' }}>INITIATE BLUEPRINT</span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectBridge;
