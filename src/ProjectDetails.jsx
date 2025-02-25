import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";



// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const borderVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 1.2,
      ease: [0.785, 0.135, 0.15, 0.86],
    },
  },
};

const imageReveal = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const curtainVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: "100%",
    transition: {
      duration: 1.4,
      ease: [0.785, 0.135, 0.15, 0.86],
    },
  },
};

const DetailRow = ({ label, value }) => (
  <motion.div
    className="flex justify-between py-2 border-b border-gray-300"
    variants={itemVariants}
  >
    <span className="text-gray-600">{label}</span>
    <span className="text-gray-800 font-medium">{value}</span>
  </motion.div>
);



const projects = {
  1: {
    title: "Shizuka Gardens",
    description:
      "Shizuka Gardens is a luxury eco-resort in Hokkaido, designed with sustainability principles.",
    location: "Hokkaido, Japan",
    year: "2023",
    bedrooms: "24 (Across multiple villas)",
    bathrooms: "18 (Across multiple villas)",
    size: "87,120 (2 acres)",
    category: "Eco-Resort",
    images: [
      "https://cdn.prod.website-files.com/66de71cc2bd368e4376f06b0/66de98097a06601ebd66659b_Sizhuka_Img_02.webp",
      "https://cdn.prod.website-files.com/66de71cc2bd368e4376f06b0/66de98164ae897514b84568a_Sizhuka_Img_03.webp",
      "https://cdn.prod.website-files.com/66de71cc2bd368e4376f06b0/66de98a6cdae96c41a2031f2_Sizhuka_Img_07.webp",
    ],
  },
  2: {
    title: "Zen Retreat",
    description:
      "Zen Retreat is a peaceful getaway blending modern luxury with nature.",
    location: "Kyoto, Japan",
    year: "2022",
    bedrooms: "10 Villas",
    bathrooms: "12",
    size: "50,000 sq ft",
    category: "Luxury Resort",
    images: [
      "https://cdn.prod.website-files.com/66de71cc2bd368e4376f06b0/66de99edb77ec77e8d8bd53e_kawa_loft_image_06.webp",
      "https://cdn.prod.website-files.com/66de71cc2bd368e4376f06b0/66de99f431732567868de0f1_kawa_loft_image_04.webp",
      "https://cdn.prod.website-files.com/66de71cc2bd368e4376f06b0/66de9a0248db53e49fd568cb_kawa_loft_image_07.webp",
    ],
  },
  3: {
    title: "Harmony Villas",
    description:
      "Harmony Villas offer a unique balance of nature and contemporary architecture.",
    location: "Bali, Indonesia",
    year: "2021",
    bedrooms: "15 Villas",
    bathrooms: "18",
    size: "65,000 sq ft",
    category: "Luxury Villas",
    images: [
      "https://cdn.prod.website-files.com/66de71cc2bd368e4376f06b0/66de9b517a06601ebd697b98_kensei_img_02.webp",
      "https://cdn.prod.website-files.com/66de71cc2bd368e4376f06b0/66de9b576d4d6035dda258e7_kensei_img_03.webp",
      "https://cdn.prod.website-files.com/66de71cc2bd368e4376f06b0/66de9b8d48969ad9594e85ba_Kensei_img_04.webp",
    ],
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <p className="text-center text-xl font-bold mt-10">Project Not Found</p>;
  }

  return (
    <>
      {/* First Section */}
      <motion.div
        className="lg:w-full lg:flex bg-[#D0EBE4] text-[#041C1D] lg:pt-[100px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Left Image Section */}
        <motion.div
          className="section-one lg:w-[100%]"
          variants={containerVariants}
        >
          <motion.div
            className="img-section lg:w-[70%] lg:p-5 relative overflow-hidden"
            variants={imageReveal}
          >
            <motion.img
              className="w-full bg-cover object-cover"
              src={project.images[0]}
              alt=""
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white z-20"
              variants={curtainVariants}
            />
          </motion.div>
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          className="section-two lg:mr-[100px] lg:flex lg:flex-col lg:gap-2"
          variants={containerVariants}
        >
          {/* Info Section */}
          <motion.div className="part-one" variants={itemVariants}>
            <p className="font-bold text-2xl text-[#041C1D]">Info</p>
            <motion.p
              className="font-semibold lg:w-2xs text-xl text-[#041C1D]"
              variants={itemVariants}
            >
              {project.description}
            </motion.p>
          </motion.div>

          {/* Second Image Section */}
          <motion.div
            className="img-section2 relative overflow-hidden"
            variants={imageReveal}
          >
            <motion.img
              src={project.images[1]}
              alt=""
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white z-20"
              variants={curtainVariants}
            />
          </motion.div>

          {/* Details Section */}
          <motion.div
            className="bg-[#D0EBE4] p-6 rounded-lg shadow-md w-full max-w-lg"
            variants={containerVariants}
          >
            <motion.h2
              className="text-lg font-semibold text-[#041C1D] mb-4"
              variants={itemVariants}
            >
              DETAILS
            </motion.h2>
            <motion.div
              className="border-t border-gray-500"
              variants={borderVariants}
            />
            <motion.div variants={containerVariants}>
              <DetailRow label="LOCATION" value={project.location} />
              <DetailRow label="YEAR" value={project.year} />
              <DetailRow label="BATHROOM" value={project.bathrooms} />
              <DetailRow label="BEDROOM" value={project.bedrooms} />
              <DetailRow label="TOTAL LAND SIZE" value={project.size} />
              <DetailRow label="CATEGORY" value={project.category} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Third Image Section */}
      <motion.div
        className="img-section3 bg-[#D0EBE4] lg:pt-10 lg:pb-0 relative overflow-hidden"
        variants={imageReveal}
      >
        <motion.img
          className="w-full h-full"
          src={project.images[2]}
         
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
          {/* <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white z-20"
            variants={curtainVariants}
          /> */}
      </motion.div>
    </>
  );
};

export default ProjectDetails;