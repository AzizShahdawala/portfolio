import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import LiveTemplateDemo from "./components/live-template-demo/LiveTemplateDemo";
import "./styles/main.scss";

const root = createRoot(document.getElementById("root"));
const demo = new URLSearchParams(window.location.search).get("demo");
root.render(
  <React.StrictMode>
    {demo ? <LiveTemplateDemo name={demo} /> : <App />}
  </React.StrictMode>
);
