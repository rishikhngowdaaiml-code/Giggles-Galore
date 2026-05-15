import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import './CrewPage.css';

const crewMembers = [
  { id: 1, name: "BHOUTHI", role: "Event Coordinator", image: "/@fs/C:/Users/1185r/.gemini/antigravity/brain/21157d5f-3ca4-4e67-851b-c9541503c7c1/media__1778300846279.jpg" },
  { id: 2, name: "MAANU", role: "Lead Decorator", image: "/@fs/C:/Users/1185r/.gemini/antigravity/brain/21157d5f-3ca4-4e67-851b-c9541503c7c1/media__1778854343056.jpg" },
  { id: 3, name: "PRAVEEN", role: "Florist", image: "/@fs/C:/Users/1185r/.gemini/antigravity/brain/21157d5f-3ca4-4e67-851b-c9541503c7c1/media__1778301871559.jpg" },
  { id: 4, name: "HITESH", role: "Lighting Specialist", image: "/@fs/C:/Users/1185r/.gemini/antigravity/brain/21157d5f-3ca4-4e67-851b-c9541503c7c1/media__1778301918107.jpg" },
  { id: 5, name: "SURYA", role: "Logistics Manager", image: "/@fs/C:/Users/1185r/.gemini/antigravity/brain/21157d5f-3ca4-4e67-851b-c9541503c7c1/media__1778301954734.jpg" },
  { id: 6, name: "DARSHAN", role: "Catering Liaison", image: "/@fs/C:/Users/1185r/.gemini/antigravity/brain/21157d5f-3ca4-4e67-851b-c9541503c7c1/media__1778302002911.jpg" },
  { id: 7, name: "SHILPA", role: "On-site Supervisor", image: "/@fs/C:/Users/1185r/.gemini/antigravity/brain/21157d5f-3ca4-4e67-851b-c9541503c7c1/media__1778302132432.jpg" },
  { id: 8, name: "YASHASWINI", role: "Team Member", image: "/@fs/C:/Users/1185r/.gemini/antigravity/brain/21157d5f-3ca4-4e67-851b-c9541503c7c1/media__1778302048273.jpg" },
];

const CrewPage = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="crew-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="crew-header">
        <div className="container">
          <button className="back-btn" onClick={onBack}>
            <ArrowLeft size={24} /> Back to Home
          </button>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Meet Our Crew
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            The dedicated hands behind every magical moment.
          </motion.p>
        </div>
      </div>

      <div className="container crew-grid-container">
        <div className="crew-grid">
          {crewMembers.map((member, index) => (
            <motion.div 
              key={member.id} 
              className="crew-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <div className="crew-image-wrapper">
                <img src={member.image} alt={member.name} className="crew-image" />
              </div>
              <h3 className="crew-name">{member.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CrewPage;

