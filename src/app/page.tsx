import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div className="pt-16">
      {" "}
      {/* Add padding-top to account for fixed header */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="projects" className="min-h-screen">
        {/* Projects section content */}
      </section>
      <section id="contact" className="min-h-screen">
        {/* Contact section content */}
      </section>
    </div>
  );
}
