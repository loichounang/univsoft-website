import React from 'react'
import '../body/heroSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import svg from '../../assets/images/Illustration.svg';
import li from '../../assets/images/li.jpg';
import f from '../../assets/images/f.jpg';

function HeroSection() {
   
    

  return (

  
<section className='hero'>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="copy">
            <div className="text-label">
              Changes your bussiness is more !
            </div>
            <div className="text-hero-bold">
              UnivSoft your Mind in the future.
            </div>
            <div className="text-hero-regular">
              There are so many variations passages of management Your mindset about bussines in your company or agency 
            </div>
            <div className="cta">
              <a href='#' className='btn btn-primary shadow-none  'style={{backgroundColor:'#3464AE', color:'#fff'}}>Explore now</a>
              <a href='#' className='btn btn-secondary shadow-none ms-3  '>See pricing</a>

            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img className='img-fluid' src={svg} alt='...'/>
        </div>
      </div>
    </div>
</section>
   

  )
}

export default HeroSection
