import React, { useState } from "react";

const Navbar: React.FC = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-4 px-4 sm:px-8 md:px-12 lg:px-48 bg-opacity-90 sm:bg-opacity-60 sm:fixed  top-0 w-full bg-black z-40 border-b border-gray-900" data-aos="fade-down">
        <a href="#">
          <div className="text-white text-xl font-bold flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            <h2 className="ml-2 font-normal text-lg">Smart Lights</h2>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white items-center text-sm">
          <li className="cursor-pointer hover:text-blue-400">
            <a href="#">Home</a>
          </li>
          <li className="cursor-pointer hover:text-blue-400">Product</li>
          <li className="cursor-pointer hover:text-blue-400">
            Software Service
          </li>
          <li>
            <button className="font-semibold p-2 px-10 bg-blue-600 rounded-sm hover:bg-blue-400">
              Login
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="z-50 md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (conditionally rendered based on isMenuOpen state) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full h-fit bg-black bg-opacity-80 z-40`}
      >
        <ul className="flex flex-col items-center justify-center space-y-6 my-12 text-white text-lg">
          <li className="cursor-pointer hover:text-blue-400">
            <a href="#">Home</a>
          </li>
          <li className="cursor-pointer hover:text-blue-400">Product</li>
          <li className="cursor-pointer hover:text-blue-400">
            Software Service
          </li>
          <li>
            <button className="font-semibold p-2 px-10 bg-blue-600 rounded-sm hover:bg-blue-400">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
