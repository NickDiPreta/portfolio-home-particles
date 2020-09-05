import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

const svgVariants = {
  hidden: {
    y: "100vh",
    x: "5vw",
  },
  visible: {
    y: 0,
    x: 0,

    transition: { staggerChildren: 0.07, staggerDirection: 1 },
  },
};

const pathTwoVariants = {
  hidden: {
    stroke:"#06D6A0",
    opacity: 0.5,
    fill: "none",
    strokeWidth: 2,
    pathLength: 1,
    pathOffset: 0,
  },
  visible: {
    stroke: ["#EF476F", "#FFD166", "#118AB2"],
    pathOffset: -1,
    strokeWidth: 2,
    opacity: 1,
    transition: {
      damping: 10,
      stiffness: 50,
      type: "spring",
      yoyo: Infinity,
      duration: 4,
      
      ease:"easeInOut"
    },
  },
};
const pathThreeVariants = {
  hidden: {
    fill: "white",
    opacity: 0.1,
    stroke: "white",
    strokeWidth: 10,
  },
  visible: {
    fill: "white",
    Opacity: 1,

    transition: {
      duration: 4,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeadSvg = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div className="name-header" variants={svgVariants}>
      <motion.svg
        className="svg-wrapper"
        width="100%"
        height="100%"
        viewBox="0 0 927 113"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        filter="url(#blur)"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.path
          fill="white"
          d="M84.7344 107H71.6304L18.9264 27.08V107H5.82239V6.488H18.9264L71.6304 86.264V6.488H84.7344V107Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathTwoVariants}
        />
        <motion.path
          fill="white"
          d="M84.7344 107H71.6304L18.9264 27.08V107H5.82239V6.488H18.9264L71.6304 86.264V6.488H84.7344V107Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathThreeVariants}
        />
        <motion.path
          fill="white"
          d="M120.176 6.632V107H107.072V6.632H120.176Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathTwoVariants}
        />
        <motion.path
          fill="white"
          d="M120.176 6.632V107H107.072V6.632H120.176Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathThreeVariants}
        />
        <motion.path
          fill="white"
          d="M137.614 56.744C137.614 46.952 139.822 38.168 144.238 30.392C148.654 22.52 154.654 16.376 162.238 11.96C169.918 7.544 178.414 5.336 187.726 5.336C198.67 5.336 208.222 7.976 216.382 13.256C224.542 18.536 230.494 26.024 234.238 35.72H218.542C215.758 29.672 211.726 25.016 206.446 21.752C201.262 18.488 195.022 16.856 187.726 16.856C180.718 16.856 174.43 18.488 168.862 21.752C163.294 25.016 158.926 29.672 155.758 35.72C152.59 41.672 151.006 48.68 151.006 56.744C151.006 64.712 152.59 71.72 155.758 77.768C158.926 83.72 163.294 88.328 168.862 91.592C174.43 94.856 180.718 96.488 187.726 96.488C195.022 96.488 201.262 94.904 206.446 91.736C211.726 88.472 215.758 83.816 218.542 77.768H234.238C230.494 87.368 224.542 94.808 216.382 100.088C208.222 105.272 198.67 107.864 187.726 107.864C178.414 107.864 169.918 105.704 162.238 101.384C154.654 96.968 148.654 90.872 144.238 83.096C139.822 75.32 137.614 66.536 137.614 56.744Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathTwoVariants}
        />
        <motion.path
          fill="white"
          d="M137.614 56.744C137.614 46.952 139.822 38.168 144.238 30.392C148.654 22.52 154.654 16.376 162.238 11.96C169.918 7.544 178.414 5.336 187.726 5.336C198.67 5.336 208.222 7.976 216.382 13.256C224.542 18.536 230.494 26.024 234.238 35.72H218.542C215.758 29.672 211.726 25.016 206.446 21.752C201.262 18.488 195.022 16.856 187.726 16.856C180.718 16.856 174.43 18.488 168.862 21.752C163.294 25.016 158.926 29.672 155.758 35.72C152.59 41.672 151.006 48.68 151.006 56.744C151.006 64.712 152.59 71.72 155.758 77.768C158.926 83.72 163.294 88.328 168.862 91.592C174.43 94.856 180.718 96.488 187.726 96.488C195.022 96.488 201.262 94.904 206.446 91.736C211.726 88.472 215.758 83.816 218.542 77.768H234.238C230.494 87.368 224.542 94.808 216.382 100.088C208.222 105.272 198.67 107.864 187.726 107.864C178.414 107.864 169.918 105.704 162.238 101.384C154.654 96.968 148.654 90.872 144.238 83.096C139.822 75.32 137.614 66.536 137.614 56.744Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathThreeVariants}
        />
        {/* k */}
        <motion.path
          fill="white"
          d="M308.176 107L266.848 61.208V107H253.744V6.632H266.848V53.144L308.32 6.632H324.88L279.376 56.888L325.312 107H308.176Z"
          mask="url(#path-1-outside-1)"
          variants={pathTwoVariants}
          strokeLinecap="round"
        />
        <motion.path
          fill="white"
          d="M308.176 107L266.848 61.208V107H253.744V6.632H266.848V53.144L308.32 6.632H324.88L279.376 56.888L325.312 107H308.176Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathThreeVariants}
          strokeLinecap="round"
        />
        <motion.path
          fill="white"
          d="M409.586 6.632C420.53 6.632 429.986 8.696 437.954 12.824C446.018 16.856 452.162 22.664 456.386 30.248C460.706 37.832 462.866 46.76 462.866 57.032C462.866 67.304 460.706 76.232 456.386 83.816C452.162 91.304 446.018 97.064 437.954 101.096C429.986 105.032 420.53 107 409.586 107H378.338V6.632H409.586ZM409.586 96.2C422.546 96.2 432.434 92.792 439.25 85.976C446.066 79.064 449.474 69.416 449.474 57.032C449.474 44.552 446.018 34.808 439.106 27.8C432.29 20.792 422.45 17.288 409.586 17.288H391.442V96.2H409.586Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathTwoVariants}
        />
        <motion.path
          fill="white"
          d="M409.586 6.632C420.53 6.632 429.986 8.696 437.954 12.824C446.018 16.856 452.162 22.664 456.386 30.248C460.706 37.832 462.866 46.76 462.866 57.032C462.866 67.304 460.706 76.232 456.386 83.816C452.162 91.304 446.018 97.064 437.954 101.096C429.986 105.032 420.53 107 409.586 107H378.338V6.632H409.586ZM409.586 96.2C422.546 96.2 432.434 92.792 439.25 85.976C446.066 79.064 449.474 69.416 449.474 57.032C449.474 44.552 446.018 34.808 439.106 27.8C432.29 20.792 422.45 17.288 409.586 17.288H391.442V96.2H409.586Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathThreeVariants}
        />
        <motion.path
          fill="white"
          d="M493.255 6.632V107H480.151V6.632H493.255Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathTwoVariants}
        />
        <motion.path
          fill="white"
          d="M493.255 6.632V107H480.151V6.632H493.255Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathThreeVariants}
        />
        <motion.path
          fill="white"
          d="M582.692 36.008C582.692 44.36 579.812 51.32 574.052 56.888C568.388 62.36 559.7 65.096 547.988 65.096H528.692V107H515.588V6.632H547.988C559.316 6.632 567.908 9.368 573.764 14.84C579.716 20.312 582.692 27.368 582.692 36.008ZM547.988 54.296C555.284 54.296 560.66 52.712 564.116 49.544C567.572 46.376 569.3 41.864 569.3 36.008C569.3 23.624 562.196 17.432 547.988 17.432H528.692V54.296H547.988Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathTwoVariants}
        />
        <motion.path
          fill="white"
          d="M582.692 36.008C582.692 44.36 579.812 51.32 574.052 56.888C568.388 62.36 559.7 65.096 547.988 65.096H528.692V107H515.588V6.632H547.988C559.316 6.632 567.908 9.368 573.764 14.84C579.716 20.312 582.692 27.368 582.692 36.008ZM547.988 54.296C555.284 54.296 560.66 52.712 564.116 49.544C567.572 46.376 569.3 41.864 569.3 36.008C569.3 23.624 562.196 17.432 547.988 17.432H528.692V54.296H547.988Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathThreeVariants}
        />
        <motion.path
          fill="white"
          d="M651.827 107L627.923 65.96H612.083V107H598.979V6.632H631.379C638.963 6.632 645.347 7.928 650.531 10.52C655.811 13.112 659.747 16.616 662.339 21.032C664.931 25.448 666.227 30.488 666.227 36.152C666.227 43.064 664.211 49.16 660.179 54.44C656.243 59.72 650.291 63.224 642.323 64.952L667.523 107H651.827ZM612.083 55.448H631.379C638.483 55.448 643.811 53.72 647.363 50.264C650.915 46.712 652.691 42.008 652.691 36.152C652.691 30.2 650.915 25.592 647.363 22.328C643.907 19.064 638.579 17.432 631.379 17.432H612.083V55.448Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathTwoVariants}
          strokeLinecap="round"
        />
        <motion.path
          fill="white"
          d="M651.827 107L627.923 65.96H612.083V107H598.979V6.632H631.379C638.963 6.632 645.347 7.928 650.531 10.52C655.811 13.112 659.747 16.616 662.339 21.032C664.931 25.448 666.227 30.488 666.227 36.152C666.227 43.064 664.211 49.16 660.179 54.44C656.243 59.72 650.291 63.224 642.323 64.952L667.523 107H651.827ZM612.083 55.448H631.379C638.483 55.448 643.811 53.72 647.363 50.264C650.915 46.712 652.691 42.008 652.691 36.152C652.691 30.2 650.915 25.592 647.363 22.328C643.907 19.064 638.579 17.432 631.379 17.432H612.083V55.448Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathThreeVariants}
          strokeLinecap="round"
        />
        <motion.path
          fill="white"
          d="M699.692 17.288V50.84H736.268V61.64H699.692V96.2H740.588V107H686.588V6.488H740.588V17.288H699.692Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathTwoVariants}
        />
        <motion.path
          fill="white"
          d="M699.692 17.288V50.84H736.268V61.64H699.692V96.2H740.588V107H686.588V6.488H740.588V17.288H699.692Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathThreeVariants}
        />
        <motion.path
          fill="white"
          d="M822.192 6.632V17.288H794.832V107H781.728V17.288H754.224V6.632H822.192Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathTwoVariants}
        />
        <motion.path
          fill="white"
          d="M822.192 6.632V17.288H794.832V107H781.728V17.288H754.224V6.632H822.192Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathThreeVariants}
        />
        <motion.path
          fill="white"
          d="M897.65 84.68H853.874L845.81 107H831.986L868.274 7.208H883.394L919.538 107H905.714L897.65 84.68ZM893.906 74.024L875.762 23.336L857.618 74.024H893.906Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathTwoVariants}
        />
        <motion.path
          fill="white"
          d="M897.65 84.68H853.874L845.81 107H831.986L868.274 7.208H883.394L919.538 107H905.714L897.65 84.68ZM893.906 74.024L875.762 23.336L857.618 74.024H893.906Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
          variants={pathThreeVariants}
        />
        {!isHovered ? (
          <filter id="blur" height="300%" width="300%" x="-75%" y="-75%">
            <feMorphology
              operator="dilate"
              radius="2"
              in="SourceAlpha"
              result="thicken"
            />

            <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />

            <feFlood flood-color="rgba(122,73,165,0.8)" result="glowColor" />

            <feComposite
              in="glowColor"
              in2="blurred"
              operator="in"
              result="softGlow_colored"
            />

            <feMerge>
              <feMergeNode in="softGlow_colored" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ) : (
          ""
        )}
      </motion.svg>
      ;
    </motion.div>
  );
};

export default HeadSvg;
