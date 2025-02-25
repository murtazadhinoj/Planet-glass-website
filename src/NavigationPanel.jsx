import React from "react";
import { delay, motion } from "framer-motion";



function NavigationPanel({ onClose }) {
  // Main panel animation
  const panelVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: "0vw",
      transition: { ease: [0.33, 1, 0.68, 1], duration: 1.8 },
    },
    exit: { x: "-100vw", opacity: 0, transition: { ease: "easeInOut", duration: 1 } },
  };

  const rightPanelVariants = {
    hidden: { x: "100vw" },
    visible: {
      x: "0vw",
      transition: { ease: [0.33, 1, 0.68, 1], duration: 1.8 },
    },
    exit: { x: "110vw", opacity: 0, transition: { ease: "easeInOut", duration: 1 } },
  };

  // Section animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 1, delay },
    }),
  };

  // Hover effects
  const hoverEffects = {
    scale: 1.02,
    backgroundColor: "#607f92",
    borderBottomWidth: "3px",
    borderBottomColor: "#99c9e7",
    transition: { ease: [0.33, 1, 0.68, 1], duration: 0.7 },
  };
  

  const sections = [
    { title: "HOME", link: "/" },
  { title: "ABOUT", link: "/aboutUS" },
  { title: "PROJECT", link: "/project" },
  { title: "SERVICE", link: "/services" },
  { title: "SUSTAIN", link: "/sustainability" },
  { title: "JOURNAL", link: "/journal" }
  ];

  return (
    <motion.div
      className="NavPage
       max-sm:bg-[#99c9e7]
       
       lg:w-[100vw] lg:h-[100vh] lg:flex lg:fixed top-0 left-0 z-50"
      initial="hidden"
      animate="visible"
    >
      <motion.div className="leftside bg-[#D0EBE4]  max-sm:w-[100vw] max-sm:h-[50vh] sm:flex-col
      md:w-[50vw] md:h-[100vh] md:flex-col md:z-20
      lg:w-[50vw] lg:h-[100vh] lg:flex-col lg:z-20" variants={panelVariants}>
        {sections.map((item, index) => (
          <motion.div
            key={item.title}
            className=" max-sm:w-[100vw] max-sm:h-[8.3vh]  max-sm:border-b-2 max-sm:flex max-sm:justify-between max-sm:items-center 
            md:w-[50vw] md:h-[16.6vh]  md:border-b-2 md:flex md:justify-between md:items-center md:relative md:overflow-hidden
            lg:w-[50vw] lg:h-[16.6vh]  lg:border-b-2 lg:flex lg:justify-between lg:items-center lg:relative lg:overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={index * 0.5}
            whileHover={hoverEffects}
          >
            <motion.div
              className="absolute bottom-0 left-0 w-0 h-full "
              whileHover={{ width: "100%", transition: { duration: 0.5 } }}
            />
            <motion.div
              className="innerLeftBox max-sm:ml-2
               md:flex md:w-[35%] md:gap-x-5 md:h-[100%]  md:justify-between md:items-center md:ml-2
               lg:flex lg:w-[35%] lg:gap-x-5 h-[100%]  lg:justify-between lg:items-center lg:ml-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay:index * 0.5 }}
            >
              <p>({index + 1})</p>
              <motion.p
                className=" text-5xl 
                lg:text-8xl lg:ml-7
                md:text-5xl "
                whileHover={{ x: 25, transition: { duration: 0.6 } }}
              >
                <a href={item.link}>{item.title}</a>
                

              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="rightSide bg-[#3d7b6a]    w-[100vw] h-[50vh] flex flex-col justify-center items-center
      md:w-[50vw] md:h-[100vh] md:flex md:flex-col md:justify-center md:items-center
      lg:w-[50vw] lg:h-[100vh] lg:flex lg:flex-col lg:justify-center lg:items-center
      "
  initial={{ x: "100vw" }}
  animate={{ x: 0 }}
  transition={{ duration: 1 }}
>
  <motion.div className="topSide h-[100vh] w-[100vw]
  md:w-[50vw] md:h-[81vh] md:flex md:flex-col md:justify-between md:items-center  
  lg:w-[50vw] lg:h-[81vh] lg:flex lg:flex-col lg:justify-center lg:items-center">
    <motion.div className="bigLogo max-sm:hidden  
    md:visible
     md:w-full md:flex md:justify-center md:items-center md:mb-6
     lg:w-full lg:flex lg:justify-center lg:items-center lg:mb-6">
      <motion.div 
        className="w-46 h-46 rounded-full border-1 border-white flex justify-center items-center relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay:1.5, duration: 1.2 }}
      >
        <img src="./src/assets/output.png" alt="" className="w-36 h-36
        md:w-[1000px] md:h-70
        lg:md:w-56 lg:w-56" />
      </motion.div>
    </motion.div>
    
    <motion.div className="infoTabh-[35vh]  w-[100vw]  flex flex-col justify-center items-center gap-1
    md:flex-col md:justify-center md:items-strech md:gap-4
    lg:flex-col lg:justify-center lg:items-center lg:gap-4
    
    ">
      {[
        [["Email", "planetglass@gmail.com"], ["Office", "1-1-2 Oshiage, Tokyo, Japan"]],
        [["Phone", "+81 3-1234-5678"], ["Availability", "Monday to Friday: 9:00 AM - 6:00 PM"]],
        [["Social", "Facebook, Instagram, Twitter"], ["Legal", "Privacy Policy, Terms of Service"]]
      ].map((pair, index) => (
        <motion.div
          key={index}
          className="row   flex justify-between items-top w-[100vw]  py-3
          md:flex md:justify-between md:items-center md:w-[50vw] md:px-5 md:py-3 
          lg:flex lg:justify-between lg:items-center lg:w-[40vw] lg:px-5 lg:py-3"
          lg:initial={{ opacity: 0, y: 30 }}
          lg:animate={{ opacity: 1, y: 0 }}
          lg:transition={{ delay:1.5, duration:2, }} 

          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay:3, duration:2, }}
        >
          {pair.map(([label, value], subIndex) => (
            <div key={subIndex} className="detailBOX  flex flex-col justify-start items-start w-1/2 px-1 mx-1
         md:flex-col md:justify-start md:items-start md:w-1/2 md:text-center
        x lg:flex-col lg:justify-center lg:items-center lg:w-1/2 lg:text-center">
              <p className="font-bold mb-1">{label}:</p>
              <p>{value}</p>
            </div>
          ))}
        </motion.div>
      ))}
    </motion.div>
    
    <motion.div 
      className=" w-[100%] h-[2px]  mt-1  z-1
    md:w-[80%] md:h-[2px]  md:mb-19 
      lg:w-[80%] lg:h-[2px] bg-gray-400 lg:mt-9 "
      lg:initial={{ opacity: 0, width: "50vw", x : "-50vw" }}
      lg:animate={{ opacity: 1, width: "50vw", x: 0 }}
    lg:transition={{ delay:2, duration: 2 }}

    md:initial={{ opacity: 0, width: "50vw", x : "-50vw" }}
    md:animate={{ opacity: 1, width: "50vw", x: 0 }}
  md:transition={{ delay:2, duration: 2 }}

    initial={{ opacity: 1, width: "0", }}
    animate={{ opacity: 1, width: "100vw"}}
    transition={{ delay:4, duration: 2 }}

    

    />
  </motion.div>
</motion.div>

 <button onClick={onClose} className="absolute top-[94vh] right-4 border-white border-2 text-white px-4 py-2 rounded-4xl
 md:absolute md:top-4 md:right-10
 lg:absolute lg:top-4 lg:right-20  "
 >Close</button>
    </motion.div>
  );
}

export default NavigationPanel;