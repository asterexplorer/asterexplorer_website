import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectBridge from './components/ProjectBridge';
import About from './components/About';
import ServicesSolutions from './components/ServicesSolutions';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';
import InnovationCore from './components/InnovationCore';
import PricingPage from './components/PricingPage';
import SolutionsPage from './components/SolutionsPage';
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
const MeshBackground = () => {
  const [mousePos, setMousePos] = React.useState({ x: 50, y: 50 });

  React.useEffect(() => {
    const handleMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="mesh-bg" style={{
      '--m-x': `${mousePos.x}%`,
      '--m-y': `${mousePos.y}%`
    }}>
      <div className="mesh-circle mesh-1" style={{ transform: `translate(${(mousePos.x - 50) * 0.2}px, ${(mousePos.y - 50) * 0.2}px)` }} />
      <div className="mesh-circle mesh-2" style={{ transform: `translate(${(mousePos.x - 50) * -0.3}px, ${(mousePos.y - 50) * -0.3}px)` }} />
      <div className="mesh-circle mesh-3" style={{ transform: `translate(${(mousePos.x - 50) * 0.15}px, ${(mousePos.y - 50) * 0.15}px)` }} />

      {/* Global Technical Grid */}
      <div className="global-grid-overlay" />

      {/* Dynamic Cursor Spotlight */}
      <div className="global-spotlight" style={{
        background: `radial-gradient(1200px circle at ${mousePos.x}% ${mousePos.y}%, var(--primary-glow), transparent 80%)`
      }} />
    </div>
  );
};

const HomePage = () => {
  useEffect(() => {
    // Initialize Lenis for smooth inertia scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
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
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
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
      transition={{ duration: 1 }}
    >
      <div className="reveal"><Hero /></div>
      <ProjectBridge />
      <div className="reveal"><About /></div>
      <div className="reveal"><InnovationCore /></div>
      <div className="reveal"><ServicesSolutions /></div>
      <div className="reveal"><Pricing /></div>
      <div className="reveal"><Contact /></div>
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <NoiseOverlay />
        <MeshBackground />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

