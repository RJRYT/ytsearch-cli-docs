import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero.jsx";
import CodeBlock from "../../components/CodeBlock.jsx";
export default function QuickStart() {
  return (
    <>
      <PageHero
        eyebrow="QUICK START"
        title="Run your first YouTube search."
        description="Install YTSearch CLI, search for videos, adjust result limits, and open the detailed command documentation."
        crumbs={[
          { label: "Docs", to: "/docs/" },
          { label: "Quick Start", to: "/docs/quick-start/" },
        ]}
      />
      <h2>1. Install</h2>
      <CodeBlock>npm install -g ytsearch-cli</CodeBlock>
      <h2>2. Search</h2>
      <CodeBlock>ytsearch video "javascript tutorial"</CodeBlock>
      <h2>3. Control the output</h2>
      <CodeBlock>
        ytsearch video "javascript" --limit 20 --sort view_count --mode detailed
      </CodeBlock>
      <h2>4. Use JSON</h2>
      <CodeBlock>ytsearch video "javascript" --json</CodeBlock>
      <p>
        When you need a guided terminal flow instead, use{" "}
        <Link to="/docs/interactive-mode/">interactive watch mode</Link>.
      </p>
    </>
  );
}
