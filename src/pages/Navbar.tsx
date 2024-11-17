import React from "react";

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 px-4 sm:px-8 md:px-12 lg:px-48 bg-opacity-30 fixed top-0 w-full bg-black z-50 border-b border-gray-800">
        <a href="#"><div className="text-white text-xl font-bold flex items-center">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-8 w-8" 
          />
          <h2 className="ml-2 font-normal text-lg">Smart Lights</h2>
        </div></a>
        <ul className="hidden md:flex space-x-10 text-white items-center text-sm">
          <li className="cursor-pointer hover:text-blue-400"><a href="#">Home</a></li>
          <li className="cursor-pointer hover:text-blue-400">Product</li>
          <li className="cursor-pointer hover:text-blue-400">Software Service</li>
          <li>
            <button className="font-semibold p-2 px-10 bg-blue-600 rounded-sm hover:bg-blue-400">
              Login
            </button>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
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
    </div>
  );
};

export default Navbar;
