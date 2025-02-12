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
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="industries">
        <Industries />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;