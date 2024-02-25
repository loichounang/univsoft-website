import React from 'react'

export default function Service() {
  return (
    <section>
    <div className="container">
        <h1 className='text-center mt-3 fw-bold'  style={{color:'#3464AE'}}>Nos Services</h1>
        <hr className='text-dark fw-bold' style={{width:'200px',margin:'15px auto', height:'5px !important'}}/>
        <p className='text-center  fw-bold' style={{color:'#ADADAC'}}>En combinant nos compétences à celles de nos clients, nous faisons plus qu’imaginer, concevoir et délivrer des produits désirables, viables et durables. À travers un accompagnemet de bout en bout, nous agissons positivement sur la transformation de la culture, de l’organisation et des compétences.</p>
        <div className="row my-5">
<div className="col">
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
<div className="col">
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
<div className="col">
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
<div className="col">
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
</div>
{/* row ends*/}

    </div>
      {/* container ends*/}
      <div className='container'style={{lineHeight:'35px'}}>
      <div class="row " >
        <div class="col-lg-12 fw-bold">
            <h2 class="section-heading text-uppercase ml-auto"style={{color:'#3464AE'}}>Développement</h2>
            <p style={{color:'#ADADAC', textAlign:'justify'}}>Notre entreprise s'engage dans un éventail d'activités visant à apporter une valeur ajoutée à nos clients. Dans le domaine du développement, nous excellons dans la création de solutions logicielles novatrices, du concept à la mise en œuvre. Nos développeurs talentueux sont déterminés à offrir des produits robustes et évolutifs, répondant aux besoins changeants du marché.</p>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 fw-bold">
            <h2 class="section-heading text-uppercase ml-auto" style={{color:'#3464AE'}}>L'intégration</h2>
            <p style={{color:'#ADADAC', textAlign:'justify'}}>L'intégration est une autre de nos spécialités, où nous facilitons la transition de nos clients vers des solutions modernes. Notre équipe dédiée travaille à connecter et optimiser les systèmes existants, assurant une intégration transparente et une performance optimale.</p>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 fw-bold">
            <h2 class="section-heading text-uppercase ml-auto" style={{color:'#3464AE'}}>Conseil</h2>
            <p style={{color:'#ADADAC', textAlign:'justify'}}>Enfin, notre service de conseil offre une expertise stratégique pour aider nos clients à relever les défis complexes de leur entreprise. Nous proposons des solutions sur mesure, élaborées par nos experts, pour garantir la croissance et le succès continu de nos partenaires commerciaux. Avec un engagement constant envers l'innovation et l'excellence, nous sommes là pour guider nos clients à chaque étape de leur parcours.</p>
        </div>
    </div>

    
    <div class="row">
        <div class="col-lg-12 fw-bold">
            <h2 class="section-heading text-uppercase ml-auto"style={{color:'#3464AE'}}>Formation</h2>
            <p style={{color:'#ADADAC', textAlign:'justify'}}>La formation est au cœur de notre approche, car nous croyons en l'autonomisation par l'éducation. Nous proposons des programmes de formation avancés, permettant à nos clients de maîtriser les dernières technologies et de rester compétitifs dans un environnement en constante évolution..</p>
        </div>
    </div>
</div>
</section>
  )
}
