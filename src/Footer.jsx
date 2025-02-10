import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = ({ isVisible, setIsVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 w-full h-screen bg-[#1a1a10] text-[#e5dcc2] py-20 px-6 sm:px-10 lg:px-20 z-50 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-6 text-white text-lg bg-red-600 px-3 py-1 rounded-lg hover:bg-red-800 transition"
          >
            Close
          </button>

          {/* Footer Content */}
          <div className="container mx-auto flex flex-col md:flex-row justify-between">
            {/* Left Section (Navigation) */}
            <nav className="space-y-4 text-lg">
              {["HOME", "ABOUT", "PROJECT", "SUSTAINABILITY", "SERVICE", "JOURNAL", "CONTACT"].map((item, index) => (
                <motion.button
                  key={index}
                  className="flex items-center space-x-2 cursor-pointer"
                  whileHover={{ scale: 1.1, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <span className="text-sm">({index + 1})</span>
                  <span className="hover:underline">{item}</span>
                </motion.button>
              ))}
            </nav>

            {/* Right Section (Contact Info) */}
            <div className="text-right space-y-6">
              <h1 className="text-5xl font-serif">PLANET GLASS</h1>
              <div>
                <h3 className="font-semibold">EMAIL</h3>
                <p className="text-sm">planetglass@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold">PHONE:</h3>
                <p className="text-sm">+91 702-167-6669</p>
              </div>
              <div>
                <h3 className="font-semibold">OFFICE</h3>
                <p className="text-sm underline cursor-pointer">1-1-2 Oshiage, Sumida City, Tokyo, Japan</p>
                <p className="text-xs">Monday to Friday: 9am - 6pm</p>
              </div>
              <div>
                <h3 className="font-semibold">SOCIALS</h3>
                <p className="text-sm">Instagram | Facebook | LinkedIn</p>
              </div>
              <div>
                <p className="text-xs">139.8169° E | 35.7100° N</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Footer;
