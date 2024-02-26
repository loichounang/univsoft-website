import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner } from 'react-bootstrap';
import ApplicationHomePage from "./views/HomePage";
import About from "./views/About";
import './style.css';
import Navbar from '../src/components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import Service from "./views/Service";
import Contact from "./views/Contact";
import Solutions from "./views/Solutions";
import BackToTop from "./components/backtotop/BackToTop";


const ApplicationRoutes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulez une opération asynchrone (par exemple, chargement de données)
    const loadData = async () => {
      // Supprimez le spinner après le délai simulé (3000 ms dans cet exemple)
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    loadData();
  }, []);

  


  return (

    <>
    <Navbar/>
    <BrowserRouter>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner variant="primary" animation="border" role="status" style={{ width: '5rem', height: '5rem' }}>
          <span className="sr-only">univsoft...</span>
        </Spinner>
      </div>
      
      ) : (
        <Routes>
          {/** Route Primaire de l'application*/}
          <Route path="/univsoft-website/" element={<ApplicationHomePage />} />
  
          {/** Routes Particulières */}
          <Route path="/univsoft-website/services/" element={<Service/>} />
          <Route path="/univsoft-website/solutions/"  element={<Solutions/>}/>
          <Route path="/univsoft-website/apropos/" element={<About/>}/>
          <Route path="/univsoft-website/contact/" element={<Contact/>}/>
        </Routes>
      )}
    </BrowserRouter>
    <BackToTop/>
    <Footer/>
  </>
  );
};


  

export default ApplicationRoutes;
