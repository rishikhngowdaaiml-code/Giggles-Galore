import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cake, 
  Heart, 
  Briefcase, 
  Scissors, 
  Baby, 
  Diamond, 
  Gift, 
  Sparkles, 
  Palette, 
  Star 
} from 'lucide-react';
import './ServicesSection.css';

const services = [
  { title: "Birthday Decor", icon: <Cake size={40} />, description: "Magical setups for kids and elegant themes for adults." },
  { title: "Anniversary Decor", icon: <Heart size={40} />, description: "Romantic ambiances to celebrate your years of love." },
  { title: "Office Parties", icon: <Briefcase size={40} />, description: "Professional yet fun decorations for corporate events." },
  { title: "Inauguration Events", icon: <Scissors size={40} />, description: "Grand ribbon-cutting setups and floral arrangements." },
  { title: "Baby Welcome", icon: <Baby size={40} />, description: "Soft, adorable themes to welcome your little one." },
  { title: "Engagement Decor", icon: <Diamond size={40} />, description: "Classy and dreamy backdrops for your big day." },
  { title: "Surprise Room", icon: <Gift size={40} />, description: "Balloons, roses, and lights to surprise your loved ones." },
  { title: "Festive Decorations", icon: <Sparkles size={40} />, description: "Vibrant and traditional setups for all festivals." },
  { title: "Customized Themes", icon: <Palette size={40} />, description: "Bring your unique vision to life with custom props." },
  { title: "And Many More...", icon: <Star size={40} />, description: "Whatever the occasion, we make it beautiful." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From intimate gatherings to grand celebrations, we provide bespoke decoration services that leave a lasting impression.
        </motion.p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
