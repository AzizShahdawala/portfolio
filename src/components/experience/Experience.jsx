import React from "react";
import { experience } from "../../content";
import { FiArrowUpRight, FiBriefcase } from "react-icons/fi";
import "./Experience.scss";

const normalize = (value) => value.replaceAll("â€”", "—").replaceAll("Â·", "·");
const chapters = [...new Set(experience.map(({ company }) => company))].map((company) => {
  const roles = experience.filter((item) => item.company === company);
  const latestPeriod = normalize(roles[0].period).split(" — ");
  const earliestPeriod = normalize(roles[roles.length - 1].period).split(" — ");
  return { company, roles, location: normalize(roles[0].location), span: `${earliestPeriod[0]} — ${latestPeriod[1]}`, highlights: [...new Set(roles.flatMap(({ bullets }) => bullets))] };
});

const Experience = () => <section className="section experience" id="experience"><div className="container">
  <div className="section-heading section-heading--row"><div><span className="eyebrow">Experience</span><h2>Career chapters, not job-title noise.</h2></div><p>Six years moving from data and web foundations into ownership of enterprise commerce, cross-platform products, and dependable business systems.</p></div>
  <div className="experience__chapters">{chapters.map((chapter, index) => <article className="experience-card" key={chapter.company}>
    <header><span className="experience-card__index">0{index + 1}</span><div><h3>{chapter.company}</h3><p><FiBriefcase /> {chapter.span} · {chapter.location}</p></div></header>
    <div className="experience-card__body"><div className="experience-card__progression"><small>{chapter.roles.length > 1 ? "Growth within the company" : "Role"}</small>{chapter.roles.map(({ role, period }) => <div key={role}><strong>{normalize(role)}</strong><span>{normalize(period)}</span></div>)}</div>
    <div className="experience-card__impact"><small>What I worked on</small><ul>{chapter.highlights.map((highlight) => <li key={highlight}><FiArrowUpRight /> <span>{highlight}</span></li>)}</ul></div></div>
  </article>)}</div>
</div></section>;

export default Experience;
