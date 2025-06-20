import { useState, useEffect } from "react";
import logo from "../assets/oncology_logo.png";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "HOME", to: "/#home" },
    { name: "TEAM", to: "/#doctors" },
    { name: "ABOUT US", to: "/#about" },
    { name: "SURGICAL INTERVENTIONS", to: "/#interventions" },
    { name: "CONTACT US", to: "/#contact", isButton: true },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        // xl breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-sky-500 
                    bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] 
                    shadow-md transition-transform duration-300 ease-in-out ${
                      isVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
    >
      <div className="flex justify-between items-center py-3 sm:py-4 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-20">
        <div className="flex items-center">
          <a href="/#home">
            <img
              className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-80 h-auto"
              src={logo || "/placeholder.svg"}
              alt="logo"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex gap-6 lg:gap-8 xl:gap-10 items-center text-lg xl:text-xl font-thin">
          {navItems.map((item) =>
            item.isButton ? (
              <li key={item.name}>
                <HashLink
                  smooth
                  to={item.to}
                  className="px-3 py-2 xl:px-4 xl:py-3 bg-sky-800 font-semibold text-white rounded-md 
                  hover:bg-white hover:text-sky-800 transition duration-300 transform hover:-translate-y-1 hover:scale-105 
                  shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  {item.name}
                </HashLink>
              </li>
            ) : (
              <li key={item.name}>
                <HashLink
                  smooth
                  to={item.to}
                  className="text-white hover:text-gray-200 transition duration-300 whitespace-nowrap"
                >
                  {item.name}
                </HashLink>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="xl:hidden bg-sky-600/95 backdrop-blur-sm"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) =>
              item.isButton ? (
                <div key={item.name}>
                  <HashLink
                    smooth
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-3 bg-sky-800 text-white rounded-md 
                            hover:bg-sky-900 transition duration-300 font-semibold text-base"
                  >
                    {item.name}
                  </HashLink>
                </div>
              ) : (
                <div key={item.name}>
                  <HashLink
                    smooth
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="block text-center py-3 text-white hover:text-gray-200 transition duration-300 text-base font-light"
                  >
                    {item.name}
                  </HashLink>
                </div>
              )
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
