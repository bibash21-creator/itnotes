import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function Notice() {
   const { ref, inView } = useInView();
  const notices = [
    { text: 'Recent Notices', date: '15 May' },
    { text: 'Recent Notices', date: '15 May' },
    { text: 'Recent Notices', date: '15 May' },
    { text: 'Recent Notices', date: '15 May' },
    { text: 'Recent Notices', date: '15 May'},
    

  ];

  return (
    <>
    <motion.section
     ref={ref}
     initial={{ opacity: 0, y: 50 }}
     animate={inView ? { opacity: 1, y: 0 } : {}}
     transition={{ duration: 0.8 }} className="container-fluid notice h-" style={{
        padding: '0 4rem'
    }}>
        <div className="heading-contain flex items-center w-[80vw] md:w-full">
        <h1 className='text-green-500  text-left text-2xl md:text-5xl font-extrabold drop-shadow-lg' style={{
            margin:'2rem 0'
        }}>Notice</h1>
        <div className="straight border border-b-green-500 w-[100vw] md:w-[75vw]" style={{
            margin:'2rem 0'
        }}></div>
        <button className='bg-blue-500 border border-blue-500 w-[40vw] md:w-[10vw] rounded-lg cursor-pointer text-xs hover:scale-105 hover:bg-blue-700 md:text-lg' style={{
            padding: '10px 10px'
        }}>View all</button>
        </div>

        {/* Notices List */}
        <div className="notice-list flex flex-col gap-3 md:gap-12 lg:gap-12 h-[55vh] md:h-[100vh] w-[75vw] md:w-[92vw]">
          {notices.map((notice, index) => (
            <div 
              key={index} 
              className="bg-blue-500 border border-blue-500 h-[20vh] md:h-[50vh]text-md md:text-3xl flex items-center relative transition-transform duration-300 hover:scale-105" style={{
                padding: '0 2rem'
              }}
            >
              <Link>{notice.text}</Link>
              {notice.date && (
                <div className="bg-red-500 absolute bottom-10 md:bottom-26 lg:bottom-10 xl:bottom-15 h-[5vh] md:h-[7vh] xl:h-[10vh] lg:h-[10vh] right-0 flex justify-center items-center w-[10vh] text-[1rem] md:text-xl lg:text-lg rounded-2xl cursor-pointer">
                  {notice.date}
                </div>
              )}
            </div>
          ))}
        </div>
    </motion.section>
    </>
  )
}

