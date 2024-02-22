import React from 'react'
import '../navbar/navbar.css';
import logo from '../../assets/images/logo.jpeg';



function Navbar() {

 

  return (
    <nav  class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src={logo} width="150"/></a>
    <button className="navbar-toggler shadow-none" style={{background: '#3464AE'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span ></span>
      <span ></span>
      <span ></span>  
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active "  href="#">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">A propos</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nos Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nos Solutions
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" >Teams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" >Partenaires</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" >Contact</a>
        </li>
      </ul>
      <ul className='navbar-nav mx-auto'>
        <button className='btn'>Get a quote</button>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
