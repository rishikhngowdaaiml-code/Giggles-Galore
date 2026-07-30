import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './TeamSection.css';
import nikhilImg from '../assets/nikhil.jpg';
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
    image: "/images/media__1781073273268.jpg"
  }
];

const crewMembers = [
  { id: 1, name: "BHOUTHI", role: "Event Coordinator", image: "/images/media__1778300846279.jpg" },
  { id: 2, name: "MAANU", role: "Lead Decorator", image: "/images/media__1778854343056.jpg" },
  { id: 3, name: "PRAVEEN", role: "Florist", image: "/images/media__1778301871559.jpg" },
  { id: 4, name: "HITESH", role: "Lighting Specialist", image: "/images/media__1778301918107.jpg" },
  { id: 5, name: "SURYA", role: "Logistics Manager", image: "/images/media__1778301954734.jpg" },
  { id: 6, name: "DARSHAN", role: "Catering Liaison", image: "/images/media__1778302002911.jpg" },
  { id: 7, name: "SHILPA", role: "On-site Supervisor", image: "/images/media__1778302132432.jpg" },
  { id: 8, name: "YASHASWINI", role: "Team Member", image: "/images/media__1778302048273.jpg" },
  { id: 9, name: "NIKHIL", role: "Team Member", image: nikhilImg },
];

const TeamSection = () => {
  const [currentCrewIndex, setCurrentCrewIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentCrewIndex((prevIndex) => (prevIndex + 1) % crewMembers.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const getPositionClass = (idx) => {
    const total = crewMembers.length;
    if (idx === currentCrewIndex) return 'center';
    if (idx === (currentCrewIndex - 1 + total) % total) return 'left';
    if (idx === (currentCrewIndex + 1) % total) return 'right';
    if (idx === (currentCrewIndex - 2 + total) % total) return 'hidden-left';
    if (idx === (currentCrewIndex + 2) % total) return 'hidden-right';
    return 'hidden';
  };

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
          className="crew-carousel-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="crew-carousel-title">Our Dedicated Crew</h3>

          <div
            className="crew-carousel-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="crew-carousel-track">
              {crewMembers.map((member, idx) => {
                const positionClass = getPositionClass(idx);
                return (
                  <div key={member.id} className={`crew-carousel-item ${positionClass}`}>
                    <div className="crew-carousel-image-wrapper">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="crew-carousel-image"
                      />
                    </div>
                    <h4 className="crew-carousel-name">{member.name}</h4>
                  </div>
                );
              })}
            </div>

            <div className="crew-carousel-dots">
              {crewMembers.map((_, idx) => (
                <button
                  key={idx}
                  className={`crew-carousel-dot ${idx === currentCrewIndex ? 'active' : ''}`}
                  onClick={() => setCurrentCrewIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
