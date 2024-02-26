import React from "react";

import Apropos from "../components/body/Apropos";
import Services from "../components/body/Services";
import Solutions from "../components/body/Solutions";
import Partners from "../components/body/Partners";
import Contact from "../components/body/Contact";
import HeroSection from "../components/body/HeroSection";


const ApplicationHomePage = () => {

    return (
        <div>

            <HeroSection/>
            <Apropos/>
            <Services/>
            <Solutions/>
            <Partners/>
            <Contact/>
           
        </div>
    );
};

export default ApplicationHomePage;