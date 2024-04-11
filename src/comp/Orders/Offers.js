import React, { useState } from 'react';
import './Offers.css';

function Offers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    // Replace these placeholders with your actual image URLs
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Gateway/April/Clearance/store/CLEARANCE-STORE-gw-hero_pc_1x._CB561562296_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/Apr/Shoes/Unrec/DBS/ALL/3000PC._CB560256295_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/sharooq1/Gw2/5300---Kitchen---Citi-bank-stripe-update--under_699_PC-3000_HDFC._CB561474676_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/Unrec/Baby-PC_GW_Hero_3000x1200_01._CB578900765_.jpg',
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div>
    <h1 className='header'> Welcome to Offers and Deals </h1>
    <div className="offers">
      <div className="offers__slider">
        <img src={images[currentSlide]} alt="Offer Slide" />
        <button className="offers__slider-button offers__slider-button--prev" onClick={handlePrevSlide}>
          &#8592;
        </button>
        <button className="offers__slider-button offers__slider-button--next" onClick={handleNextSlide}>
          &#8594;
        </button>
      </div>

      </div>
    </div>
  );

}

export default Offers;
