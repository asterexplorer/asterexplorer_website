import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSolutions from './components/ServicesSolutions';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import PricingPage from './components/PricingPage';
import SolutionsPage from './components/SolutionsPage';
import LoginPage from './components/LoginPage';
import Lenis from 'lenis';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

const NoiseOverlay = () => <div className="noise-overlay" />;
const StarField = () => {
  const stars = React.useMemo(() => Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 10 + 5,
  })), []);

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0.1, y: 0 }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            y: [0, -50, 0]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            background: 'var(--primary)',
            boxShadow: '0 0 4px var(--primary)'
          }}
        />
      ))}
    </div>
  );
};

const MeshBackground = () => {
  const [mousePos, setMousePos] = React.useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });

      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    const handleDown = () => setIsHovering(true);
    const handleUp = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  return (
    <div className="mesh-bg" style={{
      '--m-x': `${mousePos.x}%`,
      '--m-y': `${mousePos.y}%`
    }}>
      {/* Dynamic Star Field */}
      <StarField />

      {/* Deep Mesh Layers - Enhanced */}
      <motion.div
        className="mesh-circle mesh-1"
        animate={{
          scale: isHovering ? 1.4 : 1,
          x: (mousePos.x - 50) * 0.5,
          y: (mousePos.y - 50) * 0.5,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        style={{ opacity: 0.15 }}
      />
      <motion.div
        className="mesh-circle mesh-2"
        animate={{
          scale: isHovering ? 1.2 : 1,
          x: (mousePos.x - 50) * -0.6,
          y: (mousePos.y - 50) * -0.6,
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
        style={{ opacity: 0.12 }}
      />
      <motion.div
        className="mesh-circle mesh-3"
        animate={{
          scale: isHovering ? 1.1 : 1,
          x: (mousePos.x - 50) * 0.3,
          y: (mousePos.y - 50) * 0.3,
        }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        style={{ opacity: 0.1 }}
      />
      {/* Extra Depth Layer */}
      <motion.div
        className="mesh-circle"
        style={{
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -1
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* High-Fidelity Technical Grid */}
      <div className="global-grid-overlay" />

      {/* Neural Pulse Effect - Dynamic */}
      <motion.div
        className="system-pulse"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 255, 204, 0.08), transparent 50%)`
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cinematic HUD Scan Line */}
      <div className="global-scan-line" />

      {/* Vignette Overlay for focus */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 0%, var(--bg-deep) 120%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />
    </div>
  );
};

const HomePage = () => {
  useEffect(() => {
    // Initialize Lenis for smooth inertia scrolling
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="page-smooth"
    >
      <div className="reveal magnetic-wrap"><Hero /></div>
      <div className="reveal magnetic-wrap"><ServicesSolutions /></div>
      <div className="reveal magnetic-wrap"><Pricing /></div>
    </motion.div>
  );
};

const AppContent = () => {
  const { pathname } = useLocation();

  return (
    <div className="app">
      <NoiseOverlay />
      <MeshBackground />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes key={pathname}>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <HomePage />
            </motion.div>
          } />
          <Route path="/solutions" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <SolutionsPage />
            </motion.div>
          } />
          <Route path="/pricing" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <PricingPage />
            </motion.div>
          } />
          <Route path="/login" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <LoginPage />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;

