import React from 'react'
import { Link } from 'react-router-dom'
// Add Font Awesome icons
import { FaEnvelope, FaGraduationCap, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
// Add framer-motion for animations
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const { ref, inView } = useInView();

  return (
    <>
      <motion.footer
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='container-fluid h-[120vh] md:h-[50vh] upperfoot grid grid-cols-1 gap-3 md:grid-cols-2'>
        <div className="leftfoot flex flex-col items-center">
          <img src="" alt="This is the logo" className='text-2xl' style={{ margin: '2rem 0 0 0' }} />
          <p className='text-center md:text-left text-md md:text-2xl' style={{ padding: '0 2rem', margin: '2rem 0 0 0' }}>
            ITNOTES Nepal is a Web Application that provides complete resources needed for the students studying BIT in various universities of Nepal.
          </p>
          <button className="flex items-center text-md md:text-2xl" style={{ margin: '2rem 0' }}>
            <FaEnvelope />  bebuspoudel@gmail.com
          </button>
          <h2 className="text-xl md:text-2xl">Follow Us</h2>
          <div className="social-icons flex gap-10" style={{ margin: '1rem 0 0 0' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl md:text-4xl">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl md:text-4xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl md:text-4xl">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="rightfoot md:flex md:items-center md:justify-evenly">
          <ul className="semester flex flex-col items-center text-xl">
            <h1 className='text-center text-2xl md:text-left md:text-3xl' style={{ margin: '2rem 0' }}>Semesters</h1>
            <li className="flex items-center gap-2">
              <FaGraduationCap /> <Link>First Semester</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaGraduationCap /> <Link>Second Semester</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaGraduationCap /> <Link>Third Semester</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaGraduationCap /> <Link>Fourth Semester</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaGraduationCap /> <Link>Fifth Semester</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaGraduationCap /> <Link>Sixth Semester</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaGraduationCap /> <Link>Seventh Semester</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaGraduationCap /> <Link>Eighth Semester</Link>
            </li>
          </ul>
          <div className="hitcounter text-xl text-center" style={{ margin: '2rem 0' }}>
            <h1 className='text-xl md:text-2xl'>H I T C O U N T E R</h1>
            <div className="count-boxcontain flex flex-row h-[7vh]" style={{ padding: '0 10px', margin: '1rem 0' }}>
              <div className="countbox bg-green-500 w-1/4 flex items-center justify-center">1</div>
              <div className="countbox bg-blue-500 w-1/4 flex items-center justify-center">2</div>
              <div className="countbox bg-indigo-500 w-1/4 flex items-center justify-center">3</div>
              <div className="countbox bg-violet-500 w-1/4 flex items-center justify-center">4</div>
            </div>
          </div>
        </div>
      </motion.footer>
      <p className="lowerfoot h-[10vh] md:[10vh]"></p>
    </>
  );
}
