"use client";

import React, { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setIsDarkMode(
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="cursor-pointer z-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="Toggle Dark Mode"
      aria-pressed={isDarkMode}
    >
      <div className="relative w-12 h-6 sm:w-14 sm:h-8 rounded-full p-1 bg-gray-300 dark:bg-gray-700 transition-colors duration-300">
        <div
          className={`absolute w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300 ${
            isDarkMode ? "translate-x-6 sm:translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
