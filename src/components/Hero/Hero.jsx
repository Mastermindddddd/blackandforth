import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat md:bg-cover bg-cover"
        style={{
          backgroundImage: "url('/Landing-Page.webp')",
          backgroundPosition: "center center",
        }}
      ></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 sm:px-10 md:px-16">
        <div className="bg-black bg-opacity-20 rounded-md p-6 sm:p-10 md:p-14 w-full max-w-md sm:max-w-xl md:max-w-xl z-10 text-white font-extrabold leading-snug mt-10 md:mt-24 md:ml-20 text-center md:text-left">
          <p className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[42px] font-extrabold">
            Welcome to Umoja Gas - Your trusted <br/>LPG Delivery Partner
          </p>
          <Link
            to="/contact-us"
            className="inline-block mt-10 sm:mt-14 md:mt-20 bg-orange-400 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-3 rounded-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
