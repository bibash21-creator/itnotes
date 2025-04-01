import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
export default function Contribute() {
  const {ref,inView} = useInView();
  return (
    <motion.section
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8 }} className='contribute container-fluid h-min-screen animate-fadeIn' style={{ padding: '0 4rem', margin: '3rem 0' }}>
      <div className="container flex flex-col md:flex-row">
        <div className="leftfoot w-full md:w-1/2 h-auto md:h-[25vh] flex flex-col justify-between items-center mb-4 md:mb-0">
          <h1 className='text-green-500 text-center text-2xl md:text-5xl lg:text-3xl xl:text-5xl drop-shadow-lg font-extrabold'>Contribute</h1>
          <button className='bg-blue-500 rounded-2xl h-[5vh] w-3/4 sm:h-[7vh] sm:w-1/2 md:w-1/4 cursor-pointer hover:scale-105 hover:bg-blue-800'>Contribute to Us</button>
        </div>
        <div className="rightfoot w-full md:w-1/2 h-auto md:h-[25vh]">
          <p className='text-amber-700 text-center md:text-xl lg:text-2xl xl:text-2xl'>Join the bitinfoNepal community and make a meaningful contribution by sharing your notes and past question papers. Your valuable input will assist fellow learners in accessing essential resources, facilitating their academic journey and success.</p>
        </div>
      </div>
    </motion.section>
  )
}
