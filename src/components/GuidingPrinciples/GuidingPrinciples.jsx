import React from "react";
import { Link } from "react-router-dom";

const GuidingPrinciples = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16 lg:px-32">
      {/* Heading */}
      <div className="text-center mb-20">
        <div
          className="w-16 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r"
          style={{ backgroundImage: "linear-gradient(to right, #F76680, #57007B)" }}
        ></div>
        <h2 className="text-2xl md:text-3xl text-gray-900 font-poppins">
          OUR GUIDING <span className="font-bold text-black">PRINCIPLES</span>
        </h2>
      </div>

      {/* Main Container */}
<div className="max-w-5xl mx-auto px-4 text-left">
  {/* Image for Alert Box */}
  <Link to="contact-us">
    <div className="flex justify-center mb-12">
      <img
        src="/Group 79.png"
        alt="Need Gas Now - Alert Box"
        className="w-full rounded-xl shadow"
      />
    </div>
  </Link>

  {/* Principle Section */}
  <div className="mt-20">
    {/* Title with Fire Icon */}
    <div
      className="w-16 h-1 mb-6 rounded-full bg-gradient-to-r"
      style={{ backgroundImage: "linear-gradient(to right, #F76680, #57007B)" }}
    ></div>
    <div className="flex items-center space-x-2 mb-2">
      <span className="text-xl">🔥</span>
      <h3 className="text-md font-semibold text-gray-800 font-poppins">
        Fueling Your Everyday Life
      </h3>
    </div>
  </div>


        {/* Description */}
        <p className="text-gray-700 font-poppins">
          From small homes to big hotels — we deliver clean energy with care, speed, and professionalism.
        </p>
      </div>
    </div>
  );
};

export default GuidingPrinciples;
