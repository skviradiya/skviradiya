// src/App.tsx
import React from "react";
import { motion } from "framer-motion";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Animated Background */}
      <div className="background"></div>

      {/* Content */}
      <motion.div
        className="content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <header>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to My Portfolio
          </motion.h1>
        </header>

        <main>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I'm a passionate developer ready to create amazing experiences.
          </motion.p>
        </main>

        <footer>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#61dafb" }}
            whileTap={{ scale: 0.9 }}
          >
            Explore More
          </motion.button>
        </footer>
      </motion.div>
    </div>
  );
};

export default App;
