import React from 'react';

const Contact = () => {
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '', projectType: '' });
    const [status, setStatus] = React.useState({ type: '', msg: '' });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: 'info', msg: 'Processing your request...' });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success) {
                setStatus({ type: 'success', msg: 'Message sent successfully! We will get back to you soon.' });
                setFormData({ name: '', email: '', message: '', projectType: '' });
                setTimeout(() => setStatus({ type: '', msg: '' }), 5000);
            } else {
                setStatus({ type: 'error', msg: 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', msg: 'Could not connect to the server.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding" style={{ background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle Ambient Background */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(45, 212, 191, 0.05) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="reveal" style={{
                        fontSize: 'clamp(3rem, 7vw, 5rem)',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        letterSpacing: '-0.04em'
                    }}>
                        Start a <span className="text-gradient">Project</span>
                    </h2>
                    <p className="reveal" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Ready to elevate your digital presence? Fill out the form below and we'll start the conversation.
                    </p>
                </div>

                <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="card" style={{
                        padding: '4rem',
                        background: 'rgba(255, 255, 255, 0.01)',
                        border: '1px solid var(--glass-border)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 'var(--radius-xl)'
                    }}>
                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
                            {status.msg && (
                                <div style={{
                                    padding: '1rem',
                                    borderRadius: 'var(--radius-md)',
                                    background: status.type === 'success' ? 'rgba(45, 212, 191, 0.1)' : 'rgba(244, 63, 94, 0.1)',
                                    color: status.type === 'success' ? 'var(--primary)' : 'var(--accent)',
                                    textAlign: 'center',
                                    fontWeight: '600',
                                    border: `1px solid ${status.type === 'success' ? 'rgba(45, 212, 191, 0.2)' : 'rgba(244, 63, 94, 0.2)'}`
                                }}>
                                    {status.msg}
                                </div>
                            )}

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="form-input"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="form-input"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>How can we help?</label>
                                <textarea
                                    required
                                    rows="6"
                                    className="form-input"
                                    placeholder="Tell us about your project, goals, and timeline..."
                                    style={{ resize: 'none' }}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                                style={{ width: '100%', marginTop: '1rem' }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-tertiary)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Email</div>
                            <a href="mailto:asterexplorer@gmail.com" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', fontSize: '1.2rem' }}>asterexplorer@gmail.com</a>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-tertiary)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Location</div>
                            <div style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.2rem' }}>Chennai, India</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
