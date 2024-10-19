import React, { useEffect } from 'react'
import Navbar from '../Header/Navbar'
import AllBg from '../background/AllBg'
import Discover from '../Components/Discover'
import BackToTopButton from '../Components/BackToTopButton';


function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar />
    <AllBg  hed="Services" title="home" main="/ Services"/>
    
    <div className="flex justify-center items-start min-h-screen py-5 px-5 mt-9">
      
  {/* Left Section (Image with Play Button) */}
  
  <div className="relative w-full md:w-2/3 lg:w-1/2">
    <img
      src="https://wpocean.com/html/tf/loveme/assets/images/service-single/1.jpg"
      alt="Wedding Couple"
      className="w-full h-auto object-cover rounded-lg"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <button className="bg-white p-4 rounded-full shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.752 11.168l-4.148-2.408A1 1 0 009 9.694v4.612a1 1 0 001.604.832l4.148-2.408a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
          />
        </svg>
      </button>
    </div>
  </div>
  {/* Right Section (Services List) */}
  <div className="w-full md:w-1/3 lg:w-1/4 ml-10">
    {/* Search Box */}
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search Post.."
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:outline-none focus:border-blue-500"
      />
    </div>
    {/* Services List */}
    <div className="bg-white rounded-lg shadow p-5">
      <h3 className="text-xl font-bold mb-4 text-[#002642]" id='se'>Services of Client</h3>
      <ul>
        <li className="flex justify-between items-center py-2 border-b">
          <span>Wedding Event</span>
          <span className="text-gray-500">1</span>
        </li>
        <li className="flex justify-between items-center py-2 border-b">
          <span>Photography</span>
          <span className="text-gray-500">2</span>
        </li>
        <li className="flex justify-between items-center py-2 border-b">
          <span>Album</span>
          <span className="text-gray-500">3</span>
        </li>
        <li className="flex justify-between items-center py-2 border-b">
          <span>Wedding Dress</span>
          <span className="text-gray-500">4</span>
        </li>
        <li className="flex justify-between items-center py-2 border-b">
          <span>Best Gift</span>
          <span className="text-gray-500">5</span>
        </li>
        <li className="flex justify-between items-center py-2">
          <span>Wedding Tips</span>
          <span className="text-gray-500">6</span>
        </li>
      </ul>
    </div>
  </div>
</div>
<Discover title="Festival Ceremony" head="Celebrating Your offer Diwali "/>
<div class="line-container">
  <div class="line"></div>
  <img src="fa3.png" alt="Centered Image" class="center-image" />
  <div class="line"></div>
</div><br></br>
<div className='banner'>
  <img src='https://colorsofearth.in/cdn/shop/files/18_Banner_f1181e11-89f6-418a-b575-d238c82ddeee.jpg?v=1726914145&width=2000' alt=''></img>
</div>
<BackToTopButton />
    </>
  )
}

export default Services
