import React from "react";

const AboutUs2 = () => {
  return (
    <div className="w-full bg-gray-100 py-16 flex justify-center px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-5xl flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/AboutUs2.jpeg"
            alt="Professional Working"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            About Us
          </h2>
          <div className="w-16 sm:w-24 border-b-4 border-primary my-3 mx-auto md:mx-0"></div>

          <p className="text-gray-700 leading-relaxed mt-4">
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
