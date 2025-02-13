import React from "react";
import Navbar2 from "../components/Navbar2/Navbar2";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import Hero2 from "../components/Hero2/Hero2.jsx";
import Introduction from "../components/Introduction/Introduction.jsx";
import AboutUs2 from "../components/AboutUs2/AboutUs2.jsx";
import InfoCards from "../components/InfoCards/InfoCards.jsx";
import ServicesSection from "../components/Services2/Services2.jsx";

const Foundation = () => {
  return (
    <div>
        <Navbar2 />
      <section id="home.." className="pt-18">
        <Hero2 />
      </section>
      <section id="introduction" className="pt-18">
        <Introduction />
      </section>
      <section id="about.." className="pt-18">
        <AboutUs2 />
      </section>
      <section id="info.." className="pt-18">
        <InfoCards />
      </section>
      <section id="services.." className="pt-18">
        <ServicesSection />
      </section>
      <section id="contact-us.." className="pt-18">
        <ContactForm />
      </section>
    </div>
  );
};

export default Foundation;
