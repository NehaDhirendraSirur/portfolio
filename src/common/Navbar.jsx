// src/common/Navbar.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Star, Menu, X, FileText } from "lucide-react";
import resumePDF from "../assets/NehaSirur_Resume.pdf";

const Navbar = () => {
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Publications", path: "/publications" },
    { name: "Contact", path: "/contact" },
  ];

  /* 🔹 RESET NAVBAR ON ROUTE CHANGE */
  useEffect(() => {
    setScrollUp(true);
    setLastScrollY(window.scrollY);
    setMobileOpen(false);
  }, [location.pathname]);

  /* 🔹 SCROLL HANDLER (DESKTOP ONLY) */
  useEffect(() => {
    const handleScroll = () => {
      // Do not auto-hide navbar on mobile
      if (window.innerWidth < 640) return;

      const currentY = window.scrollY;

      // Small threshold to avoid flicker
      if (Math.abs(currentY - lastScrollY) < 10) return;

      setScrollUp(currentY < lastScrollY);
      setLastScrollY(currentY);
      setMobileOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-[#1A2B42] shadow-lg border-b border-gray-700 transition-transform duration-300 ${
        scrollUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2"
          aria-label="Go to Home"
        >
          <Star className="w-5 h-5 text-yellow-400" />
          <h1 className="text-2xl font-bold italic text-white tracking-wide">
            NDS
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-gray-200 hover:text-blue-300 font-medium transition ${
                location.pathname === link.path
                  ? "text-blue-300 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Resume icon */}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            title="Download Resume"
            className="text-gray-200 hover:text-red-400 transition-colors"
          >
            <FileText size={20} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-[#1A2B42] border-t border-gray-700 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block text-gray-200 hover:text-blue-300 font-medium ${
                location.pathname === link.path
                  ? "text-blue-300 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
