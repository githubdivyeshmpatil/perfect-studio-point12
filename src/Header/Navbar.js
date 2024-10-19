import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import logo from '../../src/pages/Photos/LOGO-removebg.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for mobile dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-40" >
        <div className="purple-header flex items-center justify-center" id='topp'>
          <marquee><p className="text-white">Limited Time Offer: 30% off on all photo prints until [End Date]! Get 20% off on all portrait sessions this month!</p></marquee>
        </div>

        <div className="container-fluid mx-auto px-4 flex items-center justify-between" id='navbar-beige'>
          <div className="flex items-center">
            <a href="/" className="text-lg">
              <img
                src={logo}
                alt="Logo" id='nav-loo'
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-purple-900" id='homee'>Home</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-purple-900" id='homee'>About-US</Link>
            <div className="relative group">
              <Link to="/gallery" className="text-gray-700 hover:text-purple-900" id='homee'>Gallery</Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg" id='hover-gallery'>
                <Link to="/gallery/Wedding Gallery" className="block px-4 py-2 text-gray-700 hover:bg-gray-200"  id='Bridal-border'>Wedding Gallery</Link>
                <Link to="/gallery/prewedding" className="block px-4 py-2 text-gray-700 hover:bg-gray-200"  id='Bridal-border'>Pre-Wedding Gallery</Link>
                <Link to="/gallery/bridal" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" id='Bridal-border'>Bridal Portraits</Link>
                <Link to="/gallery/Couple" className="block px-4 py-2 text-gray-700 hover:bg-gray-200"  id='Bridal-border'>Couple Portraits</Link>
                <Link to="/gallery/Outdoor" className="block px-4 py-2 text-gray-700 hover:bg-gray-200"  id='Bridal-border'>Outdoor</Link>
                <Link to="/gallery/prewedding" className="block px-4 py-2 text-gray-700 hover:bg-gray-200"  id='Bridal-border'>All Photos</Link>
                <Link to="/gallery/prewedding" className="block px-4 py-2 text-gray-700 hover:bg-gray-200"  id='Bridal-border'>Videos</Link>


              </div>
            </div>
            <Link to="/services" className="text-gray-700 hover:text-purple-900" id='homee'>Services</Link>
            <Link to="/contact-booking" className="text-gray-700 hover:text-purple-900" id='homee'>Contact-Booking</Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 mr-5">
            <a href="https://www.instagram.com/perfect_studio_point?igsh=ZWpqc3MxeGlobDgx" className="text-gray-700 hover:text-purple-900"  ><FaInstagram size={25} color='red' /></a>
            <a href="https://wa.me/919075483028" className="text-gray-700 hover:text-purple-900" ><IoLogoWhatsapp size={25} color='green'/></a>
            <a href="#" className="text-gray-700 hover:text-purple-900" ><FaFacebook size={25} color='blue'/></a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

    {/* Mobile Sidebar */}
<div className={`fixed top-0 left-0 h-full bg-gray-800 bg-opacity-75 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
  {/* Make sidebar scrollable */}
  <div className="w-64 bg-white h-full shadow-md overflow-y-auto">
    <div className="p-4 flex justify-between items-center">
      <span className="text-lg font-bold text-purple-900">Perfect Photo Studio</span>
      <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <nav className="mt-4">
      <Link to="/" className="block px-4 py-2 text-black-900" id='homee'>Home</Link>
      <Link to="/women" className="block px-4 py-2 text-black-900" id='homee'>About-US</Link>

      {/* Mobile Dropdown */}
      <div>
        <button onClick={toggleDropdown} className="block w-full text-left px-4 py-2 text-black-900 focus:outline-none">
          Gallery
          <svg className={`w-5 h-5 inline float-right transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="pl-6">
            <Link to="/gallery/Wedding Gallery" className="block px-4 py-2 text-red-900" id='homee'>Wedding Gallery</Link>
            <Link to="/gallery/prewedding" className="block px-4 py-2 text-red-900" id='homee'>Pre-Wedding Gallery</Link>
            <Link to="/gallery/bridal" className="block px-4 py-2 text-red-900" id='homee'>Bridal Portraits</Link>
            <Link to="/gallery/Couple" className="block px-4 py-2 text-red-900" id='homee'>Couple Portraits</Link>
            <Link to="/gallery/Outdoor" className="block px-4 py-2 text-red-900" id='homee'>Outdoor</Link>
            <Link to="/gallery/prewedding" className="block px-4 py-2 text-red-900" id='homee'>All Photos</Link>
            <Link to="/gallery/prewedding" className="block px-4 py-2 text-red-900" id='homee'>Videos</Link>
          </div>
        )}
      </div>

      <Link to="/services" className="block px-4 py-2 text-black-900" id='homee'>Services</Link>
      <Link to="/contact-booking" className="block px-4 py-2 text-black-900" id='homee'>Contact-Booking</Link>
      <div className="mt-4 border-t border-gray-200 flex space-x-2">
        <a href="https://www.instagram.com/perfect_studio_point?igsh=ZWpqc3MxeGlobDgx" className="px-1 py-2 text-black-900"><FaInstagram size={25} color='red' /></a>
        <a href="https://wa.me/919075483028" className="px-1 py-2 text-black-900"><IoLogoWhatsapp size={25} color='green' /></a>
        <a href="#" className="px-1 py-2 text-black-900"><FaFacebook size={25} color='blue' /></a>
        <a href="#" className="px-1 py-2 text-black-900"><FaFacebook size={25} color='blue' /></a>
      </div>
    </nav>
  </div>
</div>

    </div>
  );
};

export default Navbar;
