import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './IntroAnimation.css';

const IntroAnimation = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Step 0: "Giggles Galore" text
    // Step 1: Logo image pops up
    
    if (currentStep === 0) {
      const timer = setTimeout(() => {
        setCurrentStep(1);
      }, 3000); // Text displays for 3 seconds
      return () => clearTimeout(timer);
    } else if (currentStep === 1) {
      const timer = setTimeout(() => {
        setCurrentStep(2); // Triggers the exit
      }, 3000); // Logo displays for 3 seconds
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000); // Wait for exit animation
      return () => clearTimeout(timer);
    }
  }, [currentStep, onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className="intro-container"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
      >
        <div className="particles-background">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}></div>
          ))}
        </div>

        <div className="intro-content">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="title"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="intro-title"
              >
                Giggles Galore
              </motion.div>
            )}
            
            {currentStep === 1 && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="intro-logo-container"
              >
                <img src="/logo.jpg" alt="Giggles Galore Logo" className="intro-logo" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimation;
