import React, { useEffect, useState } from "react";
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
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");

  useEffect(() => {
    document.documentElement.classList.toggle("theme--dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="site-shell">
      <Nav onToggleTheme={() => setDark((value) => !value)} themeDark={dark} />
      <main>
        <Hero />
        <section id="about" className="section container about">
          <div className="section-heading"><span className="eyebrow">About me</span><h2>Engineering with the whole product in view.</h2></div>
          <div className="about__grid">
            <p className="about__lead">{me.summary}</p>
            <div className="about__stats" aria-label="Career highlights">
              <div><strong>6+</strong><span>years building software</span></div>
              <div><strong>3</strong><span>product disciplines</span></div>
              <div><strong>∞</strong><span>curiosity for better systems</span></div>
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
    </div>
  );
};

export default App;
