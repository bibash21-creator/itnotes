import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function Navbar() {
    const { ref, inView } = useInView(); // Removed triggerOnce: true
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSemesterDropdownOpen, setIsSemesterDropdownOpen] = useState(false);
  const [isEntranceDropdownOpen, setIsEntranceDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
    // Add search functionality here
  };

  const toggleSemesterDropdown = () => {
    setIsSemesterDropdownOpen(!isSemesterDropdownOpen);
  };

  const toggleEntranceDropdown = () => {
    setIsEntranceDropdownOpen(!isEntranceDropdownOpen);
  };

  return (
    <>
      <motion.nav
       ref={ref}
       initial={{ opacity: 0, y: 50 }}
       animate={inView ? { opacity: 1, y: 0 } : {}}
       transition={{ duration: 0.8 }}
        className={`container-fluid uppernav h-25 flex justify-between items-center ${isMenuOpen ? '' : 'p-0 m-0'} md:p-auto md:m-auto ${isScrolled ? 'scrolled' : ''} navbar-animation`}
      >
        <Link to='/' className="cursor-pointer hover:opacity-80 transition-opacity duration-300">
          <img src="" alt="This is the logo" className='md:text-2xl'/>
        </Link>
        <div className="relative" style={{ zIndex: 15 }}>
          <button
            className='search-button cursor-pointer text-sm md:text-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out transform'
            onClick={toggleSearch}
          >
            Search... &nbsp;
            <i className='fas fa-search'></i>
          </button>
          {isSearchOpen && (
            <form onSubmit={handleSearchSubmit} className="absolute top-full left-0 mt-2 bg-white shadow-md p-2 rounded" style={{ zIndex: 25 }}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Type to search..."
                className="border border-gray-300 rounded p-1 w-full text-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <button type="submit" className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors duration-300">
                Search
              </button>
            </form>
          )}
        </div>
        <button className='hamburger-menu md:hidden cursor-pointer hover:opacity-80 transition-opacity duration-300' onClick={toggleMenu} style={{ zIndex: 10 }}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </motion.nav>

      <motion.nav className={`container-fluid h-15 lowernav flex justify-between items-center ${isMenuOpen ? 'flex flex-col w-full h-auto p-4 space-y-4' : 'hidden'} md:flex navbar-animation`} style={{ zIndex: 10 }}>
        <li className="w-full text-center cursor-pointer">
          <Link to="/" className="hover:text-blue-500 transition-colors duration-300">
            <span className="text-base md:text-xl">Home</span>
          </Link>
        </li>
        <li className="w-full text-center cursor-pointer relative">
          <div
            onClick={toggleSemesterDropdown}
            className="text-base md:text-xl hover:text-blue-500 transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer z-20"
          >
            Semesters &nbsp;<i className={`fas ml-2 ${isSemesterDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </div>
          {isSemesterDropdownOpen && (
            <ul className="absolute left-0 top-full mt-2 bg-blue-800 shadow-md rounded w-48 opacity-100 transform scale-100 transition-none" style={{ zIndex: 30 }}>
              <li className="p-2 hover:bg-red-700 hover:text-white transition-all duration-200 ease-in-out">
                <Link to="/semesters/semester1">Semester 1</Link>
              </li>
              <li className="p-2 hover:bg-red-700 hover:text-white transition-all duration-200 ease-in-out">
                <Link to="/semesters/semester2">Semester 2</Link>
              </li>
              <li className="p-2 hover:bg-red-700 hover:text-white transition-all duration-200 ease-in-out">
                <Link to="/semesters/semester3">Semester 3</Link>
              </li>
              <li className="p-2 hover:bg-red-700 hover:text-white transition-all duration-200 ease-in-out">
                <Link to="/semesters/semester4">Semester 4</Link>
              </li>
              <li className="p-2 hover:bg-red-700 hover:text-white transition-all duration-200 ease-in-out">
                <Link to="/semesters/semester5">Semester 5</Link>
              </li>
              <li className="p-2 hover:bg-red-700 hover:text-white transition-all duration-200 ease-in-out">
                <Link to="/semesters/semester6">Semester 6</Link>
              </li>
              <li className="p-2 hover:bg-red-700 hover:text-white transition-all duration-200 ease-in-out">
                <Link to="/semesters/semester7">Semester 7</Link>
              </li>
              <li className="p-2 hover:bg-red-700 hover:text-white transition-all duration-200 ease-in-out">
                <Link to="/semesters/semester8">Semester 8</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="w-full text-center cursor-pointer">
          <Link to='/resource' className="hover:text-blue-500 transition-colors duration-300">
            <span className="text-base md:text-xl">Resources</span>
          </Link>
        </li>
        <li className="w-full text-center cursor-pointer relative">
          <div
            onClick={toggleEntranceDropdown}
            className="text-base md:text-xl hover:text-blue-500 transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer"
          >
            Entrance &nbsp; <i className={`fas ml-2 ${isEntranceDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </div>
          {isEntranceDropdownOpen && (
            <ul className="absolute left-0 top-full mt-2 bg-blue-800 shadow-md rounded w-48 opacity-100 transform scale-100 transition-none" style={{ zIndex: 30 }}>
              <li className="p-2 hover:bg-red-700 hover:text-white transition-all duration-200 ease-in-out">
                <Link to="/entrance/test">Mock Test</Link>
              </li>
              <li className="p-2 hover:bg-red-700 hover:text-white transition-all duration-200 ease-in-out">
                <Link to="/entrance/medical">Entrances</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="w-full text-center cursor-pointer">
          <Link to='/notice' className="hover:text-blue-500 transition-colors duration-300">
            <span className="text-base md:text-xl">Notices and Updates</span>
          </Link>
        </li>
        <li className="w-full text-center cursor-pointer">
          <Link className="hover:text-blue-500 transition-colors duration-300">
            <span className="text-base md:text-xl">Queries</span>
          </Link>
        </li>
      </motion.nav>
    </>
  );
}
