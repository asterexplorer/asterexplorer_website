import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const navLinks = [
    { name: 'Freelancers', href: '#freelancers' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: '0 2rem'
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1200px',
          background: isScrolled ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '100px',
          padding: isScrolled ? '0.75rem 2rem' : '1rem 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: isScrolled ? '0 20px 40px rgba(0,0,0,0.3)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <a href="#" style={{
          fontSize: '1.25rem',
          fontWeight: '800',
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem'
        }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#050508' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
          </div>
          <span style={{ letterSpacing: '-0.02em' }}>ASTER</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          <ul style={{ display: 'flex', gap: '2rem' }} className="desktop-menu">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.9rem',
              color: 'var(--primary)',
              background: 'rgba(45, 212, 191, 0.1)',
              padding: '0.5rem 1.2rem',
              borderRadius: '100px',
              border: '1px solid var(--primary-glow)',
              letterSpacing: '0.15em',
              fontWeight: '700'
            }}
          >
            {formatTime(time)}
          </div>
        </div>
      </div>

      <style>{`
        .nav-link:hover {
          color: var(--primary) !important;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 992px) {
          .desktop-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
