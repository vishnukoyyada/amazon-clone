import React, { useState } from 'react';
import './Offers.css';

function Offers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
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

  const productCategories = [
    {
      title: 'Starting ₹99 | All your home improvement needs',
      images: [
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg',
      ],
    },
    {
      title: 'Fashion for every season | Up to 70% off',
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg",
      ],
    },
    {
      title: 'Electronics & Appliances | Lowest prices',
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/CE/MSO/April/SetC/Boat_D_Qc_1x._SY116_CB560203706_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/CE/MSO/April/SetC/Boult_D_Qc_1x._SY116_CB560203706_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/CE/MSO/April/SetC/Noise_D_Qc_1x._SY116_CB560203706_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/CE/MSO/April/SetC/Zeb_D_Qc_1x._SY116_CB560203706_.jpg",
      ],
    },
    {
      title: 'Automotive essentials | Up to 60% off',
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
      ],
    },
  ];

  const todaysDealsImages = [
"https://m.media-amazon.com/images/I/4105IiC5tDL._AC_SY200_.jpg",
"https://m.media-amazon.com/images/I/41bLD50sZSL._AC_SY200_.jpg",
"https://m.media-amazon.com/images/I/21Y8QZTRJBL._AC_SY200_.jpg",
"https://m.media-amazon.com/images/I/31agL1j3cHL._AC_SY200_.jpg",
"https://m.media-amazon.com/images/I/31e1ZcqiwTL._AC_SY200_.jpg",

"https://m.media-amazon.com/images/I/618I++aMUNL._AC_SY200_.jpg",
"https://m.media-amazon.com/images/I/31-TqE7SqjL._AC_SY200_.jpg",
"https://m.media-amazon.com/images/I/61H12wqaHNL._AC_SY200_.jpg",

  ];

  return (
<div>
    <h1 className='Offerheader'>Welcome to the offers and discounts page</h1>
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
      <div className="product-categories">
        {productCategories.map((category, index) => (
          <div key={index} className="category-box">
            <h2>{category.title}</h2>
            <div className="category-images">
              {category.images.map((image, i) => (
                <img key={i} src={image} alt={`Image ${i + 1}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="todays-deals">
        <h2 className="todays-deals-heading">Today's Deals</h2>
        <div className="todays-deals-slider">
          {todaysDealsImages.map((image, index) => (
            <img key={index} src={image} alt={`Deal ${index + 1}`} className="todays-deal-image" />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Offers;
