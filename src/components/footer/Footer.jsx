import React from "react";
import { me } from "../../content";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer container">
    © {new Date().getFullYear()} {me.name} • Built with React + SASS
  </footer>
);

export default Footer;
