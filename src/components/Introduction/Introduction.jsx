import React from "react";

const Introduction = () => {
  return (
    <div className="w-full bg-white text-black">
      {/* Introduction Section */}
      <div className="flex flex-col items-center justify-center px-6 py-20">
        <h2 className="text-2xl font-bold text-center">Introduction</h2>
        <div className="w-24 border-b-4 border-primary my-2"></div>

        <div className="max-w-6xl text-center text-lg leading-relaxed mt-4">
          <p>
            A society’s full functionality necessitates the comprehensive addressing of 
             social, economic, and political factors in an effective manner. 
            Our communities are actively seeking effective solutions to transition from 
            survivalism to self-sufficiency. Numerous research endeavors have unequivocally 
            demonstrated the widespread and profound nature of social issues. To address 
            these social challenges, an integrated approach is paramount, requiring a deep 
            understanding of the underlying causes. Social development interventions
            must be grounded at the grassroots level and deeply embedded within the fabric of society.
          </p>

          <p className="mt-4">
            The economic landscape is undergoing a rapid transformation, leaving many families 
            and individuals behind. This disparity further hinders societies’ ability to derive 
            economic benefits. Numerous economic development programs have failed to yield the 
            anticipated outcomes, resulting in stagnant economic growth. We are witnessing escalating 
            levels of poverty and an increasing number of individuals being excluded 
            from the economy, whether through business ownership or formal employment.
          </p>
        </div>

        <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 transition duration-200">
          Contact Us For A Discovery Call
        </button>
      </div>

      {/* Full-width Banner Image */}
      <img 
        src="/banner.png" 
        alt="Invest in Growth Banner"
        className="w-full object-cover"
      />
    </div>
  );
};

export default Introduction;
