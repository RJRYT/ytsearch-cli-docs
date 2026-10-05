import { SITE } from "../data/routes.js";
export default function Footer() {
  return (
    <footer className="siteFooter">
      <div>
        <strong>YTSearch CLI</strong>
        <p>
          Command-line YouTube search powered by{" "}
          <a href={SITE.library}>ytsearch.js</a>.
        </p>
      </div>
      <div className="footerLinks">
        <a href={SITE.library}>ytsearch.js</a>
        <a href={SITE.portfolio}>RJRYT</a>
        <a href={SITE.github}>GitHub</a>
        <a href={SITE.npm}>npm</a>
      </div>
    </footer>
  );
}
