import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
import { SITE } from "../data/routes.js";

export default function Header() {
  return (
    <header className="siteHeader">
      <Link className="brand" to="/">
        <span className="brandMark">▶</span>
        <span>YTSearch</span>
        <b>CLI</b>
      </Link>
      <nav className="mainNav" aria-label="Primary navigation">
        <Link to="/docs/">Docs</Link>
        <Link to="/guides/">Guides</Link>
        <Link to="/changelog/">Changelog</Link>
        <Link to="/faq/">FAQ</Link>
      </nav>
      <div className="headerActions">
        <ThemeToggle />
        <a href={SITE.repository} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
    </header>
  );
}
