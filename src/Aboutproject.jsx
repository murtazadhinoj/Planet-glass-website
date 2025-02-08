import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Shizuka Gardens",
    image: "https://i.pinimg.com/736x/52/17/57/521757577a4065264e8ca486e842f977.jpg",
    index: "1 / 3",
  },
  {
    title: "Kawa Lofts",
    image: "https://i.pinimg.com/736x/52/17/57/521757577a4065264e8ca486e842f977.jpg",
    index: "2 / 3",
  },
  {
    title: "Kinsei Pavailion",
    image: "https://i.pinimg.com/736x/98/93/8e/98938e1d6482cd498111d4f8c0d6eb6e.jpg",
    index: "3 / 3",
  },
];

const ProjectShowcase = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          className="relative w-full h-[100vh] md:h-screen bg-cover bg-center flex flex-col justify-between p-6 md:p-16"
          style={{ backgroundImage: `url('${project.image}')` }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Header Section */}
          <motion.h2
            className="text-white text-6xl md:text-2xl font-serif inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Projects
          </motion.h2>

          {/* Project Title with Animation */}
          <motion.div
            className="text-white leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-[clamp(2rem,8vw,6rem)] font-bold">
              {project.title.split(" ").map((word, idx) => (
                <motion.span key={idx} className="block">{word}</motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Pagination */}
          <motion.p
            className="text-white text-sm md:text-lg font-semibold self-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {project.index}
          </motion.p>

          {/* "See Project" Button */}
          <motion.button
            className="border border-white text-white w-60 px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all"
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            SEE PROJECT
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectShowcase;
