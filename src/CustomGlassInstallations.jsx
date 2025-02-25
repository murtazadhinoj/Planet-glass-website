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
        title=" Customized Back painted Glass"
        description="Back painted glass does not allow much grime or dirt to settle on its surface and is also very easy to wipe clean. The multiple coatings of paint make this glass very strong and durable. It is remarkably simple to customized paint glass for most back painted applications. Water based paint is the simplest back paint to use in terms of application and clean-up. You can clean up with soap and water."
        services={[
          "Custom Color & Design Matching – We offer back-painted glass in a wide range of colors and finishes to match your unique design preferences. Whether you need a solid color, gradient, or pattern, we ensure a seamless and vibrant look that enhances your space.",
          "Durable & Easy-to-Clean Installations – Our back-painted glass solutions are designed for long-lasting performance with multiple paint coatings that enhance strength and durability. The smooth, non-porous surface makes it easy to clean, ensuring a low-maintenance, hygienic solution for kitchens, bathrooms, and office spaces.",
          "Precision Cutting & Installation – We provide customized cutting and professional installation for back-painted glass, ensuring a perfect fit for walls, backsplashes, countertops, and more. Our expert team ensures precise alignment, secure mounting, and a flawless finish for a modern and sophisticated aesthetic.",
        ]}
        images={[
          "src/assets/images/backpaint1.png",
          "src/assets/images/backpaint2.jpg",
        ]}
      />

      <ServiceSection
        title="Engineering & Industrial Glass Specialist:"
        description="we specialize in high-performance engineering and industrial glass solutions designed to meet the rigorous demands of modern industries. Our glass products are engineered with precision, ensuring exceptional strength, durability, and resistance to extreme conditions. Whether it's for manufacturing, construction, automotive, or aerospace applications, we provide innovative glass solutions tailored to your specific needs.

          Our industrial glass is crafted using advanced technology, making it resistant to heat, chemicals, impact, and pressure, ensuring long-term reliability in challenging environments. From tempered safety glass and laminated glass to heat-resistant and anti-reflective coatings, we offer a wide range of options to support diverse industrial applications.

          With a commitment to innovation, quality, and safety, we work closely with businesses to develop customized glass solutions that enhance efficiency, performance, and sustainability. Whether you need precision-cut glass panels, protective shielding, or high-strength industrial glass components, Planet Glass is your trusted partner for engineering excellence in glass manufacturing."
        services={[
          "Borosilicate Toughened Glass with Wiper Assembly. ",
          "Nitrogen Purging Glove Box Machine Glass.",
          "Mono block automatic machine Glass.",
          "Clean Room Solutions Glass."
        ]}
        images={[
          "src/assets/images/Engineering1.png",
          "src/assets/images/Engineering2.png",
        ]}
      />

      <ServiceSection
        title=" Home Interior Glasses"
        description="we bring elegance, functionality, and modern aesthetics to your home with our premium interior glass solutions. Designed to enhance both style and practicality, our home interior glass products transform living spaces by adding openness, natural light, and a seamless flow between rooms. Whether you're looking for sophisticated partitions, contemporary dividers, sleek railings, or stylish glass furniture, we provide high-quality, customized glass solutions that elevate your interiors.
        With Planet Glass, you get high-quality, durable, and expertly crafted glass solutions that combine aesthetics, safety, and innovation to redefine your home interiors. Whether it's modern minimalism or luxurious sophistication, our glass solutions create a timeless and elegant living environment."
        services={[
          "Glass Partitions & Dividers: Create an open yet private living space with sleek glass partitions that maintain brightness while offering separation. Perfect for home offices, living areas, and modern interiors.",
          "Wall Glass Concepts: Transform plain walls into artistic glass installations, adding depth, reflections, and unique designs to your home. Our decorative glass panels and back-painted glass solutions provide a modern touch to interiors.",
          "Glass Furniture (Center & Dining Tables): Elevate your home’s decor with stylish glass tables that blend seamlessly with any interior. Our custom glass dining tables, coffee tables, and centerpieces offer a sleek and contemporary look while being easy to maintain.",
        ]}
        images={[
          "src/assets/images/interior1.png",
          "src/assets/images/interior2.png",
        ]}
      />
    </motion.div>
  );
};

export default CustomGlassInstallations;
