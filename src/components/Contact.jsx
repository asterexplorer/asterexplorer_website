import React from 'react';

const Contact = () => {
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '', projectType: '' });
    const [status, setStatus] = React.useState({ type: '', msg: '' });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const projectTypes = [
        { id: 'web', label: 'Web Platform', icon: '🌐' },
        { id: 'mobile', label: 'Mobile App', icon: '📱' },
        { id: 'ai', label: 'AI Integration', icon: '🤖' },
        { id: 'design', label: 'Brand UI/UX', icon: '🎨' }
    ];

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
        <section id="contact" style={{ padding: '6rem 0', background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
            <div className="glow-bg" style={{ top: '10%', right: '-10%', width: '600px', height: '600px', opacity: '0.1' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
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
                        }}>Partnership Proposal</span>
                    </div>

                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', lineHeight: '1.1' }}>
                        Start Your <span className="text-gradient">Project</span>
                    </h2>
                    <p style={{ color: 'var(--text-tertiary)', maxWidth: '600px', margin: '1.5rem auto 0', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Ready to scale? Fill out the proposal form below and our strategy team will reach out within 2 hours.
                    </p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="card" style={{ padding: '3.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '24px', backdropFilter: 'blur(20px)' }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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

                            <div>
                                <label style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', display: 'block' }}>I am interested in...</label>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
                                    {projectTypes.map(type => (
                                        <button
                                            key={type.id}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, projectType: type.id })}
                                            style={{
                                                padding: '1rem',
                                                borderRadius: '12px',
                                                background: formData.projectType === type.id ? 'var(--primary)' : 'rgba(255,255,255,0.03)',
                                                border: formData.projectType === type.id ? 'none' : '1px solid var(--glass-border)',
                                                color: formData.projectType === type.id ? 'var(--bg-deep)' : 'var(--text-secondary)',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '0.6rem',
                                                fontWeight: '700',
                                                fontSize: '0.9rem'
                                            }}
                                        >
                                            <span style={{ fontSize: '1.2rem' }}>{type.icon}</span>
                                            {type.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div className="input-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-secondary)' }}>Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="form-input"
                                        style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white' }}
                                    />
                                </div>
                                <div className="input-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-secondary)' }}>Work Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="form-input"
                                        style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white' }}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-secondary)' }}>Project Details</label>
                                <textarea
                                    placeholder="Tell us about your project goals, timeline, and budget..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows="5"
                                    className="form-input"
                                    style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white', resize: 'vertical' }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '1.2rem',
                                    fontSize: '1rem',
                                    borderRadius: '12px',
                                    background: 'var(--primary)',
                                    color: 'var(--bg-deep)',
                                    fontWeight: '800',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    boxShadow: '0 10px 30px rgba(45, 212, 191, 0.3)',
                                    transition: 'transform 0.2s',
                                    marginTop: '1rem'
                                }}
                                disabled={isSubmitting}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                {isSubmitting ? 'Sending Proposal...' : 'Send Proposal'}
                            </button>
                        </form>
                    </div>

                    <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                            <span style={{ fontSize: '1.2rem' }}>📩</span>
                            <div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Email Us</div>
                                <a href="mailto:hello@aster.dev" style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}>hello@aster.dev</a>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                            <span style={{ fontSize: '1.2rem' }}>📍</span>
                            <div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Location</div>
                                <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Chennai HQ / Global-Remote</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Contact;
