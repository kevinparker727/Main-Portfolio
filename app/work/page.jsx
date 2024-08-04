"use client";

import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const apps = [
  {
    num: "01",
    category: "application",
    title: "Data Dashboard",
    description:
      "I'm proud of this one. Dashboard app which allows companies to input large amounts of data for the app to organize and display in well-organized and aesthetically appealing graphs and charts. Login authentication completed with NextAuth.",
    stack: [
      { name: "ReactJS" },
      { name: "TypeScript" },
      { name: "MUI" },
      { name: "Storybook" },
      { name: "HTML5" },
      { name: "NodeJS" },
      { name: "NextJS" },
    ],
    image: "/assets/dataDashboard.jpg",
    live: "https://data-soft-app.vercel.app/auth/signin?callbackUrl=%2F",
    github: "https://github.com/kevinparker727/DataSoft-app",
  },
  {
    num: "02",
    category: "application",
    title: "Kanban Board",
    description:
      "If the Data Dashboard didn't exist, this would be my favorite project. It's a drag and drop application with a beautiful and simple UI/UX. Feel free to add or remove columns and add or remove items from each column. You are also capable of labeling each column and moving items from one column to another.",
    stack: [
      { name: "ReactJS" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "NodeJS" },
      { name: "Vite" },
    ],
    image: "/assets/kanban.jpeg",
    live: "https://kanban-board-nine-smoky.vercel.app/",
    github: "https://github.com/kevinparker727/Kanban-Board-app",
  },
  {
    num: "03",
    category: "application",
    title: "Bankist",
    description:
      "(You can log in with any of the following credentials: user: JS, pin: 1111; user: JD, pin: 2222; user: STW, pin: 3333; user: SS, pin: 4444;). This is one of the earlier pages I made when I had just learned JavaScript.  Try making transfers, requesting loans, and adding deposits!",
    stack: [
      { name: "ReactJS" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "TailwindCSS" },
      { name: "Vite" },
    ],
    image: "/assets/bankist.jpeg",
    live: "https://bankist-app-livid.vercel.app/",
    github: "https://github.com/kevinparker727/bankist-app",
  },
  {
    num: "04",
    category: "application",
    title: "Mapty",
    description:
      "Click on the map in your location to bring up the workout form. This was a fun one to make. I was in a place when I was not working out and not very active and this app really pushed me to get back to the gym. I guess writing 'workout' so many times will have an effect!",
    stack: [{ name: "JavaScript" }, { name: "HTML5" }, { name: "CSS3" }],
    image: "/assets/mapty.jpeg",
    live: "https://mapty-app-lime.vercel.app/",
    github: "https://github.com/kevinparker727/mapty-app",
  },
];

const landingPages = [
  {
    num: "01",
    category: "landing page",
    title: "Malone",
    description:
      "My goal with Malone was to give each dog their spotlight and to show each of them the same love that I show my dog. With beautiful portraits and illuminating bios, it's impossible to not want to take home a new furry best friend after each visit.",
    stack: [
      { name: "ReactJS" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "TailwindCSS" },
      { name: "Vite" },
    ],
    image: "/assets/malone-alt-5.jpg",
    live: "https://malone-landing.vercel.app/",
    github: "https://github.com/kevinparker727/Malone-Landing",
  },

  {
    num: "02",
    category: "landing page",
    title: "Forkify",
    description:
      "A fun recipe website application. There are hundreds of preloaded recipes from an API, but after loggin in, you are also able to add and remove your own recipes as well as save preloaded recipes to your profile.",
    stack: [{ name: "JavaScript" }, { name: "HTML5" }, { name: "CSS3" }],
    image: "/assets/forkify.jpeg",
    live: "https://forkify-app-amber.vercel.app/",
    github: "https://github.com/kevinparker727/forkify-app",
  },
  {
    num: "03",
    category: "landing page",
    title: "Bankist",
    description:
      "This is a landing page developed in conjunction with the Bankist application. There are several types of scroll and modal menus as well as smooth scrolling depeing on which buttons are clicked. Although creating an account here has no functionality, you can still access the Bankist app with the credentials located in the app's description.",
    stack: [{ name: "JavaScript" }, { name: "HTML5" }, { name: "CSS" }],
    image: "/assets/bankist-landing.jpeg",
    live: "https://advanced-bankist.vercel.app/",
    github: "https://github.com/kevinparker727/advanced-bankist",
  },
];

