import React, { useState } from "react";
import Logo from "../../assets/website/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Foundation", link: "/foundation" },
  { id: 3, name: "About Us", link: "#about" },
  { id: 4, name: "Services", link: "#services" },
  { id: 5, name: "Industries", link: "#industries" },
  { id: 6, name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md fixed w-full bg-white z-50 py-2">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo section */}
        <div data-aos="fade-down" data-aos-once="true">
          <a href="#home" className="font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider">
            <img src={Logo} alt="Logo" className="w-16 sm:w-20" />
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
              <a href={menu.link} className="text-md py-2 px-4 text-gray-900 duration-200">
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
                  onClick={() => setIsOpen(false)}
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

export default Navbar;
