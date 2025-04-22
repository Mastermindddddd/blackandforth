import React from "react";
import Navbar from "../Navbar/Navbar";

const ContactSupport = () => {
  return (
    <div>
      <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-5xl w-full bg-white p-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Contact & Support</h2>
          <p className="text-gray-600 mt-2">
            We're here to assist you. Whether it's inquiries, consultations, <br/>or support, 
            don't hesitate to reach out.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Form */}
          <div className="bg-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch with Us</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name *</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email *</label>
                <input 
                  type="email" 
                  placeholder="example@company.com" 
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Phone Number *</label>
                <input 
                  type="tel" 
                  placeholder="+27 00 000 0000" 
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Message *</label>
                <textarea 
                  placeholder="Leave us a Message" 
                  rows="4" 
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-orange-500 text-white font-semibold p-3 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="flex flex-col space-y-6 mt-6">
          <hr className="border-gray-300 mb-4" />

          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-1">Call Us</p>
              <a
                href="tel:+27646171806"
                className="font-bold underline"
              >
                +27 (64) 617–1806
              </a>
          </div>

          <hr className="border-gray-300 mb-4" />

          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-1">Email Support</p>
            <p className="text-sm text-gray-700 mb-1">
              Email us & we will get back to you within 24 hours
            </p>
              <a
                href="mailto:lorempitsusum@gmail.com"
                className="font-bold underline"
              >
                info@umojagas.co.za
              </a>
          </div>

          <hr className="border-gray-300" />
          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-1">Email Support</p>
              <a
                href="mailto:lorempitsusum@gmail.com"
                className="font-bold underline"
              >
                Mon-Sat | 7AM-7PM
              </a>
          </div>
          <hr className="border-gray-300" />
          </div>
        </div>
      </div>
    </div>
    <div className="w-full">
      {/* Map Image Section */}
      <div className="h-[350px] w-full">
        <img
          src="/Joburg-map.png" // Change this to the correct path
          alt="Johannesburg Map"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
    </div>
  );
};

export default ContactSupport;
