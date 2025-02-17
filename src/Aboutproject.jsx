import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  { id: 1, title: "Shizuka Gardens", image: "https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg" },
  { id: 2, title: "Zen Retreat", image: "https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg" },
  { id: 3, title: "Harmony Villas", image: "https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg" },
];

const Aboutproject = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      {projects.map((project, index) => (
        <div
          key={project.id}
          data-aos={index % 2 === 0 ? "slide-left" : "slide-right"}
          data-aos-duration="1000"
          className="relative w-full h-screen bg-cover bg-center flex flex-col justify-between px-6 md:px-12 lg:px-20 py-6"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          {/* Header */}
          <div className="absolute top-6 md:top-10 left-6 md:left-10">
            <h2 className="text-white text-lg md:text-2xl font-serif border-b-2 inline-block">
              Our Projects
            </h2>
          </div>

          {/* Project Title */}
          <div className="absolute bottom-32 left-6 md:left-10">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Pagination */}
          <div className="absolute top-24 md:top-40 right-6 md:right-16">
            <p className="text-white text-lg md:text-xl font-semibold">
              {index + 1} / {projects.length}
            </p>
          </div>

          {/* See Project Button */}
          <div className="absolute bottom-10 right-6 md:right-16">
            <button
              className="border border-white text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base hover:bg-white hover:text-black transition-all"
              onClick={() => navigate(`/details/${project.id}`)}
            >
              SEE PROJECT
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aboutproject;
