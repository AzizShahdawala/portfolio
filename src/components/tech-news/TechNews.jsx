import React, { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiRefreshCw } from "react-icons/fi";

const API_URL = process.env.REACT_APP_API_URL?.replace(/\/$/, "");
const officialSources = [
  { source: "GitHub", category: "Engineering", title: "GitHub Engineering & Product", summary: "Product releases, engineering deep dives, security, and open-source updates.", url: "https://github.blog/" },
  { source: "AWS", category: "Cloud", title: "AWS News Blog", summary: "New cloud services, architecture patterns, and platform capabilities.", url: "https://aws.amazon.com/blogs/aws/" },
  { source: "Google AI", category: "AI", title: "Google AI", summary: "Research, models, products, and responsible AI updates from Google.", url: "https://blog.google/technology/ai/" },
  { source: "Microsoft", category: "Developer tools", title: "Microsoft DevBlogs", summary: "Fresh releases and practical guidance across Microsoft's developer ecosystem.", url: "https://devblogs.microsoft.com/" },
];

const displayDate = (value) => new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value));

const TechNews = () => {
  const trackRef = useRef(null);
  const [items, setItems] = useState([]);
  const [state, setState] = useState("loading");

  const loadNews = async () => {
    setState("loading");
    try {
      if (!API_URL) throw new Error("API unavailable");
      const response = await fetch(`${API_URL}/news`);
      if (!response.ok) throw new Error("Feed unavailable");
      const data = await response.json();
      if (!Array.isArray(data.items) || !data.items.length) throw new Error("No stories returned");
      setItems(data.items);
      setState("ready");
    } catch {
      setItems(officialSources);
      setState("fallback");
    }
  };

  useEffect(() => { loadNews(); }, []);
  const move = (direction) => trackRef.current?.scrollBy({ left: direction * Math.min(trackRef.current.clientWidth * 0.82, 430), behavior: "smooth" });

  return (
    <section className="section tech-radar" id="tech-radar"><div className="container">
      <div className="section-heading section-heading--row"><div><span className="eyebrow">Tech radar</span><h2>What’s moving technology forward.</h2><p>Fresh updates from official engineering, cloud, and AI sources—curated automatically.</p></div><div className="carousel-controls"><button onClick={() => move(-1)} aria-label="Previous stories"><FiArrowLeft /></button><button onClick={() => move(1)} aria-label="Next stories"><FiArrowRight /></button></div></div>
      {state === "fallback" && <div className="feed-note"><span>Live updates are resting right now. Explore the official sources directly.</span><button onClick={loadNews}><FiRefreshCw /> Try again</button></div>}
      <div className="news-track" ref={trackRef} aria-label="Latest technology stories">
        {state === "loading" ? [1,2,3].map((item) => <div className="news-card news-card--loading" key={item}><span /><span /><span /></div>) : items.map((item) => <article className="news-card" key={item.id || item.url}>
          <div className="news-card__meta"><span>{item.category}</span>{item.publishedAt && <time dateTime={item.publishedAt}>{displayDate(item.publishedAt)}</time>}</div>
          <div className="news-card__source"><i /> {item.source}</div><h3>{item.title}</h3><p>{item.summary || "Read the latest update from this official technology source."}</p>
          <a href={item.url} target="_blank" rel="noopener noreferrer">Read at {item.source} <FiArrowUpRight /></a>
        </article>)}
      </div>
      <p className="news-disclaimer">Headlines belong to their respective publishers. Links open the original source.</p>
    </div></section>
  );
};

export default TechNews;
