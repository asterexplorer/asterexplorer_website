import React, { useState, useEffect } from 'react';
import WeatherWidget from './WeatherWidget';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Clients', href: '#clients' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

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


  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(15px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
        transition: 'var(--transition-smooth)',
        height: isScrolled ? '70px' : '90px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <a href="#" style={{
          fontSize: '1.5rem',
          fontWeight: '800',
          fontFamily: 'var(--font-heading)',
          color: isScrolled ? '#0f172a' : 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          textDecoration: 'none',
          transition: 'color 0.3s ease'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isScrolled ? 'white' : 'var(--bg-deep)'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
          </div>
          <span style={{
            letterSpacing: '-0.01em',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center'
          }}>ASTER EXPLORER</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <ul style={{ display: 'flex', gap: '1.10rem', listStyle: 'none' }} className="desktop-menu">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: isScrolled ? '#475569' : 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    textDecoration: 'none',
                    letterSpacing: '0.02em'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <WeatherWidget />
          <div
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.9rem',
              color: 'var(--primary)',
              background: 'rgba(45, 212, 191, 0.05)',
              padding: '0 1.2rem',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '8px',
              border: '1px solid var(--glass-border)',
              letterSpacing: '0.1em',
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
