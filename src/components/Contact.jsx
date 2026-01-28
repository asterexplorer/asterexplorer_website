import React from 'react';

const Contact = () => {
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '', projectType: '' });
    const [status, setStatus] = React.useState({ type: '', msg: '' });
    const [isSubmitting, setIsSubmitting] = React.useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: 'info', msg: 'Initiating secure transmission...' });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success) {
                setStatus({ type: 'success', msg: 'Transmission successful. Agent will contact you shortly.' });
                setFormData({ name: '', email: '', message: '', projectType: '' });
            } else {
                setStatus({ type: 'error', msg: 'Signal interference. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', msg: 'Terminal offline. Please check your connection.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" style={{ padding: '2rem 0 1rem', background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
            {/* Multiple Watermark Layers */}
            <div className="watermark-container" style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.4 }}>
                <div className="watermark-scroll-left" style={{
                    position: 'absolute',
                    top: '10%',
                    fontSize: '15vw',
                    fontWeight: '900',
                    color: 'rgba(255,255,255,0.02)',
                    whiteSpace: 'nowrap',
                    fontFamily: "'Space Grotesk', sans-serif",
                    textTransform: 'uppercase'
                }}>
                    Aster explorer tech &nbsp; Aster explorer tech &nbsp; Aster explorer tech &nbsp; Aster explorer tech
                </div>
                <div className="watermark-scroll-right" style={{
                    position: 'absolute',
                    top: '45%',
                    fontSize: '15vw',
                    fontWeight: '900',
                    color: 'rgba(255,255,255,0.015)',
                    whiteSpace: 'nowrap',
                    fontFamily: "'Space Grotesk', sans-serif",
                    textTransform: 'uppercase'
                }}>
                    Aster explorer tech &nbsp; Aster explorer tech &nbsp; Aster explorer tech &nbsp; Aster explorer tech
                </div>
                <div className="watermark-scroll-left" style={{
                    position: 'absolute',
                    bottom: '5%',
                    fontSize: '15vw',
                    fontWeight: '900',
                    color: 'rgba(255,255,255,0.02)',
                    whiteSpace: 'nowrap',
                    fontFamily: "'Space Grotesk', sans-serif",
                    textTransform: 'uppercase'
                }}>
                    Aster explorer tech &nbsp; Aster explorer tech &nbsp; Aster explorer tech &nbsp; Aster explorer tech
                </div>
            </div>

            <style>{`
                @keyframes scrollLeft {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes scrollRight {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
                @keyframes morph {
                    0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
                    25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
                    50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
                    75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
                    100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    50% { transform: scale(1.2); opacity: 0.3; }
                    100% { transform: scale(0.8); opacity: 0.5; }
                }
                .watermark-scroll-left {
                    animation: scrollLeft 60s linear infinite;
                }
                .watermark-scroll-right {
                    animation: scrollRight 60s linear infinite;
                }
                .pulse-dot {
                    animation: pulse-ring 2s ease-in-out infinite;
                }
                .form-input:focus {
                    outline: none;
                    background: rgba(255,255,255,0.06) !important;
                    border-color: var(--primary) !important;
                    box-shadow: 0 0 20px rgba(45, 212, 191, 0.1);
                    transform: translateY(-2px);
                }
                .form-input::placeholder {
                    color: rgba(255,255,255,0.3);
                }
                .submit-btn-glow:hover {
                    box-shadow: 0 15px 40px rgba(45, 212, 191, 0.5);
                    transform: translateY(-3px) scale(1.02);
                }
            `}</style>

            {/* Premium Background Effects */}
            <div className="contact-effects" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <div className="floating-shape" style={{ top: '10%', left: '5%', width: '150px', height: '150px', background: 'var(--primary)', opacity: 0.1, filter: 'blur(40px)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', animation: 'morph 15s linear infinite alternate' }}></div>
                <div className="floating-shape" style={{ bottom: '15%', right: '10%', width: '180px', height: '180px', background: 'var(--secondary)', opacity: 0.08, filter: 'blur(50px)', borderRadius: '50% 50% 20% 80% / 25% 80% 20% 75%', animation: 'morph 12s linear infinite' }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div className="reveal" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.5rem 1.2rem',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '100px',
                        border: '1px solid var(--glass-border)',
                        marginBottom: '1.5rem',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <div className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 15px var(--primary)' }}></div>
                        <span style={{
                            color: 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2rem',
                            fontSize: '0.75rem',
                            fontWeight: '800'
                        }}>Partnership Proposal v3.0</span>
                    </div>

                    <h2 className="reveal" style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: '900',
                        lineHeight: '1.1',
                        fontFamily: "'Space Grotesk', sans-serif",
                        letterSpacing: '-0.03em'
                    }}>
                        Initialize Your <span className="text-gradient">Expansion</span>
                    </h2>
                    <p className="reveal" style={{ color: 'var(--text-tertiary)', maxWidth: '650px', margin: '1.5rem auto 0', fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.8 }}>
                        Our architectural team is ready to map your digital trajectory. Submit your manifest for immediate analysis.
                    </p>
                </div>

                <div className="reveal" style={{ maxWidth: '850px', margin: '0 auto' }}>
                    <div className="glass-card" style={{
                        padding: '4rem',
                        background: 'rgba(255,255,255,0.01)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '32px',
                        backdropFilter: 'blur(40px)',
                        boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Internal Glow */}
                        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '200px', height: '200px', background: 'var(--primary)', opacity: 0.05, filter: 'blur(60px)', pointerEvents: 'none' }}></div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
                            {status.msg && (
                                <div style={{
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    background: status.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)',
                                    border: `1px solid ${status.type === 'success' ? '#10b981' : '#f43f5e'}`,
                                    color: status.type === 'success' ? '#10b981' : '#f43f5e',
                                    textAlign: 'center',
                                    fontWeight: '600'
                                }}>
                                    {status.msg}
                                </div>
                            )}



                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                                <div className="input-group">
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '1rem',
                                        fontSize: '0.85rem',
                                        fontWeight: '700',
                                        color: 'var(--primary)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.15em',
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        opacity: 0.9
                                    }}>Lead Architect Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="form-input"
                                        style={{
                                            width: '100%',
                                            padding: '1.2rem 1.5rem',
                                            borderRadius: '16px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            color: 'white',
                                            fontSize: '1rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                </div>
                                <div className="input-group">
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '1rem',
                                        fontSize: '0.85rem',
                                        fontWeight: '700',
                                        color: 'var(--primary)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.15em',
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        opacity: 0.9
                                    }}>Transmission Email</label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="form-input"
                                        style={{
                                            width: '100%',
                                            padding: '1.2rem 1.5rem',
                                            borderRadius: '16px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            color: 'white',
                                            fontSize: '1rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label style={{
                                    display: 'block',
                                    marginBottom: '1rem',
                                    fontSize: '0.85rem',
                                    fontWeight: '700',
                                    color: 'var(--primary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    opacity: 0.9
                                }}>Project Specification & Goals</label>
                                <textarea
                                    placeholder="Describe your vision, technical requirements, and target timeline..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows="6"
                                    className="form-input"
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem 1.5rem',
                                        borderRadius: '16px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'white',
                                        resize: 'none',
                                        fontSize: '1rem',
                                        lineHeight: '1.6',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    width: 'fit-content',
                                    alignSelf: 'center',
                                    padding: '1.2rem 4rem',
                                    fontSize: '1rem',
                                    borderRadius: '100px',
                                    background: 'var(--primary)',
                                    color: 'var(--bg-deep',
                                    fontWeight: '900',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    boxShadow: '0 10px 30px rgba(45, 212, 191, 0.4)',
                                    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                                    marginTop: '1rem',
                                    fontFamily: "'Space Grotesk', sans-serif"
                                }}
                                disabled={isSubmitting}
                                className="submit-btn-glow"
                            >
                                {isSubmitting ? 'Transmitting...' : 'Authorize Proposal'}
                            </button>
                        </form>
                    </div>

                    <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', textAlign: 'center' }}>
                        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', border: '1px solid var(--glass-border)' }}>📩</div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '0.2rem' }}>Encrypted Link</div>
                                <a href="mailto:Asterexplorer@gmail.com" style={{ color: 'var(--text-primary)', fontWeight: '700', textDecoration: 'none', fontSize: '1.1rem' }}>Asterexplorer@gmail.com</a>
                            </div>
                        </div>
                        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', border: '1px solid var(--glass-border)' }}>📍</div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '0.2rem' }}>Geospatial Node</div>
                                <span style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.1rem' }}>Chennai, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Contact;
