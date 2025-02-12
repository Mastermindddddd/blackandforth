import React from "react";
import HeroBg from "../../assets/website/hero2.jpg";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center px-6 md:px-16 lg:px-24"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="max-w-2xl text-left bg-opacity-80 p-6 rounded-lg mt-[-80px] ml-40">
        <h1 className="text-2xl md:text-6xl font-bold text-primary leading-tight">
          Eliashib Foundation
        </h1>
          <button className="mt-12 px-6 py-3 bg-secondary text-white font-semibold text-md rounded-full shadow-lg transition-transform transform hover:scale-105">
            Contact Us
          </button>
      </div>
    </section>
  );
};

export default Hero2;


