import React, { useState, useEffect } from 'react';



const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#summary' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: isScrolled ? 'rgba(3, 3, 5, 0.75)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        height: isScrolled ? '72px' : '90px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

        {/* Logo Section */}
        <a href="#" style={{
          fontSize: '0.9rem',
          fontWeight: '900',
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          textDecoration: 'none',
          transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
          letterSpacing: '0.15em'
        }} className="navbar-logo">
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 0 20px rgba(45, 212, 191, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)', backgroundSize: '200% 200%', animation: 'shimmer 3s infinite' }}></div>
          </div>
          <span style={{ lineHeight: 1, display: 'flex', alignItems: 'center' }}>
            ASTER <span style={{ color: 'var(--primary)', marginLeft: '0.4rem' }}>EXPLORER TECHNOLOGIES</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '3rem' }} className="desktop-menu">
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '800',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    opacity: 0.6,
                    transition: '0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = 1;
                    e.target.style.color = 'var(--primary)';
                    e.target.style.textShadow = '0 0 10px rgba(45, 212, 191, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = 0.6;
                    e.target.style.color = 'var(--text-primary)';
                    e.target.style.textShadow = 'none';
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>




          <a href="#contact" className="btn btn-primary" style={{
            padding: '0.8rem 2rem',
            fontSize: '0.75rem',
            borderRadius: '100px',
            boxShadow: '0 10px 20px rgba(45, 212, 191, 0.2)'
          }}>
            PROPOSAL
          </a>
        </nav>

        {/* Mobile Menu Toggle (Simplified) */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Sleek Scroll Progress Bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '2px',
        background: 'linear-gradient(to right, var(--primary), var(--secondary))',
        boxShadow: '0 0 10px var(--primary)',
        transition: 'width 0.1s ease-out'
      }}></div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .navbar-logo:hover {
          transform: scale(1.02);
        }
        .nav-link:hover {
          opacity: 1 !important;
          color: var(--primary) !important;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 4px;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 1200px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header >
  );
};

export default Navbar;
