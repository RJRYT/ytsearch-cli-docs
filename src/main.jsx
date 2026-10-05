import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

export function Root({ ssrPath }) {
  return ssrPath ? (
    <StaticRouter location={ssrPath}>
      <App />
    </StaticRouter>
  ) : (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

if (typeof document !== "undefined")
  createRoot(document.getElementById("root")).render(<Root />);
