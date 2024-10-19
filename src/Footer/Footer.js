import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneMissed } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";


import './Footer.css';

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="footer-column">
        <img  src="./LOGO-removebg.png" alt="Logo" id='log' />
        <p>Offering a diverse selection of premium photography prints and custom framing services. Transform your space with art that speaks Perfect studio point. </p>
        <div className="social-icons">
          <a href="https://www.instagram.com/perfect_studio_point?igsh=ZWpqc3MxeGlobDgx"><img src='174855.png' alt="Facebook" /></a>
          <a href="https://wa.me/919075483028"><img src='12.png' alt="Twitter" /></a>
          <a href="https://www.instagram.com/perfect_studio_point?igsh=ZWpqc3MxeGlobDgx"><img src='fa.png' alt="Instagram" /></a>
          <a href="#"><img src='t.png' alt="Google Plus" /></a>
        </div>
      </div>
      <div className="footer-column">
        <h3>INFORMATION</h3>
        <a href="#">About Us</a>
        <a href="#">Portfolio</a>
        <a href="#">Latest News</a>
        <a href="#">Contact us</a>
        <a href="#">Our Services</a>
      </div>
      <div className="footer-column">
        <h3>CONTACT</h3>
        <div className="contact-details">
          <p><HiOutlineMail size={22} color='grey'/> Email: sunilpatil76148@gmail.com</p>
          <p><MdOutlinePhoneMissed size={22} color='grey'/>Phone: 9075483028</p>
          <p><MdOutlineLocationOn size={46} color='red'/> Shop no 107, shreeji arcade, Aas Pass Rd, Patel Nagar, Khodiyar Nagar, char rasta, Godadara, Surat, Gujarat 395010</p>
        </div>
      </div>
      <div className="footer-column">
        <h3>INSTAGRAM</h3>
        <div className="instagram-photos">
          <img src="https://wpocean.com/html/tf/loveme/assets/images/instragram/1.jpg" alt="Instagram Photo" />
          <img src="https://wpocean.com/html/tf/loveme/assets/images/instragram/2.jpg" alt="Instagram Photo" />
          <img src="https://wpocean.com/html/tf/loveme/assets/images/instragram/3.jpg" alt="Instagram Photo" />
        </div><br></br>
        <div className="instagram-photos">
          <img src="https://wpocean.com/html/tf/loveme/assets/images/instragram/4.jpg" alt="Instagram Photo" />
          <img src="https://wpocean.com/html/tf/loveme/assets/images/instragram/5.jpg" alt="Instagram Photo" />
          <img src="https://wpocean.com/html/tf/loveme/assets/images/instragram/6.jpg" alt="Instagram Photo" />
        </div>
      </div>
    </div>
   <footer class="footer-copy " id='colpyright'>
  <p>© 2024 divyesh patil. Devlope by. All Rights Reserved.</p>
</footer>

    </>
  );
}

export default Footer;
