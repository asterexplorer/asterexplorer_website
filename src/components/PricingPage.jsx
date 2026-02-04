import React, { useEffect, useState } from 'react';
import Pricing from './Pricing';
import { motion } from 'framer-motion';
import { Shield, Zap, Rocket, Globe, Database, Cpu } from 'lucide-react';

const PricingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="pricing-page-root" style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>

            <div style={{ position: 'relative', zIndex: 10, paddingTop: '120px' }}>
                <div className="container reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '8px 16px',
                            background: 'var(--glass-bg)',
                            borderRadius: '100px',
                            border: '1px solid var(--glass-border)',
                            marginBottom: '24px',
                            color: 'var(--primary)',
                            fontSize: '0.75rem',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            letterSpacing: '3px'
                        }}
                    >
                        <Shield size={14} /> Investment Strategy
                    </motion.div>

                    <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.04em' }}>
                        Service <span className="text-gradient">Architectures</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '1.5rem auto', lineHeight: '1.6' }}>
                        Transparent investment tiers for enterprise-grade digital systems. Engineered for global scale and surgical precision.
                    </p>
                </div>

                <div className="reveal">
                    <Pricing />
                </div>

            </div>


            <style>{`
                .pricing-page-root .section-padding { padding: 3rem 0; }
                .compare-row { transition: all 0.3s ease; }
                .compare-row:hover td { background: rgba(0, 136, 255, 0.05) !important; color: var(--primary); }
                @media (max-width: 1024px) {
                    h1 { font-size: 4rem !important; }
                }
                @media (max-width: 768px) {
                    .pricing-page-root { padding-top: 100px !important; }
                    h1 { font-size: 3rem !important; }
                }
            `}</style>
        </div>
    );
};

export default PricingPage;
