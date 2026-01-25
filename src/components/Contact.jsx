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
        <section id="contact" style={{ padding: '12rem 0', background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
            <div className="glow-bg" style={{ top: '10%', right: '-10%', width: '600px', height: '600px', opacity: '0.1' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.3rem', fontSize: '0.9rem', fontWeight: '800' }}>Partnership HUB</span>
                    <h2 style={{ marginTop: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Let's Build the <span className="text-gradient">Future Together.</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1.5rem auto 0', fontSize: '1.1rem' }}>
                        Ready to scale? Select your project type below and our strategy team will reach out within 2 hours.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                    {/* Left: Quick Contact & FAQ */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            <div className="card" style={{ padding: '2rem', border: '1px solid rgba(45, 212, 191, 0.1)', background: 'rgba(10, 10, 15, 0.5)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ fontSize: '2rem' }}>⚡</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Rapid Response</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>98% of inquiries answered within 120 minutes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card" style={{ padding: '2rem', border: '1px solid rgba(147, 51, 234, 0.1)', background: 'rgba(10, 10, 15, 0.5)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ fontSize: '2rem' }}>🔒</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Secure & Confidential</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>All discussions are protected by standard NDA protocols.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '2rem', borderRadius: '24px', background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.05), rgba(147, 51, 234, 0.05))', border: '1px solid var(--glass-border)' }}>
                            <h4 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Direct Channels</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <a href="mailto:hello@aster.dev" style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                                    <span>📩</span> hello@aster.dev
                                </a>
                                <div style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                                    <span>📍</span> Chennai HQ / Global-Remote
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Master Form */}
                    <div className="card" style={{ padding: '3.5rem', transform: 'none', background: 'var(--bg-surface)', border: '1px solid var(--glass-border)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {status.msg && (
                                <div style={{
                                    padding: '1.2rem',
                                    borderRadius: '12px',
                                    background: status.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)',
                                    border: `1px solid ${status.type === 'success' ? '#10b981' : '#f43f5e'}`,
                                    color: status.type === 'success' ? '#10b981' : '#f43f5e',
                                    textAlign: 'center',
                                    fontWeight: '700'
                                }}>
                                    {status.msg}
                                </div>
                            )}

                            <div>
                                <label style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>Project Focus</label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    {projectTypes.map(type => (
                                        <button
                                            key={type.id}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, projectType: type.id })}
                                            style={{
                                                padding: '1rem',
                                                borderRadius: '12px',
                                                background: formData.projectType === type.id ? 'rgba(45, 212, 191, 0.1)' : 'rgba(255,255,255,0.03)',
                                                border: formData.projectType === type.id ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                                                color: formData.projectType === type.id ? 'var(--primary)' : 'var(--text-secondary)',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                fontWeight: '600'
                                            }}
                                        >
                                            <span style={{ fontSize: '1.5rem' }}>{type.icon}</span>
                                            {type.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        style={inputStyle}
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        placeholder="Work Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        style={inputStyle}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <textarea
                                    placeholder="Brief project description & goals..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows="4"
                                    style={{ ...inputStyle, resize: 'none' }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', padding: '1.4rem', fontSize: '1.2rem', borderRadius: '16px' }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'SECURELY SENDING...' : 'INITIATE CONTACT'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const inputStyle = {
    width: '100%',
    padding: '1.2rem',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid var(--glass-border)',
    color: 'white',
    fontFamily: 'inherit',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    outline: 'none'
};

export default Contact;
