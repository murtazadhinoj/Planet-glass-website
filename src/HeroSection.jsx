import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div 
      className="relative w-full h-screen flex items-center justify-between bg-cover bg-center px-6 md:px-16"
      style={{ backgroundColor:'black' }} // Add your background image
    >
      
      {/* Video Section (Main Brand Visual) */}
      <div className="absolute left-0 top-80 w-[70%]  flex items-center justify-center">
        <video 
          src="Comp 1_4.mp4" 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover mix-blend-difference opacity-90"
        />
        {/* Brand Name Overlay */}
        <motion.h1 
          className="absolute text-5xl md:text-7xl font-bold text-white uppercase tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          
        </motion.h1>
      </div>

      {/* Right Side: Text Section (30% Width) */}
      <motion.div 
        className="absolute right-6 md:right-16 lg:right-24 bottom-24 md:bottom-32 w-[30%] flex flex-col gap-3 text-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-semibold text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Craftsmen
        </motion.h2>
        <motion.p 
          className="text-sm md:text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Planet Glass is a top-tier workshop known for its exceptional craftsmanship, quality, and innovation in glassmaking.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.p 
          className="text-xs md:text-sm text-gray-400 mt-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          Scroll ↓
        </motion.p>
      </motion.div>

    </div>
  );
};

export default HeroSection;
