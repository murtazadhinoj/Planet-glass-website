import React, { useRef ,useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const Herosection2 = () => {

  const containerRef = useRef(null);
  const canvasRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for images
  const leftImageY = useTransform(scrollYProgress, [0, 1], ["105%", "-240%"]);
  const mainImageY = useTransform(scrollYProgress, [0, 1], ["-130%", "10%"]);
  const rightImageY = useTransform(scrollYProgress, [0, 1], ["205%", "-340%"]);
  const btmrightImageY = useTransform(scrollYProgress, [0, 1], ["405%", "-440%"]);
  const btmMiddleImageY = useTransform(scrollYProgress, [0, 1], ["305%", "-300%"]);
  const btmRightImageY = useTransform(scrollYProgress, [0, 1], ["105%", "-200%"]);
 
  const frame = {
    currentIndex: 0,
    maxIndex: 100 
  };

  const images = useRef([]);

  // Preload Images
  useEffect(() => {
    let loadedImages = 0;
    for (let i = 0; i <= frame.maxIndex; i++) {
      const img = new Image();
      img.src = `/images/text animation for planet_${i.toString().padStart(5,"0")}.png`; // Adjust path to your images
      console.log(img);
      
      img.onload = () => {
        loadedImages++;
        if (loadedImages === frame.maxIndex + 1) {
          drawImage(frame.currentIndex);
        }
      };
      images.current.push(img);
    }
  }, []);

  // Draw Image on Canvas
  const drawImage = (index) => {
    if (!images.current[index] || !canvasRef.current) return;
  
    const img = images.current[index];
  
    // Ensure the image is completely loaded before drawing
    if (!img.complete || img.naturalWidth === 0) {
      console.warn(`Skipping frame ${index}: Image not fully loaded`);
      return;
    }
  
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
  
    // Ensure the canvas matches the display size
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
  
    // Calculate the best scale while maintaining aspect ratio
    const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    
    // Adjust the image dimensions based on the calculated scale
    const newWidth = img.width * scale;
    const newHeight = img.height * scale;
    const offsetX = (canvas.width - newWidth) / 2;
    const offsetY = (canvas.height - newHeight) / 2;
  
    // Clear the previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
  
    // Draw the image centered
    ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
  };

  // Update Image on Scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.min(Math.max(0, Math.round(latest * frame.maxIndex)), frame.maxIndex);
      
      if (images.current[newIndex] && images.current[newIndex].complete) {
        drawImage(newIndex);
      } else {
        console.warn(`Skipping frame ${newIndex}: Image not ready`);
      }
    });
  
    return () => unsubscribe();
  }, [scrollYProgress]);
  

 
    
  return (
    <>
   
   <div ref={containerRef} className="relative  Lg:min-h-[200vh] bg-black flex items-center justify-center">
      {/* Canvas for Image Sequence */}
      <canvas  ref={canvasRef} className="absolute w-full  top-0 left-0  h-full" />

<div ref={containerRef} className="z-40 relative min-h-[100vh] flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 py-20 overflow-hidden">
  {/* Left Image */}
  <motion.div
    className="w-[150px] h-[150px] mt-10 mr-42 md:w-[250px] md:h-[400px] overflow-hidden shadow-lg lg:mb-90 lg:mr-20
    lg:w-[15vw] lg:h-[25vh]"
    style={{  y: leftImageY }}
  >
    <img
      src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"
      alt="Left Image"
      className="object-cover w-full h-full"
    />
  </motion.div>

  {/* Middle Image (Main) */}
  <motion.div
    className="w-[100px] h-[50px] z-50 ml-42  md:w-[350px] md:h-[500px]   overflow-hidden 
    lg:w-[37vw] lg:h-[80vh] lg:mb-290"
    
  >
    <img
      src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"
      alt="Main Image"
      className="object-cover w-full h-full"
    />
  </motion.div>

  {/* Right Image */}
  <motion.div
    className="w-[150px] h-[150px] mt-52 ml-42 md:w-[250px] md:h-[400px] overflow-hidden shadow-lg lg:mb-130 lg:ml-20
    lg:h-[17vh] lg:w-[w-30vw]"

    style={{ y: rightImageY }}
  >
    <img
      src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"
      alt="Right Image"
      className="object-cover w-full h-full"
    />
  </motion.div>

  {/*btm Right Image */}
  <motion.div
    className="w-[200px] absolute bottom-0 left-0 h-[100px] md:w-[250px] md:h-[400px] overflow-hidden shadow-lg lg:mb-130 lg:ml-20
    lg:h-[17vh] lg:w-[w-30vw]"

    style={{ y: btmrightImageY }}
  >
    <img
      src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"
      alt="Right Image"
      className="object-cover w-full h-full"
    />
  </motion.div>

  {/*btm middle Image */}
  <motion.div
    className="w-[200px] absolute bottom-0 left-140 h-[300px] md:w-[250px] md:h-[400px] overflow-hidden shadow-lg lg:mb-130 lg:ml-20
    lg:h-[17vh] lg:w-[w-30vw]"

    style={{ y: btmMiddleImageY }}
  >
    <img
      src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"
      alt="Right Image"
      className="object-cover w-full h-full"
    />
  </motion.div>

  {/*btm right Image */}
  <motion.div
    className="w-[200px] absolute bottom-0 left-280 h-[300px] md:w-[250px] md:h-[400px] overflow-hidden shadow-lg lg:mb-130 lg:ml-20
    lg:h-[17vh] lg:w-[w-30vw]"

    style={{ y: btmRightImageY }}
  >
    <img
      src="https://i.pinimg.com/736x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"
      alt="Right Image"
      className="object-cover w-full h-full"
    />
  </motion.div>
</div>

    </div>
    </>
  );
};


export default Herosection2;
