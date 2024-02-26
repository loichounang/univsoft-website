import React from 'react';
import '../footer/footer.css';

function Footer() {
  return (
    <footer>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h3 className='mt-2 text-center' style={{fontSize:'50px', fontWeight:'bold'}} >Univ<span style={{color:'#ADADAC'}}>soft</span></h3>
        <p className='mt-3 fs-5' style={{textAlign:'justify'}}>Nous sommes une équipe passionnée évoluant dans le domaine de l'informatique. Notre expertise couvre un large éventail de technologies de l'information, et nous sommes déterminés à fournir des solutions innovantes pour répondre aux besoins de nos clients.</p>
      </div>
      <div class="col-md-3">
        <h3 className='fw-bold fs-5 mt-2'>CONTACTEZ-NOUS</h3>
        <ul className='mt-5'>
          <li><a href="tel:+237 6 96 45 83 82 me-2"><i class="bi bi-telephone-fill fs-6 "></i>+237 6 96 45 83 82</a></li>
          <li><a href="mailto:contact@univ-soft.com"><i class="bi bi-envelope fs-6"></i> contact@univ-soft.com</a></li>
          <a href='#'><i class="bi bi-facebook fs-3"></i></a>
         <a href='#'><i class="bi bi-twitter fs-3 "></i></a>
          <a href='#'><i class="bi bi-linkedin fs-3"></i></a>
        </ul>
      </div>
      <div class="col-md-3 " style={{float:'left'}}>
        <h3 className='fw-bold fs-5 mt-2'>LIENS UTILES</h3>
        <ul className='mt-5'>
          <li><a href="/univsoft-website/apropos/">QUI SOMMES NOUS</a></li>
          <li><a href="/univsoft-website/services/">NOS SERVICES</a></li>
          <li><a href="/univsoft-website/solutions/">NOS SOLUTIONS</a></li>
          <li><a href="/univsoft-website/contact/">CONTACT</a></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <hr/>
        <p class="text-center">© 2024 Univsoft - Tous droits réservés</p>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
