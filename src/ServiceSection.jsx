import React from "react";
import { motion } from "framer-motion";

// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
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
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const curtainVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: "100%",
    transition: {
      duration: 1.4,
      ease: [0.785, 0.135, 0.15, 0.86],
    },
  },
};

const ServiceSection = ({ title, description, services, images}) => {
  return (
    <>
    

    <motion.div
      className="bg-[#1c1a10] text-white min-h-screen py-20 px-6 sm:px-10 lg:px-20  flex flex-col justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Title Section */}
      <motion.div
        className="container mx-auto flex flex-col md:flex-row justify-between items-start border-b border-gray-500 pb-6 relative"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-semibold tracking-widest"
          variants={itemVariants}
        >
          {title.toUpperCase()}
        </motion.h1>
        <motion.span
          className="text-sm md:text-base mt-3 md:mt-0"
          variants={itemVariants}
        >
          (EK)
        </motion.span>
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-white"
          variants={borderVariants}
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="container mx-auto grid md:grid-cols-2 gap-12 mt-12"
        variants={containerVariants}
      >
        {/* Left Content */}
        <motion.div variants={containerVariants}>
          <motion.div className="mb-8" variants={itemVariants}>
            <h3 className="uppercase text-sm font-semibold mb-2 text-gray-400">
              About :
            </h3>
            <motion.p
              className="text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="uppercase text-sm font-semibold mb-2 text-gray-400">
              Included :
            </h3>
            <ul className="text-gray-300 space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  className="border-b border-gray-500 pb-2 hover:text-white transition-all duration-300 relative"
                  variants={itemVariants}
                >
                  • {service}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[1px] bg-white"
                    variants={borderVariants}
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Right Side Image Section */}
        <motion.div
          className="flex flex-col md:flex-row ml-10 gap-6 w-3xs h-96 lg:w-[100%]"
          variants={containerVariants}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden w-full md:w-1/2 h-auto aspect-video rounded-lg"
              variants={imageReveal}
            >
              <motion.img
                src={image}
                alt="Glass Service"
                className="w-full h-full object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-white z-20"
                variants={curtainVariants}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default ServiceSection;