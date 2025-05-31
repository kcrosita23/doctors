import React, { useState } from "react";
import logo from "../assets/oncology_logo.png";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", to: "/#home" },
    { name: "TEAM", to: "/#doctors"},
    { name: "ABOUT", to: "/#about" },
    { name: "SURGICAL INTERVENTIONS", to: "/#interventions" },
    { name: "CONTACT US", to: "/#contact", isButton: true },
  ];

    return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-sky-500 
                    bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] shadow-md">
      <div className="flex justify-between items-center py-4 px-9 md:px-40 ">
        
        <div className="flex items-start">
          <img className="w-80 md:w-30 h-15" src={logo} alt="logo" />
        </div>


        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-10 items-center text-lg font-thin">
          {navItems.map((item) =>
            item.isButton ? (
              <li key={item.name}>
                <HashLink smooth to={item.to} onClick={() => setIsOpen(false)} 
                  className="px-2 py-2 bg-sky-800 text-white rounded-md 
                  hover:bg-sky-500 hover:text-sky-800 transition duration-300 transform hover:-translate-y-1 hover:scale-105 
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