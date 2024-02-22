import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationHomePage from "./views/HomePage";
import About from "./views/About";

const ApplicationRoutes = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/univsoft-website/" element={ <ApplicationHomePage /> } />
                <Route path="/univsoft-website/about/" element={ <About /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default ApplicationRoutes;