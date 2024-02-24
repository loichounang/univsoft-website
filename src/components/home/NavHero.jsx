import React from 'react'
import '../home/navhero.css';



function NavHero() {
  return (
<nav class="navbar navbar-expand-lg navbar-dark" style={{ background: '#3464AE', height: '50px', padding: '0' }}>
  <div class="container-fluid d-flex align-items-center">
    <ul class="navbar-nav ml-auto d-flex align-items-lg-center" style={{ flexWrap: 'nowrap' }}>
      <li class="nav-item" style={{ listStyle: 'none', marginRight: '10px' }}>
        <a class="text-truncate d-inline" href="tel:+2376926061910" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Poppins', height: '100%' }}>
          <i class="bi bi-telephone-fill fw-bold fs-6 me-1 mt-3" style={{ color: 'white', fontFamily: 'Poppins' }}></i> +237 692 06 19 10
        </a>
      </li>
      <li class="nav-item" style={{ listStyle: 'none' }}>
        <a class="text-truncate d-inline" href="mailto:contact@univsoft.com" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Poppins', height: '100%', marginRight:'15px' }}>
          <i class="bi bi-envelope fw-bold fs-6 me-1 mt-3" style={{ color: 'white', fontFamily: 'Poppins' }}></i> contact@univsoft.com
        </a>
      </li>
    </ul>
  </div>
</nav>




    

  )
}

export default NavHero
