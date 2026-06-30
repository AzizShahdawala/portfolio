import React, { useState } from "react";
import { me } from "../../content";
import "./Contact.scss";

const API_URL = process.env.REACT_APP_API_URL;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to the server.");
    }

    setLoading(false);
  };

  return (
    <section className="section container" id="contact">
      <h2>Contact</h2>

      <div className="contact__grid">
        {/* Contact Details */}

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
            💼 LinkedIn
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

        {/* Contact Form */}

        <div className="card">
          <p className="muted">
            Fill out the form below and I'll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;