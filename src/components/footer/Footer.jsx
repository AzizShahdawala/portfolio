import React from "react";
import { me } from "../../content";

const Footer = () => (
  <footer className="footer container">
    © {new Date().getFullYear()} {me.name} • Built with React + SASS
  </footer>
);

export default Footer;
