import React, { useState, useEffect } from 'react';
import WeatherWidget from './WeatherWidget';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#summary' },

  { name: 'Reviews', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Trends', href: '#trending' },
  { name: 'About', href: '#about' },
];

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
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
        background: isScrolled ? 'rgba(3, 3, 5, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        height: isScrolled ? '64px' : '80px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <a href="#" style={{
          fontSize: '0.8rem',
          fontWeight: '900',
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          letterSpacing: '0.1em'
        }}>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
          </div>
          <span style={{
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center'
          }}>AST<span style={{ color: 'var(--primary)' }}>ER</span></span>
        </a>

        {/* Left-side Info Group */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem' }}>
          <WeatherWidget />
          <div
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.8rem',
              color: 'var(--primary)',
              background: 'rgba(45, 212, 191, 0.05)',
              padding: '0 1rem',
              height: '36px',
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }} className="desktop-menu">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    textDecoration: 'none',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    opacity: 0.7
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="#contact" className="btn btn-primary" style={{
              padding: '0.6rem 1.4rem',
              fontSize: '0.8rem',
              height: '36px',
              borderRadius: '8px'
            }}>
              Connect
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .nav-link:hover {
          opacity: 1 !important;
          color: var(--primary) !important;
          transform: translateY(-2px);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          width: 0;
          height: 3px;
          background: var(--primary);
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          border-radius: 10px;
          transform: translateX(-50%);
          box-shadow: 0 0 10px var(--primary);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 1100px) {
          .desktop-menu { display: none !important; }
        }
      `}</style>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '3px',
        background: 'linear-gradient(to right, var(--primary), var(--secondary))',
        transition: 'width 0.1s ease-out',
        boxShadow: '0 0 15px var(--primary)'
      }}></div>
    </header>
  );
};

export default Navbar;
