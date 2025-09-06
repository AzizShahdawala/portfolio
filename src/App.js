import React, { useState, useEffect } from "react";
import { me } from "./content";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import MiniProjects from "./components/mini-projects/MiniProjects";

const App = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("theme--dark", dark);
  }, [dark]);

  return (
    <>
      <Nav onToggleTheme={() => setDark((d) => !d)} themeDark={dark} />
      <main>
        <Hero />
        <section id="about" className="section container">
          <h2>About</h2>
          <div className="about__grid">
            <p>{me.summary}</p>
            <div className="card">
              <div className="small muted">Quick facts</div>
              <ul className="bullets small">
                <li>React, Spring Boot, SAP Hybris, Angular</li>
                <li>Performance-minded, test-driven, CI/CD</li>
                <li>Open to roles & consulting</li>
              </ul>
            </div>
          </div>
        </section>
        <Skills />
        <Projects />
        <MiniProjects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
