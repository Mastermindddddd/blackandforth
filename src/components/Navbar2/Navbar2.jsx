import React, { useState } from "react";
import Logo from "/foundation-logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "#about" },
  { id: 3, name: "Information", link: "#info" },
  { id: 4, name: "Services", link: "#services" },
  { id: 5, name: "Contact", link: "#contact-us" },
];

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling with offset
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    setIsOpen(false); // Close mobile menu after clicking

    if (!targetId.startsWith("#")) {
      // If it's an actual page route, navigate normally
      window.location.href = targetId;
      return;
    }

    const target = document.querySelector(targetId);
    if (target) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const offsetTop = target.offsetTop - navbarHeight - 10;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="navbar shadow-md fixed w-full bg-white z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo section */}
        <div data-aos="fade-down" data-aos-once="true">
          <a href="/" className="font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider">
            <img src={Logo} alt="Logo" className="w-24 sm:w-28 h-auto" />
          </a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-4">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                onClick={(e) => handleScroll(e, menu.link)}
                className="text-md py-2 px-4 text-gray-900 duration-200 cursor-pointer"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white shadow-md absolute w-full left-0 top-14 py-2 px-6">
          <ul className="flex flex-col items-start gap-2">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  onClick={(e) => handleScroll(e, menu.link)}
                  className="block text-md py-2 text-gray-900 w-full"
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
