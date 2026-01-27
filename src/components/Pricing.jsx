import React, { useState } from 'react';

const Pricing = () => {
    const [loading, setLoading] = useState(null);
    const [hoveredPlan, setHoveredPlan] = useState(null);

    const plans = [
        {
            name: "Enterprise Core",
            id: "core",
            price: 799,
            tagline: "Strategic Digital Foundation",
            description: "Precision-engineered presence for growing enterprises requiring high authority.",
            features: [
                { text: "Custom UI/UX Architecture", detail: "Bespoke Design" },
                { text: "SEO Command Center", detail: "Search Optimization" },
                { text: "Global Edge Delivery", detail: "CDN Accelerated" },
                { text: "Security Manifest", detail: "SSL & Protection" }
            ],
            amount: 79900,
            color: 'var(--secondary)'
        },
        {
            name: "Commerce Nexus",
            id: "nexus",
            price: 1899,
            tagline: "Market Dominance Suite",
            description: "End-to-end transactional ecosystem with integrated intelligence and global scale.",
            features: [
                { text: "Advanced Transaction Engine", detail: "Multi-pay Support" },
                { text: "Inventory Intelligence", detail: "Real-time Sync" },
                { text: "Customer Insights Hub", detail: "Analytics Suite" },
                { text: "Performance Shield+", detail: "Enterprise Grade" }
            ],
            amount: 189900,
            featured: true,
            color: 'var(--primary)'
        },
        {
            name: "Custom Ecosystem",
            id: "eco",
            price: 4999,
            tagline: "Bespoke Digital Future",
            description: "Fully decoupled headless architectures and complex API-first digital solutions.",
            features: [
                { text: "Headless CMS Framework", detail: "Total Control" },
                { text: "External API Integration", detail: "Unlimited Connectivity" },
                { text: "Military-Grade Security", detail: "Enhanced Shielding" },
                { text: "Dedicated Support Team", detail: "24/7 Strategic" }
            ],
            amount: 499900,
            color: '#a855f7'
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
                alert("Payment gateway connection intermittent. Error: PX-402");
            }
        } catch (error) {
            console.error("Checkout error:", error);
            alert("Network instability detected. Ensure local services are active.");
        } finally {
            setLoading(null);
        }
    };

    return (
        <section id="pricing" className="section-padding" style={{
            background: 'var(--bg-deep)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Accent */}
            <div className="glow-bg" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', opacity: '0.03', width: '800px', height: '800px' }}></div>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.5rem 1.2rem',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '100px',
                        border: '1px solid var(--glass-border)',
                        marginBottom: '1.5rem'
                    }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></div>
                        <span style={{
                            color: 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2rem',
                            fontSize: '0.75rem',
                            fontWeight: '800'
                        }}>Pricing Structure v2.4</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900' }}>
                        Strategic <span className="text-gradient">Investment</span>
                    </h2>
                    <p style={{ color: 'var(--text-tertiary)', maxWidth: '600px', margin: '1.5rem auto 0', fontSize: '1.1rem' }}>
                        Choose the tier that aligns with your organization's trajectory and digital complexity.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem',
                    padding: '1rem'
                }}>
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            style={{
                                position: 'relative',
                                background: 'rgba(255,255,255,0.02)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '24px',
                                padding: '3.5rem 2.5rem 3rem',
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                transform: hoveredPlan === plan.id ? 'translateY(-10px)' : 'none',
                                borderColor: hoveredPlan === plan.id ? plan.color : 'var(--glass-border)',
                                boxShadow: hoveredPlan === plan.id ? `0 20px 40px rgba(0,0,0,0.5), 0 0 20px ${plan.color}20` : 'none'
                            }}
                            onMouseEnter={() => setHoveredPlan(plan.id)}
                            onMouseLeave={() => setHoveredPlan(null)}
                        >
                            {plan.featured && (
                                <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    background: 'var(--primary)',
                                    color: 'var(--bg-deep)',
                                    padding: '0.6rem 2rem',
                                    borderRadius: '100px',
                                    fontSize: '0.75rem',
                                    fontWeight: '900',
                                    letterSpacing: '0.15em',
                                    boxShadow: '0 10px 20px rgba(45, 212, 191, 0.3)'
                                }}>
                                    RECOMMENDED
                                </div>
                            )}

                            <div style={{ marginBottom: '2.5rem' }}>
                                <span style={{
                                    color: plan.color,
                                    fontSize: '0.8rem',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    display: 'block',
                                    marginBottom: '0.8rem'
                                }}>{plan.tagline}</span>
                                <h3 style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '1.2rem' }}>{plan.name}</h3>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                    <span style={{
                                        fontSize: '4rem',
                                        fontWeight: '900',
                                        color: 'var(--text-primary)',
                                        fontFamily: "'Share Tech Mono', monospace"
                                    }}>${plan.price}</span>
                                    <span style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>/setup</span>
                                </div>
                            </div>

                            <p style={{
                                color: 'var(--text-secondary)',
                                marginBottom: '2.5rem',
                                lineHeight: '1.7',
                                fontSize: '0.95rem'
                            }}>{plan.description}</p>

                            <div style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '16px',
                                padding: '1.5rem',
                                marginBottom: '3rem'
                            }}>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {plan.features.map((feat, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: idx === plan.features.length - 1 ? 0 : '1.2rem'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                                <div style={{
                                                    width: '18px',
                                                    height: '18px',
                                                    borderRadius: '50%',
                                                    background: `${plan.color}20`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={plan.color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                </div>
                                                <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: '500' }}>{feat.text}</span>
                                            </div>
                                            <span style={{
                                                fontSize: '0.7rem',
                                                color: 'var(--text-tertiary)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em'
                                            }}>{feat.detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                style={{
                                    width: '100%',
                                    padding: '1.2rem',
                                    borderRadius: '12px',
                                    border: plan.featured ? 'none' : `1px solid ${plan.color}`,
                                    background: plan.featured ? plan.color : 'transparent',
                                    color: plan.featured ? 'var(--bg-deep)' : plan.color,
                                    fontSize: '0.9rem',
                                    fontWeight: '900',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.8rem',
                                    boxShadow: plan.featured ? `0 10px 20px ${plan.color}30` : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    if (!plan.featured) {
                                        e.currentTarget.style.background = `${plan.color}10`;
                                    } else {
                                        e.currentTarget.style.transform = 'scale(1.02)';
                                        e.currentTarget.style.boxShadow = `0 15px 30px ${plan.color}50`;
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!plan.featured) {
                                        e.currentTarget.style.background = 'transparent';
                                    } else {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = `0 10px 20px ${plan.color}30`;
                                    }
                                }}
                                onClick={() => handleCheckout(plan.name, plan.amount)}
                                disabled={loading === plan.name}
                            >
                                {loading === plan.name ? (
                                    <>
                                        <div className="spinner"></div>
                                        Connecting Hub...
                                    </>
                                ) : (
                                    <>
                                        Initiate Manifest
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </>
                                )}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Tactical Warning / Note */}
                <div style={{
                    marginTop: '4rem',
                    textAlign: 'center',
                    padding: '2rem',
                    background: 'rgba(255,255,255,0.01)',
                    borderRadius: '20px',
                    border: '1px dashed var(--glass-border)'
                }}>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', maxWidth: '800px', margin: '0 auto' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: '700' }}>NOTE:</span> Custom tiers include dedicated account managers and military-grade encryption protocols as standard. Development cycles typically initiate within 72 hours of manifest authorization.
                    </p>
                </div>
            </div>

            <style>{`
                .spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid rgba(255,255,255,0.3);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default Pricing;