const HTMLEmails = [
  {
    num: "01",
    category: "html email",
    title: "Template",
    description:
      "This first one is your basic email template. It's visually appealing and can be adapted to suit any needs. It is darkmode friendly as well as functional across all modern browsers including Outlook, Internet Explorer, and Firefox.",
    stack: [{ name: "HTML5" }, { name: "Inline CSS" }],
    image: "/assets/template.jpeg",
    live: "https://template-email-liard.vercel.app/",
    github: "https://github.com/kevinparker727/template-email",
  },
  {
    num: "02",
    category: "html email",
    title: "WhaleBone Blog Post",
    description:
      "WhaleBone is a popular modern magazine with a large social media following. This email is advertising a recent blog post displayed on their website.",
    stack: [{ name: "HTML5" }, { name: "Inline CSS" }],
    image: "/assets/whalebone.jpeg",
    live: "https://whalebone-email.vercel.app/",
    github: "https://github.com/kevinparker727/whalebone-email",
  },
  {
    num: "03",
    category: "html email",
    title: "KitchenAid E-Commerce",
    description:
      "No kitchen is complete wihtout a KitchenAid stand mixer. Not only is this email advertising some very beautful colors for their mixers, but it's also a place to show buyers some purhcasing guides.",
    stack: [{ name: "HTML5" }, { name: "Inline CSS" }],
    image: "/assets/kitchenAid.jpeg",
    live: "https://kitchenaid-email.vercel.app/",
    github: "https://github.com/kevinparker727/kitchenaid-email",
  },
  {
    num: "04",
    category: "html email",
    title: "Eddyline Receipt",
    description:
      "This one is a receipt for a popular restaurant in Buena Vista, CO. The idea is that the items in the receipt are totally dynamic to whatever the person has ordered. The nachos were delicious.",
    stack: [{ name: "HTML5" }, { name: "Inline CSS" }],
    image: "/assets/eddyline.jpeg",
    live: "https://eddyline-email.vercel.app/",
    github: "https://github.com/kevinparker727/eddyline-email",
  },
];

const hobbies = [
  {
    num: "01",
    category: "hobbies",
    title: "Whitewater Kayaking",
    description:
      "Whitewater has been a big part of my life for nearly a decade. I have been a professional river guide all over the country including Alaska, Colorado, the Grand Canyon, and North Carolina. Whitewater kayaking is easily my favorite hobby.",
    live: "",
    github: "",
    image: "/assets/whitewater.jpeg",
  },
  {
    num: "02",
    category: "hobbies",
    title: "Mountain Biking",
    description:
      "I bought my first mountain bike at the end of 2021 when I was living in Flagstaff, AZ. I learned how to ride in Flagstaff and Sedona, two of the best places in the country to ride. From my first ride, I knew this would be a hobby for life.",
    stack: [
      { name: "ReactJS" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "TailwindCSS" },
      { name: "Vite" },
    ],
    live: "",
    github: "",
    image: "/assets/biking.jpg",
  },
  {
    num: "03",
    category: "hobbies",
    title: "Baking",
    description:
      "Before I became a programmer, I had a job at a bakery. I was one of only three full-time employees and I was given close to free reign over what I baked. The owner taught me more than I could have imagined. The grasshopper cakes in the first picture are the most impressive thing I ever baked there, but the chocolate chip cookies were the best I have ever had.",
    stack: [
      { name: "ReactJS" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "TailwindCSS" },
      { name: "Vite" },
    ],
    live: "",
    github: "",
    image: "/assets/baking.jpeg",
  },
];

