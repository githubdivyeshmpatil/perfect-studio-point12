import React from 'react'

import AllBg from '../../background/AllBg'
import Janmastami from '../../Active tab/Janmastami'
import Navbar from '../../Header/Navbar'

function Wedding() {
  return (
    <>
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
    <video autoPlay loop muted className="background-video">
        <source src="/video/v6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   
  
    <Janmastami /> {/* Ensure Janmastami is above the video */}
    
    
    </>
  )
}

export default Wedding
