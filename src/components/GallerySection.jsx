import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './GallerySection.css';

const basePath = "/images/";
const galleryImages = [
  basePath + "media__1778299876296.jpg",
  basePath + "media__1778299876400.jpg",
  basePath + "media__1778299876434.jpg",
  basePath + "media__1778299876496.jpg",
  basePath + "media__1778299876507.jpg",
  basePath + "media__1778300041149.jpg",
  basePath + "media__1778300041190.jpg",
  basePath + "media__1778300041222.jpg",
  basePath + "media__1778300041291.jpg",
  basePath + "media__1778300041307.jpg",
  basePath + "media__1778300223520.jpg",
  basePath + "media__1778300223567.jpg",
  basePath + "media__1778300223616.jpg",
  basePath + "media__1778300223642.jpg",
  basePath + "media__1778300223653.jpg",
  basePath + "media__1778300331071.jpg",
  basePath + "media__1778300331100.jpg",
  basePath + "media__1778300331129.jpg",
  basePath + "media__1778300331187.jpg",
  basePath + "media__1778300331199.jpg",
  basePath + "media__1778300338462.jpg"
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 6);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Decoration Gallery
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A glimpse into the magical worlds we've created for our clients.
        </motion.p>

        <div className="gallery-grid">
          {displayedImages.map((src, index) => (
            <motion.div 
              key={index} 
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              onClick={() => setSelectedImage(src)}
            >
              <img src={src} alt={`Decoration ${index + 1}`} />
              <div className="gallery-overlay">
                <span>View</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!showAll && galleryImages.length > 6 && (
          <motion.div 
            className="view-more-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ textAlign: 'center', marginTop: '40px' }}
          >
            <button className="btn btn-primary" onClick={() => setShowAll(true)}>
              View More
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedImage(null)}>
                <X size={30} />
              </button>
              <img src={selectedImage} alt="Enlarged view" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
