import React from "react";
import cardImage from "/how-it-works.png"; // Update this path based on where you saved the image

const HowItWorks = () => {
  return (
    <section className="bg-[#f9f8ff] py-16 text-center text-gray-900 font-poppins">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Underline */}
        <div className="w-12 h-1 mx-auto mb-4 rounded-full"
            style={{ backgroundImage: "linear-gradient(to right, #F76680, #57007B)" }}
        ></div>
        {/* Title */}
        <h2 className="text-3xl md:text-4xl mb-2">
          How It <span className="font-bold">Works</span>
        </h2>

        

        {/* Image of the Cards */}
        <div className="">
          <img
            src={cardImage}
            alt="How it works cards"
            className="w-full max-w-6xl mx-auto"
          />
          {/* Footer Description */}
        <p className="text-sm sm:text-base text-gray-500 max-w-6xl mx-auto ">
          Umoja Gas brings safe, high-quality LPG cylinders straight to you — fast, friendly, and on time.
        </p>
        </div>

        
      </div>
    </section>
  );
};

export default HowItWorks;
