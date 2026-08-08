import React, { useEffect, useMemo, useState } from "react";
import { FiArrowRight, FiCheck, FiEye, FiLayers, FiX } from "react-icons/fi";
import { websiteTemplates } from "../../content";

const BrowserPreview = ({ template, expanded = false }) => (
  <div className={`template-browser template-browser--${template.layout} ${expanded ? "is-expanded" : ""}`} style={{ "--preview-ink": template.palette[0], "--preview-accent": template.palette[1], "--preview-bg": template.palette[2] }} aria-hidden="true">
    <div className="template-browser__bar"><i /><i /><i /><span>{template.id}.preview</span></div>
    <div className="template-browser__canvas"><div className="mock-nav"><b>{template.title.split(" ")[0]}</b><span /><span /><span /><em /></div><div className="mock-hero"><small>{template.category}</small><strong>{template.subtitle}</strong><p /><p /><button /></div><div className="mock-visual"><div /><div /><div /></div><div className="mock-strip"><span /><span /><span /></div></div>
  </div>
);

const TemplateShowcase = ({ onRequest }) => {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState(null);
  const categories = useMemo(() => ["All", ...new Set(websiteTemplates.map((item) => item.category))], []);
  const visible = category === "All" ? websiteTemplates : websiteTemplates.filter((item) => item.category === category);
  const requestTemplate = (template) => { setActive(null); onRequest(template); };

  useEffect(() => {
    if (!active) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => event.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [active]);

  return <section className="section template-showcase" id="templates"><div className="container">
    <div className="section-heading section-heading--row"><div><span className="eyebrow">Website launchpad</span><h2>Choose a direction. I’ll make it unmistakably yours.</h2><p>Original, build-ready concepts—not resold themes. Each can be adapted to your brand, content, workflows, integrations, and growth plan.</p></div><div className="template-trust"><FiLayers /><span><strong>Strategy to launch</strong>Design, development, integrations and support</span></div></div>
    <div className="template-filters" aria-label="Filter website concepts">{categories.map((item) => <button className={category === item ? "is-active" : ""} type="button" onClick={() => setCategory(item)} key={item}>{item}</button>)}</div>
    <div className="template-grid">{visible.map((template) => <article className="template-card" key={template.id}><BrowserPreview template={template} /><div className="template-card__body"><div className="template-card__meta"><span>{template.category}</span><span>Customisable</span></div><h3>{template.title}</h3><p>{template.description}</p><div className="template-card__actions"><button type="button" className="text-link" onClick={() => setActive(template)}><FiEye /> Explore concept</button><button type="button" className="template-request" onClick={() => requestTemplate(template)}>Request this build <FiArrowRight /></button></div></div></article>)}</div>
    <div className="custom-build-callout"><div><span className="eyebrow">Need something different?</span><h3>Your business should shape the product—not the other way around.</h3><p>I also design custom marketplaces, portals, booking systems, dashboards, automations, and internal tools from a blank canvas.</p></div><button className="btn" type="button" onClick={() => requestTemplate({ title: "Custom digital product", category: "Custom build" })}>Discuss a custom build <FiArrowRight /></button></div>
  </div>{active && <div className="template-modal" role="dialog" aria-modal="true" aria-labelledby="template-modal-title" onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}><div className="template-modal__panel"><button autoFocus className="template-modal__close" type="button" onClick={() => setActive(null)} aria-label="Close concept preview"><FiX /></button><BrowserPreview template={active} expanded /><div className="template-modal__content"><span className="eyebrow">{active.category} concept</span><h3 id="template-modal-title">{active.title}</h3><p>{active.description}</p><small>Best for</small><strong>{active.audience}</strong><ul>{active.features.map((feature) => <li key={feature}><FiCheck /> {feature}</li>)}</ul><p className="template-modal__note">Final design, pages, functionality, content and integrations are scoped around your business. This concept is a starting direction, not a restrictive off-the-shelf theme.</p><button className="btn" type="button" onClick={() => requestTemplate(active)}>Request this website <FiArrowRight /></button></div></div></div>}</section>;
};

export default TemplateShowcase;
