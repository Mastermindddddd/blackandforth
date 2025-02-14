import React from "react";

const ServicesSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 md:px-12 bg-gray-100 flex flex-col items-center">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800">Our Services</h2>
      <div className="w-16 sm:w-24 border-b-4 border-primary my-4"></div>
      
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Service Cards */}
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img src={service.image} alt={service.title} className="w-full sm:w-3/5 md:w-1/3 rounded-lg" />
            <div className="md:ml-6 md:mr-6 mt-6 md:mt-0 text-center md:text-left px-4 sm:px-10">
              <h3 className="text-lg sm:text-xl font-bold">{service.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const services = [
  {
    title: "Training and Development",
    image: "/training.jpeg",
    description:
      "The advent of technology is transforming workplaces, necessitating the continuous acquisition of relevant skills. Our approach focuses on developing highly sought-after and in-demand skills with industry-agnostic applicability.",
  },
  {
    title: "Coaching and Mentorship",
    image: "/coaching.jpeg",
    description:
      "Mentorship and coaching are critical for individual and business growth. Our programs cater to entrepreneurs, providing technical assistance, and to organizations, fostering team cohesion and productivity.",
  },
  {
    title: "Entrepreneurship Development",
    image: "/entrepreneurship.jpeg",
    description:
      "We facilitate the establishment of thriving enterprises that generate employment, create competitive products and services, and possess the competency to compete globally.",
  },
];

export default ServicesSection;
