import React from "react";
import { motion, useSpring } from "framer-motion";
import dVar from "./Name";
const svgVariants = {
  hidden: {
    y: "-250vh",
    x: "-5vw"
  },
  visible: {
    rotate: 0,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      duration: 4,
      delay: 0.5,
    },
  }
};

const pathVariants = {
  hidden: {
    
    opacity: 0,
    pathLength: 0,
  },
  visible: {
  
    opacity: 1,
    pathLength: 5,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  }
  
};

const Header = () => {
  return (
    <div>
    <motion.svg
      className="svg-wrapper"
      xmlns="http://www.w3.org/2000/svg"
      
      viewBox="400 100 640 360"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.path
      id="path-name"
        fill="white"
        d={dVar}
        variants={pathVariants}
        
        
      />
      
    </motion.svg>
</div>    
  );
};

export default Header;
