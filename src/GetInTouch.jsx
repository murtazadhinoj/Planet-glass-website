import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: { opacity: 0, y: direction === "up" ? 40 : -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  };
};

const GetInTouch = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F5EAD5] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-20 space-y-10 lg:space-y-0 lg:space-x-16">
      
      {/* Left Section */}
      <motion.div 
        variants={fadeIn("left", 0.2)} 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full lg:w-1/3 text-center lg:text-left"
      >
        <h2 className="text-5xl lg:text-6xl font-serif text-black">हमसे जुड़ें</h2>
        <h3 className="text-2xl font-serif mt-2 text-black">(गुणवत्ता, उत्कृष्ट)</h3>
        <p className="text-lg mt-3 text-gray-700 tracking-wide">जोड़ना</p>
      </motion.div>

      {/* Middle Section */}
      <motion.div 
        variants={fadeIn("up", 0.4)} 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full lg:w-1/3 text-center"
      >
        <h1 className="text-4xl lg:text-7xl font-serif text-black leading-snug">
          CRAFT YOUR VISION
        </h1>
        <p className="text-lg mt-4 text-gray-700 max-w-md mx-auto leading-relaxed">
          Saisei blends innovation and sustainability to craft spaces that stand 
          out and stand for something. Let’s bring your vision to life with 
          thoughtful, modern design.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-[#8C6A4F] text-white rounded-full font-semibold tracking-wide shadow-md transition-all duration-300 hover:bg-[#6A4F3E]"
          onClick={()=> navigate('/JoinUs') }
        >
          GET IN TOUCH
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        variants={fadeIn("right", 0.6)} 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full lg:w-1/3 flex justify-center"
      >
        <img 
          src="https://i.pinimg.com/736x/c2/05/4e/c2054eb26c1a7cf9fc9679cdcb12d214.jpg" 
          alt="Japanese Zen Room" 
          className="rounded-xl shadow-xl w-full max-w-md transform hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
      
    </div>
  );
};

export default GetInTouch;
