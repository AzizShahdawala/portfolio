import React from "react";
import { FiArrowRight, FiExternalLink, FiLayers } from "react-icons/fi";
import { websiteTemplates } from "../../content";

const BrowserPreview = ({ template }) => <div className={`template-browser template-browser--${template.layout}`} style={{ "--preview-ink": template.palette[0], "--preview-accent": template.palette[1], "--preview-bg": template.palette[2] }} aria-hidden="true">
  <div className="template-browser__bar"><i /><i /><i /><span>azizshahda.com/?demo={template.id}</span></div>
  <div className="template-browser__canvas"><div className="mock-nav"><b>{template.title}</b><span /><span /><span /><em /></div><div className="mock-hero"><small>{template.category}</small><strong>{template.subtitle}</strong><p /><p /><button /></div><div className="mock-visual"><div /><div /><div /></div><div className="mock-strip"><span /><span /><span /></div></div>
</div>;

const TemplateShowcase = () => <section className="section template-showcase" id="templates"><div className="container">
  <div className="section-heading section-heading--row"><div><span className="eyebrow">Live website templates</span><h2>Open them. Click around. Test the experience.</h2><p>These are working responsive demo sites—not static concept cards. Each one demonstrates real interactions, practical page structure, and a distinct visual system.</p></div><div className="template-trust"><FiLayers /><span><strong>3 live demos</strong>Commerce, real estate and SaaS</span></div></div>
  <div className="template-grid template-grid--live">{websiteTemplates.map((template) => <article className="template-card" key={template.id}><BrowserPreview template={template} /><div className="template-card__body"><div className="template-card__meta"><span>{template.category}</span><span>Live · Responsive</span></div><h3>{template.title}</h3><p>{template.description}</p><ul className="template-card__features">{template.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="template-card__actions"><a className="btn" href={template.live} target="_blank" rel="noreferrer">Open live demo <FiExternalLink /></a></div></div></article>)}</div>
  <div className="custom-build-callout"><div><span className="eyebrow">Built as real products</span><h3>Every demo can grow into an authenticated full-stack application.</h3><p>The visual layer is only the start: APIs, payments, CMS, search, dashboards, integrations, deployment, monitoring, and maintainable delivery are part of the engineering model.</p></div><a className="btn" href="#projects">See shipped projects <FiArrowRight /></a></div>
</div></section>;

export default TemplateShowcase;
