import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  // Optimized Scroll Event
  useEffect(() => {
    let timer;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      setLastScrollY(window.scrollY);

      // Debounce for better performance
      clearTimeout(timer);
      timer = setTimeout(() => setLastScrollY(window.scrollY), 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 sm:px-12 lg:px-20 bg-transparent shadow-md border-b z-50 transition-all"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Logo */}
      <motion.div
        className="text-2xl font-bold text-black cursor-pointer"
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

      {/* Menu Icon */}
      <motion.button
        className="p-2 rounded-lg transition-all hover:bg-gray-200"
        whileTap={{ scale: 0.9 }}
      >
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
      </motion.button>
    </motion.nav>
  );
};

export default NavBar;
