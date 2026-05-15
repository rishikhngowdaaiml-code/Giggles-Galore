import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Camera, MessageCircle } from 'lucide-react';

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
    <path d="M2.5 7.1C2.5 7.1 2.3 5.4 3.1 4.6C4 3.7 5 3.7 5.5 3.6C8.5 3.4 12 3.4 12 3.4C12 3.4 15.5 3.4 18.5 3.6C19 3.7 20 3.7 20.9 4.6C21.7 5.4 21.5 7.1 21.5 7.1C21.5 7.1 21.7 8.9 21.7 10.7V13.3C21.7 15.1 21.5 16.9 21.5 16.9C21.5 16.9 21.7 18.6 20.9 19.4C20 20.3 18.8 20.3 18.3 20.4C15 20.7 12 20.6 12 20.6C12 20.6 8.5 20.6 5.5 20.4C5 20.3 4 20.3 3.1 19.4C2.3 18.6 2.5 16.9 2.5 16.9C2.5 16.9 2.3 15.1 2.3 13.3V10.7C2.3 8.9 2.5 7.1 2.5 7.1Z"></path>
    <polygon points="9.75 15.02 15.5 11.97 9.75 8.92 9.75 15.02"></polygon>
  </svg>
);
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Book Your Event Today
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's discuss how we can make your next celebration truly spectacular.
        </motion.p>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-item">
              <div className="info-icon"><Phone /></div>
              <div>
                <h4>Call Us</h4>
                <p><a href="tel:9844909044">9844909044</a> / <a href="tel:8618945835">8618945835</a></p>
              </div>
            </div>
            <a href="https://wa.me/919844909044" target="_blank" rel="noopener noreferrer" className="info-item" style={{ textDecoration: 'none' }}>
              <div className="info-icon"><MessageCircle /></div>
              <div>
                <h4>WhatsApp</h4>
                <p>9844909044</p>
              </div>
            </a>
            <a href="mailto:gigglesgalore516@gmail.com" className="info-item" style={{ textDecoration: 'none' }}>
              <div className="info-icon"><Mail /></div>
              <div>
                <h4>Email</h4>
                <p>gigglesgalore516@gmail.com</p>
              </div>
            </a>
            <a href="https://instagram.com/_giggles._.galore_" target="_blank" rel="noopener noreferrer" className="info-item" style={{ textDecoration: 'none' }}>
              <div className="info-icon"><Camera /></div>
              <div>
                <h4>Instagram</h4>
                <p>@_giggles._.galore_</p>
              </div>
            </a>
            <a href="https://youtube.com/@gigglesgalore-dv4?si=ePJbGkmpass3xC8g" target="_blank" rel="noopener noreferrer" className="info-item" style={{ textDecoration: 'none' }}>
              <div className="info-icon"><YoutubeIcon /></div>
              <div>
                <h4>YouTube</h4>
                <p>@GigglesGalore-dv4</p>
              </div>
            </a>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const phone = formData.get('phone');
              const eventType = formData.get('eventType');
              const message = formData.get('message');
              
              const text = `Hi! I would like to inquire about your services.
Name: ${name}
Phone: ${phone}
Event Type: ${eventType}
Message: ${message}`;
              
              const encodedText = encodeURIComponent(text);
              window.open(`https://wa.me/919844909044?text=${encodedText}`, '_blank');
            }}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <select name="eventType" required defaultValue="">
                  <option value="" disabled>Select Event Type</option>
                  <option value="birthday">Birthday Decor</option>
                  <option value="anniversary">Anniversary Decor</option>
                  <option value="corporate">Office Party</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message / Special Requirements" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-secondary w-100">Send Inquiry</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
