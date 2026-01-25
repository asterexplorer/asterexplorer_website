import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Freelancers from './components/Freelancers';
import Portfolio from './components/Portfolio';
import ProjectBoard from './components/ProjectBoard';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Freelancers />
      <Portfolio />
      <ProjectBoard />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
