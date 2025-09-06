import React from "react";
import { miniProjects } from "../../content";
import { FiEye } from "react-icons/fi";
import "./MiniProjects.scss";

const MiniProjects = () => (
  <section className="section container" id="mini-projects">
    <h2>Mini Projects</h2>
    <div className="mini-projects__grid">
      {miniProjects.map((p) => (
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
                <FiEye size={16} /> Live
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default MiniProjects;
