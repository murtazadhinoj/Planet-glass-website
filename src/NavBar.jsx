import { useState, useEffect } from "react";
import React from "react";
import { delay, motion } from "framer-motion";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { del } from "framer-motion/client";
import NavigationPanel from "./NavigationPanel";

const NavBar = () => {
  const navigate = useNavigate();
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggeleNavigationPanel = () =>{
    setIsPanelOpen(!isPanelOpen);
  }

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className=" w-[100vw]   flex justify-between bg-transparent
         fixed top-0 left-0 right-0 z-50
       lg:w-full  lg:h-27 lg:flex lg:items-center lg:justify-between lg:px-6 sm:px-12 lg:px-20  lg:fixed lg:top-0 lg:left-0 lg:right-0  lg:z-50 "
       
      >
        {/* Bottom Border Animation */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-amber-200"
          initial={{ width: "0vw" }}
          animate={{ width: "100vw" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
        ></motion.div>

        {/* Logo */}
        <motion.div
          className="logo"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1}}
        >
          <img src="./src/assets/output.png" alt="Logo" width="70" height="70" />
        </motion.div>

        {/* Nav Button */}
        <motion.div
          className="navButton flex justify-around items-center w-1/4
          lg:flex lg:justify-between lg:items-center lg:w-1/4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
        >
          <motion.div
            className="text text-amber-50 max-sm:hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.3 }}
          >
            EST - 2020
          </motion.div>

          {/* Animated Button */}
          <motion.div
            className="button w-8 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggeleNavigationPanel}
            
          >
            <motion.hr
              className="w-full bg-amber-50 mt-2 h-[1.5px]"
             
            />
            <motion.hr
              className="w-3/4 bg-amber-50 mt-2 h-[3.1px]"
              
            />
          </motion.div>
        </motion.div>
      </motion.nav>

      {isPanelOpen && <NavigationPanel onClose={toggeleNavigationPanel}/>}
    </>
  );
};

export default NavBar;
