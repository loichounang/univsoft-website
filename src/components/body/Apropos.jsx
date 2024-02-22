import React from 'react'
import li from '../../assets/images/li.jpg';

function Apropos() {
  return (
    <div class="container">
        <h1 className='text-center fw-bold mt-3' style={{color:'#3464AE'}}>A propos de nous</h1>
        <hr className='text-dark fw-bold'  style={{width:'270px',margin:'15px auto', height:'5px !important'}}/>
        <p className='text-center  fw-bold' style={{color:'#ADADAC'}}>Nous accompagnons les entreprises dans leur projet de transformation digitale.</p>

    <div class="row my-5">   
        <div class="col-md-6  ">
        <div className='mt-5'></div>
            <p className='fs-4 fw-bold' style={{color:'#ADADAC', textAlign:'justify', marginBottom:'28px'}}>Nous sommes une équipe passionnée évoluant dans le domaine de l'informatique. Notre expertise couvre un large éventail de technologies de l'information, et nous sommes déterminés à fournir des solutions innovantes pour répondre aux besoins de nos clients.</p>
            <a href='#' className='btn btn-primary shadow-none' style={{backgroundColor:'#3464AE', color:'#fff'}}>Read more</a>
            <div className='mb-2'></div>
        </div>
        

        
        <div class="col-md-6">
        
            <img src={li} className='img-fluid' alt="Image A propos de nous"/>
        </div>
    </div>
</div>
  )
}

export default Apropos
