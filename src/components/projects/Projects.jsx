import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../../content";

const Projects = () => (
  <section className="section container" id="projects">
    <div className="section-heading"><span className="eyebrow">Selected work</span><h2>Products built for real people and real operations.</h2></div>
    <div className="projects__grid">{projects.map((project, index) => <article className={`project-card ${index === 0 ? "project-card--featured" : ""}`} key={project.title}>
      <div className="project-card__index">0{index + 1}</div><div className="project-card__content"><div className="project-card__meta"><span>{project.type}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.desc}</p><div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.repo && <a className="text-link" href={project.repo} target="_blank" rel="noreferrer"><FiGithub /> View repository <FiArrowUpRight /></a>}</div>
    </article>)}</div>
  </section>
);

export default Projects;
