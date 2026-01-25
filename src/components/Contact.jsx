import React from 'react';

const Contact = () => {
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
    const [status, setStatus] = React.useState({ type: '', msg: '' });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: 'info', msg: 'Sending message...' });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success) {
                setStatus({ type: 'success', msg: 'Message sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', msg: 'Failed to send message. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', msg: 'Connection error. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" style={{ padding: '10rem 0', background: 'var(--bg-deep)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem' }}>

                    {/* Contact Info Column */}
                    <div>
                        <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Strategic Consultation</div>
                        <h2 style={{ marginBottom: '2.5rem' }}>Partner with us to accelerate <span className="text-gradient">Business ROI.</span></h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(45, 212, 191, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: '600' }}>EMAIL ME AT</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>hello@aster.dev</div>
                                </div>
                            </div>

                            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(45, 212, 191, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: '600' }}>LOCATION</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>Chennai / Remote</div>
                                </div>
                            </div>

                            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(45, 212, 191, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: '600' }}>AVAILABILITY</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>Full-time Freelance</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="card" style={{ padding: '3rem', background: 'var(--bg-surface)' }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {status.msg && (
                                <div style={{
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    background: status.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)',
                                    border: `1px solid ${status.type === 'success' ? '#10b981' : '#f43f5e'}`,
                                    color: status.type === 'success' ? '#10b981' : '#f43f5e',
                                    fontSize: '0.9rem',
                                    fontWeight: '600'
                                }}>
                                    {status.msg}
                                </div>
                            )}
                            <div>
                                <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'block' }}>YOUR NAME</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1.5px solid var(--glass-border)',
                                        color: 'white',
                                        fontFamily: 'inherit',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'block' }}>BUSINESS EMAIL</label>
                                <input
                                    type="email"
                                    placeholder="yourname@corporation.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1.5px solid var(--glass-border)',
                                        color: 'white',
                                        fontFamily: 'inherit',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'block' }}>INQUIRY DETAILS</label>
                                <textarea
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows="5"
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1.5px solid var(--glass-border)',
                                        color: 'white',
                                        fontFamily: 'inherit',
                                        fontSize: '1rem',
                                        resize: 'none'
                                    }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', padding: '1.2rem', marginTop: '1rem' }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
