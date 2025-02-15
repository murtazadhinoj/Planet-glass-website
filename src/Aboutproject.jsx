import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    title: "Kinsei Pavilion",
    image: "https://i.pinimg.com/736x/98/93/8e/98938e1d6482cd498111d4f8c0d6eb6e.jpg",
    index: "3 / 3",
  },
];

const ProjectShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] overflow-hidden">
      {projects.map((project, i) => {
        const zIndex = projects.length - i; // Higher z-index for the latest project
        const yTransform = useTransform(scrollYProgress, [0, 1], [0, -150 * i]);
        const opacity = useTransform(scrollYProgress, [i * 0.3, (i + 1) * 0.3], [1, 0]);

        return (
          <motion.div
            key={i}
            className="sticky top-0 left-0 w-full h-screen flex flex-col justify-center items-center px-6 md:px-16"
            style={{
              position:"relative",
              backgroundImage: `url('${project.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              y: yTransform,
              opacity,
              zIndex,
            }}
          >
            {/* Header Section */}
            <div className="absolute top-5 left-5 md:top-10 md:left-10">
              <h2 className="text-white text-lg md:text-2xl font-serif border-b-2 inline-block">
                Our Projects
              </h2>
            </div>

            {/* Project Title */}
            <div className="absolute top-[30%] left-5 md:left-10">
              <h1 className="text-white text-[clamp(2rem,10vw,6rem)] leading-none">
                {project.title.split(" ").map((word, idx) => (
                  <span key={idx} className="block">{word}</span>
                ))}
              </h1>
            </div>

            {/* Pagination */}
            <div className="absolute top-24 right-5 md:top-40 md:right-16">
              <p className="text-white text-lg md:text-xl font-semibold">{project.index}</p>
            </div>

            {/* See Project Button */}
            <div className="absolute bottom-5 right-5 md:bottom-10 md:right-16">
              <button className="border border-white text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all">
                SEE PROJECT
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectShowcase;
