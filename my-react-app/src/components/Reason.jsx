import React from 'react';
import { FaChalkboardTeacher, FaBook, FaLaptop, FaChartLine, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export default function Reason() {
    const { ref, inView } = useInView();
  
  return (
    <>
      <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
        className="container-fluid h-min-screen"
        style={{ padding: '0 80px'
         }}
      >
        <h1 className="text-green-500 text-center text-2xl md:text-4xl font-extrabold drop-shadow-lg">
          WHY CHOOSE US TO EXCEL?
        </h1>
        <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-3 lg:grid-cols-6" style={{
          margin:'2rem 0',
          
        }}>
          <div className="boxes h-[25vh]  sm:h-[30vh] lg:h-[35vh] w-[200px] bg-blue-500 border border-blue-500 flex flex-col items-center justify-center hover:scale-105 hover:translate-y-2 transition-transform duration-500">
            <FaChalkboardTeacher className="text-white text-4xl mb-2" />
            <p className="text-center text-white text-xl">Expert Mentors</p>
          </div>
          <div className="boxes h-[25vh] sm:h-[30vh] lg:h-[35vh] w-[200px] bg-blue-500 border border-blue-500 flex flex-col items-center justify-center hover:scale-105 hover:translate-y-2 transition-transform duration-500">
            <FaBook className="text-white text-4xl mb-2" />
            <p className="text-center text-white text-xl">Complete Resources</p>
          </div>
          <div className="boxes h-[25vh] sm:h-[30vh] lg:h-[35vh] w-[200px] bg-blue-500 border border-blue-500 flex flex-col items-center justify-center hover:scale-105 hover:translate-y-2 transition-transform duration-500">
            <FaLaptop className="text-white text-4xl mb-2" />
            <p className="text-center text-white text-xl">Flexible Learning</p>
          </div>
          <div className="boxes h-[25vh] sm:h-[30vh] lg:h-[35vh] w-[200px] bg-blue-500 border border-blue-500 flex flex-col items-center justify-center hover:scale-105 hover:translate-y-2 transition-transform duration-500">
            <FaChartLine className="text-white text-4xl mb-2" />
            <p className="text-center text-white text-xl">Proven Results</p>
          </div>
          <div className="boxes h-[25vh] sm:h-[30vh] lg:h-[35vh] w-[200px] bg-blue-500 border border-blue-500 flex flex-col items-center justify-center hover:scale-105 hover:translate-y-2 transition-transform duration-500">
            <FaUsers className="text-white text-4xl mb-2" />
            <p className="text-center text-white text-xl">Community Support</p>
          </div>
          <div className="boxes h-[25vh] sm:h-[30vh] lg:h-[35vh] w-[200px] bg-blue-500 border border-blue-500 flex flex-col items-center justify-center hover:scale-105 hover:translate-y-2 transition-transform duration-500">
            <FaLaptop className="text-white text-4xl mb-2" />
            <p className="text-center text-white text-xl">Innovative Tools</p>
          </div>
        </div>
      </motion.section>
    </>
  );
}
