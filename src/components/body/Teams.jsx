import React from 'react'
import '../body/teams.css';
import f from '../../assets/images/f.jpg';
import s from '../../assets/images/s.jpg';
import t from '../../assets/images/t.jpg';
import profil from '../../assets/images/profil.jpg';

function Teams() {
  return (
    <section id='teams'>
        <div className="container">
            <div className="col-md-12 text-center">
                <h2 className='text-center mt-3 fw-bold'  style={{color:'#3464AE'}}>Notre Equipes</h2>
                <hr className='text-dark fw-bold' style={{width:'200px',margin:'15px auto', height:'5px !important'}}/>
                <p className='text-center  fw-bold' style={{color:'#ADADAC'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente veritatis incidunt ipsa officiis, at labore odit blanditiis adipisci magnam autem hic quisquam eius. Repellat labore officia suscipit. Minus, eligendi.</p>

            </div>
            <div className="row text-center mt-5">
                <div className="col-lg-3">
                    <div className="box my-5">
                        <img className='rounded-circle' src={profil} alt='...' />
                        <h4 className='mb-4'>Hounang Loic</h4>
                        <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sed sunt consequuntur assumenda explicabo consequatur quaerat, non saepe vel cupiditate veniam cumque neque possimus maxime nulla pariatur quos tempore recusandae?</p>
                        <div className="social-icons">
                        <i class="bi bi-facebook fs-5"></i>
                        <i class="bi bi-whatsapp fs-5"></i>
                        <i class="bi bi-linkedin fs-5"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="box my-5">
                        <img className='rounded-circle' src={profil} alt='...' />
                        <h4 className='mb-4'>Hounang Loic</h4>
                        <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sed sunt consequuntur assumenda explicabo consequatur quaerat, non saepe vel cupiditate veniam cumque neque possimus maxime nulla pariatur quos tempore recusandae?</p>
                        <div className="social-icons">
                        <i class="bi bi-facebook fs-5"></i>
                        <i class="bi bi-whatsapp fs-5"></i>
                        <i class="bi bi-linkedin fs-5"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="box my-5">
                        <img className='rounded-circle' src={profil} alt='...' />
                        <h4 className='mb-4'>Hounang Loic</h4>
                        <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sed sunt consequuntur assumenda explicabo consequatur quaerat, non saepe vel cupiditate veniam cumque neque possimus maxime nulla pariatur quos tempore recusandae?</p>
                        <div className="social-icons">
                        <i class="bi bi-facebook fs-5"></i>
                        <i class="bi bi-whatsapp fs-5"></i>
                        <i class="bi bi-linkedin fs-5"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="box my-5">
                        <img className='rounded-circle' src={profil} alt='...' />
                        <h4 className='mb-4'>Hounang Loic</h4>
                        <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sed sunt consequuntur assumenda explicabo consequatur quaerat, non saepe vel cupiditate veniam cumque neque possimus maxime nulla pariatur quos tempore recusandae?</p>
                        <div className="social-icons">
                        <i class="bi bi-facebook fs-5"></i>
                        <i class="bi bi-whatsapp fs-5"></i>
                        <i class="bi bi-linkedin fs-5"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Teams
