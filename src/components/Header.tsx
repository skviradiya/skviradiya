// src/components/Header.tsx
import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h1>My Portfolio</h1>
      <nav>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <motion.li
            whileHover={{ scale: 1.2, color: "#61dafb" }}
            style={{ display: "inline-block", cursor: "pointer" }}
          >
            <a href="#about" style={{ color: "#fff", textDecoration: "none" }}>
              About
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, color: "#61dafb" }}
            style={{ display: "inline-block", cursor: "pointer" }}
          >
            <a
              href="#projects"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Projects
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, color: "#61dafb" }}
            style={{ display: "inline-block", cursor: "pointer" }}
          >
            <a
              href="#contact"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Contact
            </a>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
