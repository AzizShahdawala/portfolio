import React from "react";
import { experience } from "../../content";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import "./Experience.scss";

const Experience = () => (
  <section className="section container" id="experience">
    <h2>Experience</h2>
    <div className="timeline">
      {experience.map((e, i) => (
        <div key={e.company + i} className="timeline__item">
          <div className="timeline__dot" />
          <div className="timeline__card">
            <h4 className="timeline__role">{e.role}</h4>
            <h5 className="timeline__company">{e.company}</h5>
            <div className="timeline__meta">
              <span><FiCalendar /> {e.period}</span>
              {e.location && (
                <span><FiMapPin /> {e.location}</span>
              )}
            </div>
            <ul className="bullets">
              {e.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
