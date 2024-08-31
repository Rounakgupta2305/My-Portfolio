"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "SITverse: Social Networking Platform for SIT",
    desc: "SITverse is a social media platform designed exclusively for college students and alumni. Using JWT-based authentication and authorization for secure access, it offers features like photo sharing, real-time messaging, and friend request management. The platform is built with ReactJs, NodeJs, ExpressJS, and MongoDB, and utilizes Material UI and Tailwind CSS for its user interface.",
    tech: "Tech Stack: ReactJS, NodeJS, ExpressJS, MongoDB, Material UI, Tailwind CSS.",
    link: "https://github.com/Rounakgupta2305/SITverse-Social-Networking-Platform-for-SIT",
    live: "https://6692ee3b9ef7e2afa95fc28b--monumental-marigold-7599bb.netlify.app/"
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Inventora: Inventory Management System ",
    desc: "The inventory management system enhances business operations by streamlining workflows and improving efficiency. It includes robust search capabilities, user-friendly product addition functionalities, and utilizes Clerk Auth for secure access control and data privacy.",
    tech: "Tech Stack: NextJS, MongoDB, Tailwind CSS.",
    link: "https://github.com/Rounakgupta2305/Inventora-Inventory-Management-System",
    live: "https://inventora-inventory-management-system.vercel.app/"
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "CodeCollab: Real-time collaborative coding platform",
    desc: "CodeCollab is a web app that enables real-time collaborative coding. Ideal for group projects and teaching. It offers instant editing and syntax highlighting. Secure user authentication ensure a smooth and efficient collaboration experience.",
    tech: "Tech Stack: ReactJS, NodeJS, ExpressJS, Socket.io, Tailwind CSS.",
    link: "https://github.com/Rounakgupta2305/CodeCollab-Real-time-collaborative-coding-platform.",
    live: "https://6692c7bc9c198187826b3c60--lovely-semolina-ee15e4.netlify.app/"
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Popcornify: Movies and TV-Series Searching App",
    desc: "This project is a one-stop shop for movies and TV shows. Explore by genre (comedy, action, drama, etc.) or search for specific titles. Every result is decked out with trailers, cast info, and detailed descriptions. Utilizing TheMovieDB API, it offers users access to an extensive database for seamless search functionality.",
    tech: "Tech Stack: ReactJS, Tailwind CSS, Material UI, APIs.",
    link: "https://github.com/Rounakgupta2305/Movies-and-TV-Series-Searching-App",
    live: "https://main--comfy-flan-fd13ac.netlify.app/"

  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "Weather App",
    desc: "Experience the joy of checking the forecast with a weather app featuring a stunningly beautiful and intuitive user interface that effortlessly combines functionality with aesthetic elegance.",
    tech: "Tech Stack: ReactJS, Tailwind CSS, APIs.",
    link: "https://github.com/Rounakgupta2305/Weather-App-using-ReactJs",
    live: "https://dainty-lamington-517a45.netlify.app/"
  },
  {
    id: 6,
    color: "from-blue-300 to-purple-300",
    title: "To-Do List App",
    desc: "As I immerse myself in my to-do list project, I'm not just focused on functionality but also on a user-friendly interface. Designing an intuitive and visually appealing UI, my goal is to enhance the overall experience, making task management not only efficient but also a delight to navigate through.",
    tech: "Tech Stack: ReactJS, Tailwind CSS.",
    link: "https://github.com/Rounakgupta2305/To-Do-using-ReactJs",
    live: "https://silver-rabanadas-7d599c.netlify.app/"
  },
  {
    id: 777,
    color: "from-purple-300 to-violet-300",
    title: "Underwater Object Detection",
    desc: "This project is built upon YOLOv3 software, a powerful deep learning framework renowned for its accuracy in detecting submerged objects in real-time. It features high-resolution imaging capabilities and robust performance across various underwater conditions, ensuring precise identification and classification of objects.",
    link: "https://github.com/Rounakgupta2305/Underwater-Object-Detection",
  },
  
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Projects
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white px-4 sm:px-8">
                  <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <p className="w-4/5 md:w-4/5 lg:w-3/4 xl:w-2/3 text-md md:text-lg lg:text-xl xl:text-2xl">
                    {item.desc}
                  </p>
                  <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                    {item.tech}
                  </h4>
                  <div className="flex flex-row sm:flex-row justify-center gap-4 mt-4">
                    <Link href={item.link}>
                      <button className="p-2 text-md md:p-4 md:text-lg lg:p-6 lg:text-xl bg-white text-gray-600 font-semibold rounded w-32 sm:w-48">
                        Source Code
                      </button>
                    </Link>
                    {item.live && (
                      <Link href={item.live}>
                        <button className="p-2 text-md md:p-4 md:text-lg lg:p-6 lg:text-xl bg-white text-gray-600 font-semibold rounded w-32 sm:w-48">
                          Live
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      

    </motion.div>
  );
};

export default PortfolioPage;
