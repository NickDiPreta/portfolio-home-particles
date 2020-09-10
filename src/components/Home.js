import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import particlesOptions from "./particles.json";
import Particles from "react-tsparticles";
import Header from "./Header";

const ButtonOneVariants = {
  hidden: {
    opacity: 0,
    y: "20vh",
  },
  visible: {
    opacity: 1,
    scale: 3,
    rotate: 0,
    y: 0,
    x: 0,
    transition: {
      type: "tween",
      duration: 3,
    },
  },
  hover: {
    scale: 3.3,
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = (props) => {
  return (
    <div className="home">
      <Particles options={particlesOptions} />
      <Header />
      <motion.div className="home-button-container">
      <motion.button
        className="home-button"
        variants={ButtonOneVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        About
      </motion.button>
      <motion.button
        className="home-button"
        variants={ButtonOneVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Portfolio
      </motion.button>
      <motion.button
        className="home-button"
        variants={ButtonOneVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Skills
      </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
