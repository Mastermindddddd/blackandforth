import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero.jsx";
import AboutUs from "../components/AboutUs/AboutUs.jsx";
import Services from "../components/Services/Services.jsx";
import Industries from "../components/Industries/Industries.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="about" className="pt-18">
        <AboutUs />
      </section>
      <section id="services" className="pt-18">
        <Services />
      </section>
      <section id="industries" className="pt-18">
        <Industries />
      </section>
      <section id="testimonials" className="pt-18">
        <Testimonials />
      </section>
      <section id="contact" className="pt-18">
        <ContactForm />
      </section>
    </div>
  );
};


export default Home;