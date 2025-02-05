import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-around bg-gray-100 text-center">
      {/* Company Name */}
      <h1 className="text-[200px] font-semibold text-gray-900 ">Planet Glass</h1>

      {/* Section Part 2 */}
      <div className="w-full max-w-lg flex flex-col items-start justify-start gap-4">
        <h1 className="text-4xl font-semibold text-gray-800 text-start">Craftsmen</h1>
        <p className="text-lg text-gray-700 text-start">
          Planet Glass is a top-tier workshop known for its exceptional craftsmanship, quality, and innovation in glassmaking.
        </p>
        <p className="text-sm text-gray-600 animate-bounce">Scroll</p>
      </div>
    </div>
  );
};

export default HeroSection;
