"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import Link from 'next/link';

const Homepage = () => {
  const introText = "Hello, I'm a ...";
  const firstText = "cellist."
  const secondText = "traveler."
  const thirdText = "developer."

  return (
    <motion.div 
      className="h-full" 
      initial={{ y: "-200vh" }} 
      animate={{ y: "0%" }} 
      transition={{ duration: 1 }}
    >
      <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/girl.png" alt="" fill className="object-contain"/>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-10 items-center justify-center mr-8 lg:mr-12">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold ">
            {introText.split("").map((letter, index) => (
              <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                {letter}
              </motion.span>
            ))}
          </h1>
          {/* DESC */}
          <div className="justify-end">
          <h2 className="text-4xl md:text-6xl font-bold">
            <div className="text-teal-600 block">
              {firstText.split("").map((letter, index) => (
                <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: (introText.length + index) * 0.1 }}>
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="text-teal-600 block">
              {secondText.split("").map((letter, index) => (
                <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: (introText.length + firstText.length + index) * 0.1 }}>
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="text-teal-600 block">
              {thirdText.split("").map((letter, index) => (
                <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: (introText.length + firstText.length + secondText.length + index) * 0.1 }}>
                  {letter}
                </motion.span>
              ))}
            </div>
          </h2>
          </div>
          {/* BUTTONS */}
          <div className="mt-4 w-full flex gap-4 justify-center">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
