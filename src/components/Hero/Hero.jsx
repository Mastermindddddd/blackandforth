import React from "react";
import HeroBg from "../../assets/website/hero.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col sm:flex-row items-center justify-center sm:justify-start bg-cover bg-center px-4 md:px-10 lg:px-24 py-12 sm:py-20"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="max-w-2xl p-6 sm:p-10 rounded-lg text-center sm:text-left">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary leading-tight">
          Welcome to <br />
          <span className="text-secondary">Eliashib Group</span>
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-gray-800 mt-4">
          Your trusted partner in <strong>strategic</strong> investments and{" "}
          <strong>innovative</strong> solutions across multiple sectors. We are committed to sustainable{" "}
          <strong>growth</strong>, leveraging our expertise to <strong>empower</strong> businesses and drive value.
        </p>

        <div className="mt-6">
          <Link to="/foundation">
            <button className="px-5 sm:px-6 py-2 sm:py-3 bg-secondary text-white font-semibold text-md sm:text-lg rounded-full shadow-lg transition-transform transform hover:scale-105">
              Foundation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
