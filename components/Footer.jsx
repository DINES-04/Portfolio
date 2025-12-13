import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from 'framer-motion'
const Footer = ({ darkmode }) => {
    return (
        <div className='mt-20'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className='text-center '>
                <Image src={darkmode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto' />
                <p className='text-center max-w-2xl mx-auto  mb-5 font-Ovo max-sm:p-2'><br/>
                    I provide high-quality services designed to help your business grow and succeed.I’ve also provided a link below for you to explore more about me.<br />
                </p>
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='mail' className='w-6' />
                    dines.s16102004@gmail.com
                </div>
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <FaPhoneAlt className="text-lg text-[#7D7D7D]" />
                    +91 90252 67281
                </div>
                {/*quick links */}
                {/* <div>
                <ul className="flex flex-wrap  justify-center items-center gap-4 md:flex-row md:space-x-6 ">
                    <li><h2 className="text-xl font-ovo mb-3  flex items-end">Quick Links</h2></li>
                    <li><a href="#" className="text-gray-400 hover:text-white duration-300">Home</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white duration-300">Services</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white duration-300">Blog</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white duration-300">Contact</a></li>
                </ul>
            </div> */}
            </motion.div>


            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 DINES | All Rights Reserved.</p>
                <ul className='flex items-center gap-8 justify-center mt-4 sm:mt-0 '>
                    <li><a target='_blank' href="https://github.com/DINES-04" className='font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full'>GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/dines-s" className='font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full'>LinkedIn</a></li>
                    <li><a target='_blank' href="https://leetcode.com/u/DINES_S/" className='font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full'>Leetcode</a></li>
                    <li><a target='_blank' href="https://www.hackerrank.com/profile/dines_s16102004" className='font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full'>HackRank</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer