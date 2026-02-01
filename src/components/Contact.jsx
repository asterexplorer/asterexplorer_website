import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { useRef } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [terminalLogs, setTerminalLogs] = useState([]);

    const addLog = (msg) => {
        setTerminalLogs(prev => [...prev.slice(-4), `> ${new Date().toLocaleTimeString()}: ${msg}`]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: 'info', msg: 'ESTABLISHING CONNECTION...' });
        addLog('INITIATING_SECURE_HANDSHAKE...');

        try {
            addLog('UPLOADING_ENCRYPTED_PACKETS...');
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success) {
                addLog('TRANSMISSION_SUCCESSFUL: MISSION_RECEIVED');
                setStatus({ type: 'success', msg: 'MANIFEST RECEIVED. WE WILL CONTACT YOU SHORTLY.' });
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus({ type: '', msg: '' }), 6000);
            } else {
                addLog('CRITICAL_ERROR: PACKET_LOSS_DETECTED');
                setStatus({ type: 'error', msg: 'TRANSMISSION FAILED. PLEASE RETRY.' });
            }
        } catch {
            addLog('NETWORK_FATAL: DISCONNECTED_FROM_CORE');
            setStatus({ type: 'error', msg: 'NETWORK INSTABILITY DETECTED.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px', alignItems: 'start' }} className="contact-grid-modern">

                    {/* Info Side */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            style={{ color: 'var(--primary)', letterSpacing: '4px', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}
                        >
                            Contact
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            style={{ marginTop: '24px', marginBottom: '32px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                        >
                            Start a <span className="text-gradient">Project</span>
                        </motion.h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '48px' }}>
                            Ready to build the next frontier? Our engineering team is waiting for your mission manifest.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', border: '1px solid var(--glass-border)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Direct Channel</div>
                                    <a href="mailto:asterexplorer@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700 }}>asterexplorer@gmail.com</a>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', border: '1px solid var(--glass-border)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '2px' }}>HQ Location</div>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Chennai, India</span>
                                </div>
                            </div>
                        </div>

                        {/* Terminal Monitor */}
                        <div style={{
                            marginTop: '60px',
                            background: 'var(--text-primary)',
                            borderRadius: '16px',
                            padding: '24px',
                            fontFamily: 'var(--font-mono)',
                            boxShadow: 'var(--shadow-premium)'
                        }}>
                            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#10b981', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {terminalLogs.map((log, idx) => (
                                    <div key={idx} style={{ opacity: 1 - (terminalLogs.length - 1 - idx) * 0.2 }}>{log}</div>
                                ))}
                                {isSubmitting && <motion.div animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.5 }}>_</motion.div>}
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card-modern"
                        style={{ padding: '64px' }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '32px' }}>
                            <AnimatePresence>
                                {status.msg && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        style={{
                                            padding: '16px',
                                            borderRadius: '12px',
                                            background: status.type === 'success' ? 'rgba(0, 242, 255, 0.05)' : 'rgba(255, 0, 85, 0.05)',
                                            border: `1px solid ${status.type === 'success' ? 'var(--primary)' : 'var(--accent)'}`,
                                            color: status.type === 'success' ? 'var(--primary)' : 'var(--accent)',
                                            fontSize: '0.85rem',
                                            fontWeight: 800,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px'
                                        }}
                                    >
                                        {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                                        {status.msg}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        required
                                        className="form-input"
                                        placeholder="Identification (Full Name)"
                                        value={formData.name}
                                        onFocus={() => addLog('INPUT_FOCUS: ID_REQUEST')}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{ width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '16px', color: 'var(--text-primary)' }}
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        required
                                        className="form-input"
                                        placeholder="Communication Node (Email)"
                                        value={formData.email}
                                        onFocus={() => addLog('INPUT_FOCUS: COMM_LINK')}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        style={{ width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '16px', color: 'var(--text-primary)' }}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <textarea
                                    required
                                    rows="6"
                                    className="form-input"
                                    placeholder="Mission Manifest (Description of your vision...)"
                                    value={formData.message}
                                    onFocus={() => addLog('INPUT_FOCUS: MANIFEST_DRAFT')}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={{ width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '16px', color: 'var(--text-primary)', resize: 'none' }}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
                            >
                                {isSubmitting ? 'TRANSMITTING...' : <>INITIATE CONTACT <Send size={18} /></>}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
            <style>{`
                @media (max-width: 968px) {
                    .contact-grid-modern { grid-template-columns: 1fr !important; gap: 48px !important; }
                }
                .form-input:focus {
                    outline: none;
                    border-color: var(--primary) !important;
                    box-shadow: 0 0 15px var(--primary-glow);
                }
            `}</style>
        </section >
    );
};

export default Contact;
