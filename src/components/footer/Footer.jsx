import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { me } from "../../content";

const Footer = () => <footer className="footer"><div className="container"><p>© {new Date().getFullYear()} {me.name}. Built with care in Mumbai.</p><a href="#home">Back to top <FiArrowUp /></a></div></footer>;
export default Footer;
