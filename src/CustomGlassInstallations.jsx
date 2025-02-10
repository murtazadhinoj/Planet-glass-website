import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ServiceSection from "./ServiceSection";

const CustomGlassInstallations = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, x:0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center bg-gray-100 py-10"
    >
   

      <ServiceSection
        title="CUSTOM GLASS INSTALLATIONS"
        description="From elegant shower enclosures to sleek office partitions, we craft and install high-quality glass features that enhance both aesthetics and functionality."
        services={[
          "Initial concept meetings and workshops",
          "Custom design & fabrication",
          "Professional installation services",
        ]}
        images={[
          "https://i.pinimg.com/736x/92/dd/04/92dd04b01b62f2ae932f2def166d405b.jpg",
          "https://i.pinimg.com/736x/0d/d7/5f/0dd75fb7ea4d98340c7e145dabbf138d.jpg",
        ]}
      />

      <ServiceSection
        title="GLASS REPAIR & REPLACEMENT"
        description="From minor cracks to full glass panel replacements, we restore clarity and security to your windows, doors, and storefronts."
        services={[
          "Emergency glass repair",
          "Window resealing & defogging",
          "Same-day glass replacement (subject to availability)",
        ]}
        images={[
          "https://i.pinimg.com/736x/81/a2/39/81a239c2fb4206e3f8805ed54f3a3627.jpg",
          "https://i.pinimg.com/736x/10/cb/54/10cb540c84ba2a30b5337a284bf93689.jpg",
        ]}
      />

      <ServiceSection
        title="ENERGY-EFFICIENT SOLUTIONS"
        description="Reduce energy costs and enhance comfort with insulated, low-E, or tinted glass designed for superior thermal performance."
        services={[
          "Energy-saving glass consultation",
          "UV & glare reduction solutions",
          "Custom glazing for residential and commercial properties",
        ]}
        images={[
          "https://i.pinimg.com/736x/c2/05/4e/c2054eb26c1a7cf9fc9679cdcb12d214.jpg",
          "https://i.pinimg.com/736x/9e/15/79/9e157939a41bcf1259944df465c6b869.jpg",
        ]}
      />
    </motion.div>
  );
};

export default CustomGlassInstallations;
