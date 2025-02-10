import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full min-h-screen bg-[#2D1B15] text-white flex flex-col items-center justify-center px-10 py-20 relative"
    >
      {/* Heading */}
      <motion.h2 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-center text-sm tracking-widest uppercase text-gray-400"
      >
        We eagerly await your contact and look forward to welcoming you soon
      </motion.h2>

      <motion.h2 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }} 
        className="text-center text-sm tracking-widest uppercase text-gray-400 mb-10"
      >
        for an unforgettable and luxurious experience.
      </motion.h2>

      {/* Brand Name */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="absolute left-10 top-10 text-4xl font-serif font-bold text-[#E4C6A0]"
      >
        <p>PLANET</p>
        <p>GLASS</p>
      </motion.div>

      {/* Form */}
      <motion.form 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }} 
        className="w-full max-w-2xl"
      >
        {["NAME", "EMAIL", "PHONE NO", "MESSAGE"].map((label, index) => (
          <div key={index} className="mb-6">
            <label className="block mb-2 text-lg">{label} :</label>
            {label === "MESSAGE" ? (
              <motion.textarea
                whileFocus={{ borderColor: "#E4C6A0" }}
                className="w-full border-b border-white bg-transparent outline-none pb-2 focus:border-[#E4C6A0] transition-all duration-300"
                rows="3"
              ></motion.textarea>
            ) : (
              <motion.input
                whileFocus={{ borderColor: "#E4C6A0" }}
                type={label === "EMAIL" ? "email" : label === "PHONE NO" ? "tel" : "text"}
                className="w-full border-b border-white bg-transparent outline-none pb-2 focus:border-[#E4C6A0] transition-all duration-300"
              />
            )}
          </div>
        ))}

        {/* Send Button */}
        <motion.div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#E4C6A0", color: "#2D1B15" }}
            whileTap={{ scale: 0.9 }}
            className="border border-white px-8 py-2 text-lg rounded-full hover:bg-white hover:text-black transition-all"
          >
            SEND
          </motion.button>
        </motion.div>
      </motion.form>

      {/* Social Icons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.5 }} 
        className="absolute bottom-10 right-10 flex space-x-6 text-xl"
      >
        {["facebook-f", "linkedin-in", "instagram", "whatsapp"].map((icon, i) => (
          <motion.i 
            key={i} 
            whileHover={{ scale: 1.3, color: "#E4C6A0" }} 
            className={`fab fa-${icon} cursor-pointer`}
          ></motion.i>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
