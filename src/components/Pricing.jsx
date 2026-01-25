import React, { useState } from 'react';

const Pricing = () => {
    const [loading, setLoading] = useState(null);

    const plans = [
        {
            name: "Corporate Presence",
            price: 799,
            description: "A professional 5-page business website designed to establish authority.",
            features: ["Custom UI/UX Design", "Responsive Layout", "SEO Foundation", "Contact Integration"],
            amount: 79900 // In cents
        },
        {
            name: "E-Commerce Suite",
            price: 1899,
            description: "A fully functional online store with secure payment and inventory management.",
            features: ["Product Catalog", "Stripe/PayPal Integration", "User Accounts", "Performance Shield"],
            amount: 189900,
            featured: true
        },
        {
            name: "Enterprise Custom",
            price: 4999,
            description: "Bespoke digital ecosystems with custom functionality and headless architecture.",
            features: ["Headless CMS", "API Integrations", "Advanced Security Suite", "24/7 Strategic Support"],
            amount: 499900
        }
    ];

    const handleCheckout = async (planName, amount) => {
        setLoading(planName);
        try {
            const response = await fetch('http://localhost:5000/api/payments/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ service_name: planName, amount: amount })
            });
            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                alert("Payment system offline. Please try again later.");
            }
        } catch (error) {
            console.error("Checkout error:", error);
            alert("Connection error. Ensure backend is running.");
        } finally {
            setLoading(null);
        }
    };

    return (
        <section id="pricing" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2rem', fontSize: '0.9rem', fontWeight: '600' }}>Investment</span>
                    <h2 style={{ marginTop: '1rem' }}>Website <span className="text-gradient">Creation Plans</span></h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    {plans.map((plan) => (
                        <div key={plan.name} className="card" style={{
                            position: 'relative',
                            border: plan.featured ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                            transform: plan.featured ? 'scale(1.05)' : 'none',
                            zIndex: plan.featured ? 2 : 1
                        }}>
                            {plan.featured && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--primary)',
                                    color: 'var(--bg-deep)',
                                    padding: '0.4rem 1.2rem',
                                    borderRadius: '100px',
                                    fontSize: '0.8rem',
                                    fontWeight: '800'
                                }}>
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{plan.name}</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                <span style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-primary)' }}>${plan.price}</span>
                                <span style={{ color: 'var(--text-tertiary)' }}>/project</span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', minHeight: '3rem' }}>{plan.description}</p>

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem' }}>
                                {plan.features.map(feat => (
                                    <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                                style={{ width: '100%' }}
                                onClick={() => handleCheckout(plan.name, plan.amount)}
                                disabled={loading === plan.name}
                            >
                                {loading === plan.name ? 'Connecting...' : 'Get Started'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
