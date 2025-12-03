import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <motion.h1
        className="hero__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Building clean, modern <br /> and intuitive digital experiences.
      </motion.h1>

      <motion.p
        className="hero__subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I specialize in creating elegant UI with React, animations, and
        thoughtful UX. My focus is performance, clarity, and smooth interactions.
      </motion.p>
    </section>
  );
};

export default Hero;
