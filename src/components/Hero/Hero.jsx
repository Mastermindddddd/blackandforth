import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Landing-Page.png')" }}
      ></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-start px-12 md:px-16 ml-20 mt-24">
        <div className="bg-black bg-opacity-20 rounded-md p-14 max-w-2xl w-full z-10 text-white font-bold leading-snug">
          <p className="text-[32px] md:text-[38px]">
            🔧 Site Under Construction
          </p>
          <p className="text-[30px] md:text-[36px]">
            We're getting ready to serve<br />you better!
          </p>
          <Link
            to="/contact-us"
            className="inline-block mt-20 bg-orange-400 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-4 rounded-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
