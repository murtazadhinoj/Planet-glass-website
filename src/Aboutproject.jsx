import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProjectShowcase = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <>
    <div className="overflow-x-hidden">

     <div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-between px-6 md:px-12 lg:px-20 py-6"
      style={{  
        backgroundImage:
          "url('https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg')",
      }}
    >
      {/* Header Section */}
      <div className="absolute top-6 md:top-10 left-6 md:left-10">
        <h2 className="text-white text-lg md:text-2xl font-serif border-b-2 inline-block">
          Our Projects
        </h2>
      </div>

      {/* Project Title */}
      <div className="absolute bottom-32 left-6 md:left-10">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
          Shizuka <br className="hidden md:block" /> Gardens
        </h1>
      </div>

      {/* Pagination */}
      <div className="absolute top-24 md:top-40 right-6 md:right-16">
        <p className="text-white text-lg md:text-xl font-semibold">1 / 3</p>
      </div>

      {/* See Project Button */}
      <div className="absolute bottom-10 right-6 md:right-16">
        <button className="border border-white text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base hover:bg-white hover:text-black transition-all"
        onClick={()=> navigate(`/project/1`)}>  
          SEE PROJECT
        </button>
      </div>
    </div>

    <div
      data-aos="slide-right"
      data-aos-duration="1000"
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-between px-6 md:px-12 lg:px-20 py-6"
      style={{
        overflowX: "hidden",  
        backgroundImage:
          "url('https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg')",
      }}
    >
      {/* Header Section */}
      <div className="absolute top-6 md:top-10 left-6 md:left-10">
        <h2 className="text-white text-lg md:text-2xl font-serif border-b-2 inline-block">
          Our Projects
        </h2>
      </div>

      {/* Project Title */}
      <div className="absolute bottom-32 left-6 md:left-10">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
          Shizuka <br className="hidden md:block" /> Gardens
        </h1>
      </div>

      {/* Pagination */}
      <div className="absolute top-24 md:top-40 right-6 md:right-16">
        <p className="text-white text-lg md:text-xl font-semibold">1 / 3</p>
      </div>

      {/* See Project Button */}
      <div className="absolute bottom-10 right-6 md:right-16">
        <button className="border border-white text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base hover:bg-white hover:text-black transition-all" 
        onClick={()=> navigate(`/project/2`)}>
          SEE PROJECT
        </button>
      </div>
    </div>

    <div
      data-aos="slide-left"
      data-aos-duration="1000"
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-between px-6 md:px-12 lg:px-20 py-6"
      style={{
        overflowX: "hidden",  
        backgroundImage:
          "url('https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg')",
      }}
    >
      {/* Header Section */}
      <div className="absolute top-6 md:top-10 left-6 md:left-10">
        <h2 className="text-white text-lg md:text-2xl font-serif border-b-2 inline-block">
          Our Projects
        </h2>
      </div>

      {/* Project Title */}
      <div className="absolute bottom-32 left-6 md:left-10">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
          Shizuka <br className="hidden md:block" /> Gardens
        </h1>
      </div>

      {/* Pagination */}
      <div className="absolute top-24 md:top-40 right-6 md:right-16">
        <p className="text-white text-lg md:text-xl font-semibold">1 / 3</p>
      </div>

      {/* See Project Button */}
      <div className="absolute bottom-10 right-6 md:right-16">
        <button className="border border-white text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base hover:bg-white hover:text-black transition-all">
          SEE PROJECT
        </button>
      </div>
    </div>
    </div>
    </>
   

    
  );
};

export default ProjectShowcase;
