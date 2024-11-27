// src/pages/Home.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: "50px" }}
        >
          <h2>About Me</h2>
          <p>
            Hi, I'm a passionate developer! This is where you can write a short
            bio about yourself.
          </p>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: "50px" }}
        >
          <h2>My Projects</h2>
          <p>Here are some of the projects I've worked on recently.</p>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Contact</h2>
          <p>Feel free to reach out via email or social media.</p>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
