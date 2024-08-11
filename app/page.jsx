import React from "react";

// components
import Social from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import DownloadButton from "@/components/DownloadCV";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-0">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-3">
              Hello! I&apos;m <br />{" "}
              <span className="text-accent">Kevin Parker</span>
            </h1>
            <span className="text-xl">Web Developer</span>
            <p className="max-w-[500px] mt-7 xl:mt-2 mb-4 text-white/80">
              &emsp;I am a front-end engineer who writes high-quality,
              well-organized code which is scalable, reusable and easy to
              follow. I find ways to go above and beyond expectations and have
              an eye for detail.
            </p>

            <p className="max-w-[500px] mb-9 text-white/80">
              &emsp;I do not stop until my job is complete and hold myself to a
              high level of accomplishment and accountability.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadButton />

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:transition-all duration-500 hover:bg-accent hover:text-primary"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
