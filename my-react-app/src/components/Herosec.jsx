import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

export default function Herosec() {
  const { ref, inView } = useInView();
  const navigate = useNavigate();
  return (
    <>
      <motion.section 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='container-fluid w-full h-[80vh] text-center flex flex-col items-center justify-center gap-y-5 px-4 sm:px-8 relative'>
        <h1 
          className='text-amber-800 text-3xl sm:text-4xl md:text-5xl tracking-widest relative animate-fade-in-down'>
          BEGIN YOUR LEARNING ADVENTURE<br /> WITH US
        </h1>
        <h1 
          className='text-green-500 text-2xl sm:text-3xl md:text-4xl tracking-widest relative animate-fade-in-up'>
          THE ULTIMATE GUIDE TO <br /> MASTER YOUR BIT <br />EXAMINATION
        </h1>
        <button
          className='cursor-pointer bg-blue-500 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-blue-600'
          style={{
            padding: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
          }} 
          onClick={()=>navigate('/resource')}
        >
          Access Resources
        </button>
      </motion.section>
    </>
  );
}
