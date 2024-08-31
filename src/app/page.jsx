"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  const handleResumeClick = () => {
    window.location.href = "https://drive.google.com/drive/folders/19WX3kEaVnSP_OfJqk8fp2XiDIkE2mv3P?usp=sharing";
  };
  const text = "Hii there,\nI'm Rounak";

  return (
    <motion.div
      className="h-full bg-gradient-to-b from-blue-100 via-red-100 to-red-200"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col pt-15 sm:pt-20 md:pt-28 lg:pt-16 gap-10 justify-between lg:flex-row px-4 sm:px-10 md:px-12 lg:px-20 xl:px-48">
        
        
        <div className="lg:h-full lg:w-2/5 relative hidden lg:block">
          <Image src="/him.png" alt="" fill className="object-contain" />
        </div>

        <div className="lg:h-full lg:w-1/2 flex flex-col gap-4 justify-center">

          <Image
            src="/hero.png"
            alt=""
            width={112}
            height={112}
            className="w-28 h-28 rounded-full object-contain mb-4 lg:mb-0 lg:ml-4"
          />
          
          <div className="flex items-center py-3 text-7xl">
            <div>
              {text.split("").map((letter, index) => (
                letter === '\n' ? <br key={index} /> : (
                  <motion.span
                    key={index}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  >
                    {letter}
                  </motion.span>
                )
              ))}
            </div>
          </div>

          <p className="md:text-xl">
            A full-stack developer with a passion for creating seamless and engaging user experiences, I excel in crafting elegant code and exploring complex algorithms. I am always eager to explore and learn new things, continually expanding my knowledge and skills. My expertise spans both front-end and back-end technologies, allowing me to deliver comprehensive solutions. I thrive in dynamic environments, where I can collaborate with others to innovate and drive projects to success.
          </p>

   
          <div className="w-full">
            <button className="p-2 flex gap-2 rounded-lg ring-1 ring-black bg-black text-white" onClick={handleResumeClick}>
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
