import React from 'react';

const Herosection2 = () => {
  return (
    <>
      {/* Main Section */}
      <div className="main-container relative w-full h-screen flex items-start justify-between px-10">
        {/* Left Text Section */}
        <div className="container1 relative w-[400px] h-[550px] flex flex-col justify-between">
          <h1 className="text-4xl font-bold absolute top-0 left-10">TRADITION</h1>
          <h2 className="text-5xl font-semibold absolute bottom-10 left-10 leading-tight">
            Every Line <br /> Tells a Story
          </h2>
        </div>

        {/* Center Image Section */}
        <div className="container2 w-[600px] relative">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src="https://i.pinimg.com/736x/82/86/96/82869653b79c03fd2af7f7c0dd7afffe.jpg"
            alt="Tradition"
          />
        </div>

        {/* Right Text & Button Section */}
        <div className="container3 w-[300px] flex flex-col justify-between items-start gap-10">
          <p className="text-lg leading-relaxed">
            In every project at Saisei, the essence of 伝統 (tradition) is evident.
            By integrating the disciplined aesthetics and thoughtful methodologies
            of our ancestors, we ensure that each structure is not only
            environmentally attuned but also rich in cultural significance.
            Our designs reflect a deep respect for the past while embracing the
            innovations of the future.
          </p>
          <button className="border-2 border-black rounded-2xl p-7 hover:bg-black hover:text-white transition-all">
            About us
          </button>
          <img
            className="w-[250px] h-auto rounded-lg mt-4"
            src="https://i.pinimg.com/736x/c9/fd/18/c9fd186b22966b53da5fe40bddc62c1e.jpg"
            alt="Design"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="main2 w-full h-screen flex items-center justify-center gap-5 relative">
        {/* Bottom-left small rectangle */}
        <div className="img-box1 absolute bottom-5 left-10 w-48 h-28">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://i.pinimg.com/736x/82/86/96/82869653b79c03fd2af7f7c0dd7afffe.jpg"
            alt="Innovation"
          />
        </div>

        {/* Centered larger image with text overlay */}
        <div className="img-box2 w-[550px] h-[600px] flex flex-col items-center justify-center relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://i.pinimg.com/736x/82/86/96/82869653b79c03fd2af7f7c0dd7afffe.jpg"
            alt="Innovation"
          />
          <h1 className="absolute bottom-2 text-white text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded-md">
            (Innovation)
          </h1>
        </div>

        {/* Third image positioned properly */}
        <div className="img-box3 absolute right-10 top-20 w-[250px] h-[150px]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://i.pinimg.com/736x/c9/fd/18/c9fd186b22966b53da5fe40bddc62c1e.jpg"
            alt="Modern Design"
          />
        </div>
      </div>
    </>
  );
};

export default Herosection2;
