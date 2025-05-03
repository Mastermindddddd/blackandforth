import React from "react";

const AboutUs = () => {
  return (
    <section className="mb-12">
      <div className="mx-auto">
        {/* Title + Subtitle with White Background */}
        <div className="bg-white py-10 px-6 mb-12">
          <div className="text-center mt-6">
          <div
            className="w-16 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r"
            style={{ backgroundImage: "linear-gradient(to right, #F76680, #57007B)" }}
          ></div>

            <h2 className="text-3xl md:text-4xl font-poppins text-gray-900">
              About <span className="text-black font-bold">US</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-center text-gray-500 max-w-4xl mx-auto mt-6 font-poppins text-md leading-relaxed text-justify">
          Reliable LPG Delivery, Right to Your Doorstep. Whether you’re a homeowner, restaurant, hotel, hospital, or business, Umoja Gas brings safe, high-quality LPG cylinders straight to you- fast, friendly, and on time.
          </p>
        </div>

        {/* Image for the cards */}
        <div className="bg-gray-100 py-16">
        <div className="flex justify-center">
          <img
            src="/cards.png"
            alt="Gas Services Cards"
            className="w-full max-w-5xl"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
