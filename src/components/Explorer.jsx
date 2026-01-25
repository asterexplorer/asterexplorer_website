import React, { useState, useEffect } from 'react';

const Explorer = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/explorer/files');
                const data = await response.json();
                setFiles(data);
            } catch (error) {
                console.error("Error fetching files:", error);
                setFiles([
                    { id: 1, name: "Neural_Link.sys", size: "2.4 MB", type: "Core", date: "Jan 24, 2026" },
                    { id: 2, name: "Aster_UI_v2.fig", size: "185 KB", type: "Design", date: "Jan 23, 2026" },
                    { id: 3, name: "Security_Protocol.key", size: "12 KB", type: "Security", date: "Jan 24, 2026" },
                    { id: 4, name: "Cloud_Vector.svg", size: "45 KB", type: "Asset", date: "Jan 22, 2026" },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchFiles();
    }, []);

    return (
        <section id="explorer" style={{ padding: '10rem 0', background: 'var(--bg-deep)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                    <div>
                        <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Management Center</div>
                        <h2 style={{ maxWidth: '400px' }}>Your Secure <span className="text-gradient">Aster Cloud</span></h2>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div className="card" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: '16px', background: 'var(--bg-surface)' }}>
                            <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }}></div>
                            <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Server: Tokyo-North</span>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {loading ? (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '100px' }}>
                            <div className="loader"></div>
                        </div>
                    ) : (
                        files.map(file => (
                            <div key={file.id} className="card" style={{ padding: '1.5rem', position: 'relative', background: 'var(--bg-surface)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '14px',
                                        background: 'rgba(45, 212, 191, 0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--primary)',
                                        border: '1.5px solid rgba(45, 212, 191, 0.1)'
                                    }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                    </div>
                                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                    </button>
                                </div>

                                <div style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{file.name}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Updated {file.date}</div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', color: 'var(--text-secondary)', fontWeight: '600', border: '1px solid var(--glass-border)' }}>{file.type}</span>
                                        <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', color: 'var(--text-secondary)', fontWeight: '600', border: '1px solid var(--glass-border)' }}>{file.size}</span>
                                    </div>
                                    <button style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        Open
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <style>{`
                .loader {
                    width: 40px;
                    height: 40px;
                    border: 3px solid #f1f5f9;
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

export default Explorer;
