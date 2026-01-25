import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/testimonials');
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error("Testimonials fetch error:", error);
            }
        };
        fetchTestimonials();
    }, []);

    return (
        <section id="testimonials" className="section-padding" style={{ background: 'var(--bg-deep)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2rem', fontSize: '0.9rem', fontWeight: '600' }}>Success Stories</span>
                    <h2 style={{ marginTop: '1rem' }}>What Our <span className="text-gradient">Partners Say</span></h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    {testimonials.map((t) => (
                        <div key={t.id} className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ color: '#fbbf24', fontSize: '1.2rem' }}>
                                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                            </div>
                            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: '1.7', flexGrow: 1 }}>
                                "{t.content}"
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)' }}
                                />
                                <div>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{t.name}</h4>
                                    <div style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
