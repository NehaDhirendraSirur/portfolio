// src/common/Navbar.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Star } from "lucide-react"; // lightweight icon lib you already have in Tailwind setup

const Navbar = () => {
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollUp(currentY < lastScrollY);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Publications", path: "/publications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-[#1A2B42] shadow-lg border-b border-gray-700 transition-transform duration-300 ${
        scrollUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        
        {/* Logo with star */}
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-400" /> {/* Small star */}
          <h1 className="text-2xl font-bold italic text-white tracking-wide">
            NDS
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mt-2 sm:mt-0">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-gray-200 hover:text-blue-300 font-medium transition ${
                location.pathname === link.path ? "text-blue-300 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
