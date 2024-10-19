import React, { useEffect } from 'react'
import Navbar from '../Header/Navbar'
import './About.css'
import { Link } from 'react-router-dom'
import { GoDotFill } from "react-icons/go";
import AnimatedCounter from '../Praralex/AnimatedCounter';
import Discover from '../Components/Discover';
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BiMovie } from 'react-icons/bi';
import { TiSocialLinkedin } from "react-icons/ti";
import AllBg from '../background/AllBg';
import BackToTopButton from '../Components/BackToTopButton';







function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar />
     <AllBg title="home" main="/ about"/>
    {/* second paragraf---------------------------------------- */}
    <div class="container">
  <div class="left-column">
    <img src="https://wpocean.com/html/tf/loveme/assets/images/about/1.png" alt="Description"/>
  </div>
  <div class="right-column">
    <img src='f2.png' alt=''></img>
  <h1 id='planer'>Planner of Your Perfect Wedding</h1>
  <p id='it'>At Planner of Your Perfect Wedding, we believe that every love story is unique and deserves to be immortalized in a way that reflects the joy, passion, and intimacy of your special day. Our photographers are dedicated to capturing those once-in-a-lifetime moments that you will treasure forever.</p>
  <br></br>
<p id='it'>Your wedding day is a beautiful chapter in the story of your life, filled with emotions that words can't always capture. At Planner of Your Perfect Wedding, we believe in telling your love story through timeless images that will speak to your heart for generations to come. With a focus on capturing genuine moments, our photographers blend artistry and emotion, ensuring every glance, smile, and tear is preserved forever.</p>
<br></br>
  <div class="cr">
  <i class="icon"><GoDotFill  size={25} color='#848892'/></i>
  <span id='it'>Going through the cites of the word in classical.</span>
</div><br></br>
<div class="cr">
  <i class="icon"><GoDotFill  size={25}  color='#848892'/></i>
  <span id='it'>There are many variations of passages.</span>
</div><br></br>
<div class="cr">
  <i class="icon"><GoDotFill  size={25}  color='#848892'/></i>
  <span id='it'>Capturing Moments, Crafting Memories.</span>
</div><br></br>

  </div>
</div>
<div className='new-row'>
  <AnimatedCounter/>
</div>
<Discover title="Wedding Ceremony" head="Celebrating Your Love"/>
<div class="line-container">
  <div class="line"></div>
  <img src="fa3.png" alt="Centered Image" class="center-image" />
  <div class="line"></div>
</div><br></br>
{/* /-----------------------------gallery section--------------------------- */}
<div className='banner'>
  <img src='ba.png' alt=''></img>
</div>

{/* /-----------------------------planing section--------------------------- */}
<Discover title="Pricing" head="Wedding Packages"/>
<div class="line-container">
  <div class="line"></div>
  <img src="fa3.png" alt="Centered Image" class="center-image" />
  <div class="line"></div>
</div>

<div class="pricing-container">
  <div class="pricing-card">
    <div class="pricing-image">
      <img src="https://wpocean.com/html/tf/loveme/assets/images//pricing/1.png" alt="Basic Package"/>
    </div>
    <h3 class="pricing-title">BASIC PACKAGE</h3>
    <p class="pricing-price">$250/Monthly</p>
    <ul class="pricing-features">
      <li>Stylish makeup for bride.</li>
      <li>Top label arrangement.</li>
      <li>Amazing meal & breakfast.</li>
      <li>Manicure & Pedicure.</li>
      <li>Full body Polish.</li>
    </ul>
    <button class="choose-package">Choose Package</button>
  </div>

  <div class="pricing-card">
    <div class="pricing-image">
      <img src="https://wpocean.com/html/tf/loveme/assets/images//pricing/2.png" alt="Standard Package"/>
    </div>
    <h3 class="pricing-title">STANDARD PACKAGE</h3>
    <p class="pricing-price">$550/Monthly</p>
    <ul class="pricing-features">
      <li>Stylish makeup for bride.</li>
      <li>Top label arrangement.</li>
      <li>Amazing meal & breakfast.</li>
      <li>Manicure & Pedicure.</li>
      <li>Full body Polish.</li>
    </ul>
    <button class="choose-package">Choose Package</button>
  </div>

  <div class="pricing-card">
    <div class="pricing-image">
      <img src="https://wpocean.com/html/tf/loveme/assets/images//pricing/3.png" alt="Luxury Package"/>
    </div>
    <h3 class="pricing-title">LUXURY PACKAGE</h3>
    <p class="pricing-price">$880/Monthly</p>
    <ul class="pricing-features">
      <li>Stylish makeup for bride.</li>
      <li>Top label arrangement.</li>
      <li>Amazing meal & breakfast.</li>
      <li>Manicure & Pedicure.</li>
      <li>Full body Polish.</li>
    </ul>
    <button class="choose-package">Choose Package</button>
  </div>
