import React from "react";

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center py-20 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">Our Clients and Partners</h2>
      <div className="w-16 h-1 bg-yellow-500 mt-2 mb-8"></div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Testimonial Image 1 */}
        <div className="w-80 md:w-96">
          <img
            src="/smh_12.png"
            loading="lazy"
            alt="Testimonial 1"
            className="w-full h-auto"
          />
        </div>
        
        {/* Testimonial Image 2 */}
        <div className="w-80 md:w-96">
          <img
            src="/smh_13.png"
            loading="lazy"
            alt="Testimonial 2"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
