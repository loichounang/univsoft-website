import React from 'react'
import '../body/contact.css';
import mail from '../../assets/images/mail.png';
import call from '../../assets/images/call.png';
import localosation from '../../assets/images/localisation.jpeg';
import facebook from '../../assets/images/facebook.png';
import youtube from '../../assets/images/youtube.png';
import google from '../../assets/images/google.png';


function Contact() {
  return (
    <section className='sect'>
    <div className="container ">
      <div className="contactinfo">
        <h2>Contactez Nous</h2>
        <ul className="info">
          <li>
            <span><img src={localosation} alt='...' /></span>
            <span>2912 Meadowbrook Road<br/>
            
            Los Angeles, CA 
            900017
            </span>   
          </li>

          <li>
            <span><img src={mail} /></span>
            <span>hounangloic21@gmail.com
            </span>   
          </li>

          <li>
            <span><img src={call} alt='...'  /></span>
            <span>+237692061910
            </span>   
          </li>
        </ul>
        {/*autre section */}
      <div>
        <ul className="sci">
          <li><a href='#'><img src={youtube} /></a></li>
          <li><a href='#'><img  src={google} /></a></li>
          <li><a href='#'><img  src={youtube} /></a></li>
          <li><a href='#'><img  src={facebook} /></a></li>
          <li><a href='#'><img  src={youtube} /></a></li>

        </ul>
        </div>
      </div>
    </div>
    <div className='contactForm'>
      <h2>Send a Message</h2>
      <div className="inputBox ">
        <input type='text' name='' required/>
        <span>Noms</span>
      </div>
      <div className="inputBox ">
        <input type='text' name='' required/>
        <span>Prénoms</span>
      </div>
      <div className="inputBox ">
        <input type='email' name='' required/>
        <span>Email</span>
      </div>
      <div className="inputBox ">
        <input type='tel' name='' required/>
        <span>Téléphone</span>
      </div>
      <div className="inputBox ">
        <textarea name='' required> </textarea>
        <span>Ecrivez votre message ici...</span>
      </div>
      <div className="inputBox">
        <input type='submit' value='Envoyer' />
       
      </div>
    </div>
    </section>
  )
}

export default Contact
