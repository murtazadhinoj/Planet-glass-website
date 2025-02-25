import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Manually define `wrap()` function (Fixes the issue)
const wrap = (min, max, value) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

const ProjectShowcase = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const projects = [
    {
      id: 1,
      title: " Architectural Glasses ",
      image: "src/assets/images/Architecture1.png",
      background: "src/assets/images/Architecture2.jpg",
    },
    {
      id: 2,
      title: "PDLC Switchable Smart Glass",
      image: "src/assets/images/PDLC2.png",
      background: "src/assets/images/PDLC1.png",
    },
    {
      id: 3,
      title: " Modular Kitchen Glasses ",
      image: "src/assets/images/Modular2.png",
      background: "src/assets/images/Modular1.png",
    },
  ];

  const index = wrap(0, projects.length, page); // ✅ Fixed: Uses manually defined wrap()

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const changeProject = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <motion.div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Sliding Effect */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence custom={direction}>
          <motion.div
            key={projects[index].background}
            className="absolute w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${projects[index].background})` }}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            custom={direction}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-20 left-5 lg:top-35 lg:left-20 flex space-x-4 z-20">
        <motion.button
          className="text-white text-2xl font-semibold transition-all duration-300 hover:opacity-70 hover:scale-105"
          onClick={() => changeProject(-1)}
          whileTap={{ scale: 0.9 }}
        >
          Prev
        </motion.button>

        <motion.button
          className="text-white text-2xl font-semibold transition-all duration-300 hover:opacity-70 hover:scale-105"
          onClick={() => changeProject(1)}
          whileTap={{ scale: 0.9 }}
        >
          Next
        </motion.button>
      </div>

      {/* Main Image with Sliding Effect & Drag Support */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl px-4 sm:px-8">
        <motion.div
          className="relative w-full max-w-3xl h-[60vh] sm:h-[70vh] md:h-[75vh] rounded-lg overflow-hidden shadow-lg cursor-grab"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.3}
          onDragEnd={(event, info) => {
            if (info.offset.x > 100) changeProject(-1);
            else if (info.offset.x < -100) changeProject(1);
          }}
        >
          <AnimatePresence custom={direction}>
            <motion.img
              key={projects[index].image}
              src={projects[index].image}
              alt={projects[index].title}
              className="absolute w-full h-full object-cover"
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              custom={direction}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </motion.div>

        {/* Title with Sliding Effect */}
        </div>
        <div className="absolute bottom-10 w-full  text-white text-center py-4">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            key={projects[index].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {projects[index].title}
          </motion.h2>
      </div>

      {/* Indicator (Bottom Right) */}
      <div className="absolute bottom-5 right-5 flex flex-col space-y-2 z-20">
        {projects.map((_, i) => (
          <motion.div
            key={i}
            className={`w-1 h-6 rounded-full transition-all ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
            initial={{ opacity: 0, height: 4 }}
            animate={{ opacity: 1, height: i === index ? 24 : 12 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectShowcase;