const Work = () => {
  const [project, setProject] = useState(apps);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState("apps");

  useEffect(() => {
    switch (category) {
      case "apps":
        setProject(apps);
        break;
      case "landing":
        setProject(landingPages);
        break;
      case "emails":
        setProject(HTMLEmails);
        break;
      case "hobbies":
        setProject(hobbies);
        break;
      default:
        setProject(apps);
    }
    setCurrentIndex(0);
  }, [category]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setCurrentIndex(currentIndex);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center xl:justify-around pt-4 xl:pt-0 xl:px-0 w-full"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="applications"
          className="flex flex-col xl:justify-center w-full gap-[20px]"
        >
          <TabsList className="flex justify-center max-w-[470px] sm:max-w-[600px] lg:max-w-[800px] md:pb-4 xl:pb-10 mx-auto xl:mx-0 gap-6">
            <TabsTrigger
              onClick={() => setCategory("apps")}
              value="applications"
            >
              Apps
            </TabsTrigger>
            <TabsTrigger onClick={() => setCategory("landing")} value="landing">
              Landing
            </TabsTrigger>
            <TabsTrigger onClick={() => setCategory("emails")} value="emails">
              Emails
            </TabsTrigger>
            <TabsTrigger onClick={() => setCategory("hobbies")} value="hobbies">
              Hobbies
            </TabsTrigger>
          </TabsList>

          {/* project display  */}

          <div className="container mx-auto w-full">
            <div className="container mx-auto w-full xl:flex xl:flex-row">
              {/* project image  */}

              <div className="container mx-auto xl:w-[48%]">
                <TabsContent value="applications" className="xl:w-full">
                  <div className="w-full">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      className="xl:h-[480px] mb-12"
                      onSlideChange={handleSlideChange}
                    >
                      {apps.map((project, index) => {
                        return (
                          <SwiperSlide key={index} className="w-full">
                            <div className=" sm:h-[400px] h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                              {/* overlay  */}

                              <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                              {/* image  */}

                              <div className="relative w-full h-full">
                                <Image
                                  src={project.image}
                                  fill
                                  className="object-contain"
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
                </TabsContent>
                <TabsContent value="landing">
                  <div className="w-full">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      className="xl:h-[480px] mb-12"
                      onSlideChange={handleSlideChange}
                    >
                      {landingPages.map((project, index) => {
                        return (
                          <SwiperSlide key={index} className="w-full">
                            <div className=" sm:h-[400px] h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                              {/* overlay  */}

                              <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                              {/* image  */}

                              <div className="relative w-full h-full">
                                <Image
                                  src={project.image}
                                  fill
                                  className="object-contain"
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
                </TabsContent>
                <TabsContent value="emails">
                  <div className="w-full">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      className="xl:h-[480px] mb-12"
                      onSlideChange={handleSlideChange}
                    >
                      {HTMLEmails.map((project, index) => {
                        return (
                          <SwiperSlide key={index} className="w-full">
                            <div className=" sm:h-[400px] h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                              {/* overlay  */}

                              <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                              {/* image  */}

                              <div className="relative w-full h-full">
                                <Image
                                  src={project.image}
                                  fill
                                  className="object-contain"
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
                </TabsContent>
                <TabsContent value="hobbies">
                  <div className="w-full">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      className="xl:h-[480px] mb-12"
                      onSlideChange={handleSlideChange}
                    >
                      {hobbies.map((project, index) => {
                        return (
                          <SwiperSlide key={index} className="w-full">
                            <div className=" sm:h-[400px] h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                              {/* overlay  */}

                              <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                              {/* image  */}

                              <div className="relative w-full h-full">
                                <Image
                                  src={project.image}
                                  fill
                                  className="object-contain"
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
                </TabsContent>
              </div>
              {/* project verbeage  */}

              <div className=" xl:gap-[30px] xl:w-[48%]">
                <div className="w-full xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                  <div className="flex flex-col gap-[30px] h-[50%]">
                    {/* outline number */}

                    <div className="text-8xl leading-none font-extrabold text-transparent text-outline flex justify-between">
                      {project[currentIndex].num}/0{project.length}
                      {/* buttons  */}
                      {category !== "hobbies" && (
                        <div className="flex items-center gap-4 pb-12 max-xl:hidden">
                          {/* live project button  */}

                          <Link
                            href={project[currentIndex].live}
                            target="_blank"
                            className="ring-1 ring-accent rounded-full"
                          >
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

                          <Link
                            href={project[currentIndex].github}
                            target="_blank"
                            className="ring-1 ring-accent rounded-full"
                          >
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
                      )}
                    </div>

                    {/* project title  */}

                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                      {project[currentIndex].title}
                    </h2>

                    {/* project category  */}

                    <h2 className="text-[23px] mt-[-15px] font-light leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                      {project[currentIndex].category}
                    </h2>

                    {/* project description  */}

                    <p className="text-white/60">
                      {project[currentIndex].description}
                    </p>

                    {/* stack  */}

                    <ul className="flex gap-4 flex-wrap">
                      {project[currentIndex].stack?.map((item, index) => {
                        return (
                          <li key={index} className="text-xl text-accent">
                            {item.name}
                            {index !==
                              project[currentIndex].stack?.length - 1 && ","}
                          </li>
                        );
                      })}
                    </ul>

                    {/* border  */}

                    <div className="border border-white/20"></div>

                    {/* buttons  */}

                    {category !== "hobbies" && (
                      <div className="flex items-center gap-4 pb-12 xl:hidden">
                        {/* live project button  */}

                        <Link href={project[currentIndex].live} target="_blank">
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

                        <Link
                          href={project[currentIndex].github}
                          target="_blank"
                        >
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
