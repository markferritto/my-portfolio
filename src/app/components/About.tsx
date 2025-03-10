import React from "react";

const About: React.FC = () => {
  const technologies = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "React Native",
    "Java",
    "AWS",
    "Kafka",
    "Oracle",
    "Git",
  ];

  return (
    <section id="about" className="min-h-screen scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8">
          About Me
        </h2>

        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p className="text-base sm:text-lg">I live in Portland, OR.</p>

          <p className="text-base sm:text-lg">
            I write code that solves problems and sometimes for fun.
          </p>

          <p className="text-base sm:text-lg">
            I’ve worked as a developer at a few places you’ve probably heard of,
            building e-commerce platforms, financial systems, and mobile apps. I
            enjoy solving problems, optimizing performance, and making sure
            things run smoothly.
          </p>

          <p className="text-base sm:text-lg">
            I'm AWS Certified (Developer and Cloud Practitioner), and I
            graduated from Tech Elevator's coding boot camp, where I learned
            Java, TDD, and agile methodologies. Before that, I studied Earth
            Sciences at The Ohio State University, because I used to think rocks
            were cool. (They still are, but now I think code is cooler.)
          </p>

          <p className="text-base sm:text-lg">
            I used to be the kind of person who would unironically say, “I liked
            it before it was mainstream.”
          </p>

          <p className="text-base sm:text-lg">
            I am now just a guy who builds things, breaks things, and
            occasionally looks at rocks.
          </p>

          <div className="mt-8 sm:mt-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-100">
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
