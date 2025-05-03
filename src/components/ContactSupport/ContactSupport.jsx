import React, { useRef, useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import emailjs from "@emailjs/browser";

const ContactSupport = () => {
  const formRef = useRef();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nctwyzr",
        "template_36xq2uk",
        formRef.current,
        "oobQZLsNAxb8Yck8T"
      )
      .then(
        () => {
          setSuccessMsg("✅ Message sent successfully!");
          setErrorMsg("");
          formRef.current.reset();
        },
        () => {
          setErrorMsg("❌ Failed to send message. Please try again.");
          setSuccessMsg("");
        }
      );
  };

  useEffect(() => {
    if (successMsg || errorMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg("");
        setErrorMsg("");
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [successMsg, errorMsg]);

  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-5xl w-full bg-white p-10">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Contact & Support</h2>
            <p className="text-gray-600 mt-2">
              We're here to assist you. Whether it's inquiries, consultations, <br />
              or support, don't hesitate to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left - Form */}
            <div className="bg-gray-100 p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch with Us</h3>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium">Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@company.com"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+27 00 000 0000"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Message *</label>
                  <textarea
                    name="message"
                    placeholder="Leave us a Message"
                    rows="4"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                    required
                  ></textarea>
                </div>

                {/* Success or Error Message */}
                {successMsg && (
                  <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                    {successMsg}
                  </div>
                )}
                {errorMsg && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold p-3 rounded transition"
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
                <a href="tel:+27646171806" className="font-bold underline">
                  +27 (64) 617–1806
                </a>
              </div>

              <hr className="border-gray-300 mb-4" />

              <div className="mb-6">
                <p className="font-semibold text-gray-800 mb-1">Email Support</p>
                <p className="text-sm text-gray-700 mb-1">
                  Email us & we will get back to you within 24 hours
                </p>
                <a href="mailto:info@umojagas.co.za" className="font-bold underline">
                  info@umojagas.co.za
                </a>
              </div>

              <hr className="border-gray-300" />
              <div className="mb-6">
                <p className="font-semibold text-gray-800 mb-1">Working Hours</p>
                <span className="font-bold">Mon-Sat | 7AM-7PM</span>
              </div>
              <hr className="border-gray-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full">
        <div className="h-[350px] w-full">
          <img
            src="/Joburg-map.png"
            alt="Johannesburg Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
