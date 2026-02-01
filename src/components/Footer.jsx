import React from 'react';

const Footer = () => {
    const footerLinks = {
        Platform: [
            { name: 'Architecture', href: '#services' },
            { name: 'Solutions', href: '#summary' },
            { name: 'Pricing', href: '#pricing' },
        ],
        Company: [
            { name: 'About Vision', href: '#about' },
            { name: 'Strategy', href: '#' },
            { name: 'Network', href: '#' },
            { name: 'Contact', href: '#contact' }
        ],
        Legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'License', href: '/LICENSE' }
        ]
    };

    return (
        <footer style={{ padding: '40px 0 32px', background: 'var(--bg-deep)', position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(3, 1fr)', gap: '48px', marginBottom: '40px' }} className="footer-grid">

                    {/* Brand */}
                    <div style={{ maxWidth: '340px' }}>
                        <a href="/" style={{ fontSize: '1.25rem', fontWeight: 900, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <div style={{ width: '28px', height: '28px', background: 'var(--primary)', borderRadius: '6px' }} />
                            <span className="text-gradient" style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Aster <span style={{ color: 'var(--text-primary)' }}>Tech</span></span>
                        </a>
                        <p style={{ color: 'var(--text-tertiary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                            Architecting the digital future with precision engineering and creative intelligence. Based in Chennai, operating globally.
                        </p>
                    </div>

                    {/* Link Groups */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px' }}>{title}</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {links.map(link => (
                                    <li key={link.name}>
                                        <a href={link.href} className="footer-link-modern" style={{ color: 'var(--text-tertiary)', textDecoration: 'none', fontSize: '0.9rem', transition: '0.3s' }}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{ paddingTop: '40px', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>
                        © 2026 Aster Technologies. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            CEO: PRABHU DURAIRAJ
                        </div>
                        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            HQ: CHENNAI, INDIA 🇮🇳
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .footer-grid { grid-template-columns: 1fr !important; }
                }
                .footer-link-modern:hover {
                    color: var(--primary) !important;
                    padding-left: 4px;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
