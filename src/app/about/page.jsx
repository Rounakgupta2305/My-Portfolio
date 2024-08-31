"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full mt-0"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:px-20 lg:pb-20 lg:pt-10 xl:px-32 xl:pb-32 xl:pt-10 flex flex-col gap-16 md:gap-20 lg:gap-28 xl:gap-36 lg:w-2/3 lg:pr-0 xl:w-1/2">

          
          <div className="flex flex-col gap-5 justify-center" ref={skillRef}>

            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-4xl"
            >
              SKILLS
            </motion.h1>

            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >

              {/* Web developemtn section */}
              <motion.h2
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl"
              >
                WEB DEVELOPMENT
              </motion.h2>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                className="flex gap-4 flex-wrap pl-3"
              >
                {/* Frtontend section */}
                <motion.h2
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-xl mb-[-5px] w-full"
                >
                  FRONTEND
                </motion.h2>
                <motion.div
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  className="flex gap-4 flex-wrap"
                >
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    HTML
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    CSS
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    JavaScript
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    TypeScript
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    React JS
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Next JS
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    React Router
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Redux
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Tailwind CSS
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Material UI
                  </div>
                </motion.div>

                {/* Backend section */}
                <motion.h2
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-xl mb-[-5px] w-full"
                >
                  BACKEND
                </motion.h2>
                <motion.div
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  className="flex gap-4 flex-wrap"
                >
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Node JS
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Express JS
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    JSON Web Token
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Socket.IO
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Clerk
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Mongoose
                  </div>
                </motion.div>
                
                {/* database section */}
                <motion.h2
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-xl mb-[-5px] w-full"
                >
                  DATABASE
                </motion.h2>
                <motion.div
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  className="flex gap-4 flex-wrap w-full"
                >
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    MongoDB
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Structured Query Language (SQL)
                  </div>
                  
    
                </motion.div>
                
                {/* tools section */}
                <motion.h2
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-xl mb-[-5px] w-full"
                >
                  TOOLS
                </motion.h2>
                <motion.div
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  className="flex gap-4 flex-wrap w-full"
                >
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Git
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    GitHub
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    VS Code
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Postman
                  </div>
                </motion.div>

                {/* deployement section */}
                <motion.h2
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="font-bold text-xl mb-[-5px] w-full"
                >
                  DEPLOYMENT
                </motion.h2>
                <motion.div
                  initial={{ x: "-300px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  className="flex gap-4 flex-wrap w-full"
                >
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Vercel
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Render
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Netlify
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    GitHub Pages
                  </div>
                </motion.div>

              </motion.div>

              {/* CS section */}
              <motion.h2
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl"
              >
                COMPUTER SCIENCE FUNDAMENTALS
              </motion.h2>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                className="flex gap-4 flex-wrap"
              >
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  C++
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Data Structures and Algorithms
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Object-Oriented Programming
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Operating System
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Database Management Systems
                </div>       
              </motion.div>

              {/* Creative section */}
              <motion.h2
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl"
              >
                CREATIVE DESIGN & EDITING SKILLS
              </motion.h2>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                className="flex gap-4 flex-wrap"
              >
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Canva
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Figma
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Adobe Lightroom
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Adobe Photoshop
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Adobe After Effects
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Adobe Premiere Pro
                </div>
                       
              </motion.div>

            </motion.div>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>

          </div>

          <div
            className="flex flex-col gap-12 justify-center pb-24"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="px-6"
            >

              <div className="flex justify-between h-48">
                <div className="w-1/3 ">
         
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Siddaganga Institute of Technology
                  </div>
             
                  <div className="p-2 text-sm italic">
                    Electronics and Communication Engineering
                  </div>
           
                  <div className="px-2 pb-2 text-red-400 text-sm font-semibold">
                    CGPA: 8.05
                  </div>
                
                  <div className="px-2 pb-2 text-sm italic">
                    2021 - present
                  </div>

                </div>

                <div className="w-1/6 flex justify-center">

                  <div className="w-1 h-full bg-gray-600 rounded relative">

                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
    
                <div className="w-1/3 "></div>
              </div>

              <div className="flex justify-between h-48">
    
                <div className="w-1/3 "></div>
         
                <div className="w-1/6 flex justify-center">
      
                  <div className="w-1 h-full bg-gray-600 rounded relative">
  
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
               
                <div className="w-1/3 ">
            
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Vardhaman Higher Secondary School
                  </div>
               

                  <div className="p-2 text-sm italic">
                    Higher Secondary
                  </div>
           
                  <div className="px-2 pb-2 text-red-400 text-sm font-semibold">
                    Percentage: 87%
                </div>
                
                  <div className="px-2 pb-2 text-sm italic">  
                    2018 - 2020
                  </div>
                </div>
              </div>
        
              <div className="flex justify-between h-48">
          
                <div className="w-1/3 ">
              
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Tara Sadan Senior Secondary School
                  </div>
                 
                  <div className="p-2 text-sm italic">
                    Senior Secondary
                  </div>
           
                  <div className="px-2 pb-2 text-red-400 text-sm font-semibold">
                    Percentage: 87%
                </div>
                
                  <div className="px-2 pb-2 text-sm italic">  
                    2017 - 2018
                  </div>
                </div>
  
                <div className="w-1/6 flex justify-center">
         
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                 
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
               
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>

        </div>
 
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>

      </div>
    </motion.div>
  );
};

export default AboutPage;
