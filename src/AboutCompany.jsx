import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutCompany = () => {
  const navigate = useNavigate();

const paragraph = "Planet Glass is a leading specialist in high-quality glass solutions, offering precision-crafted glass for homes, businesses, and architectural projects. With a commitment to innovation and excellence, we provide durable, stylish, and customized glass products that enhance aesthetics and functionality. From sleek modern designs to robust safety glass, Planet Glass transforms spaces with clarity and elegance.";

const lines = paragraph.split(".").map((line, index, arr) =>
  index !== arr.length - 1 ? `${line}.` : line
);

// Parent animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.5 }, // Adjust for desired delay
  },
};

// Child animation variants
const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.3 }, // Line-by-line delay
  }),
};

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: i * 0.3,
      },
    }),
  };

  const imageRevealVariants = {
    hidden: { x: 0 },
    visible: {
      x: "100%",
      transition: {
        duration: 1.5,
        delay: 1,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <div className="w-full bg-[#D0EBE4]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto py-16 lg:flex lg:flex-row flex flex-col items-center min-h-screen"
      >
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="left-section relative lg:h-[95vh] lg:w-[25vw] md:w-[35vw] flex max-sm:justify-center items-center w-full h-[30vh]"
        >
          {/* Top Box - Animated Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="topBox absolute top-0 lg:left-0 md:left-[10%] w-[20%] flex-col text-center text-xl md:text-2xl"
          >
            {["परंपरा", "parampara", "legacy"].map((word, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
                className="h3"
              >
                {word}
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Box */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mobileBOX visible text-3xl md:text-4xl text-center mt-10 w-full lg:hidden"
          >
            {["EVERY LINE", "TELL A STORY"].map((line, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
                className={`line${index + 1}`}
              >
                {line}
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Box */}
          <div className="bottomBox absolute max-sm:hidden bottom-0 lg:left-0 text-xl md:text-4xl lg:text-7xl lg:flex lg:visible lg:flex-col lg:items-start lg:justify-center lg:w-full lg:h-[50%] flex text-center items-center justify-center w-full h-[50%] pb-[10px]">
            {["EVERY", "LINE", "TELLS", "A", "STORY"].map((word, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
                className="h3"
              >
                {word}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="middle-section lg:w-[50vw] md:w-[45vw] flex justify-center relative overflow-hidden"
        >
          {/* Image */}
          <motion.img
            src="src/assets/images/image2.png"
            alt="Tradition"
            className="lg:w-[35vw] md:w-[80%] w-full m-5 shadow-lg object-cover"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={imageRevealVariants}
            viewport={{ once: true }}
            className="curtain absolute left-0 top-0 lg:w-[50vw] md:w-full h-full bg-white"
          />
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="right-section relative lg:w-[25vw] md:w-[35vw] text-center md:text-left mt-10 md:mt-0"
        >
          {/* Text & Button */}
          <div className="righttextButton flex flex-col items-start gap-5 m-5">
          <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="text-[#041C1D] lg:w-[60%] md:w-[80%] text-lg md:text-base lg:text-sm lg:ml-20 leading-relaxed lg:mb-12 text-justify lg:text-left"
    >
      {lines.map((line, index) => (
        <motion.p key={index} variants={lineVariants} custom={index}>
          {line}
        </motion.p>
      ))}
    </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#448675] py-2 px-10 rounded-full text-md font-medium transition duration-300 text-[#14292a] lg:ml-20"
              onClick={() => navigate("/aboutUS")}
            >
              About Us
            </motion.button>
          </div>

          {/* Image with Reveal */}
          <motion.div className="relative overflow-hidden lg:mt-10 flex justify-start lg:justify-end">
            <motion.img
              src="src/assets/images/image1.png"
              alt="Tradition"
              className="w-[65%] md:w-[80%] h-[18vh] ml-7 lg:mr-12 bg-orange-400 shadow-lg object-cover"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={imageRevealVariants}
              viewport={{ once: true }}
              className="curtain absolute left-0 top-0 w-full h-[18vh] bg-white"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutCompany;
