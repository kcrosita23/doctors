import React, { useState } from "react";
import logo from "../assets/doc-logo.png";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/#home" },
    { name: "About", to: "/#about" },
    { name: "Surgical Interventions", to: "/#interventions" },
    { name: "Contact Us", to: "/#contact", isButton: true },
  ];

    return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-sky-500 
                    bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] shadow-md">
      <div className="flex justify-between items-center py-4 px-4 md:px-8">
        
        <div className="flex items-center">
          <img className="w-40 md:w-64 h-auto" src={logo} alt="logo" />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-4 items-center text-lg">
          {navItems.map((item) =>
            item.isButton ? (
              <li key={item.name}>
                <HashLink smooth to={item.to} onClick={() => setIsOpen(false)} 
                  className="px-2 py-2 bg-gray-800 text-white rounded-md 
                  hover:bg-black transition duration-300 transform hover:-translate-y-1 hover:scale-105 
                  shadow-md hover:shadow-lg">
                  {item.name}
                </HashLink>
              </li>
            ) : (
              <li key={item.name}>
                <HashLink smooth to={item.to} onClick={() => setIsOpen(false)}
                  className="text-white hover:text-black transition duration-300">
                  {item.name}
                </HashLink>
              </li>
            )
          )}
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-lg">
            {navItems.map((item) =>
              item.isButton ? (
                <li key={item.name}>
                  <HashLink smooth to={item.to} onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-2 py-2 bg-gray-800 text-white rounded-md 
                            hover:bg-black transition duration-300 transform hover:-translate-y-1 hover:scale-105
                            shadow-md hover:shadow-lg">
                    {item.name}
                  </HashLink>
                </li>
              ) : (
                <li key={item.name}>
                  <HashLink smooth to={item.to} onClick={() => setIsOpen(false)}
                    className="text-white hover:text-black transition duration-300 block">
                    {item.name}
                  </HashLink>
                </li>
              ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;