import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { miniProjects } from "../../content";

const MiniProjects = () => (
  <section className="section section--tinted" id="playground"><div className="container">
    <div className="section-heading section-heading--row"><div><span className="eyebrow">Code playground</span><h2>Small builds, useful experiments.</h2></div><a className="text-link" href="https://github.com/AzizShahdawala?tab=repositories" target="_blank" rel="noreferrer">All repositories <FiArrowUpRight /></a></div>
    <div className="mini-grid">{miniProjects.map((project) => <article className="mini-card" key={project.title}><div className="mini-card__icon"><FiGithub /></div><h3>{project.title}</h3><p>{project.desc}</p><div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="mini-card__links"><a href={project.repo} target="_blank" rel="noreferrer">Code</a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live <FiArrowUpRight /></a>}</div></article>)}</div>
  </div></section>
);

export default MiniProjects;
