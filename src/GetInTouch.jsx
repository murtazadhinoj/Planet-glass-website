import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#F5EAD5] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-10">
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }} 
        className="w-full lg:w-1/3 text-center lg:text-left"
      >
        <h2 className="text-4xl lg:text-6xl font-serif text-black">जुड़ें</h2>
        <h3 className="text-xl font-serif mt-2 text-black">(JOIN US)</h3>
        <p className="text-lg mt-2 text-gray-700 tracking-wide">CONNECT</p>
      </motion.div>

      {/* Middle Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }} 
        className="w-full lg:w-1/3 text-start mt-6 lg:mt-0"
      >
        <h1 className="text-5xl lg:text-7xl font-serif text-black">
          CRAFT YOUR VISION
        </h1>
        <p className="text-l mt-4 text-gray-700 max-w-md mx-auto">
          Saisei blends innovation and sustainability to craft spaces that stand
          out and stand for something. Let’s bring your vision to life with
          thoughtful, modern design.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-2 bg-[#8C6A4F] text-white rounded-full font-semibold tracking-wide shadow-md"
          onClick={()=>navigate('/joinUs')}
        >
          GET IN TOUCH
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }} 
        className="w-full lg:w-1/3 flex justify-center mt-6 lg:mt-0"
      >
        <img 
          src="https://i.pinimg.com/736x/c2/05/4e/c2054eb26c1a7cf9fc9679cdcb12d214.jpg" 
          alt="Japanese Zen Room" 
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </motion.div>
    </div>
  );
};

export default GetInTouch;
