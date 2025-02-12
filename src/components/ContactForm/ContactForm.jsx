import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-black text-white flex justify-end p-12">
      <div className="w-full max-w-lg mr-8">
        <form className="bg-black p-6">
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm mb-1">First Name</label>
              <input type="text" className="w-full border border-white bg-black text-white p-2" />
            </div>
            <div className="w-1/2">
              <label className="block text-sm mb-1">Last Name</label>
              <input type="text" className="w-full border border-white bg-black text-white p-2" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Email *</label>
            <input type="email" className="w-full border border-white bg-black text-white p-2" />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Message</label>
            <textarea className="w-full border border-white bg-black text-white p-2 h-24"></textarea>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-white text-black px-6 py-2 rounded-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
