import React from "react";

const AboutUs2 = () => {
  return (
    <div className="w-full bg-gray-100 py-16 flex justify-center">
      <div className="max-w-5xl flex items-center space-x-10 px-6">
        {/* Left Side - Image */}
        <div className="w-1/2">
          <img
            src="/AboutUs2.jpg"
            alt="Professional Working"
            className="w-full shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-gray-900">About Us</h2>
          <div className="w-24 border-b-4 border-primary my-2 mb-8"></div>
          <p className="text-gray-700 leading-relaxed">
            The Eliashib Foundation is leveraging the technical expertise of its
            parent company and establishing strategic partnerships to create
            self-sustaining communities that possess technical competence,
            business acumen, and a strong community culture of unity.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Through this endeavor, we have embarked on a journey to pave the way
            for social and economic emancipation, effectively channeling our
            efforts and Foundation resources towards meaningful impact.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The Eliashib Foundation is uniquely positioned to address the
            critical needs of skills and entrepreneurship development within our
            communities. By leveraging our parent company’s technical expertise
            and strategic partnerships, we offer a comprehensive approach that
            ensures direct and tangible impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
