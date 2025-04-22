import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#f6f8fb] text-gray-900 font-poppins">
      <div className="container max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12 ">
        {/* Left Contact Info */}
        <div className="md:w-1/2">
          <h3 className="text-lg font-semibold mb-2">💬 Stay Connected</h3>
          <p className="text-gray-700 mb-6">
            Follow us on social media for updates, promotions, and launch news:
          </p>

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
        </div>

        {/* Right Contact Form */}
        <div className="md:w-1/2 bg-white border border-gray-500 p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border rounded px-3 py-2"
            />
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full border rounded px-3 py-2"
            ></textarea>
            <button
              type="submit"
              className="bg-[#f77b5e] hover:bg-[#f96644] text-white font-semibold px-6 py-2 rounded-full"
            >
              Proceed
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <p>© 2025 Umoja Gas. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
