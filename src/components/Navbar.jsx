import React, { useState } from "react";
import logo from "../assets/doc-logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Surgical Interventions", href: "#interventions" },
    { name: "Contact Us", href: "#contact", isButton: true },
  ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-sky-500 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
                        shadow-md flex flex-col md:flex-row items-center justify-between py-6 px-4">
            <div className="flex flex-shrink-0 items-center mb-4 md:mb-0">
                <img 
                    className="mx-2 w-64 h-auto" 
                    src={logo} 
                    alt="logo" 
                />
            </div>
            <div className="flex items-center justify-center">
                <ul className="flex flex-wrap items-center justify-center gap-4 text-lg">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a 
                                href={item.href} 
                                className="text-white hover:text-black transition duration-300"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a 
                            href="#contact"
                            className="px-2  py-2 bg-gray-800 text-white rounded-md 
                                       hover:bg-sky-900 transition duration-300 
                                       transform hover:-translate-y-1 hover:scale-105 
                                       shadow-md hover:shadow-lg"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;