import React, { useEffect } from 'react'
import Navbar from '../Header/Navbar'
import Home_bg from '../background/Home_bg'
import './Home.css'
import { RiArrowRightFill } from "react-icons/ri";
import Image_gallery from '../Components/Image_gallery';
import Discover from '../Components/Discover';
import Active_tab from '../Active tab/Active_tab';
import ButterFly from '../background/Butterfly/ButterFly';
import PraralexBg from '../Praralex/PraralexBg';
import AnimatedCounter from '../Praralex/AnimatedCounter';
import Janmastami from '../Active tab/Janmastami';
import BackToTopButton from '../Components/BackToTopButton';



function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar/>
      <Home_bg/>
      <div className='photo-text'>
        <h1 id='text-home'>Hello, I am Perfect Photo Studio. A Wedding &<br></br>Lifestyle Photographer.</h1>
        <div className='hello'>
        <p id='hello'>Hello, I am Anna, a lifestyle photographer based in Rome, Italy. My passion is to document the fleeting moments of love to create timeless, beautiful images as memories. I love capturing weddings, elopements and also families. My style is minimal, natural and understated. Looking forward to capturing your special day for eternity!</p>
        </div>
</div>
{/* //button -code-----------------ffffffffffffffffff------------// */}
<div class="button-container">
  <button class="center-button">
    SAY HELLO &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
  </button>

</div>
<ButterFly/>
{/* /*---------------------------sdagi------------------------------------------*/ }
<div className="container" id="sadgi">
        <div className="item">
          <div className="itemmm">
            <img src="https://colorsofearth.in/cdn/shop/files/Untitled-2_07957555-7e6f-453f-8c85-106a56973a1d.jpg?v=1724153022&width=600" alt="Image 1" />
          </div>
          <p id="sadgi-text">Saadgi</p>
        </div>
        <div className="item">
          <div className="itemmm">
            <img src="https://colorsofearth.in/cdn/shop/files/Untitled-1_f5a2d182-3cc7-4965-a09a-b4184a42cdd7.jpg?v=1723296128&width=600" alt="Image 2" />
          </div>
          <p id="sadgi-text">Riwayat</p>
        </div>
        <div className="item">
          <div className="itemmm">
            <img src="https://colorsofearth.in/cdn/shop/files/Untitled-2_677ea146-353b-451a-b781-2b04f520677d.jpg?v=1724152783&width=600" alt="Image 3" />
          </div>
          <p id="sadgi-text">Co-ordstyle</p>
        </div>
      </div>
<ButterFly/>
   {/* row coloumn ------------------------------------- */}
   <div className='main'>
   <div class="container-fluid" id='image-row-3'>
        <div class="item">
            <img src="https://web-images9.pixpa.com/kpTdilwYImQLvOgLfxTNicNl5vbRK5Ktw2s54s8AKU4/rs:fit:500:0/q:80/czM6Ly9waXhwYS10ZXN0L2NvbS9sYXJnZS83NDkzNi83NDkzNi0xNjU5NDUzNjg1LWFydGVtLWJlbGlhaWtpbi1qNWFsbW8xZThydS11bnNwbGFzaC5qcGc=" alt="Image 1"/>
            <div class="text">
                <h2 id='aboy'>About Me</h2>
                <p id='trus'>I try and translate the beauty of love through my work as a wedding photographer. Let's work together to create eternal memories of your special day.</p>
            </div>
            <div class="container-arrow">
  <button class="arrow-button">
    Click Me
    <span class="arrow"><RiArrowRightFill /></span>
  </button>
</div>
        </div>
        <div class="item" id='ty'>
          <div className='yuvi'>
        <video src="video/v6.mp4" controls autoPlay loop muted ></video>     
        </div>   
         <div class="text">
            <h2 id='aboy'>Latest Work</h2>
                <p id='trus'>Whether its a wedding or an elopement, or just capturing two humans in love - I have done it all. My visual style is chic and understated, full of life and emotions.</p>
            </div>
            <div class="container-arrow">
  <button class="arrow-button">
    Click Me
    <span class="arrow"><RiArrowRightFill /></span>
  </button>
</div>
        </div>
        <div class="item">
            <img src="https://web-images2.pixpa.com/lspY6Y_N4iyz9Pg6ibYkg4i38Na7Sg-rN1UQM22nxuE/rs:fit:300:0/q:80/czM6Ly9waXhwYS10ZXN0L2NvbS9sYXJnZS83NDkzNi8xNTg4NjI2OTgzLTc5NjkwLWlhY29iLWhpdGljYXMteTBtdXdhaGptNzAtdW5zcGxhc2guanBn" alt="Image 3"/>
            <div class="text">
            <h2 id='aboy'>Pricing & Packages</h2>
                <p id='trus'>Every shoot is unique and different. However,  a pricing page that would give you an idea on how much to budget for the photoshoot of your special day.</p>
            </div>
            <div class="container-arrow">
  <button class="arrow-button">
    Click Me
    <span class="arrow"><RiArrowRightFill /></span>
  </button>
</div>
        </div>
        
    </div>
    </div>
    <Image_gallery/>
    <ButterFly/>
     <Discover title="New Arrivals Just In" head="Fresh Looks for the Season" semi="Stay ahead of the fashion curve with our latest arrivals."/>
     <Active_tab/>
     <ButterFly/>
     
     <Discover title="New Arrivals Just In" head="Fresh Looks for the Season janmashtami 2024" semi="Stay ahead of the fashion curve with our latest arrivals."/>
      {/* <AnimatedCounter/> */}
      <Janmastami/><br></br>
      <PraralexBg/>
      <BackToTopButton />
    </div>

    
  )
}

export default Home
