import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

function KaamSection() {
  const navigate = useNavigate();
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Smoother animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] // Smoother easing function
      }
    }
  };

  // Individual view triggers for smoother sequencing
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      style={{overflowX:'hidden'}} 
      className="main lg:min-w-full min-h-[75vh] bg-[#D0EBE4] text-[#041C1D] flex flex-col p-5 justify-center items-center lg:min-h-[150vh]"
    >
      {/* Top Section */}
      <motion.div 
        className="w-full lg:w-full h-25 flex flex-col justify-center items-center lg:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="leftOne text-center lg:text-[4rem] flex flex-col items-center justify-center text-[2rem]"
          variants={childVariants}
        >
          <motion.span 
            className='max-sm:leading-1 lg:leading-10'
            variants={textVariants}
          >
            kaam
          </motion.span>
          <motion.span 
            className='max-sm:leading-15 lg:leading-18'
            variants={textVariants}
          >
            (Ka'am)
          </motion.span>
          <motion.span 
            className='max-sm:leading-2 lg:leading-10'
            variants={textVariants}
          >
            service
          </motion.span>
        </motion.div>

        <motion.div 
          initial="hidden"
          className="rightOne lg:w-full sm:w-full md:w-[50%] md:mb-[60px] lg:text-[13rem] lg:ml-20 lg:pt-[5px] lg:leading-60 text-[4rem]"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
        >
          <h1 className=' '>PRECISION</h1>
        </motion.div>
      </motion.div>

      {/* Middle Section */}
      <motion.div 
        className="middle w-full lg:w-[70%] md:w-[50%] h-30 flex justify-between items-center  lg:h-70"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="text-[4rem] lg:text-[13rem] md:text-[5rem]"
          variants={childVariants}
        >
          <h2>IN</h2>
        </motion.div>

        <div className="w-[23vw] lg:w-[65vw] lg:mt-7 lg:mx-7 relative overflow-hidden">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <img 
              src="src/assets/images/image4.png" 
              alt="" 
              className="relative z-10 w-full h-full object-cover" 
            />
          </motion.div>
          
          {/* Curtain element */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-white z-20"
            initial={{ x: "0%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1, 
              ease: [0.4, 0, 0.2, 1],
              delay: 0.2
            }}
          />
        </div>

        <motion.div 
          className="lg:text-[13rem] text-[4rem] md:text-[5rem]"
          variants={childVariants}
        >
          <h2>EVERY</h2>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div 
        className="bottom flex justify-center items-center flex-col lg:h-50 lg:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="w-[80%] md:w-[35%] md:text-[5rem] mr-20 text-[4rem] lg:text-[13rem] lg:ml-[550px] lg:mb-15"
          variants={childVariants}
        >
          <h2 className='leading-5'>DESIGN</h2>
        </motion.div>

        <motion.div 
          className="lg:w-[50%] lg:pl-20 mt-6 w-full md:w-[50%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            delay: 0.4,
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <p className='lg:w-[80%] lg:h-[100px] md:w-[80%]  md:h-20  md:ml-20 md:mt-10 ' >
          we believe in PRECISION IN EVERY DESIGN. Every piece we craft is a perfect blend of accuracy, elegance, and innovation. From intricate glasswork to sleek modern designs, our commitment to detail ensures flawless execution. With expert craftsmanship and high-quality materials, we bring clarity and sophistication to every project, turning visions into reality with unmatched precision.
          </p>
          <motion.button  
            className='mt-4 rounded-full border-2 px-5 py-2 md:w-[150px] md:mt-50 md:ml-25 border-amber-50 ' 
            onClick={() => navigate('/Services')}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            OUR SERVICE
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default KaamSection