"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  const handleResumeClick = () => {
    window.location.href = "https://drive.google.com/drive/folders/19WX3kEaVnSP_OfJqk8fp2XiDIkE2mv3P?usp=sharing";
  };
  
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col pt-20 sm:pt-20 md:pt-28 lg:pt-24 gap-10 justify-between lg:flex-row px-4 sm:px-10 md:px-12 lg:px-20 xl:px-48">
        
        <div className="h-0 lg:h-full lg:w-2/5 relative hidden lg:block">
          <Image src="/him.png" alt="" fill className="object-contain" />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 justify-center">
          {/* TITLE */}
          <Image
            src="/hero.png"
            alt=""
            width={112}
            height={112}
            className="w-28 h-28 rounded-full object-contain"
          />
          <h1 className="text-4xl md:text-7xl font-bold">
            Hey there,
          </h1>
          <h1 className="text-4xl md:text-7xl font-bold">
            I&apos;m Rounak
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            A full-stack developer with a passion for creating seamless and engaging user experiences, I excel in crafting elegant code and exploring complex algorithms. I am always eager to explore and learn new things, continually expanding my knowledge and skills. My expertise spans both front-end and back-end technologies, allowing me to deliver comprehensive solutions. I thrive in dynamic environments, where I can collaborate with others to innovate and drive projects to success.
          </p>
          {/* BUTTONS */}
          <div className="w-full">
            <button className="p-4 flex gap-3 rounded-lg ring-1 ring-black bg-black text-white" onClick={handleResumeClick}>
              <Image src="/download.png" alt="" width={24} height={24} />
              Resume
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
