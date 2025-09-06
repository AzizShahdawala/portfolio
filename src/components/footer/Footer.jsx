import React from "react";
import { me } from "../../content";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer container">
    © {new Date().getFullYear()} {me.name} • All rights reserved
  </footer>
);

export default Footer;
