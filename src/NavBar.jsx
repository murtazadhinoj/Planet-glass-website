import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

    window.addEventListener("scroll", handleScroll());
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <motion.nav 
        className="w-full h-20 flex items-center justify-between px-6 sm:px-12 lg:px-20 border-b-2 bg-transparent fixed top-0 left-0 right-0 shadow-md z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Logo */}
        <motion.div 
          className="text-2xl font-bold text-gray-800 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
        >
          Planet Glass
        </motion.div>

        {/* Centered Section */}
        <motion.div className="hidden sm:flex items-center space-x-8">
          <motion.h1 
            className="text-lg font-medium text-gray-700"
            whileHover={{ scale: 1.1, color: "#000" }}
          >
            Est-2020
          </motion.h1>
        </motion.div>

        {/* Menu Icon (Opens Footer) */}
        <motion.div 
          className="cursor-pointer flex items-center justify-center p-2 hover:bg-gray-200 rounded-lg transition-all"
          whileTap={{ scale: 0.9 }}
        >
          <button onClick={() => setIsFooterVisible(true)}>
            <svg
              className="w-8 h-8 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 6h12M6 12h12M6 18h12"
              />
            </svg>
          </button>
        </motion.div>
      </motion.nav>

      {/* Footer Component */}
      <Footer isVisible={isFooterVisible} setIsVisible={setIsFooterVisible} />
    </>
  );
};

export default NavBar;
