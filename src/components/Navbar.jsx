import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Force dark theme on mount
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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

        {/* Premium Logo Section */}
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


          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <Link to="/login" style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: 'var(--primary)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Sign In
            </Link>
          </div>
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

