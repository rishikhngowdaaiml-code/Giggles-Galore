import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  useEffect(() => {
    // Trigger confetti when HeroSection mounts (homepage opening)
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D4AF37', '#FFD1DC', '#6A0DAD', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D4AF37', '#FFD1DC', '#6A0DAD', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    
    // Slight delay to allow intro to finish if it was playing
    setTimeout(() => {
      frame();
    }, 500);

  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      
      {/* Fallback image if needed, or rely on CSS background */}
      <div className="hero-content container text-center">
        <motion.h1 
          className="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Turning Your Special Moments Into Beautiful Memories
        </motion.h1>
        
        <motion.p 
          className="hero-subheading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Professional Decoration Services for Every Celebration
        </motion.p>
        
        <motion.button 
          className="btn hero-btn"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          onClick={scrollToContact}
        >
          Book Now
        </motion.button>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
