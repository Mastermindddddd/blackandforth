import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import Hero2 from "../components/Hero2/Hero2.jsx";
import Introduction from "../components/Introduction/Introduction.jsx";
import AboutUs2 from "../components/AboutUs2/AboutUs2.jsx";
import InfoCards from "../components/InfoCards/InfoCards.jsx";
import ServicesSection from "../components/Services2/Services2.jsx";

const Foundation = () => {
  return (
    <div>
       <Navbar />
       <Hero2 />
       <Introduction />
       <AboutUs2 />
       <InfoCards />
       <ServicesSection />
       <ContactForm />
    </div>
  );
};

export default Foundation;
