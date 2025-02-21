import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold mb-6">Hi, I'm Mark</h1>
        <h2 className="text-3xl mb-8">Frontend Developer</h2>
        <p className="text-xl mb-12">
          Crafting modern web experiences with React, TypeScript, and Next.js
        </p>
        <div className="flex gap-6 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
