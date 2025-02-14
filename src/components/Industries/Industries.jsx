import React from "react";

const industry = [
  { title: "Technology", description: "Focused on FinTech, AgriTech, and HealthTech innovations with high impact." },
  { title: "Raise Capital", description: "Driving infrastructure development in Africa, contributing to residential and commercial spaces." },
  { title: "Healthcare", description: "Enhancing healthcare service delivery across Africa with technological advancements." },
  { title: "Energy & Gas", description: "Providing cleaner, efficient and affordable energy solutions to address power shortages." },
  { title: "Mining", description: "Specializing in exploration, beneficiation, and marketing of commodities like chrome and coal, iron, manganese, REEs, heavy sands, and base metals." }
];

const Industries = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-16 px-6" style={{ backgroundImage: "url('/industries.jpeg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-white text-3xl font-bold">Industries We Serve</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {industry.map((industry, index) => (
          <div key={index} className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg border border-white border-opacity-50 text-center text-white">
            <h3 className="text-lg font-semibold">{industry.title}</h3>
            <p className="text-sm mt-2">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Industries;
