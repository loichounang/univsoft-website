import React from 'react'
import '../body/heroSection.css';
import hero from '../../assets/images/hero.jpg';
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';

function HeroSection() {


  return (

 <Parallax
 blur={{min:-15, max:15}} 
 strength={-200}
 
 >
 
<section className='hero'>
  
    <div className="container ">
      <div className="row">
        <div className="col-md-6">
          <div className="copy">
            <div className="text-label">
            Nous vous aidons à relever les défis auxquels vous faites face afin de réaliser des produits digitaux performants centrés sur les attentes de vos utilisateurs internes et externes.
            </div>
            <div className="text-hero-bold">
             
            <Typewriter
          options={{
            strings: ['Transformer votre avenir', 'numérique avec'],
            autoStart: true,
            loop: true,
          }}
        />
        <span  style={{ color: '#3464AE' }}>Univ</span>soft
            
            
            </div>
            <div className="text-hero-regular">
            Chez Univsoft, nous façonnons l'avenir de la technologie de l'information. Notre engagement
            est d'apporter des solutions innovantes, d'optimiser les processus et de stimuler la croissance
            numérique pour votre entreprise. Ensemble, créons un avenir connecté et prospère.
            </div>
            <div className="cta">
              <a href='#' className='btn btn-primary shadow-none  'style={{backgroundColor:'#3464AE', color:'#fff'}}>Contactez Nous</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img className='img-fluid w-100' src={hero} alt='...'/>
        </div>
      </div>
    </div>
</section>
</Parallax> 

  )
}

export default HeroSection
