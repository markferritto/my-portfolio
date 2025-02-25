import React from "react";
import Image from "next/image";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, TypeScript, and Tailwind CSS. Features include user authentication, product management, and payment integration.",
      link: "https://project1.com",
      image: "https://placecats.com/600/400",
    },
    {
      title: "Task Management App",
      description:
        "Real-time task management application using React and TypeScript. Includes drag-and-drop functionality, team collaboration, and progress tracking.",
      link: "https://project2.com",
      image: "https://placecats.com/neo/600/400",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio website built with Next.js and Tailwind CSS. Features smooth scrolling, dark mode support, and responsive design.",
      link: "https://project3.com",
      image: "https://placecats.com/bella/600/400",
    },
  ];

  return (
    <section id="projects" className="min-h-screen scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
