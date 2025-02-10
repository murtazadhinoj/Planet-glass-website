import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  { id: 1, title: "Shizuka Gardens", image: "https://i.pinimg.com/736x/52/17/57/521757577a4065264e8ca486e842f977.jpg", index: "1 / 3" },
  { id: 2, title: "Kawa Lofts", image: "https://i.pinimg.com/736x/52/17/57/521757577a4065264e8ca486e842f977.jpg", index: "2 / 3" },
  { id: 3, title: "Kinsei Pavilion", image: " https://i.pinimg.com/736x/98/93/8e/98938e1d6482cd498111d4f8c0d6eb6e.jpg", index: "3 / 3" }
];

const ProjectShowcase = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-16">
      {projects.map((project) => (
        <div key={project.id} className="relative w-full h-[100vh] bg-cover bg-center flex flex-col justify-between p-6 md:p-16" 
          style={{ backgroundImage: `url('${project.image}')` }}>
          <h1 className="text-white text-[clamp(2rem,8vw,6rem)] font-bold">{project.title}</h1>
          <button 
            className="border border-white text-white w-60 px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            SEE PROJECT
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;
