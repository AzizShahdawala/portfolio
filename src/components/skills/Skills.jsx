import React from "react";
import { skills } from "../../content";

const Skills = () => (
  <section className="section container" id="skills">
    <h2>Skills</h2>
    <div className="skills__grid">
      {skills.map((s) => (
        <span key={s} className="pill">
          {s}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
