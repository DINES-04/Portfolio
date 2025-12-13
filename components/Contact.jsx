import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useState } from 'react'
import {motion } from 'framer-motion'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f5455972-3589-4f02-be6e-0b41b23579b5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1}}
    className='w-full px-[12%] py-10 scroll-mt-[20px] bg-footer-bg bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none' id='contact'>
        <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay:0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>Connect With Me</motion.h4>
        <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:0.5 }}
        className='text-center text-5xl font-ovo'>Get In Touch</motion.h2>
        <motion.p 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.5, delay:0.7}}
        className='text-center max-w-lg mx-auto mt-5 mb-12 font-Ovo'>I'd love to here from you! If you have any question, comments, or feedback, Please use the form below.</motion.p>

        <motion.form 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.9, delay:0.5}}
        action="" onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <motion.input 
                initial={{x:-50, opacity:0}}
                whileInView={{x:0, opacity:1}}               //from left to right
                transition={{delay:1.1, duration:0.6}}
                type="text" placeholder='Enter your name' required  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white hover:border-pink-500 focus:border-pink-800 dark:bg-dark/30 dark:border-white/40 dark:hover:border-white/70 dark:focus:border-white' name='name'/>
                <motion.input 
                initial={{x:50, opacity:0}}
                whileInView={{x:0, opacity:1}}               //from right to left
                transition={{delay:1.1, duration:0.6}}
                type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white hover:border-pink-500 focus:border-pink-800 dark:bg-dark/30 dark:border-white/40 dark:hover:border-white/70 dark:focus:border-white ' name='email'/>
            </div>
            <motion.textarea 
            initial={{y:100, opacity:0}} 
            whileInView={{y:0, opacity:1}}                    //from down to up
            transition={{delay:1.3, duration:0.6}}
            name="message" rows={6} placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 hover:border-pink-500 focus:border-pink-800 dark:bg-dark/30 dark:border-white/40 dark:hover:border-white/70 dark:focus:border-white'></motion.textarea>
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type='submit' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-15 hover:bg-light duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark dark:text-white'>Submit Now <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4'/></motion.button>
        </motion.form>
        <p className='mt-4'>{result}</p>
    </motion.div>
  )
}

export default Contact