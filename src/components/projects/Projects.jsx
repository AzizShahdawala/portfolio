import React from "react";
import { projects } from "../../content";

const Projects = () => (
  <section className="section container" id="projects">
    <h2>Projects</h2>
    <div className="projects__grid">
      {projects.map((p) => (
        <article key={p.title} className="card">
          <div className="card__head">
            <h3>{p.title}</h3>
            <span className="muted">{p.year}</span>
          </div>
          <p className="muted">{p.desc}</p>
          <div className="tags">
            {p.stack.map((t) => (
              <span key={t} className="pill">
                {t}
              </span>
            ))}
          </div>
          <div className="actions">
            {p.repo && (
              <a
                className="btn btn--sm"
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            )}
            {p.live && (
              <a
                className="btn btn--sm btn--outline"
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
