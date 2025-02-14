import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = "https://script.google.com/macros/s/AKfycbx29Rk8YK4HNbYnOb6-Gjmlv7THN7OxWoC4X33zi4q3xWfsAhLpa0ad-Z0GdCOqLZ-x/exec"
    fetch(url,{
      method:"POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body:(`Name=${e.target.name.value}&LastName=${e.target.lastname.value}&Email=${e.target.email.value}&Message=${e.target.message.value}`)
    }).then(res=>res.text()).then(data=>{
      alert(data)
    }).catch(error=>console.log(error))
  }
  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center justify-center p-12">
      {/* Contact Info Section */}
      <div className="bg-white text-black p-14 rounded-lg shadow-lg w-full md:w-1/2 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-2">Address: Cnr Northumberland & Felstead Avenue, Fancourt Office Park, Building 3, 1st Floor, North Riding, 2188</p>
        <p className="text-gray-700 mb-2">Phone: +27 10-023-6518</p>
        <p className="text-gray-700 mb-4">Email: info@eliashibgroup.com</p>
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-black text-lg"><FaFacebookF /></a>
          <a href="#" className="text-black text-lg"><FaTwitter /></a>
          <a href="#" className="text-black text-lg"><FaLinkedinIn /></a>
          <a href="#" className="text-black text-lg"><FaInstagram /></a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 max-w-lg md:ml-8 mt-8 md:mt-0">
        <form onSubmit={handleSubmit} className="bg-black p-6">
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm mb-1">First Name</label>
              <input type="text" name="name" className="w-full border border-white bg-black text-white p-2" />
            </div>
            <div className="w-1/2">
              <label className="block text-sm mb-1">Last Name</label>
              <input type="text" name="lastname" className="w-full border border-white bg-black text-white p-2" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Email *</label>
            <input type="email" name="email" className="w-full border border-white bg-black text-white p-2" />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" className="w-full border border-white bg-black text-white p-2 h-24"></textarea>
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
