import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion'

const Article = ({ darkmode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full px-[12%] py-10 scroll-mt-[70px]" id="article">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className='text-center text-5xl font-ovo mb-4 max-sm:text-3xl max-sm:font-semibold'>About My Portfolio</motion.h2>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center mb-6 text-lg font-Ovo text-gray-600 dark:text-white/80'>Completed on: <span className="font-semibold dark:text-white">February 2025</span></motion.h4>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}               //from left to right
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className='flex-1'>
                    <div className="flex items-center gap-3 mb-4">
                        <Image src={assets.profile} alt="logo" className="w-7 h-7 rounded-full" />
                        <p className="text-gray-800 text-base dark:text-white">Hi! I am DINES S, Front-end Developer</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4 dark:text-white">
                        This portfolio website was built using React and Tailwind CSS. It showcases multiple projects
                        and includes sections such as About, Projects, Contact, and a Service.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-7 dark:text-white">
                        The website features a fully responsive layout, a dark mode option, and animations using
                        Framer Motion. The projects section dynamically fetches data from a JSON file.
                    </p>
                    
                </motion.div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}               //from right to left
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="flex-1">
                    <aside className="bg-footer-bg bg-no-repeat bg-center  p-6 rounded-sm dark:bg-none dark:bg-dark/70 dark:rounded-lg">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Related Projects</h3>
                            <ul className="space-y-2">
                                <li><a href="https://github.com/DINES-04/Job-Portal" className={darkmode ? "relative text-white/70 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full " : "relative text-blue-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full "}>Job Portal</a></li>
                                <li><a href="https://github.com/DINES-04/Subscription-Tracker" className={darkmode ? "relative text-white/70 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full " : "relative text-blue-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full "}>Subscription Tracker</a></li>
                                <li><a href="https://github.com/DINES-04/Paintpad-The-drawing-app-" className={darkmode ? "relative text-white/70 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full " : "relative text-blue-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full "}>Paintpad</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Tools & Technologies Utilized in Portfolio</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">React</span>
                                <span className="bg-green-500 text-white px-3 py-1 rounded-md text-sm">Tailwind CSS</span>
                                <span className="bg-purple-500 text-white px-3 py-1 rounded-md text-sm">JavaScript</span>
                                <span className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">Framer Motion</span>
                            </div>
                        </div>
                    </aside>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Article;
