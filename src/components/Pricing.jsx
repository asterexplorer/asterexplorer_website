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
            overflow: 'hidden',
            paddingBottom: '2rem'
        }}>
            {/* Pricing Visual Effects */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(5deg)',
                fontSize: '25vw',
                fontWeight: '900',
                color: 'rgba(255,255,255,0.01)',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                zIndex: 0,
                fontFamily: "'Space Grotesk', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
            }}>Pricing</div>

            {/* Floating Currency Fragments */}
            <div className="pricing-visuals" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
                <div className="float-fragment" style={{ top: '10%', left: '10%', fontSize: '5rem', opacity: 0.05, animationDelay: '0s' }}>$</div>
                <div className="float-fragment" style={{ top: '60%', right: '15%', fontSize: '7rem', opacity: 0.03, animationDelay: '-10s' }}>$</div>
                <div className="float-fragment" style={{ bottom: '15%', left: '20%', fontSize: '4rem', opacity: 0.04, animationDelay: '-5s' }}>$</div>
            </div>

            {/* Moving Glow Accents */}
            <div className="moving-glow" style={{ top: '0%', left: '30%', width: '400px', height: '400px', background: 'var(--primary)', opacity: '0.05', filter: 'blur(100px)', animation: 'drift 15s ease-in-out infinite' }}></div>
            <div className="moving-glow" style={{ bottom: '0%', right: '20%', width: '500px', height: '500px', background: 'var(--secondary)', opacity: '0.05', filter: 'blur(100px)', animation: 'drift 20s ease-in-out infinite reverse' }}></div>

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
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', fontFamily: "'Space Grotesk', sans-serif" }}>
                        Strategic <span className="text-gradient">Investment</span>
                    </h2>
                    <p style={{ color: 'var(--text-tertiary)', maxWidth: '600px', margin: '1.5rem auto 0', fontSize: '1.1rem' }}>
                        Choose the tier that aligns with your organization's trajectory and digital complexity.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    padding: '1rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
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
                                padding: '3rem 2rem',
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                transform: hoveredPlan === plan.id ? 'translateY(-10px)' : 'none',
                                borderColor: hoveredPlan === plan.id ? plan.color : 'var(--glass-border)',
                                boxShadow: hoveredPlan === plan.id ? `0 20px 40px rgba(0,0,0,0.5), 0 0 20px ${plan.color}20` : 'none',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onMouseEnter={() => setHoveredPlan(plan.id)}
                            onMouseLeave={() => setHoveredPlan(null)}
                        >
                            {plan.featured && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--primary)',
                                    color: 'var(--bg-deep)',
                                    padding: '0.4rem 1.5rem',
                                    borderRadius: '100px',
                                    fontSize: '0.7rem',
                                    fontWeight: '800',
                                    letterSpacing: '0.15em',
                                    boxShadow: '0 10px 20px rgba(45, 212, 191, 0.3)',
                                    zIndex: 2
                                }}>
                                    MOST POPULAR
                                </div>
                            )}

                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{plan.name}</h3>
                                <p style={{ color: plan.color, fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{plan.tagline}</p>
                            </div>

                            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                                <div style={{ display: 'inline-flex', alignItems: 'flex-start', justifyContent: 'center', color: 'var(--text-primary)' }}>
                                    <span style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginRight: '0.2rem' }}>$</span>
                                    <span style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1' }}>{plan.price}</span>
                                </div>
                                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>One-time payment</p>
                            </div>

                            <div style={{
                                padding: '1.5rem 0',
                                borderTop: '1px solid rgba(255,255,255,0.05)',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                marginBottom: '2rem',
                                flexGrow: 1
                            }}>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                                    {plan.features.map((feat, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            marginBottom: '1rem',
                                            fontSize: '0.95rem',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            <div style={{
                                                minWidth: '20px',
                                                height: '20px',
                                                borderRadius: '50%',
                                                background: `${plan.color}20`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: plan.color
                                            }}>
                                                ✓
                                            </div>
                                            <span>{feat.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    border: plan.featured ? 'none' : `1px solid ${plan.color}`,
                                    background: plan.featured ? plan.color : 'transparent',
                                    color: plan.featured ? 'var(--bg-deep)' : plan.color,
                                    fontSize: '0.9rem',
                                    fontWeight: '800',
                                    letterSpacing: '0.05em',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    marginTop: 'auto'
                                }}
                                onClick={() => handleCheckout(plan.name, plan.amount)}
                                disabled={loading === plan.name}
                            >
                                {loading === plan.name ? 'Processing...' : 'Choose Plan'}
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
                @keyframes drift {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(50px, -30px); }
                }
                @keyframes float-currency {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(15deg); }
                }
                .float-fragment {
                    position: absolute;
                    color: white;
                    animation: float-currency 12s ease-in-out infinite;
                }
                .moving-glow {
                    position: absolute;
                    border-radius: 50%;
                }
            `}</style>
        </section>
    );
};

export default Pricing;

