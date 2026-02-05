import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">SmartQueue</h1>
          </div>

          {/* Center - Info Links */}
          <div className="hidden md:flex space-x-6">
            <a href="/about" className="text-gray-800 hover:text-blue-600 transition">
              About Us
            </a>
            <a href="/contact" className="text-gray-800 hover:text-blue-600 transition">
              Contact
            </a>
            <a href="/how-it-works" className="text-gray-800 hover:text-blue-600 transition">
              How it works
            </a>
          </div>

          {/* Right - Login / Register */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            {/* Optional: Add mobile hamburger menu here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
