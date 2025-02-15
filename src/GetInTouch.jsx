import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY; // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className="w-full h-20 flex items-center justify-between px-6 sm:px-12 lg:px-20 border-b-2 bg-transparent fixed top-0 left-0 right-0 shadow-md z-50 transition-transform duration-300"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
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
          <motion.h1 className="text-lg font-medium text-gray-700">
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
