import React, { useState } from "react";

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Shizuka Gardens",
      image: "https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg",
      background: "https://i.pinimg.com/736x/52/17/57/521757577a4065264e8ca486e842f977.jpg",
    },
    {
      id: 2,
      title: "Kawa Lofts",
      image: "https://i.pinimg.com/736x/52/17/57/521757577a4065264e8ca486e842f977.jpg",
      background: "https://i.pinimg.com/736x/98/93/8e/98938e1d6482cd498111d4f8c0d6eb6e.jpg",
    },
    {
      id: 3,
      title: "Kinsei Pavilion",
      image: "https://i.pinimg.com/736x/98/93/8e/98938e1d6482cd498111d4f8c0d6eb6e.jpg",
      background: "https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg",
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${projects[currentIndex].background})`,
      }}
    >
      {/* Section One (Left Controls) */}
      <div className="w-1/4 flex flex-col items-center bg-white/40 p-4 rounded-md shadow-md backdrop-blur-md">
        <h1 className="text-3xl font-bold text-gray-800">Selected Project</h1>
        <div className="mt-4 flex flex-col space-y-4">
          <button
            className="px-6 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition rounded"
            onClick={prevProject}
          >
            Prev
          </button>
          <button
            className="px-6 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition rounded"
            onClick={nextProject}
          >
            Next
          </button>
        </div>
      </div>

      {/* Section Two (Image Preview) */}
      <div className="w-2/4 flex flex-col items-center">
        <h2 className="text-3xl text-white font-semibold mb-4 drop-shadow-md">
          {projects[currentIndex].title}
        </h2>
        <div className="w-[400px] h-[350px] overflow-hidden rounded-lg shadow-lg">
          <img
            className="w-full h-full object-cover transition-all duration-500"
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
          />
        </div>
      </div>

      {/* Section Three (Pagination) */}
      <div className="w-1/4 flex justify-center">
        <h1 className="text-2xl font-semibold text-white bg-black/50 px-4 py-2 rounded-md">
          {currentIndex + 1} / {projects.length}
        </h1>
      </div>
    </div>
  );
};

export default ProjectShowcase;
