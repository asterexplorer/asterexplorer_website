import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Moon, Sun } from 'lucide-react';

const navLinks = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Innovation', href: '/#innovation' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('aster_theme') === 'dark' ||
      (!localStorage.getItem('aster_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const { pathname } = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('aster_theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('aster_theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <header
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: isScrolled ? '12px 0' : '24px 0',
        transition: 'var(--transition-ultra)',
        background: isScrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo Section */}
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="logo-icon" style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 8px 16px var(--primary-glow)'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="logo-text" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            fontWeight: '900',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            ASTER<span className="text-gradient">TECH</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="nav-link-modern"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'var(--transition-fast)',
                    position: 'relative',
                    padding: '8px 0',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase'
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '12px',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
            className="theme-toggle"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: 'var(--bg-surface)',
              borderBottom: '1px solid var(--glass-border)',
              padding: '40px 20px',
              zIndex: 999
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', textDecoration: 'none' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '20px', borderTop: '1px solid var(--glass-border)' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Appearance</span>
                <button
                  onClick={toggleTheme}
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    padding: '12px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '700'
                  }}
                >
                  {isDark ? <><Sun size={20} /> Light</> : <><Moon size={20} /> Dark</>}
                </button>
              </li>
              <li>
                <Link to="/#contact" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>
                  Get Started
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link-modern:hover {
          color: var(--text-primary) !important;
        }
        .nav-link-modern::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: var(--transition-fast);
        }
        .nav-link-modern:hover::after {
          width: 100%;
        }
        @media (max-width: 992px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;

