import React, { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { me } from "../../content";

const Nav = ({ onToggleTheme, themeDark }) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="brand" href="#home" onClick={close}><span>AS</span>{me.name}</a>
        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {[["About", "about"], ["Services", "templates"], ["Work", "projects"], ["Tech Radar", "tech-radar"], ["Experience", "experience"], ["Contact", "contact"]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={close}>{label}</a>)}
        </nav>
        <div className="nav__actions">
          <button className="icon-button" onClick={onToggleTheme} aria-label={`Use ${themeDark ? "light" : "dark"} theme`}>{themeDark ? <FiSun /> : <FiMoon />}</button>
          <button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <FiX /> : <FiMenu />}</button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
