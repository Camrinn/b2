import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-6 bg-transparent text-white fixed top-0 left-0 w-full z-20">
      {/* Logo */}
      <Link
        to="/"
        className="hover:text-[#e18434] text-3xl font-bold transition-colors duration-200"
        style={{ fontFamily: "'Bebas Neue'" }}
      >
        B2 Cafe
      </Link>

      {/* Navigation Links for Larger Screens */}
      <nav
        className="hidden sm:flex space-x-8"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        <Link
          to="/"
          className="text-lg font-medium hover:text-[#e18434] transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/menu"
          className="text-lg font-medium hover:text-[#e18434] transition-colors duration-200"
        >
          Menu
        </Link>
        <Link
          to="/#contact"
          className="text-lg font-medium hover:text-[#e18434] transition-colors duration-200"
        >
          Contact
        </Link>
        <Link
          to="/gallery"
          className="text-lg font-medium hover:text-[#e18434] transition-colors duration-200"
        >
          Gallery
        </Link>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Full-Screen Overlay Menu for Mobile */}
      <nav
        className={`fixed top-0 left-0 h-full w-full bg-[#F8F5EC] text-black transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-30`}
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        <div className="flex justify-between items-center p-6">
          <h1 className="text-3xl font-bold" style={{ fontFamily: "'Bebas Neue'" }}>
            B2 Cafe
          </h1>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Mobile */}
        <ul className="flex flex-col items-center space-y-6 mt-16">
          <li>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold hover:text-[#e18434] transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold hover:text-[#e18434] transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold hover:text-[#e18434] transition-colors duration-200"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold hover:text-[#e18434] transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold hover:text-[#e18434] transition-colors duration-200"
            >
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
