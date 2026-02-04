import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Rocket, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const [loading, setLoading] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e, cardRef) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const plans = [
        {
            name: "Enterprise Core",
            id: "core",
            price: 799,
            tagline: "Strategic Digital Foundation",
            description: "Precision-engineered presence for growing enterprises requiring high authority.",
            features: [
                "Custom UI/UX Architecture",
                "SEO Command Center",
                "Global Edge Delivery",
                "Advanced Security Shield"
            ],
            amount: 79900,
            color: 'var(--secondary)',
            icon: <Rocket size={24} />
        },
        {
            name: "Commerce Nexus",
            id: "nexus",
            price: 1899,
            tagline: "Market Dominance Suite",
            description: "End-to-end transactional ecosystem with integrated intelligence and global scale.",
            features: [
                "Advanced Transaction Engine",
                "Inventory Intelligence",
                "Customer Insights Hub",
                "Enterprise Performance Shield"
            ],
            amount: 189900,
            featured: true,
            color: 'var(--primary)',
            icon: <Zap size={24} />
        },
        {
            name: "Custom Ecosystem",
            id: "eco",
            price: 4999,
            tagline: "Bespoke Digital Future",
            description: "Fully decoupled headless architectures and complex API-first digital solutions.",
            features: [
                "Headless CMS Framework",
                "External API Integration",
                "Military-Grade Security",
                "Dedicated Engineering Team"
            ],
            amount: 499900,
            color: 'var(--accent)',
            icon: <Shield size={24} />
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
            alert("Network instability detected.");
        } finally {
            setLoading(null);
        }
    };

    return (
        <section id="pricing" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        style={{ color: 'var(--primary)', letterSpacing: '4px', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}
                    >
                        Investment Strategy
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        style={{ marginTop: '24px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                    >
                        Strategic <span className="text-gradient">Pricing</span>
                    </motion.h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                    {plans.map((plan, idx) => (
                        <PricingCard
                            key={plan.id}
                            plan={plan}
                            idx={idx}
                            loading={loading}
                            handleCheckout={handleCheckout}
                            mousePos={mousePos}
                            onMouseMove={handleMouseMove}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

const PricingCard = ({ plan, idx, loading, handleCheckout, mousePos, onMouseMove }) => {
    const cardRef = useRef(null);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onMouseMove={(e) => onMouseMove(e, cardRef)}
            className="card-modern"
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '40px',
                border: plan.featured ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                background: plan.featured ? 'rgba(0, 136, 255, 0.02)' : 'var(--bg-card)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Interactive Spotlight */}
            <div
                className="spotlight"
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, var(--primary-glow), transparent 40%)`,
                    pointerEvents: 'none',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    zIndex: 0
                }}
            />

            {plan.featured && (
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    fontSize: '0.65rem',
                    fontWeight: 900,
                    letterSpacing: '1px',
                    zIndex: 2
                }}>
                    MOST POPULAR
                </div>
            )}

            <div style={{ color: plan.color, marginBottom: '24px', position: 'relative', zIndex: 1 }}>{plan.icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', position: 'relative', zIndex: 1 }}>{plan.name}</h3>
            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', marginBottom: '32px', position: 'relative', zIndex: 1 }}>{plan.tagline}</p>

            <div style={{ marginBottom: '32px', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>$</span>
                    <span style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--text-primary)' }}>{plan.price}</span>
                </div>
                <span style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>One-time investment</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', flexGrow: 1, position: 'relative', zIndex: 1 }}>
                {plan.features.map((feature, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <Check size={16} style={{ color: plan.color }} />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>

            <button
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                style={{ width: '100%', position: 'relative', zIndex: 1 }}
                onClick={() => handleCheckout(plan.name, plan.amount)}
                disabled={loading === plan.name}
            >
                {loading === plan.name ? 'PROVISIONING...' : 'CHOOSE PLAN'}
            </button>
        </motion.div>
    );
};

export default Pricing;
