import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Transmitting...');
        setTimeout(() => {
            setStatus('Subscribed to Aster Network.');
            setEmail('');
        }, 1500);
    };

    return (
        <section id="newsletter" style={{ padding: '8rem 0', background: 'var(--bg-surface)' }}>
            <div className="container">
                <div className="card" style={{
                    padding: '4rem 2rem',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)',
                    border: '1px solid var(--glass-border)',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Executive <span className="text-gradient">Briefing</span></h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto' }}>
                        Join a network of 20,000+ senior executives. Receive weekly strategic analysis on market shifts and emerging enterprise technologies.
                    </p>

                    <form onSubmit={handleSubmit} style={{
                        display: 'flex',
                        gap: '1rem',
                        maxWidth: '500px',
                        margin: '0 auto',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                flex: '1',
                                minWidth: '250px',
                                padding: '1.2rem 1.5rem',
                                borderRadius: '100px',
                                background: 'rgba(0,0,0,0.2)',
                                border: '1px solid var(--glass-border)',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                        <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem' }}>
                            {status || 'Subscribe Now'}
                        </button>
                    </form>
                    {status && <div style={{ marginTop: '1rem', color: 'var(--primary)', fontWeight: '600' }}>{status}</div>}
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
