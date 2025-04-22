import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero.jsx";
import AboutUs from "../components/AboutUs/AboutUs.jsx";
import GuidingPrinciples from "../components/GuidingPrinciples/GuidingPrinciples.jsx";
import ContactUs from "../components/Contact-Us/Contact-Us.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <section id="about-us" className="pt-18">
        <AboutUs />
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