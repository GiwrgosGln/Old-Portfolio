import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#6F2232",
              },
              links: {
                color: "#6F2232",
                distance: 150,
                enable: true,
                opacity: 2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          style={{
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%",
          }}
        />
      )}

      <div>
        <div id="Home">
          <Navbar />
          <Hero />
        </div>
        <div id="About" className="bg-white">
          <About />
        </div>
        {/* <div id="Projects">
          <Projects />
        </div>
        <div id="Contact">
          <Contact />
        </div> */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
