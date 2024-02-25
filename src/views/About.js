import React from 'react'
import about from '../assets/images/about.jpg';

function About() {
  return (
    <div class="container">
    <div class="row">
        <div class="col-lg-12 ">
            <h2 class="section-heading text-uppercase fw-bold text-center " style={{color:'#3464AE'}}>À Propos de Nous</h2>
            <hr className='text-dark fw-bold' style={{width:'200px',margin:'15px auto', height:'5px !important'}}/>
            <p style={{color:'#ADADAC', textAlign:'justify'}}>C'est avec plaisir que nous vous invitons à découvrir d'avantage sur notre identité et à explorer en détail la diversité de nos activités. Plongez dans l'essence même de notre entreprise, apprenez à connaître les visages derrière notre équipe d'experts, et comprenez pleinement l'étendue de ce que nous accomplissons au quotidien. Bien plus qu'une simple introduction, cette exploration vous emmènera au cœur de notre histoire, de nos valeurs et de notre engagement envers l'innovation et l'excellence.</p>
            <div className='mb-3'></div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <img src={about} className='img-fluid w-100' alt="Image À Propos"/>
        </div>
        <div className='mb-5'></div>
        <h3 class="section-subheading fw-bold" style={{color:'#3464AE'}}>Notre Vision</h3>
        <p style={{color:'#ADADAC', textAlign:'justify'}}>Notre vision chez <span className='fw-bold' style={{color:'#3464AE'}}>Univ</span><span className='fw-bold' style={{color:'#ADADAC'}}>soft</span>  va au-delà de simple ambition ; c'est une vision que nous considérons comme un idéal à atteindre. 
            Elle représente une motivation constante pour nos équipes, composées d'ingénieurs formés, chacun apportant des compétences et des profils
             complémentaires. Nous nous engageons à concrétiser cette vision dans chacun de nos projets, en fournissant des solutions 
             innovantes et en dépassant les attentes de nos clients. Chez <span className='fw-bold' style={{color:'#3464AE'}}>Univ</span><span className='fw-bold' style={{color:'#ADADAC'}}>soft</span> , nous croyons 
            que notre mission est le moteur qui nous pousse à exceller, à évoluer et à créer un impact positif dans le
             monde de la technologie et au-delà.</p>

             <div className='mb-3'></div>

        <div class="col-lg-12">
            <h3 class="section-subheading fw-bold" style={{color:'#3464AE'}}>Notre Histoire</h3>
            <p style={{color:'#ADADAC', textAlign:'justify'}}>Notre histoire commence avec une passion commune pour l'innovation et le progrès. Notre entreprise a évolué au fil des années,
                 façonnée par un engagement constant envers l'excellence et la satisfaction de nos clients.
Au départ, nous avons identifié un besoin croissant sur le marché pour des solutions innovantes dans le domaine de l'ingénerie informatique. 
Forts de cette vision, nous avons rassemblé une équipe talentueuse de professionnels partageant les mêmes idées, déterminés à repousser les limites de ce qui est possible.
Les premières années ont été marquées par des défis stimulants, mais aussi par des réussites significatives. Nous avons rapidement acquis la réputation
 d'innovateurs dans le domaine, en fournissant des produits et des services qui dépassent les attentes de nos clients.
Aujourd'hui, nous sommes fiers de notre parcours, de la croissance constante de notre entreprise et des relations solides
 que nous avons établies avec nos clients et partenaires. Notre engagement envers la qualité, l'éthique et la créativité continue de guider
  chacune de nos actions. Nous considérons notre histoire comme un chapitre en constante évolution, avec de nouvelles opportunités et défis qui nous attendent. 
Nous sommes impatients de partager ce voyage avec vous et de façonner ensemble l'avenir de notre entreprise et de l'industrie.</p>
<div className='mb-5'></div>
          
        </div>
    </div>

    


</div>
  )
}

export default About;
