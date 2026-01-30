import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectBridge from './components/ProjectBridge';
import About from './components/About';
import ServicesSolutions from './components/ServicesSolutions';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';
import FutureHorizon from './components/FutureHorizon';
import PricingPage from './components/PricingPage';
import SolutionsPage from './components/SolutionsPage';

const HomePage = () => {
  useEffect(() => {
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
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="reveal"><Hero /></div>
      <ProjectBridge />
      <div className="reveal"><About /></div>
      <div className="reveal"><ServicesSolutions /></div>
      <div className="reveal"><Pricing /></div>
      <div className="reveal"><FutureHorizon /></div>
      <div className="reveal"><Contact /></div>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
