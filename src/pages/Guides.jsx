import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
export default function Guides() {
  return (
    <>
      <PageHero
        eyebrow="GUIDES"
        title="Practical YTSearch CLI workflows."
        description="Use these focused workflows to search YouTube, automate JSON output, work interactively, and retrieve playlist pages from the terminal."
        crumbs={[{ label: "Guides", to: "/guides/" }]}
      />
      <section className="guideGrid">
        <Guide
          title="Search by content type"
          text="Choose video, channel, playlist, movie, or live when you know the kind of YouTube result you want."
          to="/docs/commands/video/"
        />
        <Guide
          title="Build a JSON pipeline"
          text="Combine --json with scripts and other terminal tools when formatted tables are not appropriate."
          to="/docs/json/"
        />
        <Guide
          title="Use interactive mode"
          text="Launch --watch when you prefer a guided menu for searches, details, settings, and playlist actions."
          to="/docs/interactive-mode/"
        />
        <Guide
          title="Walk large playlists"
          text="Use playlist-videos and pagination to work through playlist pages instead of treating a playlist as one flat result."
          to="/docs/pagination/"
        />
      </section>
      <h2>Example workflow</h2>
      <CodeBlock>
        ytsearch video "node.js tutorial" --limit 20 --sort view_count --mode
        detailed
      </CodeBlock>
      <p>
        For programmatic access to the underlying data layer, continue to{" "}
        <a href="https://ytsearch.rjryt.com">ytsearch.js</a>.
      </p>
    </>
  );
}
function Guide({ title, text, to }) {
  return (
    <Link className="guideCard" to={to}>
      <strong>{title}</strong>
      <p>{text}</p>
      <span>Read guide →</span>
    </Link>
  );
}
