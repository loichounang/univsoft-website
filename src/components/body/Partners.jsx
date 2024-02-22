import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../body/partners.css';
import youtube from '../../assets/images/youtube.png';
import uber from '../../assets/images/uber.jpeg';
import adiddas from '../../assets/images/adidas.png';
import facebook from '../../assets/images/facebook.png';
import nike from '../../assets/images/nike.png';
import google from '../../assets/images/google.png';
import openia from '../../assets/images/openia.png';

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
    <div className='container containers'>
      <h2 className='text-center mt-3 fw-bold'  style={{color:'#3464AE'}}>Nos Partenaires</h2>
      <hr className='text-dark fw-bold' style={{width:'200px',margin:'15px auto', height:'5px !important'}}/>
      <Slider {...settings} className='customer-logo-slider'>
        <div className='slide'>
          <img src={youtube} alt='YouTube' />
        </div>
        <div className='slide'>
          <img src={adiddas} alt='Adidas' />
        </div>
        <div className='slide'>
          <img src={facebook} alt='Facebook' />
        </div>
        <div className='slide'>
          <img src={nike} alt='Nike' />
        </div>
        <div className='slide'>
          <img src={uber} alt='Uber' />
        </div>
        <div className='slide'>
          <img src={google} alt='Uber' />
        </div>
        <div className='slide'>
          <img src={openia} alt='YouTube' />
        </div>
      </Slider>
    </div>
  );
}

export default Partners;
