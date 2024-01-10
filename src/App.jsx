import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div>
      <div id="Home">
        <Navbar />
        <Hero />
      </div>
      <div id="About" className="bg-white">
        <About />
      </div>
      <section id="Projects">
        <Projects />
      </section>
      <div id="Contact">
        <Contact />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
