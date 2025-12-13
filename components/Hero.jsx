import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; 

const Hero = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 my-0 animate-fadeIn">
    
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile} alt="profile" className="rounded-full w-32 " />
      </motion.div>

      {/* Greeting Text Animation */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm DINES S{" "}
        <Image src={assets.hand_icon} alt="hand" className="w-6" />
      </motion.h3>

      {/* Main Heading Animation */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo animate-typing"
      >
        Welcome to My Website.
      </motion.h1>

      {/* Description Animation */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        Junior AI Trainee @ Span Technology | GSSoC'24 Contributor | Java Programmer | Web Developer | Ex-Web Dev Intern @ Stratigo | Ex-Java Intern @ Octanet
      </motion.p>

      {/* Buttons with Motion */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Me Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="right white arrow" className="w-4" />
        </motion.a>

        {/* Learn More Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="#about"
          className="px-10 py-3 border border-black justify-center rounded-full flex items-center gap-2 bg-white dark:text-black"
        >
          Learn More
          <Image src={assets.right_arrow_bold} alt="right white arrow" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
