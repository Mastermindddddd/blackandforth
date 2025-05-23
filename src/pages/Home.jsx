import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero.jsx";
import AboutUs from "../components/AboutUs/AboutUs.jsx";
import GuidingPrinciples from "../components/GuidingPrinciples/GuidingPrinciples.jsx";
import ContactUs from "../components/Contact-Us/Contact-Us.jsx";
import WhyUmojaGas from "../components/WhyUmojaGas/WhyUmojaGas.jsx";
import HowItWorks from "../components/HowItWorks/HowItWorks.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <section id="about-us" className="pt-18">
        <AboutUs />
      </section>
      <section id="why-us" className="pt-18">
        <WhyUmojaGas />
      </section>
      <section id="How-it-works" className="pt-18">
        <HowItWorks />
      </section>
      <section id="principles" className="pt-18">
        <GuidingPrinciples />
      </section>
      <section id="contact-us" className="pt-18">
        <ContactUs />
      </section>
    </div>
  );
};


export default Home;