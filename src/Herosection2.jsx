import React from "react";
import { motion } from "framer-motion";

const Herosection2 = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 px-6 md:px-16 py-10 gap-16">
      
      {/* First Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text */}
        <div className="w-full md:w-1/3 flex flex-col gap-10">
            <h1 className="text-3xl md:text-5xl font-bold">TRADITION</h1>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Every Line <br /> Tells a Story
          </h2>
        </div>

        {/* Center Image with Parallax */}
        <motion.div 
          className="w-full md:w-[600px] overflow-hidden rounded-lg"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            className="w-full h-auto object-cover"
            src="https://i.pinimg.com/736x/82/86/96/82869653b79c03fd2af7f7c0dd7afffe.jpg"
            alt="Tradition"
          />
        </motion.div>

        {/* Right Content */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <p className="text-md md:text-lg leading-relaxed">
            In every project at Saisei, the essence of 伝統 (tradition) is evident.
            By integrating the disciplined aesthetics and thoughtful methodologies
            of our ancestors, we ensure that each structure is not only
            environmentally attuned but also rich in cultural significance.
          </p>
          <button className="border-2 border-black rounded-xl py-3 px-6 hover:bg-black hover:text-white transition-all">
            About us
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Left Small Image */}
        <motion.div 
          className="w-40 md:w-48 h-28 overflow-hidden rounded-lg"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <img
            className="w-full h-full object-cover"
            src="https://i.pinimg.com/736x/82/86/96/82869653b79c03fd2af7f7c0dd7afffe.jpg"
            alt="Innovation"
          />
        </motion.div>

        {/* Center Large Image */}
        <motion.div 
          className="w-full md:w-[550px] h-[600px] flex flex-col items-center relative overflow-hidden rounded-lg"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            className="w-full h-full object-cover"
            src="https://i.pinimg.com/736x/82/86/96/82869653b79c03fd2af7f7c0dd7afffe.jpg"
            alt="Innovation"
          />
          <h1 className="absolute bottom-4 text-white text-lg font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
            (Innovation)
          </h1>
        </motion.div>

        {/* Right Small Image */}
        <motion.div 
          className="w-40 md:w-[250px] h-[150px] overflow-hidden rounded-lg"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <img
            className="w-full h-full object-cover"
            src="https://i.pinimg.com/736x/c9/fd/18/c9fd186b22966b53da5fe40bddc62c1e.jpg"
            alt="Modern Design"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Herosection2;
