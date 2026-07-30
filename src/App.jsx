import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActionButtons from './components/FloatingActionButtons';
import IntroAnimation from './components/IntroAnimation';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="app">
      <AnimatePresence>
        {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      </AnimatePresence>
      
      {!showIntro && (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <GallerySection />
          <TestimonialsSection />
          <TeamSection />
          <ContactSection />
          <Footer />
          <FloatingActionButtons />
        </>
      )}
    </div>
  );
};

export default App;
