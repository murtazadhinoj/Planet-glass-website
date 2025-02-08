import React from "react";

const CustomGlassInstallations = () => {
  return (
    <div className="bg-[#1c1a10] h-screen text-white py-16 px-8 md:px-20">
      {/* Title */}
      <div className="flex justify-between items-start border-b border-gray-500 pb-4">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-widest">
          CUSTOM GLASS INSTALLATIONS
        </h1>
        <span className="text-sm md:text-base">(EK)</span>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 mt-96 items-start">
        {/* Left Content */}
        <div>
          {/* About Section */}
          <div className="mb-10">
            <h3 className="uppercase text-xl font-semibold">about :</h3>
            <p className="text-gray-300 leading-relaxed">
              From elegant shower enclosures to sleek office partitions, we
              craft and install high-quality glass features that enhance both
              aesthetics and functionality.
            </p>
          </div>

          {/* Included Section */}
          <div>
            <h3 className="uppercase text-sm font-semibold mb-2">included :</h3>
            <ul className="text-gray-300 space-y-3">
              <li className="border-b border-gray-500 pb-2">
                . Initial concept meetings and workshops
              </li>
              <li className="border-b border-gray-500 pb-2">
                . Initial concept meetings and workshops
              </li>
              <li className="border-b border-gray-500 pb-2">
                . Initial concept meetings and workshops
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex flex-col gap-6">
          <img
            src="https://source.unsplash.com/500x300/?glass,architecture"
            alt="Glass Installation"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="https://source.unsplash.com/200x150/?interior,modern"
            alt="Glass Interior"
            className="w-48 h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomGlassInstallations;
