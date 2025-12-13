import React from 'react'
import About from "@/components/About";
import Project from "@/components/Project";
import Service from "@/components/Service";

const Portfolio = ({darkmode}) => {
  return (
    <>
        <About darkmode={darkmode}/> 
        <Service/>
        <Project/>
    </>
  )
}

export default Portfolio