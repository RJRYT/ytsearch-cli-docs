import { Link, useParams } from "react-router-dom";
import PageHero from "../../components/PageHero.jsx";
import CodeBlock from "../../components/CodeBlock.jsx";
import { commands, globalOptions } from "../../data/commands.js";
export default function Command() {
  const { slug } = useParams();
  const c = commands.find((x) => x.slug === slug) || commands[0];
  const usage = c.usage;
  return (
    <>
      <PageHero
        eyebrow="COMMAND REFERENCE"
        title={
          <>
            {" "}
            <code>ytsearch {c.slug}</code>
          </>
        }
        description={`${c.description}. Reference syntax, supported options, examples, and output behavior for YTSearch CLI.`}
        crumbs={[
          { label: "Docs", to: "/docs/" },
          { label: "Commands", to: "/docs/" },
          { label: c.slug, to: `/docs/commands/${c.slug}/` },
        ]}
      />
      <h2>Usage</h2>
      <CodeBlock>{usage}</CodeBlock>
      <h2>Example</h2>
      <CodeBlock>{c.example}</CodeBlock>
      <h2>Supported options</h2>
      <div className="table">
        {globalOptions
          .filter((o) => c.supports.includes(o.name.replace("--", "")))
          .map((o) => (
            <div key={o.name}>
              <code>
                {o.short}, {o.name}
                {o.value ? ` ${o.value}` : ""}
              </code>
              <span>{o.description}</span>
            </div>
          ))}
      </div>
      {c.slug === "playlist-videos" && (
        <p>
          This command uses a default limit of 50. Playlist results support
          pagination.
        </p>
      )}
      {c.slug === "details" && (
        <p>
          The details command supports JSON output and exposes states such as
          LIVE, PRIVATE, and UNLISTED.
        </p>
      )}
      <h2>Related documentation</h2>
      <div className="linkGrid">
        <Link to="/docs/options/">Global options →</Link>
        <Link to="/docs/json/">JSON output →</Link>
        <Link to="/docs/pagination/">Pagination →</Link>
        <Link to="/docs/errors/">Errors →</Link>
      </div>
    </>
  );
}
