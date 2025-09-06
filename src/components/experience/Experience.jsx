import React from "react";
import { experience } from "../../content";

const Experience = () => (
  <section className="section container" id="experience">
    <h2>Experience</h2>
    <ol className="timeline">
      {experience.map((e, i) => (
        <li key={e.company + i} className="timeline__item">
          <div className="timeline__dot" />
          <h4>
            {e.role} • {e.company}
          </h4>
          <div className="muted small">{e.period}</div>
          <ul className="bullets">
            {e.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;
