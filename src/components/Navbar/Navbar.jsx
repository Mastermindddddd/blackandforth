import React from "react";
import Logo from "../../assets/website/logo.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Foundation",
    link: "/foundation",
  },
  {
    id: 3,
    name: "About Us",
    link: "#about",
  },
  {
    id: 4,
    name: "Services",
    link: "#services",
  },
  {
    id: 5,
    name: "Industries",
    link: "#industries",
  },
  {
    id: 6,
    name: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md fixed w-full bg-white z-50 py-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-6">
          {/* Logo section */}
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="#home"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="Logo" className="w-20" />
            </a>
          </div>

          {/* Link section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block text-md py-2 px-4 text-gray-900 duration-200 scroll-smooth"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;