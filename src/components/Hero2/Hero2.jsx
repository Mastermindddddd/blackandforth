import React from "react";
import HeroBg from "../../assets/website/hero2.jpg";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center sm:justify-start bg-cover bg-center px-4 sm:px-6 md:px-16 lg:px-24"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="max-w-2xl text-center sm:text-left p-6 sm:p-8 rounded-lg">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
          Eliashib Foundation
        </h1>
        <div className="mt-8 sm:mt-12">
          <a href="#contact-us">
            <button className="px-6 py-3 bg-secondary text-white font-semibold text-md rounded-full shadow-lg transition-transform transform hover:scale-105">
            Contact Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
