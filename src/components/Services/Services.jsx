import React from "react";

const Services = () => {
  return (
    <section className="py-16 px-8 md:px-16 lg:px-80 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Services</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2"></div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Left Box: Strategic Investment */}
        <div className="bg-gray-200 p-8 rounded-lg flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h3 className="text-lg font-bold text-primary border-b-2 inline-block">Strategic Investment</h3>
            <p className="text-gray-700 mt-2 text-sm">
              We focus on strategic directions with great potential and offer
              management, financial, and operational support to our portfolio
              companies.
            </p>
          </div>
        </div>

        {/* Right Box: Financial Investment */}
        <div className="bg-gray-200 p-8 rounded-lg flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h3 className="text-lg font-bold text-primary border-b-2 inline-block">
              Financial Investment
            </h3>
            <p className="text-gray-700 mt-2 text-sm">
              We provide comprehensive investment solutions, including angel
              investment, venture capital, and private equity, across the full
              lifecycle of businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
