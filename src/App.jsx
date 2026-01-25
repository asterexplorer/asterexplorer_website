import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import ServiceSummary from './components/ServiceSummary';

import Clients from './components/Clients';
import Pricing from './components/Pricing';
import Trending from './components/Trending';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
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
    <div className="app">
      <Navbar />
      <div className="reveal"><Hero /></div>
      <div className="reveal"><Stats /></div>
      <div className="reveal"><About /></div>
      <div className="reveal"><Services /></div>
      <div className="reveal"><ServiceSummary /></div>

      <div className="reveal"><Clients /></div>
      <div className="reveal"><Pricing /></div>
      <div className="reveal"><Trending /></div>
      <div className="reveal"><Gallery /></div>
      <div className="reveal"><Testimonials /></div>
      <div className="reveal"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
