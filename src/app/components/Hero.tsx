import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-white dark:bg-black text-black dark:text-white relative">
      <div className="w-1/2 h-screen flex items-center justify-center px-12">
        <div className="relative w-full h-screen">
          <Image
            src="/AAF8xuvOsFs_1740267963831.svg"
            alt="Profile picture with mug"
            fill
            className="object-cover object-top z-10 opacity-90"
            priority
            quality={100}
            unoptimized
          />
        </div>
      </div>

      <div className="w-1/2 flex justify-end items-end">
        <div className="text-right mb-24 mr-24">
          <h1 className="text-7xl font-light tracking-tight mb-6 font-sans">
            Hi, I'm <span className="font-semibold">Mark</span>
          </h1>
          <h2 className="text-4xl mb-8 font-extralight tracking-wide">
            Frontend Developer
          </h2>
          <p className="text-xl mb-12 font-light leading-relaxed">
            Crafting modern web experiences with React, TypeScript, and Next.js
          </p>
          <div className="flex gap-6 justify-end">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 text-white dark:bg-blue-500 rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 rounded-full font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;