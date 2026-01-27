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

    const socialLinks = [
        { name: 'GitHub', href: '#', color: '#f0f6fc', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
        { name: 'X', href: '#', color: '#ffffff', icon: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /> },
        { name: 'LinkedIn', href: '#', color: '#0077b5', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /> },
        { name: 'Instagram', href: '#', color: '#e4405f', icon: <g><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></g> },
        { name: 'Facebook', href: '#', color: '#1877f2', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
        { name: 'YouTube', href: '#', color: '#ff0000', icon: <g><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></g> },
        { name: 'TikTok', href: '#', color: '#00f2ea', icon: <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /> },
        { name: 'Discord', href: '#', color: '#5865f2', icon: <path d="M9 7.5L6.5 10L9 12.5M15 7.5L17.5 10L15 12.5M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" /> }
    ];

    return (
        <footer style={{
            padding: '4rem 0 2rem',
            background: 'var(--bg-deep)',
            borderTop: '1px solid var(--glass-border)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="glow-bg" style={{ bottom: '-10%', right: '-5%', width: '500px', height: '500px', opacity: '0.05' }}></div>

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr repeat(3, 1fr)',
                    gap: '4rem',
                    marginBottom: '6rem'
                }}>
                    {/* Brand Column */}
                    <div>
                        <a href="#" style={{
                            fontSize: '2.5rem',
                            fontWeight: '900',
                            color: 'var(--text-primary)',
                            letterSpacing: '0.2rem',
                            textDecoration: 'none',
                            display: 'block',
                            marginBottom: '1.5rem'
                        }}>ASTER <span style={{ color: 'var(--primary)' }}>EXPLORER TECHNOLOGIES</span></a>

                        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    style={{
                                        color: 'var(--text-primary)',
                                        transition: '0.3s',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--glass-border)'
                                    }}
                                    className="footer-social"
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = social.color;
                                        e.currentTarget.style.borderColor = social.color;
                                        e.currentTarget.style.background = `${social.color}10`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'var(--text-primary)';
                                        e.currentTarget.style.borderColor = 'var(--glass-border)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {social.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 style={{
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                marginBottom: '2rem'
                            }}>{title}</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            style={{
                                                color: 'var(--text-primary)',
                                                textDecoration: 'none',
                                                fontSize: '1.1rem',
                                                transition: '0.3s'
                                            }}
                                            className="footer-link"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Area: System Status & Copyright */}
                <div style={{
                    paddingTop: '3rem',
                    borderTop: '1px solid var(--glass-border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <p style={{
                            color: 'var(--text-primary)',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            letterSpacing: '0.05em'
                        }}>
                            &copy; 2026 ASTER EXPLORER TECHNOLOGIES.
                        </p>

                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2.5rem',
                        flexWrap: 'wrap'
                    }}>


                        {/* Region */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <span style={{
                                fontSize: '0.75rem',
                                color: 'var(--text-tertiary)',
                                fontWeight: '500',
                                borderLeft: '1px solid var(--glass-border)',
                                paddingLeft: '2.5rem'
                            }}>
                                TAMIL NADU, INDIA
                            </span>
                        </div>


                    </div>
                </div>
            </div>

            <style>{`
                .footer-link:hover {
                    color: var(--primary) !important;
                    padding-left: 5px;
                }
                .footer-social:hover {
                    background: rgba(45, 212, 191, 0.05) !important;
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
                }
                @keyframes heartbeat {
                    0% { transform: scale(1); }
                    14% { transform: scale(1.1); }
                    28% { transform: scale(1); }
                    42% { transform: scale(1.1); }
                    70% { transform: scale(1); }
                }
                @keyframes pulse {
                    0% { transform: scale(0.95); opacity: 0.5; }
                    50% { transform: scale(1.05); opacity: 1; }
                    100% { transform: scale(0.95); opacity: 0.5; }
                }
            `}</style>
        </footer>
    );
};
export default Footer;
