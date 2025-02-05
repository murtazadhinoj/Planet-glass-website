import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full min-h-screen bg-[#2D1B15] text-white flex flex-col items-center justify-center px-10 py-20 relative">
      <h2 className="text-center text-sm tracking-widest uppercase text-gray-400">
        We eagerly await your contact and look forward to welcoming you soon
      </h2>
      <h2 className="text-center text-sm tracking-widest uppercase text-gray-400 mb-10">
        for an unforgettable and luxurious experience.
      </h2>
      
      <div className="absolute left-10 top-10 text-4xl font-serif font-bold text-[#E4C6A0]">
        <p>PLANET</p>
        <p>GLASS</p>
      </div>
      
      <form className="w-full max-w-2xl">
        <label className="block mb-2 text-lg">NAME :</label>
        <input type="text" className="w-full border-b border-white bg-transparent outline-none mb-4 pb-2" />

        <label className="block mb-2 text-lg">EMAIL :</label>
        <input type="email" className="w-full border-b border-white bg-transparent outline-none mb-4 pb-2" />

        <label className="block mb-2 text-lg">PHONE NO :</label>
        <input type="tel" className="w-full border-b border-white bg-transparent outline-none mb-4 pb-2" />

        <label className="block mb-2 text-lg">MESSAGE :</label>
        <textarea className="w-full border-b border-white bg-transparent outline-none mb-6 pb-2" rows="3"></textarea>

        <div className="flex justify-center">
          <button className="border border-white px-8 py-2 text-lg rounded-full hover:bg-white hover:text-black transition-all">
            SEND
          </button>
        </div>
      </form>
      
      <div className="absolute bottom-10 right-10 flex space-x-6 text-xl">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-whatsapp"></i>
      </div>
    </div>
  );
};

export default ContactForm;
