import React from 'react';
import Background from './Background';

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


        { name: 'GitHub', href: '#', color: '#6e5494', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
        { name: 'LinkedIn', href: '#', color: '#0077b5', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /> },
        { name: 'X', href: '#', color: '#ffffff', icon: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /> },
        { name: 'Instagram', href: '#', color: '#e4405f', icon: <g><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></g> },
        { name: 'YouTube', href: '#', color: '#ff0000', icon: <g><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></g> },
        { name: 'Discord', href: '#', color: '#5865f2', icon: <path d="M9 7.5L6.5 10L9 12.5M15 7.5L17.5 10L15 12.5M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" /> }
    ];

    return (
        <footer style={{
            padding: '1rem 0 2rem',
            background: 'var(--bg-deep)',
            borderTop: 'none',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Background />
            <div className="glow-bg" style={{ bottom: '-20%', right: '-10%', width: '600px', height: '600px', opacity: '0.05' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: '4rem',
                    marginBottom: '5rem'
                }}>
                    {/* Brand Column */}
                    <div style={{ maxWidth: '400px' }}>
                        <a href="#" style={{
                            fontSize: '1.8rem',
                            fontWeight: '900',
                            color: 'var(--text-primary)',
                            letterSpacing: '0.1em',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            marginBottom: '1.5rem'
                        }}>

                            <span className="logo-text-effect">Aster explorer <span style={{ marginLeft: '0.4rem' }}>tech</span></span>
                        </a>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', fontSize: '1rem' }}>
                            Architecting the digital future with precision engineering and creative intelligence.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {socialLinks.filter(s => ['GitHub', 'LinkedIn', 'X', 'Instagram'].includes(s.name)).map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="social-icon-btn"
                                    style={{ '--social-color': social.color }}
                                    aria-label={social.name}
                                >
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative', zIndex: 2 }}>
                                        {social.icon}
                                    </svg>
                                    <div className="social-glow"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} style={{ minWidth: '140px' }}>
                                <h4 style={{
                                    color: 'var(--text-primary)',
                                    fontSize: '0.85rem',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    marginBottom: '1.5rem',
                                    opacity: 0.8
                                }}>{title}</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                style={{
                                                    color: 'var(--text-secondary)',
                                                    textDecoration: 'none',
                                                    fontSize: '0.95rem',
                                                    transition: '0.3s',
                                                    fontWeight: '500'
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
                </div>

                {/* Bottom Area: Copyright & Location */}
                <div style={{
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{
                        color: 'var(--text-tertiary)',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                    }}>
                        &copy; 2026 Aster Technologies. All rights reserved.
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.7 }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '0.05em' }}>CEO : PRABHU DURAIRAJ</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.7 }}>
                            <span style={{ fontSize: '1rem' }}>🇮🇳</span>
                            <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>CHENNAI, INDIA</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes logoGradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .logo-text-effect {
                    background: linear-gradient(90deg, #fff, var(--primary), #fff);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: logoGradient 3s linear infinite;
                    font-weight: 800;
                    text-transform: capitalize;
                }
                .footer-link:hover {
                    color: var(--primary) !important;
                    transform: translateX(3px);
                    display: inline-block;
                }
                
                .social-icon-btn {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px;
                    height: 48px;
                    border-radius: 14px;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid var(--glass-border);
                    color: var(--text-secondary);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    overflow: hidden;
                }
                
                .social-glow {
                    position: absolute;
                    inset: 0;
                    background: var(--social-color);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    filter: blur(20px);
                    transform: scale(0.5);
                    z-index: 1;
                }

                .social-icon-btn:hover {
                    color: white;
                    border-color: var(--social-color);
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px -5px rgba(0,0,0,0.3);
                }

                .social-icon-btn:hover .social-glow {
                    opacity: 0.4;
                    transform: scale(1.5);
                }
            `}</style>
        </footer>
    );
};
export default Footer;
