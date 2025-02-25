import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
  const navigate = useNavigate();

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const borderVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.2,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  };

  const imageReveal = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const curtainVariants = {
    hidden: { x: "0%" },
    visible: {
      x: "100%",
      transition: {
        duration: 1.4,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#D0EBE4] *:text-[#041C1D] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-20 space-y-10 lg:space-y-0 lg:space-x-16">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/3 text-center *:text-[#041C1D] lg:text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={textVariants}>
          <h2 className="text-5xl lg:text-6xl font-serif ">हमसे जुड़ें</h2>
        </motion.div>

        <motion.div variants={textVariants}>
          <h3 className="text-2xl font-serif lg:mt-2 mt-5 ">(गुणवत्ता, उत्कृष्ट)</h3>
        </motion.div>

        <motion.div variants={textVariants}>
          <p className="text-lg mt-3  tracking-wide">जोड़ना</p>
        </motion.div>

        {/* Image with Curtain */}
        <motion.div
          className="relative overflow-hidden max-sm:mt-5 lg:mt-45 lg:w-[21vw]"
          variants={containerVariants}
        >
          <motion.div variants={imageReveal} className="relative z-10">
            <img
              src="./src/assets/images/image5.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white z-20"
            variants={curtainVariants}
          />
        </motion.div>
      </motion.div>

      {/* Middle Section */}
      <motion.div
        className="w-full lg:w-1/3 text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h1
          variants={textVariants}
          className="text-4xl lg:text-7xl font-serif  leading-snug"
        >
          CRAFT YOUR VISION
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-lg mt-4 text-gray-700 max-w-md mx-auto leading-relaxed"
        >
           At Planet Glass, we turn ideas into reality with precision-crafted glass solutions. Whether you're looking for sleek modern designs or custom glasswork, our expertise ensures flawless execution. Let's bring your vision to life with clarity, elegance, and unmatched quality.
        </motion.p>

        <motion.button
          variants={textVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-[#388873] text-[#fcfcfc] rounded-full font-semibold tracking-wide shadow-md"
          onClick={() => navigate("/JoinUs")}
        >
          GET IN TOUCH
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-[50vw] lg:w-1/3 flex justify-center relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={imageReveal}
          className="relative z-10 shadow-xl w-full max-w-md"
        >
          <img
            src="src/assets/images/image3.png"
            alt="Japanese Zen Room"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 max-sm:hidden"
          />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-white z-20"
          variants={curtainVariants}
        />
      </motion.div>
    </div>
  );
};

export default GetInTouch;