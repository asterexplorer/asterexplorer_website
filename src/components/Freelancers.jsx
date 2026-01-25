import React, { useState } from 'react';

const Freelancers = () => {
    const [filter, setFilter] = useState('All');
    const [freelancers, setFreelancers] = useState([]);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        const fetchFreelancers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/freelancers');
                const data = await response.json();
                setFreelancers(data);
                setLoading(true);
            } catch (error) {
                console.error("Freelancers fetch failed:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFreelancers();
    }, []);

    const categories = ['All', 'Development', 'Design', 'Artificial Intelligence', 'Management'];

    const filteredFreelancers = filter === 'All'
        ? freelancers
        : freelancers.filter(f => f.category === filter);

    return (
        <section id="freelancers" className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Discover Elite <span className="text-gradient">Freelance Talent</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', marginBottom: '3rem' }}>
                        Connect with the top 3% of global digital experts to bring your most ambitious projects to life.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    padding: '0.6rem 1.5rem',
                                    borderRadius: '50px',
                                    border: '1px solid var(--glass-border)',
                                    background: filter === cat ? 'var(--primary)' : 'var(--bg-surface)',
                                    color: filter === cat ? 'var(--bg-deep)' : 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    transition: 'var(--transition-smooth)'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
                    {filteredFreelancers.map(freelancer => (
                        <div key={freelancer.id} className="card" style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <img
                                    src={freelancer.image}
                                    alt={freelancer.name}
                                    style={{ width: '70px', height: '70px', borderRadius: '18px', objectFit: 'cover', border: '2px solid var(--primary)' }}
                                />
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.2rem' }}>{freelancer.name}</h3>
                                    <div style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '600' }}>{freelancer.role}</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                {freelancer.skills.map(skill => (
                                    <span key={skill} style={{
                                        padding: '0.3rem 0.8rem',
                                        background: 'rgba(45, 212, 191, 0.05)',
                                        borderRadius: '8px',
                                        fontSize: '0.8rem',
                                        color: 'var(--text-secondary)',
                                        border: '1px solid rgba(45, 212, 191, 0.1)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Rate</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>{freelancer.rate}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Rating</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fbbf24' }}>★ {freelancer.rating}</div>
                                </div>
                            </div>

                            <button className="btn btn-outline" style={{ width: '100%', marginTop: '1.5rem', padding: '0.8rem' }}>
                                View Portfolio
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Freelancers;
