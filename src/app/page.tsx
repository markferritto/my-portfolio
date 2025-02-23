import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="pt-16">
      {" "}
      {/* Add padding-top to account for fixed header */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
