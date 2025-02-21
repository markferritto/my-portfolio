import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-xl font-bold">My Portfolio</span>
        <nav className="flex gap-8">
          <a href="#home" className="hover:text-gray-600 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-gray-600 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-gray-600 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
