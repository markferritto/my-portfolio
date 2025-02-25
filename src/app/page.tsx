import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-blue-900 dark:to-blue-950">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
