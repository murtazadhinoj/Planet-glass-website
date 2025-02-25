import React from "react";
import { easeIn, motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      className="mainloader bg-[#D0EBE4] h-[100vh] w-[100vw] flex justify-center fixed top-0 left-0"
      initial={{ backgroundColor: "#D0EBE4" }}
      animate={{ backgroundColor: "#ffffff" }}
      transition={{ delay: 2.5, duration: 0.2, ease: [0.855, 0.015, 1.000, 0.530]}}
    >
      <div className="containLineBox bg-[#c3de6b00] h-[100vh] w-[77vw] flex justify-between">
        {/* Left Line Animation */}
        <motion.div
          className="left bg-black h-[100vh] w-[0.15vw]"
          initial={{ y: 0, width: "0.15vw" }}
          animate={{ y: "-100vh", width: "0.08vw" }}
          transition={{ duration: 1.5, ease: [0.855, 0.015, 1.000, 0.530]}}
        ></motion.div>

        {/* Center Line + Circle */}
        <div className="center flex justify-center relative">
          {/* Center Line (Top Half) */}
          <motion.div
            className="centerline bg-black absolute left-0 w-[0.10vw]"
            initial={{ height: "42.1vh", top: 0, width: "0.10vw" }}
            animate={{ height: "42.1vh", y: "-100vh", width: "0.05vw" }}
            transition={{ duration: 1.5, ease: [0.855, 0.015, 1.000, 0.530]}}
          ></motion.div>

          {/* Center Line (Bottom Half) */}
          <motion.div
            className="centerline bg-black absolute left-0 w-[0.10vw]"
            initial={{ height: "42.1vh", bottom: 0, width: "0.10vw" }}
            animate={{ height: "42.1vh", y: "100vh", width: "0.05vw" }}
            transition={{ duration: 1.5, ease: [0.855, 0.015, 1.000, 0.530] }}
          ></motion.div>

          {/* Circular Border Animation */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <motion.circle
              cx="60"
              cy="60"
              r="58"
              fill="none"
              stroke="#000"
              strokeWidth="12"
              strokeDasharray="365"
              strokeDashoffset="0"
              initial={{ strokeDashoffset: 0, strokeWidth: "12" }}
              animate={{ strokeDashoffset: 365, strokeWidth: "0.9" }}
              transition={{ duration: 1.5, ease: [0.855, 0.015, 1.000, 0.530] }}
            />
          </svg>

          
        </div>

        {/* Right Line Animation */}
        <motion.div
          className="right bg-black h-[100vh] w-[0.15vw]"
          initial={{ y: 0, width: "0.15vw" }}
          animate={{ y: "100vh", width: "0.08vw" }}
          transition={{ duration: 1.5, ease: [0.855, 0.015, 1.000, 0.530]}}
        ></motion.div>
      </div>
      <motion.img
  src="./src/assets/output.png"
  alt="Logo"
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-22 h-22 image-no-bg"
  initial={{ opacity: 1 }}
  animate={{ opacity: 0 }}
  transition={{ delay: 1.49, duration: 0.1 }}
/>

      {/* Window Opening Animation */}
      <motion.div
        className="window h-[100vh] w-[100vw] flex fixed top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="leftWindow bg-[#D0EBE4] h-[100vh] w-[50vw]"
          initial={{ x: "0vw" }}
          animate={{ x: "-100vw" }}
          transition={{ delay: 2.5, duration: 1.5, ease: [0.855, 0.015, 1.000, 0.530]}}
        ></motion.div>
        <motion.div
          className="rightWindow bg-[#D0EBE4] h-[100vh] w-[50vw]"
          initial={{ x: "0vw" }}
          animate={{ x: "100vw" }}
          transition={{ delay: 2.5, duration: 1.5, ease: [0.855, 0.015, 1.000, 0.530]}}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}

export default LoadingScreen;
