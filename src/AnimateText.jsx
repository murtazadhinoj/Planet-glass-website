import React from "react";
import { motion } from "framer-motion";

const AnimatedText = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {/* Animated Text */}
      <motion.h1 
        className="relative text-[100px] font-bold text-white uppercase tracking-wide"
        initial={{ width: "0%" }} // Start with 0 width
        animate={{ width: "100%" }} // Expand width
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{ overflow: "hidden", whiteSpace: "nowrap", borderRight: "2px solid white" }} // Border effect
      >
        Planet Glass
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
