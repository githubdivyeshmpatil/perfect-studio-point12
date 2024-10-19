import React, { useState, useEffect, useRef } from 'react';

import './Active_tab.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Active_tab() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
    });
  }, []);

  const [activeTab, setActiveTab] = useState('Tab1');
  const underlineRef = useRef(null);

  const handleTabChange = (tab, index) => {
    setActiveTab(tab);
    moveUnderline(index);
  };

  useEffect(() => {
    moveUnderline(0); // Initial position
  }, []);

  const moveUnderline = (index) => {
    const tabs = document.querySelectorAll('.tabs button');
    const activeTabElement = tabs[index];
    const underline = underlineRef.current;

    if (activeTabElement && underline) {
      underline.style.width = `${activeTabElement.offsetWidth}px`;
      underline.style.left = `${activeTabElement.offsetLeft}px`;
    }
  };

  const handleRefresh = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Add your refresh logic here
        resolve();
      }, 2000);
    });
  };

  const tab1Images = [
    { first: 'https://colorsofearth.in/cdn/shop/files/PPC09944_03d2a8b3-331c-4656-a1b7-cfed244686ca.jpg?v=1721206518&width=800', second: 'https://colorsofearth.in/cdn/shop/files/PPC09942_2148a0c6-d158-48f6-8c0d-fa8dc7b06b1e.jpg?v=1721206518&width=400', name: 'Pink Embroidered Silk Kurta Duppta Set', price: 'RS.1,269.00', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { first: 'https://colorsofearth.in/cdn/shop/files/Untitled-1_a0c1e4ac-f075-4b23-a9ee-55b2447e0bdf.jpg?v=1721200658&width=800', second: 'https://colorsofearth.in/cdn/shop/files/PPC09328.jpg?v=1721197752&width=800', name: 'Rani Embroidered Viscose Kurta Duppta Set', price: 'Rs.1,379.00', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { first: 'https://colorsofearth.in/cdn/shop/files/PPC00223.jpg?v=1721197137&width=800', second: 'https://colorsofearth.in/cdn/shop/files/PPC00219.jpg?v=1721197137&width=800', name: 'Yellow Embroidered Viscose Kurta Duppta ', price: 'Rs.1,379.00', sizes: ['S', 'M', 'L', 'XL', 'XXL']},
    { first: 'https://colorsofearth.in/cdn/shop/files/Untitled-1_656f43b1-c404-4351-a754-9213a72b5790.jpg?v=1720096238&width=800', second: 'https://colorsofearth.in/cdn/shop/files/PPC09993.jpg?v=1720096238&width=800', name: 'Neon Embroidered Chinon Kurta Duppta Set', price: 'Rs.1,099.00', sizes: ['S', 'M', 'L', 'XL', 'XXL'] }
  ];

  const tab2Images = [
    { first: 'https://colorsofearth.in/cdn/shop/files/509-04_1.jpg?v=1719481967&width=800', second: 'https://colorsofearth.in/cdn/shop/files/509-04_4.jpg?v=1719481967&width=800', name: 'Blue Flower Muslin Printed Co-Ord Set', price: 'RS.969.00', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { first: 'https://colorsofearth.in/cdn/shop/files/509-03_6.jpg?v=1719481893&width=800', second: 'https://colorsofearth.in/cdn/shop/files/509-03_1.jpg?v=1719481893&width=800', name: 'Pink Flower Muslin Printed Co-Ord Set', price: 'RS.969.00', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { first: 'https://colorsofearth.in/cdn/shop/files/509-02_6.jpg?v=1719481796&width=800', second: 'https://colorsofearth.in/cdn/shop/files/509-02_1.jpg?v=1719481796&width=800', name: 'Violet Flower Muslin Printed Co-Ord Set', price: 'RS. 969.00', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { first: 'https://colorsofearth.in/cdn/shop/files/509-01_1.jpg?v=1719481664&width=800', second: 'https://colorsofearth.in/cdn/shop/files/509-01_4.jpg?v=1719481664&width=800', name: 'Maroon Flower Muslin Printed Co-Ord Set', price: 'RS.969.00', sizes: ['S', 'M', 'L', 'XL', 'XXL'] }
  ];

  const tab3Images = [
    { first: 'https://colorsofearth.in/cdn/shop/files/318-02_5_4c3a35ee-836f-4d8f-bba3-78307f2d784f.jpg?v=1720098422&width=800', second: 'https://colorsofearth.in/cdn/shop/files/318-02_3_4f3bf473-0517-419e-858e-ee29c35bfe67.jpg?v=1720098422&width=800', name: 'Navy Blue Maslin Geomatric Oversize Shirt', price: 'RS.669.00', sizes: ['S', 'M', 'L', 'XL', 'XXL']},
    { first: 'https://colorsofearth.in/cdn/shop/files/318-03_4_335594a3-fb72-487b-89de-66e1910af79f.jpg?v=1720099534&width=800', second: 'https://colorsofearth.in/cdn/shop/files/318-03_14.jpg?v=1720099534&width=800', name: 'Violet Maslin Geomatric Oversize Shirt', price:'RS.669.00', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { first: 'https://colorsofearth.in/cdn/shop/files/Untitled-1_bc5559b2-8a1c-4701-b047-3a6d84b6db15.jpg?v=1720099219&width=800', second: 'https://colorsofearth.in/cdn/shop/files/318-04_4_e3f4b388-362b-48e9-8a1e-50c868e3451d.jpg?v=1720099219&width=800', name: 'Orange Maslin Geomatric Oversize Shirt', price: 'RS.669.00', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    { first: 'https://colorsofearth.in/cdn/shop/files/318-01_4_b400b977-68fa-436c-94d4-6be9dd7908b4.jpg?v=1720099298&width=800', second: 'https://colorsofearth.in/cdn/shop/files/318-01_c392928b-1c47-4d53-81a0-a5b4637e09b5.jpg?v=1720099298&width=800', name: 'Pink Maslin Geomatric Oversize Shirt', price: 'RS.669.00', sizes: ['S', 'M', 'L', 'XL', 'XXL'] }
  ];

  return (
   
      <div>
        <div className="tabs">
          <button onClick={() => handleTabChange('Tab1', 0)}>KURT SETS</button>
          <button onClick={() => handleTabChange('Tab2', 1)}>CO-ORD SET</button>
          <button onClick={() => handleTabChange('Tab3', 2)}>RESORT SHIRT</button>
        </div>
        <div className="content" data-aos="fade-up">
          {activeTab === 'Tab1' && <TabContent tab="Tab 1" images={tab1Images} />}
          {activeTab === 'Tab2' && <TabContent tab="Tab 2" images={tab2Images} />}
          {activeTab === 'Tab3' && <TabContent tab="Tab 3" images={tab3Images} />}
        </div>
      </div>
   
  );
}

const TabContent = ({ tab, images }) => {
  return (
    <div>
      <ImageGrid images={images} />
    </div>
  );
};

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid" id='active-four'>
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <img src={image.first} alt={`Image ${index + 1}`} className="first-image" />
          <img src={image.second} alt={`Image ${index + 1}`} className="second-image" />
          <div className="details">
            <h4>{image.name}</h4>
            <p>{image.price}</p>
            <div className="sizes">
              {image.sizes.map((size, i) => (
                <span key={i} className="size">{size}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Active_tab;
