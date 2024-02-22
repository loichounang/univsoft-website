import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/body/HeroSection";
import Apropos from "../components/body/Apropos";
import Services from "../components/body/Services";
import Solutions from "../components/body/Solutions";
import Teams from "../components/body/Teams";
import Partners from "../components/body/Partners";
import Footer from "../components/footer/Footer";

const ApplicationHomePage = () => {

    return (
        <div>
            <Navbar />
            <HeroSection/>
            <Apropos/>
            <Services/>
            <Solutions/>
            <Teams/>
            <Partners/>
            <Footer/>
        </div>
    );
};

export default ApplicationHomePage;