"use client";

import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 flex items-center justify-start px-4 sm:px-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-900 dark:text-white">
        <nav className="flex gap-4 sm:gap-8 text-sm sm:text-base font-medium">
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
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
};

export default Header;
