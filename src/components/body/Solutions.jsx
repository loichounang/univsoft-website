import React from 'react'
import '../body/solutions.css';

function Solutions() {
  return (
    <section>
    <div className="container">
        <h1 className='text-center mt-3 fw-bold'  style={{color:'#3464AE'}}>Nos Solutions</h1>
        <hr className='text-dark fw-bold' style={{width:'200px',margin:'15px auto', height:'5px !important'}}/>
        <p className='text-center  fw-bold' style={{color:'#ADADAC'}}>Votre partenaire en matières de services numériques dans les domaines du Web, du Mobile et de l' E-Commerce, nous nous engageons à vous apporter de la valeur sur vos projets digitaux.</p>
        <div className="row my-5">
            <div className="col-12 col-sm-6 col-md-4 m-auto">
                <div className="card border-0 shadow text-center my-3">
                   <div className="card-body ">
                    <h3 className='fw-bold fs-4' style={{color:'#3464AE'}}>Gestion Commerciale</h3>
                    <p className='fs-6' style={{color:'#ADADAC',textAlign:'justify'}}>Propulsez votre entreprise vers de nouveaux sommets avec notre solution de gestion commerciale révolutionnaire.
                    Plus qu'un simple logiciel, un véritable partenaire.
                    <span className='fw-bold'> Shine</span> ne se résume pas à un simple outil de gestion. C'est un véritable partenaire qui vous accompagne dans votre croissance et vous aide à atteindre vos objectifs.</p>

                   </div>
                   {/* card body ends*/}
                </div>
                 {/* card  ends*/}
            </div>
             {/* col  ends*/}
             <div className="col-12 col-sm-6 col-md-4 m-auto">
                <div className="card  border-0 shadow text-center my-3">
                   <div className="card-body ">
                   

                    <h3 className='fw-bold fs-4' style={{color:'#3464AE'}}>Gestion des écoles</h3>
                    <p  className='fs-6' style={{color:'#ADADAC',textAlign:'justify'}}>Oubliez les tâches administratives fastidieuses et optimisez le fonctionnement de votre établissement grâce à notre solution tout-en-un <span className='fw-bold'>Kampux</span>.
Notre plateforme intuitive et personnalisable s'adapte aux besoins spécifiques de chaque école, quelle que soit sa taille ou son orientation pédagogique.</p>

                   </div>
                   {/* card body ends*/}
                </div>
                 {/* card  ends*/}
            </div>
             {/* col  ends*/}
             <div className="col-12 col-sm-6 col-md-4 m-auto">
                <div className="card  border-0 shadow text-center my-3">
                   <div className="card-body ">
                  

                    <h3 className='fw-bold fs-4' style={{color:'#3464AE'}}>Gestion de SMS</h3>
                    <p  className='fs-6' style={{color:'#ADADAC',textAlign:'justify'}}>Bienvenue chez <span className='fw-bold'>Pulse</span>, où la communication par SMS devient simple, efficace et puissante. Notre solution de gestion des SMS est conçue pour répondre aux besoins de communication rapide et fiable de votre entreprise.</p>

                   </div>
                   {/* card body ends*/}
                </div>
                 {/* card  ends*/}
            </div>
             {/* col  ends*/}
          </div>
          </div>
          <div className="cta text-center ">
              <a href='/univsoft-website/solutions/' className='btn btn-primary shadow-none  'style={{backgroundColor:'#3464AE', color:'#fff'}}>Voir toute nos solution</a>
            </div>
            <div className='mb-5'></div>
</section>
  )
}

export default Solutions
