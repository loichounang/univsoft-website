import React from 'react'

function Contact() {
  return (
    <div class="container containers">
    <h3 className='fw-bold fs-4 mb-4' style={{color:'#3464AE'}}>Contactez Nous</h3>
    <form action="#">
        <div class="contact-info">
        <label for="lname">Nom</label>
            <input type="text" id="fname" name="fname" className='mb-3'placeholder="Votre nom" />
            
            <label for="fname">Prénom</label>
            <input type="text" id="lname" name="lname"  placeholder="Votre prénom"/>
        </div>
        <div class="contact-info">
            <label for="email">Adresse email</label>
            <input type="email" id="email"  className='mb-3' name="email" placeholder="Votre adresse email"/>
            <label for="mobile">Numéro de téléphone</label>
            <input type="tel" id="mobile" name="mobile" placeholder="Votre numéro de téléphone"/>
        </div>
        <div class="message">
            <label for="message">Votre message</label>
            <textarea id="message" name="message" placeholder="Ecrivez votre message ici..."></textarea>
        </div>
        <div class="submit">
            <input type="submit" value="Envoyer"/>
        </div>
    </form>
</div>
  )
}

export default Contact
