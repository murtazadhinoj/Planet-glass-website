import React from "react";
import { motion } from "framer-motion";

function NavigationPanel({ onClose }) {
  // Main panel animation
  const panelVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: "0vw",
      transition: { ease: [0.33, 1, 0.68, 1], duration: 1.8 },
    },
    exit: { x: "-100vw", opacity: 0, transition: { ease: "easeInOut", duration: 1 } },
  };

  const rightPanelVariants = {
    hidden: { x: "100vw" },
    visible: {
      x: "0vw",
      transition: { ease: [0.33, 1, 0.68, 1], duration: 1.8 },
    },
    exit: { x: "110vw", opacity: 0, transition: { ease: "easeInOut", duration: 1 } },
  };

  const sections = ["HOME", "ABOUT", "PROJECT", "SERVICE", "SUSTAIN", "JOURNAL"];

  return (
    <motion.div
      className="NavPage fixed top-0 left-0 w-full h-full flex flex-col md:flex-row z-50"
      initial="hidden"
      animate="visible"
    >
      {/* Left Panel */}
      <motion.div
        className="leftside bg-amber-900 w-full md:w-1/2 h-1/2 md:h-full flex flex-col"
        variants={panelVariants}
      >
        {sections.map((title, index) => (
          <motion.div
            key={title}
            className="w-full h-[10vh] border-b-2 flex items-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <p className="text-3xl md:text-5xl">{title}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Panel */}
      <motion.div
        className="rightSide bg-orange-600 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center"
        variants={rightPanelVariants}
      >
        <motion.div
          className="bigLogo w-24 h-24 md:w-48 md:h-48 rounded-full border-2 border-white flex justify-center items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <img src="./src/assets/output.png" alt="Logo" className="w-20 md:w-36" />
        </motion.div>

        <motion.div className="infoTab w-full flex flex-col items-center mt-4">
          <p className="text-lg">Email: planetglass@gmail.com</p>
          <p className="text-lg">Office: 1-1-2 Oshiage, Tokyo, Japan</p>
          <p className="text-lg">Phone: +81 3-1234-5678</p>
        </motion.div>
      </motion.div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 border-2 border-white text-white px-4 py-2 rounded-lg"
      >
        Close
      </button>
    </motion.div>
  );
}

export default NavigationPanel;
