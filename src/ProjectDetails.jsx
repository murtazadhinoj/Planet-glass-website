import React from "react";
import { useParams } from "react-router-dom";

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
      <div className="lg:w-full lg:flex bg-[#F5EAD2] lg:pt-[100px]">
        <div className="section-one lg:w-[100%]">
          <div className="img-section lg:w-[70%] lg:p-5">
            <img className="w-full bg-cover object-cover" src={project.images[0]} alt="" />
          </div>
        </div>

        <div className="section-two lg:mr-[100px] lg:flex lg:flex-col lg:gap-2">
          <div className="part-one">
            <p className="font-bold text-2xl">Info</p>
            <p className="font-semibold lg:w-2xs text-xl">{project.description}</p>
          </div>

          <div className="img-section2">
            <img src={project.images[1]} alt="" />
          </div>

          <div className="bg-[#F5EAD2] p-6 rounded-lg shadow-md w-full max-w-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">DETAILS</h2>
            <div className="border-t border-gray-500">
              <DetailRow label="LOCATION" value={project.location} />
              <DetailRow label="YEAR" value={project.year} />
              <DetailRow label="BATHROOM" value={project.bathrooms} />
              <DetailRow label="BEDROOM" value={project.bedrooms} />
              <DetailRow label="TOTAL LAND SIZE" value={project.size} />
              <DetailRow label="CATEGORY" value={project.category} />
            </div>
          </div>
        </div>
      </div>

      <div className="img-section3 bg-[#F5EAD2] lg:pt-10 lg:pb-10">
        <img className="w-full h-full" src={project.images[2]} alt="" />
      </div>
    </>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between py-3 border-b border-gray-300">
    <span className="font-semibold text-gray-700">{label}</span>
    <span className="text-gray-700">{value}</span>
  </div>
);

export default ProjectDetails;
