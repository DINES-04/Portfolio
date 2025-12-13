"use client"; 
import Article from "@/components/Article";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import { useEffect, useState } from "react";


export default function Home() {

  const [darkmode, setDarkmode] = useState(false);

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setDarkmode(true);
    }else{
      setDarkmode(false);
    }
  },[])

  useEffect(()=>{
    if(darkmode){
      document.documentElement.classList.add('dark');
      localStorage.theme ='dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme ='';
    }
  },[darkmode])

  return (
    <>
      <Navbar darkmode={darkmode} setDarkmode={setDarkmode}/>
      <Hero />
      <Portfolio darkmode={darkmode} />
      <Contact darkmode={darkmode} />
      <Article darkmode={darkmode} />
      <Footer darkmode={darkmode} />
    </>
  );
}
