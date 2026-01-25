import React from 'react';

const Stats = () => {
    const stats = [
        { label: 'Successful Launches', value: '450+', icon: '🚀' },
        { label: 'Expert Talent', value: '12k', icon: '👤' },
        { label: 'Lines of Code', value: '8.4M', icon: '💻' },
        { label: 'Global Offices', value: '12', icon: '🌍' }
    ];

    return (
        <section style={{ padding: '4rem 0', background: 'var(--bg-deep)', borderY: '1px solid var(--glass-border)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                    {stats.map((s, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{s.icon}</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.2rem' }}>{s.value}</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
