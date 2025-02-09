import React from 'react'

const ServiceSection = ({ title, description, services, images,className }) => {
    return (
      <div className="bg-[#1c1a10] text-white min-h-screen py-20 px-6 sm:px-10 lg:px-20 flex flex-col justify-center">
        {/* Title Section */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start border-b border-gray-500 pb-6">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-widest">{title}</h1>
          <span className="text-sm md:text-base mt-3 md:mt-0">(EK)</span>
        </div>
  
        {/* Content Section */}
        <div className="container mx-auto grid md:grid-cols-2 gap-12 mt-12">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h3 className="uppercase text-sm font-semibold mb-2 text-gray-400">About :</h3>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
  
            <div>
              <h3 className="uppercase text-sm font-semibold mb-2 text-gray-400">Included :</h3>
              <ul className="text-gray-300 space-y-4">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-500 pb-2 hover:text-white transition-all duration-300"
                  >
                    • {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Right Side Image Section */}
          <div className="flex flex-col md:flex-row ml-10 gap-6 w-3xs h-96">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Glass Service"
                className={`w-full md:w-${index === 0 ? "3/4" : "1/4"} h-auto aspect-video object-cover rounded-lg transition-transform duration-300 hover:scale-105`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default ServiceSection