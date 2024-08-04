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

// about data

const about = {
  icon: "/assets/next.svg",
  title: "About Me",
  description:
    "Nice to meet you!  My name is Kevin Parker. I am a front-end web designer specializing in React, NodeJS, JavaScript, HTML, and CSS. My main focus is landing pages and apps, but I also have plenty of experience in HTMl emails. I have also styled for specialty clients such as Outlook and Internet Explorer while using a mobile-first design concept. I am currently accepting job offers for both remote and on-site work. I am a quick learner and very motivated to absorb as much as I can. I love to code and I am always excited to work on new projects. Whenever I'm not coding, you can find me mountain biking, whitewater kayaking, and baking. Shoot me an email and let's get your project started!",
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
    "Despite not having formal programming employment, I have dedicated significant time to developing several projects, showcasing my coding skills. Alongside programming, I have maintained various part-time jobs, in order to survive until I break into the programming field. My typical weekly schedule involves working four days at part-time jobs and devoting three full days to programming. This self-driven approach has not only enhanced my technical abilities but also instilled a strong work ethic and time management skills. This unique blend of real-world work experience and self-taught programming expertise makes me a versatile and committed candidate.",
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
    "I took the traditional route from high school to college, initially unsure about my career path. I majored in Human Development with the goal of becoming an Occupational Therapist and also pursued a double minor in Philosophy and Creative Writing Poetry, even managing to get 3 poems published! However, post-college, I realized that path wasn't for me. I stumbled upon programming and was instantly hooked by the creativity it offered — something I hadn't expected. It's a field that blends analytical skills with creative flair, making it a very appealing career choice.",
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
    {
      institution: "Eckerd College",
      degree: "Minor: Creative Writing Poetry",
      duration: "2014 - 2018",
    },
    {
      institution: "Eckerd College",
      degree: "Minor: Logical Philosophy",
      duration: "2014 - 2018",
    },
  ],
};

// skills data

const skills = {
  title: "My Skills",
  description:
    "I love to learn and am constantly expanding on my skills. My skill set spans a wide range of programming languages including React, JavaScript, several CSS libraries as well as NextJS and Vite. But I am always learning. If there is a new framework that would benefit me or is required for a project, I will take the time to master that skill. 'Education is not the filling of a pail, but the lighting of a fire'.",
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
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] bg-pink-50/20 rounded-xl xl:mr-[100px] p-8 hover:">
                <h3 className="text-4xl font-semi-bold border-b-2 pb-4">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                  Nice to meet you!{" "}
                </p>{" "}
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                  {" "}
                  My name is Kevin Parker. I am a front-end web developer
                  specializing in React. My main focus is landing pages and
                  apps, but I also have plenty of experience in HTMl emails. I
                  have also styled for specialty clients such as Outlook and
                  Internet Explorer while using a mobile-first design concept.{" "}
                </p>{" "}
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                  {" "}
                  I am currently accepting job offers for both remote and
                  on-site work. I am a quick learner and very motivated to
                  absorb as much as I can while holding myself to a high level
                  of accountability. I love to code and I am always excited to
                  work on new projects. Whenever I'm not coding, you can find me
                  mountain biking, whitewater kayaking, and baking. Shoot me an
                  email and let's get your project started!
                </p>
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
