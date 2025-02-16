import React from "react";
import AboutImg from "../../assets/website/growth.webp"; // Replace with your actual About Us image path
import FullWidthImg from "../../assets/website/banner.webp"; // Replace with the uploaded image path

const AboutUs = () => {
  return (
    <div>
      {/* About Us Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Us
            </h2>
            <div className="w-28 h-1 bg-yellow-500 mx-auto mt-2"></div>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text */}
            <div className="text-gray-800">
              <p className="text-md leading-relaxed">
                Eliashib Group is a diversified company dedicated to providing bespoke investment 
                solutions tailored to the specific needs of leading-edge and customized solutions 
                across various sectors. Through strategic foresight and value-creation services, we 
                strive to foster long-term growth that generates sustainable results that transcend 
                economic boundaries.
              </p>
              <p className="text-md leading-relaxed mt-4">
                In an economy where traditional solutions have become restrictive, we bring strategic 
                creativity and innovation, thereby fostering perpetual growth. Our primary focus is on 
                value creation and sustainability.
              </p>

              {/* Vision & Mission */}
              <div className="mt-6">
                <h3 className="font-bold text-gray-900">Our Vision</h3>
                <p className="text-md">To become a globally recognized and respected holding company with strategic investments.</p>
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-gray-900">Our Mission</h3>
                <p className="text-md">
                  To deliver exceptional value through strategic investments, financial support, and 
                  innovative management solutions that empower businesses to thrive, with a core focus 
                  on mutual beneficiation.
                </p>
              </div>

              {/* Core Values */}
              <div className="mt-6">
                <h3 className="font-bold text-gray-900">Core Values</h3>
                <ul className="text-md space-y-2 mt-2">
                  <li>
                    <strong className="text-gray-900">Performance:</strong> We are committed to articulating foresight insights into high-performance outcomes.
                  </li>
                  <li>
                    <strong className="text-gray-900">Passion:</strong> We are passionate about our work, and this passion is evident in our approach to every engagement.
                  </li>
                  <li>
                    <strong className="text-gray-900">Diversity:</strong> Our mutual beautification imperative necessitates us to maintain high levels of integrity, professionalism, and excellence.
                  </li>
                  <li>
                    <strong className="text-gray-900">Integrity:</strong> We are honest, open, and ethical in all our dealings.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side: Larger Image */}
            <div className="flex justify-center">
              <div className="bg-white p-4 shadow-lg rounded-lg">
                <img
                  src={AboutImg}
                  loading="lazy"
                  alt="About Us"
                  className="rounded-lg w-full md:w-[110%] lg:w-[120%] transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Image Section (Below About Us) */}
      <section className="w-full">
        <img
          src={FullWidthImg} // Replace with the uploaded image path
          loading="lazy"
          alt="Company Banner"
          className="w-full object-cover"
        />
      </section>
    </div>
  );
};

export default AboutUs;
