import React, { useEffect } from 'react'
import Navbar from '../Header/Navbar'
import AllBg from '../background/AllBg'

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  
    <>
      <Navbar />
      <AllBg  hed="gallery" title="home" main="/ gallery"/>
    </>
  )
}

export default Gallery