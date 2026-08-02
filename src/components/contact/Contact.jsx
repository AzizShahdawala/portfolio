import React, { useState } from "react";
import { FiArrowUpRight, FiCheck, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { me } from "../../content";

const API_URL = process.env.REACT_APP_API_URL?.replace(/\/$/, "");

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const handleChange = ({ target }) => setForm((current) => ({ ...current, [target.name]: target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending your message…" });
    try {
      if (!API_URL) throw new Error("CONTACT_API_UNAVAILABLE");
      const response = await fetch(`${API_URL}/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || "Unable to send your message.");
      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus({ type: "success", message: "Thanks — your message is on its way." });
    } catch (error) {
      if (error.message === "CONTACT_API_UNAVAILABLE" || error instanceof TypeError) {
        const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
        const body = encodeURIComponent(`Hi Aziz,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
        window.location.href = `mailto:${me.email}?subject=${subject}&body=${body}`;
        setStatus({ type: "fallback", message: "Your email app has been opened with the message ready to send." });
      } else setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <section className="section contact" id="contact"><div className="container contact__grid">
      <div className="contact__copy"><span className="eyebrow">Let’s work together</span><h2>Have a complex problem worth solving?</h2><p>Tell me what you’re building, improving, or untangling. I’m always open to thoughtful product conversations.</p>
        <div className="contact__links"><a href={`mailto:${me.email}`}><FiMail /> <span><small>Email</small>{me.email}</span></a><span><FiMapPin /> <span><small>Based in</small>{me.location}</span></span><a href={me.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a><a href={me.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a></div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row"><label>Name<input name="name" value={form.name} onChange={handleChange} autoComplete="name" maxLength="80" required placeholder="Your name" /></label><label>Email<input type="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" maxLength="120" required placeholder="you@company.com" /></label></div>
        <label>Subject<input name="subject" value={form.subject} onChange={handleChange} maxLength="140" required placeholder="What would you like to discuss?" /></label>
        <label>Message<textarea name="message" value={form.message} onChange={handleChange} rows="6" minLength="10" maxLength="4000" required placeholder="A little context goes a long way…" /></label>
        <div className="form-footer"><button className="btn" type="submit" disabled={status.type === "loading"}>{status.type === "loading" ? "Sending…" : "Send message"} <FiArrowUpRight /></button><p className={`form-status form-status--${status.type}`} aria-live="polite">{status.type === "success" && <FiCheck />}{status.message}</p></div>
      </form>
    </div></section>
  );
};

export default Contact;
