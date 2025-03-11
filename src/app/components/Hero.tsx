import { HTMLAttributes } from "react";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Hero: React.FC<Props> = () => {
  return (
    <div
      id="home"
      className="min-h-screen scroll-mt-24 flex flex-col lg:flex-row bg-white dark:bg-black text-black dark:text-white relative overflow-hidden"
    >
      {/* Left side - Image */}
      <div className="w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-screen flex items-center justify-center pt-16">
        <div className="relative w-full h-full">
          <Image
            src="/AAF8xuvOsFs_1740267963831.svg"
            alt="Profile picture with mug"
            fill
            className="object-contain md:object-contain lg:object-cover object-center lg:object-top"
            priority
            quality={100}
            unoptimized
          />
        </div>
      </div>
      {/* Right side - Text content */}
      <div className="w-full lg:w-1/2 flex items-center lg:items-end justify-center lg:justify-end h-[40vh] md:h-[40vh] lg:h-screen">
        <div className="text-center lg:text-right max-w-xl lg:mr-24 lg:mb-36">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight mb-4 lg:mb-6">
            Hi, I&apos;m <span className="font-semibold">Mark</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-8 font-thin tracking-wide">
            Front-end Developer
          </h2>
          <p className="text-lg sm:text-xl mb-8 lg:mb-12 font-light leading-relaxed">
            Crafting modern web experiences with React, TypeScript, and Next.js
          </p>
          <div className="flex gap-4 sm:gap-6 justify-center lg:justify-end">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white dark:bg-blue-500 rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href="/SoP.Mark.Ferritto.Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 border border-current rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
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
