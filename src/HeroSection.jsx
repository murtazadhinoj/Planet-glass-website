import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Variants for staggered text animation
  const textVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 1.5 + i * 0.3, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <div 

      className="relative w-[100vw] h-[100vh] flex items-center justify-between bg-cover bg-center px-6 md:px-16 overflow-hidden
      md:flex-col md:items-start md:justify-center
      lg:w-full  lg:h-[100vh] lg:flex lg:items-center lg:justify-between lg:bg-cover lg:bg-center lg:px-6 lg:md:px-16"
      style={{ backgroundImage: "url('./src/assets/heroImg2.jpg')", backgroundSize: "cover", backgroundPosition: "center" , overflow:"hidden"}}
    >
      {/* Video Section (Main Brand Visual) */}
      <div className="absolute -left-20 top-120 w-[140%] 
                      md:w-full 
                      lg:right-125 lg:top-90 lg:w-[75%]">
        <video 
          src="Comp 1_4.mp4" 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover mix-blend-difference opacity-90"
        />
      </div>

      {/* Right Side: Text Section */}
      <motion.div 
        className="absolute     maxsm:w-[100vw] max-sm:h-[25vh] max-sm:text-start max-sm:gap-2 max-sm:bottom-0 max-sm:left-3
        lg:right-24 lg:bottom-10  md:bottom-32  lg:h-[40vh] lg:justify-center lg:items-center lg:gap-5 flex flex-col  lg:text-center"
        initial="hidden"
        animate="visible"
      >
        {/* Heading - Craftsmen */}
        <motion.h2 
          className=" max-sm:text-2xl  max-sm:font-semibold 
          lg:text-3xl md:text-4xl lg:font-semibold text-white"
          variants={textVariants}
          custom={0} // First to appear
        >
          Craftsmen
        </motion.h2>

        {/* Paragraph Lines Staggered */}
        <div className=" md:text-lg text-gray-300 leading-relaxed lg:w-[80%] lg:ml-30 text-start 
        max-sm:w-[80vw] h-[20vh] text-[13px] 
        ">
          {[
            "Planet Glass is a top-tier workshop renowned  ",
            "for its exceptional craftsmanship,outstanding",
            "quality and innovative techniques in ",
            " glassmaking. By blending tradition ",
            "with modern advancements,we create unique, ",
            " durable,and artistic glass pieces that stand the test of time.",
            
          ].map((line, index) => (
            <motion.p 
              key={index}
              variants={textVariants}
              custom={index + 1} // Each line has increasing delay
              className="overflow-hidden"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Scroll Indicator (Last to appear) */}
        <motion.p 
          className="text-lg text-gray-400 max-sm:mb-20
          lg:text-xs md:text-sm  lg:mt-4"
          variants={textVariants}
          custom={7} // Last animation
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          Scroll ↓
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
