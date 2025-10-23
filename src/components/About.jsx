import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section">
      {/* Hero */}
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          About <span className="highlight">FootPrint Alabi</span>
        </h1>
        <p>Quality footwear that blends style, comfort, and innovation.</p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="about-card"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Mission</h2>
        <p>
          To provide premium footwear that empowers every step of your journey,
          combining comfort, style, and durability.
        </p>
      </motion.div>

      {/* Values Section */}
      <motion.div
        className="about-card"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Our Values</h2>
        <ul>
          <li>Quality and Craftsmanship</li>
          <li>Customer Satisfaction</li>
          <li>Innovation and Style</li>
          <li>Ethical Sourcing</li>
        </ul>
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>Our Team</h2>
        <p>
          A passionate group of designers, developers, and footwear enthusiasts
          dedicated to delivering the best shopping experience.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
