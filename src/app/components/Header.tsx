"use client";

import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
            "User-Agent": "My Portfolio (https://github.com/markferritto/my-portfolio)",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJoke(data.joke);
      } catch (error) {
        console.error("Error fetching the joke", error);
        setError(true);
      }
    };

    fetchJoke();
  }, []);

  let jokeContent;
  if (error) {
    jokeContent = "Aw, shucks 😕";
  } else if (joke) {
    jokeContent = joke;
  } else {
    jokeContent = "Hmmmmmm...🤔";
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-900 dark:text-white">
      <span className="text-xl font-bold">{jokeContent}</span>
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