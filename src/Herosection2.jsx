import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Herosection2 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for images
  const leftImageY = useTransform(scrollYProgress, [0, 1], ["105%", "-240%"]);
  // const mainImageY = useTransform(scrollYProgress, [0, 1], ["-130%", "10%"]);
  const rightImageY = useTransform(scrollYProgress, [0, 1], ["205%", "-340%"]);
  const btmrightImageY = useTransform(scrollYProgress, [0, 1], ["405%", "-440%"]);
  const btmMiddleImageY = useTransform(scrollYProgress, [0, 1], ["305%", "-300%"]);
  const btmRightImageY = useTransform(scrollYProgress, [0, 1], ["105%", "-200%"]);
  
 

  return (
    <>
   
    <div ref={containerRef} className="  bg-orange-900 relative min-h-[200vh] flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 py-20 overflow-hidden">
      {/* Left Image */}
      <motion.div
        className="w-[200px] h-[300px] mt-10 md:w-[250px] md:h-[400px] overflow-hidden shadow-lg lg:mb-90 lg:mr-20
        lg:w-[15vw] lg:h-[25vh]"
        style={{ y: leftImageY }}
      >
        <img
          src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"
          alt="Left Image"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Middle Image (Main) */}
      <motion.div
        className="w-[250px] h-[350px] md:w-[350px] md:h-[500px]   overflow-hidden 
        lg:w-[37vw] lg:h-[80vh] lg:mb-290"
        
      >
        <img
          src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"
          alt="Main Image"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-[200px] h-[300px] md:w-[250px] md:h-[400px] overflow-hidden shadow-lg lg:mb-130 lg:ml-20
        lg:h-[17vh] lg:w-[w-30vw]"

        style={{ y: rightImageY }}
      >
        <img
          src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"
          alt="Right Image"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/*btm Right Image */}
      <motion.div
        className="w-[200px] absolute bottom-0 left-0 h-[300px] md:w-[250px] md:h-[400px] overflow-hidden shadow-lg lg:mb-130 lg:ml-20
        lg:h-[17vh] lg:w-[w-30vw]"

        style={{ y: btmrightImageY }}
      >
        <img
          src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"
          alt="Right Image"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/*btm middle Image */}
      <motion.div
        className="w-[200px] absolute bottom-0 left-140 h-[300px] md:w-[250px] md:h-[400px] overflow-hidden shadow-lg lg:mb-130 lg:ml-20
        lg:h-[17vh] lg:w-[w-30vw]"

        style={{ y: btmMiddleImageY }}
      >
        <img
          src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"
          alt="Right Image"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/*btm right Image */}
      <motion.div
        className="w-[200px] absolute bottom-0 left-280 h-[300px] md:w-[250px] md:h-[400px] overflow-hidden shadow-lg lg:mb-130 lg:ml-20
        lg:h-[17vh] lg:w-[w-30vw]"

        style={{ y: btmRightImageY }}
      >
        <img
          src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"
          alt="Right Image"
          className="object-cover w-full h-full"
        />
      </motion.div>

     
  
        
    </div>

    
    </>
  );
};

export default Herosection2;
