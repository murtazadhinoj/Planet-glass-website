import React, { useState } from "react";
import { motion } from "framer-motion";
// import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <motion.div className="w-full min-h-screen bg-[#072F31] text-[#EFE0D9] flex flex-col items-center justify-center px-10 py-20 relative">
      <motion.h2 className="text-center text-sm tracking-widest uppercase text-gray-400">
        We eagerly await your contact and look forward to welcoming you soon
      </motion.h2>

      <motion.h2 className="text-center text-sm tracking-widest uppercase text-gray-400 mb-10">
        for an unforgettable and luxurious experience.
      </motion.h2>

      <motion.form onSubmit={handleSubmit} className="w-full max-w-2xl">
        {["name", "email", "phone", "message"].map((field, index) => (
          <div key={index} className="mb-6">
            <label className="block mb-2 text-lg">{field.toUpperCase()} :</label>
            {field === "message" ? (
              <motion.textarea
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border-b border-white bg-transparent outline-none pb-2 focus:border-[#E4C6A0] transition-all duration-300"
                rows="3"
              ></motion.textarea>
            ) : (
              <motion.input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border-b border-white bg-transparent outline-none pb-2 focus:border-[#E4C6A0] transition-all duration-300"
              />
            )}
          </div>
        ))}

        <motion.div className="flex justify-center">
          <motion.button
            type="submit"
            className="border border-white px-8 py-2 text-lg rounded-full hover:bg-white hover:text-black transition-all"
            disabled={status === "loading"}
          >
            {status === "loading" ? "SENDING..." : "SEND"}
          </motion.button>
        </motion.div>

        {status === "success" && (
          <p className="text-green-500 text-center mt-4">Form submitted successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-center mt-4">Something went wrong. Please try again.</p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
