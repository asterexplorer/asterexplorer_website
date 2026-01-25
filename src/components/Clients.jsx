import React from 'react';

const Clients = () => {
    const clients = [
        { name: "NovaTech Solutions", industry: "AI & Robotics", logo: "⚛️" },
        { name: "Quantum Labs", industry: "Research", logo: "🌀" },
        { name: "Stellar Dynamics", industry: "Aerospace", logo: "🛰️" },
        { name: "Vector Systems", industry: "Cloud Infrastructure", logo: "📐" },
        { name: "Solar Media", industry: "Digital Marketing", logo: "☀️" },
        { name: "Pulse Finance", industry: "Fintech", logo: "📈" }
    ];

    return (
        <section id="clients" className="section-padding" style={{ background: 'var(--bg-deep)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2rem', fontSize: '0.9rem', fontWeight: '600' }}>Trusted Partners</span>
                    <h2 style={{ marginTop: '1rem' }}>Global <span className="text-gradient">Clients</span></h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {clients.map((client, index) => (
                        <div key={index} className="card" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '3rem 2rem',
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--glass-border)'
                        }}>
                            <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem', opacity: 0.8 }}>{client.logo}</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{client.name}</h3>
                            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>{client.industry}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
