import React from "react";
import { me } from "../../content";
import "./Nav.scss";

const Nav = ({ onToggleTheme, themeDark }) => (
  <header className="nav">
    <div className="container nav__inner">
      <a className="brand" href="#">
        {me.name}
      </a>
      <nav className="nav__links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label="Toggle theme"
      >
        {themeDark ? "☀️" : "🌙"}
      </button>
    </div>
  </header>
);

export default Nav;
