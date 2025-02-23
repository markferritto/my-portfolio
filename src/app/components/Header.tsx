import React from "react";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-900 dark:text-white">
      <span className="text-xl font-bold">My Portfolio</span>
      <nav className="flex gap-6">
        <a href="#home" className="hover:text-blue-500 transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-blue-500 transition-colors">
          About
        </a>
        <a href="#projects" className="hover:text-blue-500 transition-colors">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-500 transition-colors">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;