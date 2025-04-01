import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Semester() {
  const {ref,inView} = useInView();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100); // Add slight delay for animation
    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  return (
    <>
      <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
        className='container-fluid w- h-min-screen px-5 md:px-20'
        style={{
          padding: '0 80px',
          margin: '2rem 0'
        }}
      >
        <h1 className='text-green-700 text-center text-2xl md:text-5xl font-extrabold drop-shadow-lg'>
          SEMESTERS
        </h1>
        <div
          className={`container-fluid grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 transform transition-transform duration-1000 ${
            animate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
          style={{
            margin: '2rem 0',
          }}
        >
          <div className="container-fluid rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col justify-evenly items-center h-[180px] border border-blue-500 text-center text-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            Semester 1
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Notes
            </button>
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Past Questions
            </button>
          </div>
          <div className="container-fluid rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col justify-evenly items-center h-[180px] border border-blue-500 text-center text-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            Semester 2
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Notes
            </button>
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Past Questions
            </button>
          </div>
          <div className="container-fluid rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col justify-evenly items-center h-[180px] border border-blue-500 text-center text-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            Semester 3
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Notes
            </button>
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Past Questions
            </button>
          </div>
          <div className="container-fluid rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col justify-evenly items-center h-[180px] border border-blue-500 text-center text-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            Semester 4
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Notes
            </button>
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Past Questions
            </button>
          </div>
          <div className="container-fluid rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col justify-evenly items-center h-[180px] border border-blue-500 text-center text-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            Semester 5
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Notes
            </button>
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Past Questions
            </button>
          </div>
          <div className="container-fluid rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col justify-evenly items-center h-[180px] border border-blue-500 text-center text-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            Semester 6
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Notes
            </button>
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Past Questions
            </button>
          </div>
          <div className="container-fluid rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col justify-evenly items-center h-[180px] border border-blue-500 text-center text-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            Semester 7
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Notes
            </button>
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Past Questions
            </button>
          </div>
          <div className="container-fluid rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col justify-evenly items-center h-[180px] border border-blue-500 text-center text-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            Semester 8
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Notes
            </button>
            <button className='text-lg cursor-pointer border border-white w-[200px] hover:scale-105 bg-white text-blue-700 rounded-md py-1'>
              View all Past Questions
            </button>
          </div>
        </div>
      </motion.section>
    </>
  );
}
