import React, {useState,useEffect} from 'react'
import './backtotop.css';

function BackToTop() {
    const[scrool,setScroll]= useState(0);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            setScroll(window.scrollY);
        });
        return()=>{
            window.removeEventListener('scroll',()=>{
                setScroll(window.scrollY);
            });
        }
    },[scrool]);
    const backToTop =() =>{
        window.scrollTo(0,0);
    }

  return (
    <a 
    onClick={backToTop}
    className={`back-to-top d-flex align-items-center justify-content-center ${scrool > 100 ? 'active' : undefined}`}
    >
        <i className='bi bi-arrow-up-short'></i>
    </a>
  )
}

export default BackToTop
