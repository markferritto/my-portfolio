"use client";

import React, { useState, useEffect } from "react";
import { throttle } from "lodash";


const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [position, setPosition] = useState({
    x: window.innerWidth - 100,
    y: 100,
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  const handleDragStart = (e: React.DragEvent) => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);
  };

  const handleDrag = throttle((e: React.DragEvent) => {
    if (e.clientX && e.clientY) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  }, 16);

  return (
    <button
      style={{
        position: "fixed",
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      draggable="true"
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="cursor-move z-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="Toggle Dark Mode"
      aria-pressed={isDarkMode}
    >
      <div className="relative w-14 h-8 rounded-full p-1 bg-gray-300 dark:bg-gray-700 transition-colors duration-300">
        <div
          className={`absolute w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300 ${
            isDarkMode ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
