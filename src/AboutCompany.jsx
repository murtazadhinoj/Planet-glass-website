import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutCompany = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="container bg-beige-700 mx-auto lg:px-5 py-16 lg:flex lg:flex-row min-h-[150vh] flex flex-col items-center"
    >
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="left-section relative lg:h-[95vh] lg:w-[25vw] flex flex-row items-center w-[30vw] h-[30vh]"
      >
        <div className="topBox absolute top-0 left-5 w-[20%] flex-col text-center text-2xl">
          <div className="h3">परंपरा</div>
          <div className="h3">parampara</div>
          <div className="h3">legacy</div>
        </div>
        <div className="bottomBox absolute bottom-3 lg:left-5 text-[30px] lg:flex lg:flex-col lg:items-start lg:justify-center lg:w-[100%] lg:h-[50%] lg:text-7xl lg:font-normal flex text-center items-center justify-center w-[100%] h-[50%] pb-[100px]">
          <div className="h3">EVERY</div>
          <div className="h3">LINE</div>
          <div className="h3">TELLS</div>
          <div className="h3">A</div>
          <div className="h3">STORY</div>
        </div>
      </motion.div>

      {/* Middle Section (Image) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="middle-section lg:w-[50vw] md:w-1/3 lg:h-[95vh] flex justify-center"
      >
        <motion.img 
          src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg" 
          alt="Tradition" 
          className="lg:w-[35vw] w-full m-5 shadow-lg object-cover"
        />
      </motion.div>

      {/* Right Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        className="right-section relative lg:w-[25vw] lg:h-[95vh] md:w-1/3 text-center md:text-left mt-10 md:mt-0"
      >
        <div className="righttextButton flex flex-col items-start gap-5 m-5">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="text-gray-700 lg:w-[60%] text-lg lg:text-sm lg:ml-20 leading-relaxed lg:mb-12 text-justify lg:text-left"
          >
            In every project at Saisei, the essence of 伝統 (tradition) is evident. By integrating the disciplined aesthetics and thoughtful methodologies of our ancestors, we ensure that each structure is not only environmentally attuned but also rich in cultural significance. Our designs reflect a deep respect for the past, while embracing the innovations of the future.
          </motion.p>

          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-white py-2 px-10 rounded-full text-md font-medium transition duration-300 hover:bg-gray-600 lg:ml-20"
            onClick={() => navigate('/aboutUS')}
          >
            About Us
          </motion.button>
        </div>
        
        <motion.img 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg" 
          alt="Tradition" 
          className="w-[100%] h-[20vh] shadow-lg object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutCompany;
