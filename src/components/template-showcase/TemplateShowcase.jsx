import React, { useEffect, useMemo, useState } from "react";
import { FiArrowRight, FiCheck, FiEye, FiLayers, FiX } from "react-icons/fi";
import { websiteTemplates } from "../../content";

const BrowserPreview = ({ template, expanded = false }) => (
  <div className={`template-browser template-browser--${template.layout} ${expanded ? "is-expanded" : ""}`} style={{ "--preview-ink": template.palette[0], "--preview-accent": template.palette[1], "--preview-bg": template.palette[2] }} aria-hidden="true">
    <div className="template-browser__bar"><i /><i /><i /><span>{template.id}.preview</span></div>
    <div className="template-browser__canvas"><div className="mock-nav"><b>{template.title.split(" ")[0]}</b><span /><span /><span /><em /></div><div className="mock-hero"><small>{template.category}</small><strong>{template.subtitle}</strong><p /><p /><button /></div><div className="mock-visual"><div /><div /><div /></div><div className="mock-strip"><span /><span /><span /></div></div>
  </div>
);

const TemplateShowcase = () => {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState(null);
  const categories = useMemo(() => ["All", ...new Set(websiteTemplates.map((item) => item.category))], []);
  const visible = category === "All" ? websiteTemplates : websiteTemplates.filter((item) => item.category === category);

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
    <div className="section-heading section-heading--row"><div><span className="eyebrow">Product explorations</span><h2>One engineering system, many product directions.</h2><p>Original interface studies exploring how different industries can translate complex information, workflows, and user goals into focused digital experiences.</p></div><div className="template-trust"><FiLayers /><span><strong>Product thinking</strong>Interface systems, workflows, integrations and scale</span></div></div>
    <div className="template-filters" aria-label="Filter website concepts">{categories.map((item) => <button className={category === item ? "is-active" : ""} type="button" onClick={() => setCategory(item)} key={item}>{item}</button>)}</div>
    <div className="template-grid">{visible.map((template) => <article className="template-card" key={template.id}><BrowserPreview template={template} /><div className="template-card__body"><div className="template-card__meta"><span>{template.category}</span><span>Concept study</span></div><h3>{template.title}</h3><p>{template.description}</p><div className="template-card__actions"><button type="button" className="text-link" onClick={() => setActive(template)}><FiEye /> Explore concept</button></div></div></article>)}</div>
    <div className="custom-build-callout"><div><span className="eyebrow">Across the stack</span><h3>Interface decisions are stronger when the whole system is understood.</h3><p>These explorations reflect how I approach full-stack products: user journeys, reusable components, API boundaries, data workflows, reliability, and maintainable delivery.</p></div><a className="btn" href="#projects">See shipped projects <FiArrowRight /></a></div>
  </div>{active && <div className="template-modal" role="dialog" aria-modal="true" aria-labelledby="template-modal-title" onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}><div className="template-modal__panel"><button autoFocus className="template-modal__close" type="button" onClick={() => setActive(null)} aria-label="Close concept preview"><FiX /></button><BrowserPreview template={active} expanded /><div className="template-modal__content"><span className="eyebrow">{active.category} concept</span><h3 id="template-modal-title">{active.title}</h3><p>{active.description}</p><small>Designed for</small><strong>{active.audience}</strong><ul>{active.features.map((feature) => <li key={feature}><FiCheck /> {feature}</li>)}</ul><p className="template-modal__note">This original concept study demonstrates product structure, information hierarchy, responsive composition, and a potential full-stack feature model.</p><a className="btn" href="#projects" onClick={() => setActive(null)}>See engineering projects <FiArrowRight /></a></div></div></div>}</section>;
};

export default TemplateShowcase;
