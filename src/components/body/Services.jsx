import React from 'react';
import '../body/services.css';

function Services() {
  return (
    <section>
        <div className="container">
            <h1 className='text-center mt-3 fw-bold'  style={{color:'#3464AE'}}>Nos Services</h1>
            <hr className='text-dark fw-bold' style={{width:'200px',margin:'15px auto', height:'5px !important'}}/>
            <p className='text-center  fw-bold' style={{color:'#ADADAC'}}>Nous offrons les meilleurs services à tout nos clients.</p>
            <div className="row my-5">
                <div className="col-12 col-sm-6 col-md-4 m-auto">
                    <div className="card border-0 shadow text-center my-3">
                       <div className="card-body ">
                       <i class="bi bi-router"></i>

                        <h3>Networking</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, totam fugit aspernatur nihil numquam doloremque voluptatem esse, beatae vero odio explicabo, facilis debitis voluptates nisi? Iste accusantium dolorem quae nihil.</p>

                       </div>
                       {/* card body ends*/}
                    </div>
                     {/* card  ends*/}
                </div>
                 {/* col  ends*/}
                 <div className="col-12 col-sm-6 col-md-4 m-auto">
                    <div className="card  border-0 shadow text-center my-3">
                       <div className="card-body ">
                       <i class="bi bi-palette"></i>

                        <h3>UI/UX Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, totam fugit aspernatur nihil numquam doloremque voluptatem esse, beatae vero odio explicabo, facilis debitis voluptates nisi? Iste accusantium dolorem quae nihil.</p>

                       </div>
                       {/* card body ends*/}
                    </div>
                     {/* card  ends*/}
                </div>
                 {/* col  ends*/}
                 <div className="col-12 col-sm-6 col-md-4 m-auto">
                    <div className="card  border-0 shadow text-center my-3">
                       <div className="card-body ">
                       <i class="bi bi-android"></i>

                        <h3>App Development</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, totam fugit aspernatur nihil numquam doloremque voluptatem esse, beatae vero odio explicabo, facilis debitis voluptates nisi? Iste accusantium dolorem quae nihil.</p>

                       </div>
                       {/* card body ends*/}
                    </div>
                     {/* card  ends*/}
                </div>
                 {/* col  ends*/}
                 <div className="col-12 col-sm-6 col-md-4 m-auto">
                    <div className="card  border-0 shadow text-center my-3">
                       <div className="card-body ">
                       <i class="bi bi-code-slash"></i>

                        <h3>Web Development</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, totam fugit aspernatur nihil numquam doloremque voluptatem esse, beatae vero odio explicabo, facilis debitis voluptates nisi? Iste accusantium dolorem quae nihil.</p>

                       </div>
                       {/* card body ends*/}
                    </div>
                     {/* card  ends*/}
                </div>
                 {/* col  ends*/}
                 <div className="col-12 col-sm-6 col-md-4 m-auto">
                    <div className="card  border-0 shadow text-center my-3">
                       <div className="card-body ">
                       <i class="bi bi-wordpress"></i>

                        <h3>Wordpress</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, totam fugit aspernatur nihil numquam doloremque voluptatem esse, beatae vero odio explicabo, facilis debitis voluptates nisi? Iste accusantium dolorem quae nihil.</p>

                       </div>
                       {/* card body ends*/}
                    </div>
                     {/* card  ends*/}
                </div>
                 {/* col  ends*/}
                 <div className="col-12 col-sm-6 col-md-4 m-auto">
                    <div className="card  border-0 shadow text-center my-3">
                       <div className="card-body ">
                       <i class="bi bi-cart-fill"></i>

                        <h3>E-Commerce</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, totam fugit aspernatur nihil numquam doloremque voluptatem esse, beatae vero odio explicabo, facilis debitis voluptates nisi? Iste accusantium dolorem quae nihil.</p>

                       </div>
                       {/* card body ends*/}
                    </div>
                     {/* card  ends*/}
                </div>
                 {/* col  ends*/}
            </div>
            {/* row ends*/}
        </div>
          {/* container ends*/}
    </section>
      
  )
}

export default Services
