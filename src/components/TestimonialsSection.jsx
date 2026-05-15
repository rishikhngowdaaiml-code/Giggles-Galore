import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './TestimonialsSection.css';

const allTestimonials = [
  {
    name: "Spoorthy",
    event: "Birthday Decor",
    text: "I choose giggles galore events for celebrating my daughter's birthday and I must mention and say that the decor turned out soo good and my daughter liked it. The team arrived at the venue on time and completed the decor before the actual time. I'm glad that I choose giggles galore events",
    rating: 5
  },
  {
    name: "Preethi",
    event: "Birthday Decor",
    text: "I'm glad that giggles galore events are offering the decors at very affordable price without compromising the quality of the decor. This is what made me choose giggles galore events and I am very happy that my birthday decor turned out soo good",
    rating: 5
  },
  {
    name: "Yashoda",
    event: "Birthday Decor",
    text: "I am very happy and surprised with the quality of the decor for the price that they afforded. If anybody wishes to celebrate their birthdays or any kind of events make sure to contact giggles galore events for affordable prices and offers",
    rating: 5
  },
  {
    name: "Vardhan",
    event: "Birthday Decor",
    text: "Thank you so much giggles galore for making my 20th birthday so special with this lovely decor. I loved it so much. Since it was my 20th birthday I wanted this decor to turn out memorable and the final decor look was beyond my expectations. I'm glad that I chose giggles galore events for my 20th birthday",
    rating: 5
  },
  {
    name: "Samanyu",
    event: "Eco Friendly Decor",
    text: "I had this eco friendly decor done by giggles galore events for my son's 10th birthday and I am so happy for how the decor turned out as you can see. I personally recommend giggles galore events for cost effective decors.",
    rating: 5
  },
  {
    name: "Sohan",
    event: "Anniversay Decor",
    text: "I chose giggles galore events for celebrating my parents anniversary and the decor came out soo good. I must mention that the team arrived at the venue on time and completed the decor without consuming much time. And I have to say that this is a very trustable and reliable event company to go for affordable price decors and more offers.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? allTestimonials : allTestimonials.slice(0, 3);

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Client Love
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Don't just take our word for it. Here's what our happy clients have to say about our decorations.
        </motion.p>

        <div className="testimonials-grid">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
            >
              <div className="quote-icon">
                <Quote size={30} />
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.event}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div 
            className="view-more-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="btn view-more-btn" onClick={() => setShowAll(true)}>
              View More Reviews
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
