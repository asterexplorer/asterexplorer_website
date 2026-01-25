import React from 'react';

const Footer = () => {
    const socialLinks = [
        { name: 'GitHub', href: '#', color: '#f0f6fc', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
        { name: 'X', href: '#', color: '#ffffff', icon: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /> },
        { name: 'LinkedIn', href: '#', color: '#0077b5', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /> },
        { name: 'Instagram', href: '#', color: '#e4405f', icon: <React.Fragment><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></React.Fragment> },
    ];

    return (
        <footer style={{ padding: '6rem 0', borderTop: '1px solid var(--glass-border)', background: 'linear-gradient(to top, rgba(11,11,15,0.8), transparent)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            className="social-icon"
                            aria-label={social.name}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = social.color;
                                e.currentTarget.style.borderColor = social.color + '44';
                                e.currentTarget.style.background = social.color + '15';
                                e.currentTarget.style.boxShadow = `0 10px 20px ${social.color}22`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--text-secondary)';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            style={{
                                color: 'var(--text-secondary)',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--glass-border)',
                            }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {social.icon}
                            </svg>
                        </a>
                    ))}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <a href="#" style={{
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        color: 'var(--primary)',
                        letterSpacing: '0.1em',
                        textDecoration: 'none'
                    }}>ASTER EXPLORER</a>
                </div>

                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
                    Pioneering the digital frontier with immersive experiences and cognitive cloud solutions.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>
                        &copy; {new Date().getFullYear()} Aster Explorer
                    </p>
                    <a href="/LICENSE" style={{
                        color: 'var(--text-tertiary)',
                        fontSize: '0.8rem',
                        textDecoration: 'none',
                        opacity: 0.5,
                        transition: '0.2s'
                    }} className="license-link">MIT License</a>
                </div>
            </div>

            <style>{`
                .social-icon:hover {
                    transform: translateY(-5px) scale(1.1);
                }
                .license-link:hover {
                    opacity: 1 !important;
                    color: var(--primary);
                }
            `}</style>
        </footer>
    );
};

export default Footer;
