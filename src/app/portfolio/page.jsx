"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Vitals",
    desc: "A health tracking app that allows users to track correlations between various biomarkers and meal tracking. Tech used: Ruby, Rails 7, Tailwind CSS, Daisy UI",
    img: "/vitalsss.png",
    link: "https://github.com/amandaag39/vitals",
    link2: "https://vitals.quest",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Portfolio V1",
    desc: "An portfolio page created as my first venture into Next.js, Framer Motion, and also re-inforcing my experience with Tailwind CSS.",
    img: "/portfolioss.png",
    link: "https://github.com/amandaag39/next-animated-portfolio",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Web Testing Framework",
    desc: "One of my earlier projects as a Test Automation Intern. I created tests for Twitter using Java and Carina Testing Framework (A Selenium based framework).",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/amandaag39/CarinaTwitterWebTesting",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Mobile Testing Framework",
    desc: "Another early project in testing. This tests an android calculator app. It was also created using Java and Carina Testing Framework.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/amandaag39/CarinaMobileTesting",
  },
];

const PortfolioPage = () => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])
  return (
    <motion.div 
      className="h-full" 
      initial={{ y: "-200vh" }} 
      animate={{ y: "0%" }} 
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        {/* INTRO PAGE */}
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My Projects</div>
        {/* PROJECTS LIST */}
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                <div className="flex flex-col gap-8 text-white p-4 md:p-8 my-8">
                <h1 className="text-xl font-bold md:text-3xl lg:text-4xl xl:text-5xl mt-4 md:mt-8">
                    {item.title}
                </h1>
                <div className="relative w-64 h-40 md:w-80 md:h-48 lg:w-96 lg:h-64 xl:w-[400px] xl:h-[280px] mt-4 md:mt-8">
                    <Image src={item.img} alt={item.title} layout='fill' objectFit='cover' className="rounded-md" />
                </div>
                <p className="w-64 md:w-80 lg:w-96 xl:w-[400px] mt-4 md:mt-8">{item.desc}</p>
                <div className="flex justify-end">
                    <Link href={item.link}>
                    <button className="flex items-center justify-center p-2 text-sm md:p-2 md:text-md lg:p-4 lg:text-lg bg-white text-black font-semibold m-4 rounded">
                        <Image src="/github.png" alt="GitHub" width={24} height={24} />
                        <span className="ml-2">GitHub</span>
                    </button>
                    </Link>
                    {item.link2 && (
                    <Link href={item.link2}>
                        <button className="p-2 text-sm md:p-2 md:text-md lg:p-4 lg:text-lg bg-black text-white font-semibold m-4 rounded">Live</button>
                    </Link>
                    )}
                </div>
                </div>
            </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-96 md:h-96"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-Stack Developer and QA Engineer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">Hire me</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
