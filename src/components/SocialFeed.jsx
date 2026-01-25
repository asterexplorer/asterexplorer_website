import React, { useState, useEffect } from 'react';

const SocialFeed = () => {
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/social/feed');
                const data = await response.json();
                setFeed(data);
            } catch (error) {
                console.error("Social feed error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFeed();
    }, []);

    return (
        <section id="social" className="section-padding" style={{ background: 'var(--bg-deep)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2rem', fontSize: '0.9rem', fontWeight: '600' }}>Live Updates</span>
                    <h2 style={{ marginTop: '1rem' }}>Social <span className="text-gradient">Activity</span></h2>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', color: 'var(--text-tertiary)' }}>Fetching satellite updates...</div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {feed.map((post) => (
                            <div key={post.id} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>{post.platform}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{post.timestamp}</div>
                                </div>
                                <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{post.user}</div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.5', flexGrow: 1 }}>{post.content}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-tertiary)', fontSize: '0.85rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    {post.likes} likes
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default SocialFeed;
