"use client";

import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex bg-white dark:bg-black text-black dark:text-white relative overflow-hidden scroll-mt-24"
    >
      <div className="w-1/2 h-screen flex items-center justify-center px-12">
        <div className="relative w-full h-screen">
          <Image
            src="/AAF8xuvOsFs_1740267963831.svg"
            alt="Profile picture with mug"
            fill
            className="object-cover object-top z-10"
            priority
            quality={100}
            unoptimized
          />
        </div>
      </div>

      <div className="w-1/2 flex justify-end items-end relative">
        <div className="text-right mb-24 mr-24 z-20 mix-blend-plus-lighter">
          <h1 className="text-7xl font-light tracking-tight mb-6 font-sans bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-900 dark:from-white dark:to-white">
            Hi, I'm <span className="font-semibold">Mark</span>
          </h1>
          <h2 className="text-4xl mb-8 font-thin tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-900 dark:from-white dark:to-white">
            Front-end Developer
          </h2>
          <p className="text-xl mb-12 font-light leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-900 dark:from-white dark:to-white">
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
              href="/SoP.Mark.Ferritto.Resume.pdf"
              className="px-8 py-4 bg-gray-600 text-white dark:bg-gray-500 rounded-full font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:shadow-lg"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;