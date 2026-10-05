import PageHero from "../../components/PageHero.jsx";
import { Link } from "react-router-dom";
export default function Compatibility() {
  return (
    <>
      <PageHero
        eyebrow="COMPATIBILITY"
        title="Node.js and package compatibility."
        description="YTSearch CLI v1.2.3 requires Node.js 14 or newer and ships as a CommonJS CLI package while using the modern ytsearch.js 2.1.3 dependency."
        crumbs={[
          { label: "Docs", to: "/docs/" },
          { label: "Compatibility", to: "/docs/compatibility/" },
        ]}
      />
      <h2>Runtime</h2>
      <p>
        Supported Node.js version: <code>&gt;=14.0.0</code>.
      </p>
      <h2>Package relationship</h2>
      <p>
        YTSearch CLI v1.2.3 depends on <code>ytsearch.js@^2.1.3</code>. The CLI
        is positioned as the terminal experience; the library remains the
        programmatic developer experience.
      </p>
      <p>
        See the{" "}
        <a href="https://ytsearch.rjryt.com">ytsearch.js documentation</a> for
        the library API.
      </p>
      <h2>Current packaging</h2>
      <p>
        The v1.2.3 CLI build is CommonJS output. Do not assume ESM package
        behavior merely because the underlying ytsearch.js ecosystem has
        modernized separately.
      </p>
      <p>
        <Link to="/docs/installation/">Back to installation →</Link>
      </p>
    </>
  );
}
