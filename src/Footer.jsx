import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}   
      animate={{ opacity: 1, y: 50 }}
      transition={{ duration: 0.5 }}
      className="bg-orange-600  text-yellow-100 -mt-13 py-20 px-6 sm:px-10 lg:px-20 m-0"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <nav className="space-y-4 text-lg">
          {["HOME", "ABOUT", "PROJECT", "SUSTAINABILITY", "SERVICE", "JOURNAL", "CONTACT"].map((item, index) => (
            <p key={index} className="flex items-center space-x-2">
              <span className="text-sm">({index + 1})</span>
              <span className="hover:underline cursor-pointer">{item}</span>
            </p>
          ))}
        </nav>

        {/* Right Section */}
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
  );
};

export default Footer;
