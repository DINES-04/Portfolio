import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Project = ({ darkmode }) => {
  // show first 3 initially
  const INCREMENT = 3
  const [visibleCount, setVisibleCount] = useState(INCREMENT)

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + INCREMENT, workData.length))
  }

  // optional: load all if user wants (not used here)
  const handleShowAll = () => setVisibleCount(workData.length)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-[20px]"
      id="project"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Latest Work
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My Project
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="grid grid-cols-normal sm:grid-cols-sm lg:grid-cols-lg my-10 gap-5"
      >
        {workData.slice(0, visibleCount).map((project, index) => (
          <a href={project.projectLink} target="_blank" key={index} rel="noopener noreferrer" id={project.subtitle}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index}
              onClick={handleShowMore} // clicking a project loads next batch
              style={{ backgroundImage: `url(${project.bgImage})` }}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              title="Click to load more projects"
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 dark:text-black">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  {/* small icons should have width/height to satisfy next/image */}
                  <Image src={assets.send_icon} alt="send icon" width={18} height={18} className="w-5" />
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>

      {/* Show More button - hidden when all projects are visible */}
      {visibleCount < workData.length ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          onClick={handleShowMore}
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-6 hover:bg-light duration-500 dark:text-white dark:border-white dark:hover:bg-dark dark:hover:shadow-white"
        >
          Show More
          <Image
            src={darkmode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt="right arrow"
            width={16}
            height={16}
            className="w-4"
          />
        </motion.button>
      ) : (
        <p className="text-center text-sm text-gray-500 mt-4">You've reached the end of the projects.</p>
      )}
    </motion.div>
  )
}

export default Project
