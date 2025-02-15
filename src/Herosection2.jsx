import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Herosection2 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for images
  const leftImageY = useTransform(scrollYProgress, [0, 1], ["-30%", "-45%"]);
  const mainImageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const rightImageY = useTransform(scrollYProgress, [0, 1], ["35%", "-35%"]);

  return (
    <>
   
    <div ref={containerRef} className="bg-orange-300 min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 py-20 overflow-hidden">
      {/* Left Image */}
      <motion.div
        className="w-[200px] h-[300px] mt-10 md:w-[250px] md:h-[400px] lg:w-[250px] lg:h-[280px] overflow-hidden shadow-lg lg:mt-72 lg:mr-20"
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
        className="w-[250px] h-[350px] md:w-[350px] md:h-[500px] lg:w-[450px] lg:h-[600px] overflow-hidden shadow-2xl"
        style={{ y: mainImageY }}
      >
        <img
          src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"
          alt="Main Image"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-[200px] h-[300px] md:w-[250px] md:h-[400px] lg:w-[300px] lg:h-[330px] overflow-hidden shadow-lg lg:mt-72 lg:ml-20"
        style={{ y: rightImageY }}
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
