import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const KaamSection = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#D8E4FC] px-5 md:px-10 relative">
      {/* Left Text Section */}
      <motion.div
        className="absolute top-10 left-5 md:left-20 text-left md:text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="text-lg md:text-2xl font-serif">“काम”</p>
        <p className="text-lg md:text-2xl">(KA’AM)</p>
        <p className="text-xl md:text-3xl font-semibold">SERVICE</p>
      </motion.div>

      {/* Main Heading */}
      <div className="text-center md:text-end leading-none mt-10 md:mt-0">
        <motion.h1
          className="text-[clamp(2rem,10vw,8rem)] font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration:1, delay: 0.2 }}
        >
          PRECISION
        </motion.h1>

        <motion.h1
          className="text-[clamp(2rem,10vw,8rem)] font-bold flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          IN
          <motion.span
            className="w-20 h-16 md:w-40 md:h-32 mx-3 overflow-hidden rounded-md"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img
              src="https://i.pinimg.com/736x/52/17/57/521757577a4065264e8ca486e842f977.jpg"
              alt="Design Detail"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </motion.span>
          EVERY
        </motion.h1>

        <motion.h1
          className="text-[clamp(2rem,10vw,8rem)] font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          DESIGN
        </motion.h1>
      </div>

      {/* Description & Button */}
      <motion.div
        className="mt-8 max-w-lg text-center md:text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p className="text-sm md:text-base leading-relaxed">
          Planet Glass crafts premium, custom glass solutions with precision and innovation,
          merging artistry with durability to create stunning designs that redefine elegance and quality.
        </p>
        <motion.button
          className="border border-black px-5 py-2 mt-4 rounded-full text-sm hover:bg-black hover:text-white transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={()=> navigate('/Services')}
        >
          OUR SERVICE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default KaamSection;
