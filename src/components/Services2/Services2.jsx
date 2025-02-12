import React from "react";

const ServicesSection = () => {
    return (
      <div className="py-12 px-6 bg-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-center text-2xl font-bold text-gray-800">Our Services</h2>
        <div className="w-24 border-b-4 border-primary my-2 mb-8"></div>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Training and Development */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center">
            <img src="/training.jpg" alt="Training" className="w-full md:w-1/3 rounded-lg" />
            <div className="md:ml-6 mt-4 md:mt-0 px-20">
                <h3 className="text-xl font-bold">Training and Development</h3>
                <p className="text-gray-700 text-sm mt-2">
                The advent of technology is transforming workplaces, necessitating the continuous 
                acquisition of relevant skills. The demand for skills development and upskilling 
                is undeniable. However, our approach focuses on developing not only essential skills
                but also highly sought-after and in-demand skills. Our guiding principles for skills
                development solutions are relevance, industry-agnostic applicability, and practicality.
                </p>
            </div>
          </div>
          
          {/* Coaching and Mentorship */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center md:flex-row-reverse">
            <img src="/coaching.jpg" alt="Coaching" className="w-full md:w-1/3 rounded-lg" />
            <div className="md:mr-6 mt-4 md:mt-0 px-20">
              <h3 className="text-xl font-bold">Coaching and Mentorship</h3>
              <p className="text-gray-700 text-sm mt-2">
                Research has demonstrated the significant impact of consistent mentorship and coaching on
                individual and group growth and transformation. Our mentorship and coaching programs cater
                to two distinct segments:<br/><br/>Entrepreneurs face numerous challenges in launching and 
                scaling businesses. Mentorship, which provides technical assistance, can mitigate these challenges.
                Coaching is specifically designed for startup founders and managers, who play pivotal roles in business growth.
                <br/><br/>Organizations often encounter difficulties in achieving organizational cohesion, which negatively 
                impacts productivity. Group coaching is a widely adopted approach to foster team cohesion and enhance performance
              </p>
            </div>
          </div>
          
          {/* Entrepreneurship Development */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center">
            <img src="/entrepreneurship.jpg" alt="Entrepreneurship" className="w-full md:w-1/3 rounded-lg" />
            <div className="md:ml-6 mt-4 md:mt-0 px-20">
              <h3 className="text-xl font-bold">Entrepreneurship Development</h3>
              <p className="text-gray-700 text-sm mt-2">
              Our approach to entrepreneurship development seeks to facilitate the establishment of thriving 
              enterprises that can generate employment, create competitive products and services, and possess 
              the competency to compete globally. 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServicesSection;
  