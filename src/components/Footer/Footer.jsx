import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-800">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-4 gap-6">
        
        {/* Get In Touch */}
        <div>
          <h3 className="font-bold mb-3 text-xl">Get In Touch</h3>
          <ul className="space-y-2 font-semibold text-xs">
            <li><a href="#" className="hover:underline">Contact Us</a> | <a href="#" className="hover:underline">Email Us</a></li>
          </ul>
          <div className="flex gap-3 mt-3">
            <Facebook size={18} />
            <Instagram size={18} />
            <Twitter size={18} />
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-bold mb-3 text-xl">Company info</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline font-semibold text-xs">About Us</a></li>
            <li><a href="#" className="hover:underline font-semibold text-xs">Carrier</a></li>
            <li><a href="#" className="hover:underline font-semibold text-xs">We are hiring</a></li>
            <li><a href="#" className="hover:underline font-semibold text-xs">Blog</a></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-bold mb-3 text-xl">Features</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline font-semibold text-xs">Business Marketing</a></li>
            <li><a href="#" className="hover:underline font-semibold text-xs">User Analytic</a></li>
            <li><a href="#" className="hover:underline font-semibold text-xs">Live Chat</a></li>
            <li><a href="#" className="hover:underline font-semibold text-xs">Unlimited Support</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold mb-3 text-xl">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline font-semibold text-xs">IOS & Android</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-600 py-4 border-t">
        &copy; 2025 Umoja Gas Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
