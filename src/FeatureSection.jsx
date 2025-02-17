import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Shizuka Gardens",
      image:
        "https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg",
      background:
        "https://i.pinimg.com/736x/52/17/57/521757577a4065264e8ca486e842f977.jpg",
    },
    {
      id: 2,
      title: "Kawa Lofts",
      image:
        "https://i.pinimg.com/736x/52/17/57/521757577a4065264e8ca486e842f977.jpg",
      background:
        "https://i.pinimg.com/736x/98/93/8e/98938e1d6482cd498111d4f8c0d6eb6e.jpg",
    },
    {
      id: 3,
      title: "Kinsei Pavilion",
      image:
        "https://i.pinimg.com/736x/98/93/8e/98938e1d6482cd498111d4f8c0d6eb6e.jpg",
      background:
        "https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg",
    },
  ];

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Smooth Back-to-Back Sliding Animation */}
      <div className="absolute inset-0 w-full h-full flex">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={projects[currentIndex].background}
            className="absolute w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${projects[currentIndex].background})` }}
            initial={{ x: direction * 100 + "%", opacity: 1 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: -direction * 100 + "%", opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-xl text-white max-w-lg">
        <motion.h2
          className="text-4xl font-bold"
          key={projects[currentIndex].title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {projects[currentIndex].title}
        </motion.h2>

        {/* Project Indicator (Modern Progress Bar) */}
        <div className="w-full h-1 bg-gray-600 rounded-full mt-2 relative">
          <motion.div
            className="absolute left-0 top-0 h-full bg-white rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </div>

        {/* Image Animation with Smooth Sliding Effect */}
        <div className="mt-6 w-[400px] h-[300px] rounded-lg overflow-hidden shadow-lg relative">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={projects[currentIndex].image}
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="absolute w-full h-full object-cover"
              initial={{ x: direction * 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -direction * 100, opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex mt-6 space-x-6">
          <motion.button
            className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
            onClick={prevProject}
            whileTap={{ scale: 0.9 }}
          >
            Prev
          </motion.button>
          <motion.button
            className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
            onClick={nextProject}
            whileTap={{ scale: 0.9 }}
          >
            Next
          </motion.button>
        </div>

        {/* Pagination */}
        <p className="mt-4 text-gray-300 text-sm">
          {currentIndex + 1} / {projects.length}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectShowcase;
