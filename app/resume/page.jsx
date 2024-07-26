"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiVite, SiMui } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Scroll } from "lucide-react";

// about data

const about = {
  icon: "/assets/next.svg",
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque harum reprehenderit corrupti, mollitia qui. Deserunt, sint!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kevin Parker",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 (845) 641-6506",
    },
    {
      fieldName: "Email",
      fieldValue: "Kevin.Parker.727@gmail.com",
    },
    {
      fieldName: "Status",
      fieldValue: "Available for Hire",
    },
  ],
};

// experience data

const experience = {
  icon: "/assets/next.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque harum reprehenderit corrupti, mollitia qui. Deserunt, sint!",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studios",
      position: "Web Developer",
      duration: "2018 - 2022",
    },
    {
      company: "E-Commerce Startup",
      position: "Front End Developer Intern",
      duration: "2017 - 2018",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2016 - 2017",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2016 - 2018",
    },
    {
      company: "Software Development Firm",
      position: "Web Developer",
      duration: "2015 - 2016",
    },
  ],
};

// education data

const education = {
  icon: "/assets/vercel.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque harum reprehenderit corrupti, mollitia qui. Deserunt, sint!",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Self Taught - Front End",
      duration: "2022 - Present",
    },
    {
      institution: "Eckerd College",
      degree: "BA Human Development",
      duration: "2014 - 2018",
    },
  ],
};

// skills data

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque harum reprehenderit corrupti, mollitia qui. Deserunt, sint!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailWindCSS",
    },
    {
      icon: <SiMui />,
      name: "MaterialUI",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS",
    },
    {
      icon: <SiVite />,
      name: "Vite",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content  */}

          <div className="min-h-[70vh] w-full">
            {/* about  */}
            {/* whenever you click on the about tab on the site, the entire menu slides down slightly */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6  max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* experience  */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left mb-10">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#262629] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education  */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#262629] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills  */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] mb-10">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>{skill.name}</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
