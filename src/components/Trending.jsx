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
                // Fallback data in case API is offline
                setTrends([
                    { id: 1, topic: 'Cognitive Computing', growth: '+450%', status: 'Explosive', category: 'Artificial Intelligence', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80' },
                    { id: 2, topic: 'Web3 Ecosystems', growth: '+210%', status: 'Rising', category: 'Blockchain', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80' },
                    { id: 3, topic: 'Quantum Networking', growth: '+890%', status: 'Critical', category: 'Infrastructure', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80' }
                ]);
            } finally {
                setLoading(false);
            }
        };
        fetchTrends();
    }, []);

    return (
        <section id="trending" className="section-padding" style={{ background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
            <div className="glow-bg" style={{ top: '-10%', left: '50%', transform: 'translateX(-50%)', opacity: '0.03' }}></div>

            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <span style={{ width: '30px', height: '2px', background: 'var(--primary)' }}></span>
                            <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.3rem', fontSize: '0.8rem', fontWeight: '800' }}>Intelligence Feed</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Market <span className="text-gradient">Intelligence</span></h2>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            padding: '0.5rem 1rem',
                            background: 'rgba(16, 185, 129, 0.05)',
                            borderRadius: '100px',
                            border: '1px solid rgba(16, 185, 129, 0.1)',
                            color: '#10b981',
                            fontSize: '0.75rem',
                            fontWeight: '800',
                            letterSpacing: '0.1em'
                        }}>
                            <span className="pulse-dot"></span>
                            LIVE ANALYSIS ACTIVE
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '10rem 0' }}>
                        <div className="trend-loader"></div>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {trends.map((trend) => (
                            <div key={trend.id} className="card trend-card" style={{
                                padding: 0,
                                background: 'rgba(15, 23, 42, 0.4)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                            }}>
                                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                                    <img
                                        src={trend.image}
                                        alt={trend.topic}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, transition: 'transform 0.6s ease' }}
                                        className="trend-img"
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(11, 11, 15, 0.95))' }}></div>
                                    <div style={{ position: 'absolute', top: '25px', right: '25px' }}>
                                        <div style={{
                                            background: 'rgba(16, 185, 129, 0.15)',
                                            backdropFilter: 'blur(10px)',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '10px',
                                            color: '#10b981',
                                            fontWeight: '800',
                                            fontSize: '0.85rem',
                                            border: '1px solid rgba(16, 185, 129, 0.2)'
                                        }}>
                                            {trend.growth}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: '2.5rem' }}>
                                    <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.5rem' }}>
                                        <span style={{
                                            fontSize: '0.65rem',
                                            fontWeight: '900',
                                            color: (trend.status === 'Explosive' || trend.status === 'Critical') ? '#ff4757' : 'var(--primary)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em'
                                        }}>{trend.status}</span>
                                        <span style={{ color: 'var(--text-tertiary)', fontSize: '0.65rem' }}>•</span>
                                        <span style={{ color: 'var(--text-tertiary)', fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{trend.category}</span>
                                    </div>

                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '800' }}>{trend.topic}</h3>

                                    <div style={{ position: 'relative', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginTop: '2.5rem' }}>
                                        <div style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            height: '100%',
                                            width: parseInt(trend.growth) > 600 ? '95%' : '60%',
                                            background: 'var(--primary)',
                                            borderRadius: '10px',
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
                    transform: translateY(-10px);
                    border-color: var(--primary);
                    box-shadow: 0 40px 80px rgba(0,0,0,0.5);
                    background: rgba(15, 23, 42, 0.6);
                }
                .trend-card:hover .trend-img {
                    transform: scale(1.1);
                    opacity: 0.8;
                }
                .trend-loader {
                    width: 40px;
                    height: 40px;
                    border: 3px solid rgba(45, 212, 191, 0.1);
                    border-top-color: var(--primary);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto;
                }
                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: #10b981;
                    border-radius: 50%;
                    animation: pulse 1.5s infinite;
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
                    70% { transform: scale(1.2); opacity: 0.5; box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
                    100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default Trending;
