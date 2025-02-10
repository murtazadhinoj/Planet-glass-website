import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";

const projects = [
  { id: 1, title: "Shizuka Gardens", image: "https://i.pinimg.com/736x/52/17/57/521757577a4065264e8ca486e842f977.jpg" },
  { id: 2, title: "Kawa Lofts", image: "https://i.pinimg.com/736x/52/17/57/521757577a4065264e8ca486e842f977.jpg" },
  { id: 3, title: "Kinsei Pavilion", image: "https://i.pinimg.com/736x/98/93/8e/98938e1d6482cd498111d4f8c0d6eb6e.jpg" }
];

const FeaturesSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p className="text-center text-lg">Project not found</p>;

  return (
    <div className="min-h-screen bg-[#F5EAD5] flex flex-col items-center justify-center px-4 py-8 md:px-10 md:py-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-6"
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <img src={project.image} alt={project.title} className="rounded-lg shadow-lg w-full" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">Main Features</h2>
          <div className="space-y-4">
            <Feature title="Geothermal Heating and Cooling System" description="Provides year-round energy efficiency while reducing carbon emissions by 60%." />
            <Feature title="On-Site Water Filtration and Recycling" description="Natural spring water is filtered and used for both bathing and irrigation, reducing water waste." />
            <Feature title="Locally Sourced and Recycled Materials" description="All construction materials were sourced within a 100-mile radius, incorporating recycled wood and stone to maintain harmony with the local environment." />
          </div>
        </motion.div>
      </motion.div>

      {/* Close Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 right-5 bg-[#F5EAD5] text-black text-2xl px-3 py-1 rounded-full shadow-md hover:bg-gray-300 transition duration-300"
      >
        ×
      </button>
    </div>
  );
};

const Feature = ({ title, description }) => (
  <div>
    <h3 className="text-lg font-semibold">• {title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeaturesSection;
