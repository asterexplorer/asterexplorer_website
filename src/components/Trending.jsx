import React, { useState, useEffect } from 'react';

const Trending = () => {
    const [trends, setTrends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrends = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/trending');
                const data = await response.json();
                setTrends(data);
            } catch (error) {
                console.error("Trend fetching error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTrends();
    }, []);

    return (
        <section id="trending" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                    <div>
                        <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2rem', fontSize: '0.9rem', fontWeight: '600' }}>Market Analysis</span>
                        <h2 style={{ marginTop: '1rem' }}>Global <span className="text-gradient">Trends</span></h2>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>Updated real-time</div>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                            <div style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                            <div style={{ width: '6px', height: '6px', background: 'var(--glass-border)', borderRadius: '50%' }}></div>
                            <div style={{ width: '6px', height: '6px', background: 'var(--glass-border)', borderRadius: '50%' }}></div>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '4rem' }}>
                        <div className="trend-loader"></div>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {trends.map((trend) => (
                            <div key={trend.id} className="card trend-card" style={{
                                padding: 0,
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                background: 'rgba(15, 23, 42, 0.3)',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '16px'
                            }}>
                                <div style={{ width: '100%', height: '180px', position: 'relative', overflow: 'hidden' }}>
                                    <img
                                        src={trend.image}
                                        alt={trend.topic}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: 0.7,
                                            transition: 'transform 0.5s ease'
                                        }}
                                        className="trend-img"
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.95))' }}></div>
                                    <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 2 }}>
                                        <div style={{ color: '#10b981', fontWeight: '800', fontSize: '0.85rem', background: 'rgba(16, 185, 129, 0.15)', padding: '0.4rem 0.8rem', borderRadius: '8px', backdropFilter: 'blur(8px)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                            {trend.growth}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: '2rem', position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ marginBottom: '1.2rem' }}>
                                        <span style={{
                                            fontSize: '0.65rem',
                                            fontWeight: '800',
                                            color: (trend.status === 'Explosive' || trend.status === 'Critical') ? '#ff4757' : 'var(--primary)',
                                            background: (trend.status === 'Explosive' || trend.status === 'Critical') ? 'rgba(255, 71, 87, 0.1)' : 'rgba(45, 212, 191, 0.1)',
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '100px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            border: '1px solid transparent'
                                        }}>
                                            {trend.status}
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>{trend.topic}</h3>
                                    <div style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{trend.category}</div>

                                    <div style={{ marginTop: 'auto', paddingTop: '2rem', height: '2px', background: 'rgba(255,255,255,0.05)', position: 'relative' }}>
                                        <div style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            height: '100%',
                                            width: parseInt(trend.growth) > 600 ? '95%' : parseInt(trend.growth) > 300 ? '75%' : parseInt(trend.growth) > 150 ? '50%' : '30%',
                                            background: 'var(--primary)',
                                            boxShadow: '0 0 15px var(--primary)'
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
                .trend-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    border-color: var(--primary);
                }
                .trend-loader {
                    width: 30px;
                    height: 30px;
                    border: 2px solid var(--glass-border);
                    border-top-color: var(--primary);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default Trending;
