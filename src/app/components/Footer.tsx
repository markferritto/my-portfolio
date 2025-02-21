import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const technologies = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "/github.svg",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "/linkedin.svg",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Built With</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="text-right">
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-4 justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Mark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
