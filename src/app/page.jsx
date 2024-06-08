"use client"

import Image from "next/image";
import {motion} from "framer-motion";

const Homepage = () => {
  return (
  <motion.div 
    className="h-full" 
    initial={{ y: "-200vh" }} 
    animate={{ y: "0%" }} 
    transition={{ duration: 1 }}
    >
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-10 items-center justify-center mr-8 lg:mr-12">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold ">Hello, I'm <span className="text-teal-300">Amanda Mendez.</span></h1>
        {/* DESC */}
        <p className="md:text-xl">From orchestrating cello lessons to teaching English in Japan, and now engaging with the tech world in Chicago, my path adds depth to my approach to software development and testing. Explore how the blend of artistic insight and cultural experience shapes my pursuit of innovation in technology.</p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/girl.png" alt="" fill className="object-contain"/>
      </div>
    </div>
  </motion.div>
  );
};

export default Homepage;
