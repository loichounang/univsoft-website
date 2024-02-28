import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../body/partners.css';
import gayap from '../../assets/images/gayap.PNG';
import biotech from '../../assets/images/biotech.jpeg';
import karmites from '../../assets/images/karmites.jpeg';
import osnou from '../../assets/images/osnou.jpg';
import skysoft from '../../assets/images/skysoft.png';

function Partners() {
  const settings = {
    slidesToShow: 7,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed: 1500,
    arrows:false,
    dots:false,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
          
        }
      }
    ]
  };

  return (
    <div className='container'>
      <h2 className='text-center mt-3 fw-bold'  style={{color:'#3464AE'}}>Nos Partenaires</h2>
      <hr className='text-dark fw-bold' style={{width:'200px',margin:'15px auto', height:'5px !important'}}/>
      <Slider {...settings} className='customer-logo-slider'>
        <div className='slide'>
          <img src={skysoft} alt='YouTube' />
        </div>
        <div className='slide'>
          <img src={osnou} alt='Adidas' />
        </div>
        <div className='slide'>
          <img src={karmites} alt='Facebook' />
        </div>
        <div className='slide'>
          <img src={gayap} alt='Nike' />
        </div>
        <div className='slide'>
          <img src={biotech} alt='Uber' />
        </div>
      </Slider>
      <div className='mb-5'></div>
    </div>
  );
}

export default Partners;
