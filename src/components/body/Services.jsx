import React from 'react';
import '../body/services.css';

function Services() {
  return (
    <section>
        <div className="container">
            <h1 className='text-center mt-3 fw-bold'  style={{color:'#3464AE'}}>Nos Services</h1>
            <hr className='text-dark fw-bold' style={{width:'200px',margin:'15px auto', height:'5px !important'}}/>
            <p className='text-center  fw-bold' style={{color:'#ADADAC'}}>En combinant nos compétences à celles de nos clients, nous faisons plus qu’imaginer, concevoir et délivrer des produits désirables, viables et durables. À travers un accompagnemet de bout en bout, nous agissons positivement sur la transformation de la culture, de l’organisation et des compétences.</p>
            <div className="row my-5">
                <div className="col-12 col-sm-6 col-md-4 m-auto">
                    <div className="card border-0 shadow text-center my-3">
                       <div className="card-body ">
                       <i class="bi bi-code-square bii"></i>

                        <h3 className='fw-bold fs-3' style={{color:'#3464AE'}}>Développement</h3>
                        

                       </div>
                       {/* card body ends*/}
                    </div>
                     {/* card  ends*/}
                </div>
                 {/* col  ends*/}
                 <div className="col-12 col-sm-6 col-md-4 m-auto">
                    <div className="card  border-0 shadow text-center my-3">
                       <div className="card-body ">
                       <i class="bi bi-gear bii"></i>

                        <h3 className='fw-bold fs-3' style={{color:'#3464AE'}}>Intégration</h3>
                        
                       </div>
                       {/* card body ends*/}
                    </div>
                     {/* card  ends*/}
                </div>
                 {/* col  ends*/}
                 <div className="col-12 col-sm-6 col-md-4 m-auto">
                    <div className="card  border-0 shadow text-center my-3">
                       <div className="card-body ">
                       <i class="bi bi-lightbulb bii"></i>

                        <h3 className='fw-bold fs-3' style={{color:'#3464AE'}}>Conseil</h3>
                       </div>
                       {/* card body ends*/}
                    </div>
                     {/* card  ends*/}
                </div>
                 {/* col  ends*/}
                 <div className="col-12 col-sm-6 col-md-4 m-auto">
                    <div className="card  border-0 shadow text-center my-3">
                       <div className="card-body ">
                       <i class="bi bi-person-workspace bii"></i>

                        <h3 className='fw-bold fs-3' style={{color:'#3464AE'}}>Formation</h3>
                       
                       </div>
                       {/* card body ends*/}
                    </div>
                     {/* card  ends*/}
                </div>
                 {/* col  ends*/}
                 <div className="col-12 col-sm-6 col-md-4 m-auto">
                    <div className="card  border-0 shadow text-center my-3">
                       <div className="card-body ">
                       <i class="bi bi-wordpress bii"></i>

                        <h3 className='fw-bold fs-3' style={{color:'#3464AE'}}>Wordpress</h3>
                       

                       </div>
                       {/* card body ends*/}
                    </div>
                     {/* card  ends*/}
                </div>
                 {/* col  ends*/}
                 <div className="col-12 col-sm-6 col-md-4 m-auto">
                    <div className="card  border-0 shadow text-center my-3">
                       <div className="card-body ">
                       <i class="bi bi-cart-fill bii"></i>

                        <h3 className='fw-bold fs-3' style={{color:'#3464AE'}}>E-Commerce</h3>
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
