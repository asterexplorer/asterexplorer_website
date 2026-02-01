import React, { useEffect, useState } from 'react';
import Pricing from './Pricing';
import Navbar from './Navbar';
import Footer from './Footer';
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
            <Navbar />

            <div style={{ position: 'relative', zIndex: 10, paddingTop: '160px' }}>
                <div className="container reveal" style={{ textAlign: 'center', marginBottom: '6rem' }}>
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

                {/* Compare Features Section */}
                <div className="container reveal section-padding" style={{ marginTop: '4rem' }}>
                    <div className="card-modern" style={{ padding: 'clamp(2rem, 5vw, 5rem)', background: 'var(--bg-card)' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Sovereign Table</h3>
                            <p style={{ color: 'var(--text-tertiary)', fontWeight: 600 }}>Cross-tier capability analysis</p>
                        </div>

                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px', color: 'var(--text-secondary)' }}>
                                <thead>
                                    <tr>
                                        <th style={{ padding: '1.5rem', textAlign: 'left', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Capability</th>
                                        <th style={{ padding: '1.5rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Enterprise Core</th>
                                        <th style={{ padding: '1.5rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Commerce Nexus</th>
                                        <th style={{ padding: '1.5rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Custom Eco</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Custom UI/UX Architecture', '✓', '✓', '✓'],
                                        ['Systems Resilience Layer', 'Standard', 'Enhanced', 'Sovereign'],
                                        ['SEO Command Center', 'Basic', 'Advanced', 'Full Spec'],
                                        ['Cloud Delivery Node', 'Global', 'Edge Preferred', 'Dedicated'],
                                        ['Security Protocol', 'AES-256', 'Multi-Layer', 'Military-Grade'],
                                        ['Engineering Support', '90 Days', '365 Days', 'Direct 24/7']
                                    ].map((row, i) => (
                                        <tr key={i} className="compare-row">
                                            <td style={{ padding: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', background: 'rgba(0,0,0,0.02)', borderRadius: '12px 0 0 12px', border: '1px solid var(--glass-border)', borderRight: 'none' }}>{row[0]}</td>
                                            <td style={{ padding: '1.5rem', textAlign: 'center', border: '1px solid var(--glass-border)', borderLeft: 'none', borderRight: 'none' }}>{row[1]}</td>
                                            <td style={{ padding: '1.5rem', textAlign: 'center', border: '1px solid var(--glass-border)', borderLeft: 'none', borderRight: 'none', background: 'rgba(0, 136, 255, 0.02)' }}>{row[2]}</td>
                                            <td style={{ padding: '1.5rem', textAlign: 'center', border: '1px solid var(--glass-border)', borderLeft: 'none', borderRadius: '0 12px 12px 0' }}>{row[3]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            <style>{`
                .pricing-page-root .section-padding { padding: 4rem 0; }
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
