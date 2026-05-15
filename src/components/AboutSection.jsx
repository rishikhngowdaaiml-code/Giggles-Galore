import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>About Giggles Galore</h2>
            <p className="about-description">
              Welcome to Giggles Galore, where we transform your special moments into beautiful, unforgettable memories. We specialize in creative, premium, and customized event decorations tailored to your unique vision.
            </p>
            <p className="about-description">
              Whether it's an intimate birthday setup, a grand anniversary celebration, or a sophisticated corporate event, our dedicated team brings passion, elegance, and meticulous attention to detail to every project. Let us add that magical touch to your next celebration!
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>100%</h3>
                <p>Affordable</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>5 Star</h3>
                <p>Rating</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-image-decor"></div>
            <img 
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" 
              alt="Elegant event decoration setup" 
              className="about-img"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
