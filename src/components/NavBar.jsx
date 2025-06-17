import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = ["home", "about", "portfolio", "skills", "contact"];

  const handleSetActive = (to) => {
    setActiveLink(to);
    setNav(false);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 bg-black text-white fixed px-4 z-50">
      {/* Logo */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-logo bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
          @
        </h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navLinks.map((link) => (
          <li
            key={link}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-400 hover:scale-105 duration-200"
          >
            <Link
              to={link}
              smooth
              duration={500}
              spy={true}
              activeClass="text-cyan-400"
              onSetActive={() => setActiveLink(link)}
              className={activeLink === link ? "text-cyan-400" : ""}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Icon */}
      {!nav && (
        <div
          onClick={() => setNav(true)}
          className="cursor-pointer pr-4 z-50 text-gray-300 hover:text-cyan-400 md:hidden"
        >
          <FaBars size={30} />
        </div>
      )}

      {/* Mobile Navigation with Smooth Animation */}
      <AnimatePresence>
        {nav && (
          <motion.ul
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 z-40"
          >
            {/* Close button inside animated menu */}
            <div
              onClick={() => setNav(false)}
              className="cursor-pointer absolute top-6 right-6 text-gray-300 hover:text-cyan-400"
            >
              <FaTimes size={30} />
            </div>

            {navLinks.map((link) => (
              <li
                key={link}
                className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <Link
                  onClick={() => handleSetActive(link)}
                  to={link}
                  smooth
                  duration={500}
                  className={activeLink === link ? "text-cyan-400" : ""}
                >
                  {link}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
