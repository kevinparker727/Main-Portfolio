"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const projects = [
  {
    num: "01",
    category: "application",
    title: "Data Dashboard",
    description:
      "Dashboard app which allows companies to input large amounts of data for the app to organize and display in well-organized and aesthetically appealing graphs and charts. Login authentication completed with NextAuth.",
    stack: [
      { name: "ReactJS" },
      { name: "TypeScript" },
      { name: "MUI" },
      { name: "Storybook" },
      { name: "HTML5" },
      { name: "NodeJS" },
      { name: "NextJS" },
    ],
    image: "/assets/photo.png",
    live: "",
    github: "https://github.com/kevinparker727/DataSoft-app",
  },
  {
    num: "02",
    category: "application",
    title: "Kanban Board",
    description:
      "Drag and Drop application with beautiful and simple UI/UX. Feel free to add or remove columns and add or remove items from each column. You are also capable of labeling each column and moving items from one column to another.",
    stack: [
      { name: "ReactJS" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "NodeJS" },
      { name: "Vite" },
    ],
    image: "/assets/photo.png",
    live: "",
    github: "https://github.com/kevinparker727/Kanban-Board-app",
  },
  {
    num: "03",
    category: "application",
    title: "Forkify",
    description:
      "A fun recipe website application. There are hundreds of preloaded recipes from an API, but after loggin in, you are also able to add and remove your own recipes as well as save preloaded recipes to your profile.",
    stack: [{ name: "JavaScript" }, { name: "HTML5" }, { name: "CSS3" }],
    image: "/assets/photo.png",
    live: "",
    github: "https://github.com/kevinparker727/DataSoft-app",
  },
  {
    num: "04",
    category: "landing page",
    title: "Malone",
    description:
      "Dog adoption site which was remodeled after one of the first projects I ever built.",
    stack: [
      { name: "ReactJS" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "TailwindCSS" },
      { name: "Vite" },
    ],
    image: "/assets/photo.png",
    live: "",
    github: "https://github.com/kevinparker727/Malone-Landing",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center pt-4 xl:px-0"
    >
      {" "}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          {/* project display  */}

          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline number */}

              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category  */}

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              {/* project description  */}

              <p className="text-white/60">{project.description}</p>

              {/* stack  */}

              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border  */}

              <div className="border border-white/20"></div>

              {/* buttons  */}

              <div className="flex items-center gap-4 pb-12">
                {/* live project button  */}

                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button  */}

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className=" h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay  */}

                      <div className="absolute top0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image  */}

                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider buttons  */}

              <WorkSliderBtns
                containerStyles="flex gap-5 absolute right-0 px-3 xl:px-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 justify-between w-full xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
