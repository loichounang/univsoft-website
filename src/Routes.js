import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationHomePage from "./views/HomePage";

const ApplicationRoutes = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/univsoft-website" element={ <ApplicationHomePage /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default ApplicationRoutes;