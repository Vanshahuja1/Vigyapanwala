import React from 'react';
import { MessageSquare } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-9xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation Links - Left Side */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/Logo.png" alt="Logo" className="h-6 w-auto" />
              <span className="font-semibold text-sm tracking-wide">VIGYPANWALA</span>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-6 w-px bg-gray-300"></div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-left gap-3">
              <a href="#home" className="text-sm text-gray-700 hover:text-black transition-colors">
                Home
              </a>
              <a href="#whyUs" className="text-sm text-gray-700 hover:text-black transition-colors">
                Why Us
              </a>
              <a href="#service" className="text-sm text-gray-700 hover:text-black transition-colors">
                Service
              </a>
              <a href="#about" className="text-sm text-gray-700 hover:text-black transition-colors">
                About Us
              </a>
            </div>
          </div>

          {/* CTA Button - Right Side */}
          <button className="flex items-center gap-2 px-5 py-2 border border-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-all text-sm">
            <span>Lets' Talk</span>
            <MessageSquare size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;