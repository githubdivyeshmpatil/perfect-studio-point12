import React from 'react';
import './Paralex.css';
import Flower from '../background/Butterfly/Flower';

function PraralexBg() {
  return (
    <>
      <div className="parallax1"></div>

      <div className="content-para">
        <h1 id='am'>"आमच्या फोटोग्राफीने तुमच्या विवाहाचे प्रत्येक क्षण खास बनवा."</h1>
        <p id='make'>"Make every moment of your wedding special with our photography."</p>
              
              
                <Flower/>
             
      </div>

      <div className="parallax2"></div>

      <div className="content-para">
        <h2 id='sm'>"आमच्या फोटोग्राफीने प्रत्येक सणाचा आनंद आणि रंगचित्रित करा."</h2>
        <p>"Capture the joy and colors of every festival with our photography."</p>
         <Flower/>
      </div>

      <div className="parallax3"></div>
    </>
  );
}

export default PraralexBg;
