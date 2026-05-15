import React from 'react';
import { motion } from 'framer-motion';
import './TeamSection.css';

const teamMembers = [
  {
    name: "RISHI",
    role: "Founder",
    image: "/founder.jpg"
  },
  {
    name: "VINUTHA",
    role: "Co-Founder",
    image: "/cofounder.jpg"
  },
  {
    name: "DISHA",
    role: "Manager",
    image: "/manager.jpg"
  }
];

const TeamSection = ({ onViewCrew }) => {
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet The Team
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The passionate minds behind Giggles Galore who bring your dream events to life.
        </motion.p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="view-crew-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '50px' }}
        >
          <button className="btn btn-primary" onClick={onViewCrew}>
            View Our Crew
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
