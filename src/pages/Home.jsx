import { useState } from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock.jsx";
import { commands } from "../data/commands.js";
import { SITE } from "../data/routes.js";

export default function Home() {
  const [active, setActive] = useState("video");
  const command = commands.find((c) => c.slug === active) || commands[0];
  return (
    <main>
      <section className="hero homeHero">
        <div className="eyebrow">
          YTSEARCH CLI <span>v1.2.3</span>
        </div>
        <h1>
          YouTube search,
          <br />
          <em>from your terminal.</em>
        </h1>
        <p>
          Search videos, channels, playlists, movies, and live streams with a
          focused command-line interface powered by{" "}
          <a href={SITE.library}>ytsearch.js</a>.
        </p>
        <div className="heroActions">
          <Link className="primary" to="/docs/quick-start/">
            Get started →
          </Link>
          <Link className="secondary" to="/docs/">
            Browse docs
          </Link>
        </div>
        <CodeBlock>npm install -g ytsearch-cli</CodeBlock>
      </section>
      <section className="terminal">
        <div className="terminalBar">
          <b>ytsearch-cli</b>
          <span>● ● ●</span>
        </div>
        <div className="terminalBody">
          <div>
            <span className="prompt">$</span> ytsearch {active} "javascript
            tutorial"
          </div>
          <div className="terminalResult">
            <strong>YTSearch CLI</strong>
            <span>Search YouTube from your terminal</span>
            <small>Run locally to retrieve live results.</small>
          </div>
          <div className="terminalFooter">
            ● ready{" "}
            <Link to={`/docs/commands/${active}/`}>
              Open command reference →
            </Link>
          </div>
        </div>
      </section>
      <section className="section explorer">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">COMMAND EXPLORER</span>
            <h2>One CLI for multiple YouTube search types.</h2>
          </div>
          <Link to="/docs/">All documentation →</Link>
        </div>
        <div className="commandTabs">
          {commands.map((c) => (
            <button
              className={active === c.slug ? "active" : ""}
              onClick={() => setActive(c.slug)}
              key={c.slug}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="commandPreview">
          <div>
            <small>COMMAND</small>
            <code>{command.example}</code>
          </div>
          <p>
            {command.description}. See supported options, examples, output
            behavior, and compatibility details.
          </p>
          <Link className="secondary" to={`/docs/commands/${command.slug}/`}>
            Open reference →
          </Link>
        </div>
      </section>
      <section className="section featureGrid">
        <Feature
          n="01"
          t="Formatted output"
          d="Use default, compact, online, or detailed display modes for terminal-friendly results."
        />
        <Feature
          n="02"
          t="JSON automation"
          d="Use --json when command output needs to move into scripts, pipelines, or other tools."
        />
        <Feature
          n="03"
          t="Interactive watch mode"
          d="Launch ytsearch --watch for guided searches, settings, details, and playlist workflows."
        />
      </section>
      <section className="section ecosystem">
        <span className="eyebrow">THE ECOSYSTEM</span>
        <h2>Built on the ytsearch.js data layer.</h2>
        <div className="ecoGrid">
          <div>
            <strong>ytsearch.js</strong>
            <p>
              A Node.js library for YouTube search, video details, playlists,
              and structured results.
            </p>
            <a href={SITE.library}>Explore ytsearch.js →</a>
          </div>
          <div>
            <strong>YTSearch CLI</strong>
            <p>
              A terminal-first interface for developers who want YouTube search
              without building a UI.
            </p>
            <a href={SITE.repository}>View repository →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
function Feature({ n, t, d }) {
  return (
    <div className="featureCard">
      <small>{n}</small>
      <h3>{t}</h3>
      <p>{d}</p>
    </div>
  );
}
