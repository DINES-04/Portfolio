import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {motion} from 'framer-motion'

const Navbar = ({darkmode,setDarkmode}) => {
    const [isScroll,setIsscroll] = useState(false);
    const sidemenuref = useRef();

    const openmenu = ()=>{
        sidemenuref.current.style.transform= 'translateX(-16rem)'
    }

    const closemenu = ()=>{
        sidemenuref.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY > 50){
                setIsscroll(true);
            }else{
                setIsscroll(false);
            }
        })
    },[])
      
  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
            <Image src={assets.header_bg_color} alt='bg nav' className='w-full'/>
        </div>
        <nav className={`fixed top-0 left-0 w-full rounded-full px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-[1000] ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-themes dark:shadow-white/20 " : ""}`}>
            <a href="#top">
                <Image src={darkmode ? assets.logo_dark : assets.logo} alt="logo" className="w-28 cursor-pointer mr-14" />
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                <li><a href="#top" className="font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Home</a></li>
                <li><a href="#about" className="font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">About</a></li>
                <li><a href="#service" className="font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Service</a></li>
                <li><a href="#project" className="font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Project</a></li>
                <li><a href="#contact" className="font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Contact</a></li>
                <li><a href="#article" className="font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Article</a></li>
            </ul>

            <div className='flex items-center gap-4'>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={()=>setDarkmode(prev => !prev)}>
                    <Image src={darkmode ? assets.sun_icon : assets.moon_icon} alt='moon'className='w-6'/>
                </motion.button>

                <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration:0.5}}
                href="#contact" className="hidden  lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50">Contact <Image src={darkmode ? assets.arrow_icon_dark : assets.arrow_icon} alt="allow_icon" className="w-3"/></motion.a>

                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration:0.5}}
                className='block md:hidden ml-3'>
                    <Image src={darkmode ? assets.menu_white : assets.menu_black} alt='menu_black' onClick={openmenu} className='w-6'/>
                </motion.button>
            </div>

            {/* --------- menu tag------------ */}
            <ul ref={sidemenuref} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark dark:text-white'>

                <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration:0.5}}
                className='absolute right-6 top-6' onClick={closemenu}>
                    <Image src={darkmode ? assets.close_white :assets.close_black} alt='close_black'  className='cursor-pointer w-5'/>
                </motion.div>

                <li><a href="#top"  onClick={closemenu}  className="font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Home</a></li>
                <li><a href="#about" onClick={closemenu}  className="font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">About</a></li>
                <li><a href="#service"  onClick={closemenu} className="font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Service</a></li>
                <li><a href="#work" onClick={closemenu}  className="font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Project</a></li>
                <li><a href="#contact" onClick={closemenu}  className="font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Contact</a></li>
                <li><a href="#article" onClick={closemenu}  className="font-Ovo relative after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">Article</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar