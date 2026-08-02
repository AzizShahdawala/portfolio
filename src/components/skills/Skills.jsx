import React from "react";
import { skillGroups } from "../../content";

const Skills = () => (
  <section className="section section--tinted" id="skills"><div className="container">
    <div className="section-heading"><span className="eyebrow">Capabilities</span><h2>From polished interfaces to production services.</h2><p>A practical toolkit shaped by real enterprise delivery.</p></div>
    <div className="skill-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.title}><span className="skill-card__number">0{index + 1}</span><h3>{group.title}</h3><div className="tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
  </div></section>
);

export default Skills;
