import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero.jsx";
import CodeBlock from "../../components/CodeBlock.jsx";
export default function Installation() {
  return (
    <>
      <PageHero
        eyebrow="INSTALLATION"
        title="Install YTSearch CLI with npm."
        description="Set up the ytsearch command globally, verify your Node.js runtime, and start searching YouTube from any terminal."
        crumbs={[
          { label: "Docs", to: "/docs/" },
          { label: "Installation", to: "/docs/installation/" },
        ]}
      />
      <h2>Requirements</h2>
      <p>
        YTSearch CLI v1.2.3 supports Node.js <code>&gt;=14.0.0</code>. The
        package installs the <code>ytsearch</code> binary.
      </p>
      <h2>Install globally</h2>
      <CodeBlock>npm install -g ytsearch-cli</CodeBlock>
      <h2>Verify the installation</h2>
      <CodeBlock>ytsearch --help</CodeBlock>
      <p>
        For package details, release history, and publishing information, see
        the <a href="https://www.npmjs.com/package/ytsearch-cli">npm package</a>{" "}
        and{" "}
        <a href="https://github.com/RJRYT/ytsearch-cli">GitHub repository</a>.
      </p>
      <p>
        <Link to="/docs/quick-start/">Continue to Quick Start →</Link>
      </p>
    </>
  );
}
