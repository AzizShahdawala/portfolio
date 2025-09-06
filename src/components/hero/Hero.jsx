import React from "react";
import { me } from "../../content";

const Hero = () => (
  <section className="hero container" id="home">
    <div className="hero__left">
      <h1>{me.role}</h1>
      <p className="muted">{me.summary}</p>
      <div className="cta">
        <a
          className="btn"
          href={me.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          className="btn btn--outline"
          href={me.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="btn btn--outline"
          href={me.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
    <div className="hero__right">
      <div className="avatar">👨‍💻</div>
      <div className="tech">React • Spring Boot • SAP Hybris • Angular</div>
    </div>
  </section>
);

export default Hero;
