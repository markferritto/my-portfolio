import React from "react";

const About: React.FC = () => {
  const technologies = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
  ];
    return (
      <section id="about" className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            About Me
          </h2>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg">
              I'm a passionate Frontend Developer with a keen eye for creating
              responsive and user-friendly web applications. My focus is on
              writing clean, efficient code and implementing modern design
              principles.
            </p>

            <p className="text-lg">
              With several years of experience in web development, I specialize
              in building scalable applications using modern JavaScript
              frameworks and tools. I'm constantly learning and adapting to new
              technologies.
            </p>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;
