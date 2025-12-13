import { assets, infoList, toolsData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const About = ({ darkmode }) => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1}}
      className="w-full px-[12%] py-10 scroll-mt-[20px]"
    >
      <motion.h4 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay:0.3 }}
      className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
      <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay:0.5 }}
      className="text-center text-5xl font-Ovo">About Me</motion.h2>



      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div  
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.5, delay:0.7}}
        className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image src={assets.profile} alt="profile" className="w-full rounded-3xl" />
          <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/RESUME.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 mt-9 ml-2 justify-center">
            My Resume <Image src={darkmode ? assets.download_dark : assets.download_icon} alt="download" className="w-4" />
          </motion.a>  
        </motion.div>

        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.5, delay:0.7}}
            className="mb-10 max-w-2xl font-Ovo"
          >
            I am currently a Junior AI Trainee at Span Technology, a GSSoC'24 Contributor with a global rank of 1256 out of 3500, a Java Programmer and Web Developer, and a former Web Development Intern at Stratigo and Java Intern at Octanet.
          </motion.p>

          <motion.ul 
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.9, delay:0.6}}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{scale:1.05}}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-dark/50"
              >
                <Image src={darkmode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-400 text-sm dark:text-white/50">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.9, delay:0.6}}
          className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>
            <motion.ul 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.7, duration:0.6}}
            className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool,index)=>(
                <motion.li key={index} whileHover={{scale:1.05}} className='flex items-center justify-center w-12  sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 '>
                  <Image src={tool} alt="tool" className='w-5 sm:w-7'/>
                </motion.li>
              ))}
            </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
