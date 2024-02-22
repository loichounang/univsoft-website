import React from 'react'
import '../footer/footer.css';

function Footer() {
  return (
    <div>
    <footer>
    <div className='container '>
      <div className="apropos">
        <h2>A propos</h2>
        <p>Nous sommes une équipe passionnée évoluant dans le domaine de l'informatique. Notre expertise couvre un large éventail de technologies de l'information, et nous sommes déterminés à fournir des solutions innovantes pour répondre aux besoins de nos clients.</p>
      </div>
      <div className="support">
        <h2>Support</h2>
        <ul>
            <li><a href='#'>FAQ</a></li>
            <li><a href='#'>Privacy Policy</a></li>
            <li><a href='#'>Help</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>

      </div>
      <div className="services">
      <h2>Services</h2>
        <ul>
            <li><a href='#'>Web Development</a></li>
            <li><a href='#'>UI/UX Design</a></li>
            <li><a href='#'>Referencement</a></li>
            <li><a href='#'>App Development</a></li>
        </ul>
      </div>
      <div className="contact">
        <h2>Contactez </h2>
        <ul className="info">
            <li><span><i class="bi bi-telephone fs-6"></i></span><p><a href='tel:+237692061010'>+237692061910</a></p></li>
            <li>
                <span><i class="bi bi-envelope fs-6"></i></span>
                <p><a href='mailto:univsotf237@gmail.com'>univsotf237@gmail.com</a></p>
            </li>
        </ul>
      </div>
    </div>
    </footer>
    <div className='copyrightText'>
        <p> Copyrigth{''} &copy;2024 Univsoft. All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Footer
