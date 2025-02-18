import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutCompany = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center justify-between min-h-screen">
      {/* Left Section */}
      <div className="left-section lg:pb-35 w-full md:w-1/3 flex flex-col justify-between h-full">
        <h3 className="text-5xl md:text-7xl lg:xl font-bold text-gray-800 mb-8">Tradition</h3>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight lg:pt-20 ">
          Every <br /> Line <br /> Tells a <br /> Story
        </h1>
      </div>

      {/* Middle Section (Image) */}
      <motion.div 
        className="middle-section w-full md:w-1/3 lg:h-[550px] flex justify-center"
      >
        <motion.img 
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeInOut" }}
          src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg" 
          alt="Tradition" 
          className="w-full max-w-md rounded-lg shadow-lg object-cover"
        />
      </motion.div>

      {/* Right Section */}
      <div className="right-section w-full md:w-1/3 text-center md:text-left mt-10 md:mt-0">
        <p className="text-gray-700 text-lg lg:text-2xl lg:ml-25 leading-relaxed mb-6">
          In every project at Saisei, the essence of 伝統 (tradition) is evident. By integrating the
          disciplined aesthetics and thoughtful methodologies of our ancestors, we ensure that
          each structure is not only environmentally attuned but also rich in cultural significance.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="bg-gray-800 text-white py-3 px-6 rounded-full text-lg font-medium transition duration-300 hover:bg-gray-600 lg:ml-25"
          onClick={() => navigate("/aboutUs")}
        >
          About Us
        </motion.button>
        
        <p className="text-gray-600 mt-4 lg:ml-28">Scroll ↓</p>
      </div>
    </div>
  );
};

export default AboutCompany;
