import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between h-[80px]">
        {/* Logo on the far left */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/umoja-gas-logo.webp"
            alt="Umoja Gas Logo"
            className="h-28 object-contain"
          />
        </Link>

        {/* Right side container for nav links and button */}
        <div className="flex items-center space-x-12 ml-auto">
          {/* Nav Links */}
          <ul className="hidden md:flex space-x-10 text-base text-gray-800 font-medium">
            <li>
              <HashLink smooth to="/" className="hover:text-blue-600">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about-us" className="hover:text-blue-600">
                About us
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#why-us" className="hover:text-blue-600">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#How-it-works" className="hover:text-blue-600">
                How it works
              </HashLink>
            </li>
          </ul>

          {/* Contact Us Button */}
          <Link
            to="/contact-us"
            className="px-5 py-2.5 bg-gradient-to-r from-orange-400 to-blue-500 text-white rounded-md text-base font-semibold hover:opacity-90"
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
