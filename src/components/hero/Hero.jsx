import React from "react";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { me } from "../../content";

const Hero = () => (
  <section className="hero container" id="home">
    <div className="hero__copy">
      <div className="availability"><span /> Open to full-stack opportunities and technical conversations</div>
      <p className="hero__intro">Hello, I’m Aziz — {me.role}</p>
      <h1>{me.headline}</h1>
      <p className="hero__summary">I build dependable full-stack products across responsive interfaces, APIs, enterprise workflows, and delivery systems—always with the complete product in view.</p>
      <div className="hero__actions">
        <a className="btn" href="#templates">Explore product concepts <FiArrowUpRight /></a>
        <a className="btn btn--ghost" href="#contact">Connect professionally</a>
      </div>
      <div className="hero__meta">
        <span><FiMapPin /> {me.location}</span>
        <a href={me.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
        <a href={me.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
      </div>
    </div>
    <div className="hero__visual" aria-label="Full-stack developer toolkit">
      <div className="orbit orbit--one" /><div className="orbit orbit--two" />
      <div className="code-card">
        <div className="code-card__top"><span /><span /><span /><small>aziz.dev</small></div>
        <div className="code-card__body">
          <p><em>const</em> developer = {'{'}</p>
          <p>&nbsp;&nbsp;focus: <b>“full-stack”</b>,</p>
          <p>&nbsp;&nbsp;craft: <b>“product thinking”</b>,</p>
          <p>&nbsp;&nbsp;ships: <b>“reliable systems”</b></p>
          <p>{'}'};</p>
        </div>
        <div className="code-card__footer"><span>React</span><span>Spring Boot</span><span>SAP Commerce</span></div>
      </div>
    </div>
  </section>
);

export default Hero;
