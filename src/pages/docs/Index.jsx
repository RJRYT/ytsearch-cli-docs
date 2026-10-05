import { Link } from "react-router-dom";
import CodeBlock from "../../components/CodeBlock.jsx";
import PageHero from "../../components/PageHero.jsx";
import { commands } from "../../data/commands.js";
export default function DocsIndex() {
  return (
    <>
      <PageHero
        eyebrow="YTSEARCH CLI DOCUMENTATION"
        title="Search YouTube from the command line."
        description="Install YTSearch CLI, run your first search, then explore commands, output formats, interactive mode, pagination, errors, and compatibility."
      />
      <h2>Install</h2>
      <CodeBlock>npm install -g ytsearch-cli</CodeBlock>
      <h2>First search</h2>
      <CodeBlock>ytsearch video "javascript tutorial"</CodeBlock>
      <h2>Command reference</h2>
      <div className="linkGrid">
        {commands.map((c) => (
          <Link to={`/docs/commands/${c.slug}/`} key={c.slug}>
            <strong>ytsearch {c.slug}</strong>
            <span>{c.description}</span>
          </Link>
        ))}
      </div>
      <h2>Continue learning</h2>
      <div className="linkGrid">
        <Link to="/docs/options/">Global options →</Link>
        <Link to="/docs/display-modes/">Display modes →</Link>
        <Link to="/docs/json/">JSON output →</Link>
        <Link to="/docs/interactive-mode/">Interactive mode →</Link>
      </div>
    </>
  );
}