</div>
{/* /-----------------------------our team------------------------------ */}
<Discover title="Our Team" head="Meet Our Planners"/>
<div class="line-container">
  <div class="line"></div>
  <img src="fa3.png" alt="Centered Image" class="center-image" />
  <div class="line"></div>
</div>


<br></br>

<div class="our-team-container">
  <div class="team-card">
    <div class="team-image">
      <img src="https://wpocean.com/html/tf/loveme/assets/images/team/img-1.jpg" alt="Team Member 1"/>
    </div>
    <h3 class="team-name">Team Member 1</h3>
    <div class="team-icons">
      <i class="fab fa-facebook"><CiFacebook color='#002642'/></i>
      <i class="fab fa-twitter"><FaTwitter color='#002642'/></i>
      <i class="fab fa-linkedin"><TiSocialLinkedin  color='#002642'/></i>
      <i class="fab fa-linkedin"><IoLogoInstagram color='#002642'/></i>
    </div>
  </div>
  <div class="team-card">
    <div class="team-image">
      <img src="https://wpocean.com/html/tf/loveme/assets/images/team/img-2.jpg" alt="Team Member 2"/>
    </div>
    <h3 class="team-name">Team Member 2</h3>
    <div class="team-icons">
    <i class="fab fa-facebook"><CiFacebook color='#002642'/></i>
      <i class="fab fa-twitter"><FaTwitter color='#002642'/></i>
      <i class="fab fa-linkedin"><TiSocialLinkedin color='#002642'/></i>
      <i class="fab fa-linkedin"><IoLogoInstagram color='#002642'/></i>
    </div>
  </div>
  <div class="team-card">
    <div class="team-image">
      <img src="https://wpocean.com/html/tf/loveme/assets/images/team/img-3.jpg" alt="Team Member 3"/>
    </div>
    <h3 class="team-name">Team Member 3</h3>
    <div class="team-icons">
    <i class="fab fa-facebook"><CiFacebook color='#002642'/></i>
      <i class="fab fa-twitter"><FaTwitter color='#002642'/></i>
      <i class="fab fa-linkedin"><TiSocialLinkedin color='#002642'/></i>
      <i class="fab fa-linkedin"><IoLogoInstagram color='#002642'/></i>
    </div>
  </div>
  <div class="team-card">
    <div class="team-image">
      <img src="https://wpocean.com/html/tf/loveme/assets/images/team/img-4.jpg" alt="Team Member 4"/>
    </div>
    <h3 class="team-name">Team Member 4</h3>
    <div class="team-icons">
    <i class="fab fa-facebook"><CiFacebook color='#002642'/></i>
      <i class="fab fa-twitter"><FaTwitter color='#002642'/></i>
      <i class="fab fa-linkedin"><TiSocialLinkedin color='#002642'/></i>
      <i class="fab fa-linkedin"><IoLogoInstagram color='#002642'/></i>
    </div>
  </div>
</div>
<br></br><br></br><br></br>

<BackToTopButton />
  </>
  )
}

export default About


