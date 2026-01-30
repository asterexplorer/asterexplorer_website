import React, { useEffect } from 'react';
import Pricing from './Pricing';
import Navbar from './Navbar';
import Footer from './Footer';

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
        return () => observer.disconnect();
    }, []);

    return (
        <div className="pricing-page-wrapper" style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
            <div style={{ paddingTop: '100px' }}>
                <div className="container reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '900', color: 'white' }}>
                        Service <span className="text-gradient">Architectures</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto' }}>
                        Transparent investment tiers for enterprise-grade digital systems.
                    </p>
                </div>
                <div className="reveal">
                    <Pricing />
                </div>
            </div>

            {/* Compare Features Section */}
            <div className="container reveal section-padding">
                <div className="card" style={{ padding: '4rem', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--glass-border)' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>Detailed Comparison</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-secondary)' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <th style={{ padding: '1.5rem', textAlign: 'left' }}>Capability</th>
                                    <th style={{ padding: '1.5rem' }}>Enterprise Core</th>
                                    <th style={{ padding: '1.5rem' }}>Commerce Nexus</th>
                                    <th style={{ padding: '1.5rem' }}>Custom Eco</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Custom UI/UX', '✓', '✓', '✓'],
                                    ['Mobile Opt.', '✓', '✓', '✓'],
                                    ['Cloud Hosting', 'Standard', 'Premium', 'Dedicated'],
                                    ['SEO Suite', 'Basic', 'Advanced', 'Full Control'],
                                    ['Auth Systems', 'Basic', 'Multi-layer', 'Biometric/SSO'],
                                    ['Maintenance', '3 Months', '12 Months', 'Lifetime']
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '1.2rem', fontWeight: '700', color: 'var(--text-primary)' }}>{row[0]}</td>
                                        <td style={{ padding: '1.2rem', textAlign: 'center' }}>{row[1]}</td>
                                        <td style={{ padding: '1.2rem', textAlign: 'center' }}>{row[2]}</td>
                                        <td style={{ padding: '1.2rem', textAlign: 'center' }}>{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
