import React from 'react'
import abouts from '../../assets/images/abouts.jpg';

function Apropos() {
  return (
    <div class="container" style={{padding:'10px'}}>
        <h1 className='text-center mt-3 fw-bold'  style={{color:'#3464AE'}}>A propos de nous</h1>
        <hr className='text-dark fw-bold' style={{width:'250px',margin:'15px auto', height:'5px !important'}}/>
        <p className='text-center   fw-bold' style={{color:'#ADADAC'}}>Nous accompagnons les entreprises dans leur projet de transformation digitale.</p>

    <div class="row">   
        <div class="col-md-6  ">
        <div className='mt-5'></div>
            <p  style={{color:'#ADADAC', textAlign:'justify', marginBottom:'25px', lineHeight:'35px', fontWeight:'bold', fontSize:'20px'}}>Nous sommes une équipe passionnée évoluant dans le domaine de l'informatique. Notre expertise couvre un large éventail de technologies de l'information, et nous sommes déterminés à fournir des solutions innovantes pour répondre aux besoins de nos clients.</p>
            <div className="cta">
              <a href='/univsoft-website/about/' className='btn btn-primary shadow-none  'style={{backgroundColor:'#3464AE', color:'#fff'}}>En savoir plus</a>
            </div>
            <div className='mb-2'></div>
        </div>
        

        
        <div class="col-md-6">
        
            <img src={abouts} className='img-fluid' alt="Image A propos de nous"/>
        </div>
    </div>
</div>
  )
}

export default Apropos
