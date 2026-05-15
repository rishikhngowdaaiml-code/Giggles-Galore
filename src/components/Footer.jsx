import React from 'react';
import { Globe, MessageCircle, Camera, Briefcase } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.jpg" alt="Giggles Galore Events" className="footer-logo-img" />
            <p>Turning Your Special Moments Into Beautiful Memories</p>
          </div>
          
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><Globe /></a>
            <a href="#" aria-label="Twitter"><MessageCircle /></a>
            <a href="https://instagram.com/_giggles._.galore_" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Camera /></a>
            <a href="#" aria-label="LinkedIn"><Briefcase /></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Giggles Galore - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
