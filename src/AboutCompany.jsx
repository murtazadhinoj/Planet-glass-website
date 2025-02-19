import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutCompany = () => {

  const navigate = useNavigate();

  return (
    <div className="container bg-beige-700 mx-auto   lg:px-5  py-16 flex md:flex-row  min-h-[150vh]">
      {/* Left Section */}
      <div className="left-section relative lg:h-[95vh] lg:w-[25vw]  
      ">
       <div className="topBox absolute top-0  left-5 w-[20%] flex-col text-center text-3xl ">
        <div className="h3">परंपरा</div>
        <div className="h3">parampara</div>
        <div className="h3">legacy</div>
       </div>
       <div className="bottomBox absolute bottom-3 left-5  bottom text-[4em] ">
       <div className="h3 ">EVERY</div>
        <div className="h3 ">LINE</div>
        <div className="h3 ">TELLS A </div>
        <div className="h3 ">STORY </div>
       </div>
      </div>

      {/* Middle Section (Image) */}
      <motion.div 
        className="middle-section lg:w-[50vw] md:w-1/3 lg:h-[95vh] flex justify-center"
      >
        <motion.img 
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeInOut" }}
          src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg" 
          alt="Tradition" 
          className="w-[35vw]   shadow-lg object-cover"
        />
      </motion.div>

      {/* Right Section */}
      <div className="right-section relative  lg:w-[25vw] lg:h-[95vh] md:w-1/3 text-center md:text-left mt-10 md:mt-0">
      <div className="righttextButton ">
      <p className="text-gray-700   lg:w-[60%] text-lg lg:text-sm lg:ml-20 leading-relaxed lg:mb-12">
        In every project at Saisei, the
essence of 伝統 (tradition) is
evident. By integrating the
disciplined aesthetics and
thoughtful methodologies of
our ancestors, we ensure that
each structure is not only
environmentally attuned but
also rich in cultural
significance. Our designs
reflect a deep respect for the
past, while embracing the
innovations of the future.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="bg-gray-800  text-white py-2 px-10 rounded-full text-md font-medium transition duration-300 hover:bg-gray-600 lg:ml-20 "
          onClick={()=>navigate('/aboutUS')}
        >
          About Us
        </motion.button>
      </div>
       
        
        
        
        <motion.img 
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeInOut" }}
          src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg" 
          alt="Tradition" 
          className="w-[69%] absolute top-120 left-21 h-[23%]  shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default AboutCompany;
