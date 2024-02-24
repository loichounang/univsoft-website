import React, { useState, useEffect } from 'react'
import '../navbar/navbar.css';
import logo from '../../assets/images/logo.jpeg';



function Navbar() {

  const [isTopNavbarFixed, setTopNavbarFixed] = useState(false);
  const [isBottomNavbarFixed, setBottomNavbarFixed] = useState(false);

  useEffect(() => {
    // Obtenez la position initiale des barres de navigation
    const topNavbar = document.getElementById('topNavbar');
    const bottomNavbar = document.getElementById('bottomNavbar');
    const topNavbarOffset = topNavbar.offsetTop;
    const bottomNavbarOffset = bottomNavbar.offsetTop;

    // Gérez le positionnement fixe lors du défilement
    const handleScroll = () => {
      setTopNavbarFixed(window.pageYOffset >= topNavbarOffset);
      setBottomNavbarFixed(window.pageYOffset >= bottomNavbarOffset);
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyez l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Assurez-vous de passer une liste vide comme dépendance pour n'ajouter l'écouteur qu'une fois lors du montage



  return (
    <div>
<nav id="topNavbar"  className={`navbar navbar-expand-lg ${isTopNavbarFixed ? 'fixed-top' : ''}`}  style={{ background: '#3464AE', height: '45px', padding: '0' }}>
  <div class="container-fluid ">
    <ul class="navbar-nav  ml-auto me-5">
      <a className='me-5'></a>
      <a className='me-3'></a>
      <li class="nav-item me-3" style={{ listStyle: 'none' , marginRight: '10px' }}>
        <a class="text-truncate d-inline" href="tel:+2376926061910" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Poppins', height: '100%' }}>
          <i class="bi bi-telephone-fill fw-bold fs-6  mt-3" style={{ color: 'white', fontFamily: 'Poppins' }}></i> +237 692 06 19 10
        </a>
      </li>
      <li class="nav-item " style={{ listStyle: 'none' }}>
        <a class="text-truncate d-inline" href="mailto:contact@univsoft.com" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Poppins', height: '100%', marginRight:'15px' }}>
          <i class="bi bi-envelope fw-bold fs-6  mt-3" style={{ color: 'white', fontFamily: 'Poppins' }}></i> contact@univsoft.com
        </a>
      </li>
    </ul>
  </div>
</nav>

<div style={{padding:'20px'}}></div>

    <nav id="bottomNavbar"className={`navbar navbar-expand-lg navbar-light bg-white ${isBottomNavbarFixed ? 'fixed-top' : ''}`}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
          <img src={logo} width='200' alt='...' />
          
          </a>
      <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <i class="bi bi-list"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/univsoft-website/">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/univsoft-website/about/">A propos de nous</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nos Solutions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#" >Nos Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#" >Contact</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar
