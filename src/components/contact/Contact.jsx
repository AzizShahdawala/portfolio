import React from "react";
import { me } from "../../content";
import "./Contact.scss";

const Contact = () => (
  <section className="section container" id="contact">
    <h2>Contact</h2>
    <div className="contact__grid">
      <div className="card">
        <a href={`mailto:${me.email}`} className="row">
          📧 {me.email}
        </a>
        <a href={`tel:${me.phone}`} className="row">
          📱 {me.phone}
        </a>
        <div className="row">📍 {me.location}</div>
        <a
          href={me.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="row"
        >
          in LinkedIn
        </a>
        <a
          href={me.github}
          target="_blank"
          rel="noopener noreferrer"
          className="row"
        >
          🐙 GitHub
        </a>
      </div>
      <div className="card">
        <p className="muted">
          Prefer email? Click below to open your mail client with a prefilled
          subject.
        </p>
        <a
          className="btn"
          href={`mailto:${me.email}?subject=Hello%20${encodeURIComponent(
            me.name
          )}&body=Hi%2C%20I%27d%20love%20to%20connect!`}
        >
          Email Me
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
