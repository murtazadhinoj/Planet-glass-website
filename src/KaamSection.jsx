import React from "react";

const KaamSection = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#D8E4FC] px-10 relative">
      {/* Left Text */}
      <div className="absolute top-35 left-25 text-center">
        <p className="text-2xl font-serif">“काम”</p>
        <p className="text-2xl">(KA’AM)</p>
        <p className="text-3xl">SERVICE</p>
      </div>

      {/* Main Heading */}
      <div className="text-end leading-none">
        <h1 className="text-[150px] text-end font-bold">PRECISION</h1>
        <h1 className="text-[150px] font-bold flex items-center justify-center">
          IN 
          <span className="w-45 h-25 mx-3">
            <img 
              src="https://i.pinimg.com/736x/52/17/57/521757577a4065264e8ca486e842f977.jpg" 
              alt="Design Detail" 
              className="w-full h-full object-cover"
            />
          </span>
          EVERY
        </h1>
        <h1 className="text-[150px] font-bold text-start">DESIGN</h1>
      </div>

      {/* Description & Button */}
      <div className="absolute bottom-28 right-10 text-right max-w-md">
        <p className="text-x leading-relaxed">
          Planet Glass crafts premium, custom glass solutions with precision and innovation,
          merging artistry with durability to create stunning designs that redefine elegance and quality.
        </p>
        <button className="border border-black px-5 py-2 mt-4 rounded-full text-sm hover:bg-black hover:text-white transition-all">
          OUR SERVICE
        </button>
      </div>
    </div>
  );
};

export default KaamSection;
