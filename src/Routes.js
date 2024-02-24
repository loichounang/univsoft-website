import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Spinner } from 'react-bootstrap';
import ApplicationHomePage from "./views/HomePage";
import About from "./views/About";
import './style.css';
import Navbar from '../src/components/navbar/Navbar';
import Footer from "./components/footer/Footer";


const ApplicationRoutes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulez une opération asynchrone (par exemple, chargement de données)
    const loadData = async () => {
      // Supprimez le spinner après le délai simulé (3000 ms dans cet exemple)
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    loadData();
  }, []);

  return (
    <div>
      
      <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route
          path="/univsoft-website/"
          element={loading ? (
            <SpinnerContainer>
              <Spinner animation="border" role="status">
                <span className="sr-only">Univsoft</span>
              </Spinner>
            </SpinnerContainer>
          ) : (
            <TransitionGroup>
              <CSSTransition
                key="home"
                classNames="fade-enter"
                timeout={300}
              >
                <ApplicationHomePage />
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Route
          path="/univsoft-website/about/"
          element={loading ? (
            <SpinnerContainer>
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </SpinnerContainer>
          ) : (
            <TransitionGroup>
              <CSSTransition
                key="about"
                classNames="fade-enter"
                timeout={300}
              >
                <About />
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
};

const SpinnerContainer = () => (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner
        animation="border"
        role="status"
        style={{ width: '7rem', height: '7em', color: '#3464AE' }}
      />
    </div>
  );
  
  

export default ApplicationRoutes;
