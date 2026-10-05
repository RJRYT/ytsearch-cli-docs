import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <main className="articlePage">
      <div className="pageHero">
        <span className="eyebrow">404</span>
        <h1>That documentation page does not exist.</h1>
        <p className="lead">
          Use the documentation index to find commands, options, guides, and
          compatibility information.
        </p>
        <Link className="primary" to="/docs/">
          Open documentation →
        </Link>
      </div>
    </main>
  );
}
