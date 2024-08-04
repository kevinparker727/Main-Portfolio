"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(845) 641-6506",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kevin.parker.727@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Charlotte, NC",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_22cu3cc", "template_wwmpguv", form.current, {
        publicKey: "LdZ4w0Zji_2cYZMie",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-around gap-[30px]">
          {/* form  */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">
                Let&apos;s work together!
              </h3>
              <p className="text-white/60">
                Thanks for reaching out! I'm currently accepting job offers for
                both in-office, hybrid, and fully remote work and am willing to
                relocate. Shoot me a message, and let's talk about your project!
              </p>
              {/* input  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="First name"
                  name="first_name"
                />
                <Input
                  type="lastname"
                  placeholder="Last name"
                  name="last_name"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="md:col-span-2"
                />
              </div>

              {/* textarea  */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
              />

              {/* button  */}
              <Button type="submit" value="send" size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info  */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div>
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-lg">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
