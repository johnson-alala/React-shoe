import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <section className="landing-section">

          <div className="background-overlay"></div>

      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="landing-title"
        >
          Step Into <span className="highlight">Comfort & Style</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="landing-description"
        >
          Discover footwear designed for every journey, crafted with care and
          made to move with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="button-group"
        >
          <button
            className="landing-button primary"
            onClick={() => (window.location.href = "/shop")}
          >
            Shop Now
          </button>
          <button
            className="landing-button secondary"
            onClick={() => (window.location.href = "/about")}
          >
            Learn More
          </button>
        </motion.div>
      </div>

      <motion.img
        src="/hero-shoe.png"
        alt="Hero Shoe"
        className="hero-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
    </section>
  );
};

export default LandingPage;
