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
    <div className="w-full flex flex-col gap-10">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url('${project.image}')` }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Header Section */}
          <div className="absolute top-10 left-10">
            <h2 className="text-white text-2xl font-serif border-b-2 inline-block">
              Our Projects
            </h2>
          </div>

          {/* Project Title */}
          <div className="absolute top-[40%] left-10">
            <h1 className="text-white text-[120px] leading-none">
              {project.title.split(" ").map((word, idx) => (
                <span key={idx} className="block">{word}</span>
              ))}
            </h1>
          </div>

          {/* Pagination */}
          <div className="absolute top-40 right-16">
            <p className="text-white text-xl font-semibold">{project.index}</p>
          </div>

          {/* See Project Button */}
          <div className="absolute bottom-10 right-16">
            <button className="border border-white text-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all">
              SEE PROJECT
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectShowcase;
