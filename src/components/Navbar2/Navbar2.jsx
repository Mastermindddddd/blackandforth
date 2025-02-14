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

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    setIsOpen(false);

    if (!targetId.startsWith("#")) {
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
    <div className="navbar shadow-md fixed w-full bg-white z-50 h-14 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        <div data-aos="fade-down" data-aos-once="true">
          <a href="/" className="font-bold text-xl sm:text-2xl flex items-center gap-2 tracking-wider">
            <img src={Logo} alt="Logo" className="w-10 sm:w-14 h-auto" />
          </a>
        </div>

        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <ul className="hidden sm:flex items-center gap-4">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                onClick={(e) => handleScroll(e, menu.link)}
                className="text-md py-2 px-3 text-gray-900 duration-200 cursor-pointer"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

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