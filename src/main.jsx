import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

const commands = [
  ["video", "Search YouTube videos", 'ytsearch video "javascript tutorial"'],
  ["channel", "Search channels", 'ytsearch channel "Traversy Media"'],
  ["playlist", "Search playlists", 'ytsearch playlist "react tutorials"'],
  ["movie", "Search movies", 'ytsearch movie "documentary"'],
  ["live", "Search live streams", 'ytsearch live "coding"'],
  ["details", "Get video details", "ytsearch details dQw4w9WgXcQ"],
  [
    "playlist-videos",
    "Browse playlist videos",
    "ytsearch playlist-videos PLxxxxxxxx",
  ],
  ["search", "Search across types", 'ytsearch search "lofi hip hop"'],
];
const history = [
  [
    "1.2.3",
    "Sep 23, 2026",
    "chore",
    "Bump version to 1.2.3 and update ytsearch.js dependency to 2.1.3",
  ],
  [
    "1.2.3",
    "Sep 22, 2026",
    "docs",
    "Update package description and enhance README with a related ytsearch.js section",
  ],
  [
    "1.2.2",
    "Sep 15, 2026",
    "chore",
    "Bump version to 1.2.2 and update ytsearch.js dependency to 2.1.2",
  ],
  [
    "1.2.1",
    "Sep 14, 2026",
    "chore",
    "Bump version to 1.2.1 and update ytsearch.js dependency to 2.1.1",
  ],
  [
    "1.2.0",
    "Sep 29, 2025",
    "feat",
    "Add movie and live search commands to CLI",
  ],
  [
    "1.2.0",
    "Sep 29, 2025",
    "fix",
    "Update watch URL reference in details command",
  ],
  [
    "1.2.0",
    "Sep 29, 2025",
    "refactor",
    "Improve playlist handling and pagination prompts",
  ],
  [
    "1.1.0",
    "Sep 21, 2025",
    "feat",
    "Add multiple display modes and interactive watch mode",
  ],
  [
    "1.1.0",
    "Sep 21, 2025",
    "feat",
    "Add interactive mode and improve search result display",
  ],
  [
    "1.0.0",
    "Sep 20, 2025",
    "feat",
    "Add core search and detail functionalities for YouTube CLI",
  ],
  [
    "1.0.0",
    "Sep 20, 2025",
    "chore",
    "Set up project structure and configurations",
  ],
  ["1.0.0", "Sep 20, 2025", "init", "Initial commit"],
];
function App() {
  const loc = useLocation();
  const nav = useNavigate();
  const [dark, setDark] = useState(
    () => localStorage.getItem("ytcli-theme") !== "light"
  );
  const [q, setQ] = useState("");
  const [tab, setTab] = useState("video");
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("ytcli-theme", dark ? "dark" : "light");
  }, [dark]);
  const isHome = loc.pathname === "/";
  const command = commands.find((x) =>
    loc.pathname.includes("/commands/" + x[0])
  );
  const title = command
    ? `ytsearch ${command[0]} — YTSearch CLI`
    : loc.pathname === "/changelog"
    ? "Changelog — YTSearch CLI"
    : loc.pathname === "/faq"
    ? "FAQ — YTSearch CLI"
    : "YTSearch CLI — YouTube Search from Your Terminal";
  useEffect(() => {
    document.title = title;
  }, [title]);
  const filtered = useMemo(
    () =>
      commands.filter(
        (c) =>
          c[0].includes(q.toLowerCase()) ||
          c[1].toLowerCase().includes(q.toLowerCase())
      ),
    [q]
  );
  const go = (p) => nav(p);
  return (
    <div className="app">
      <header>
        <button className="brand" onClick={() => go("/")}>
          ▶ <span>YTSearch</span> <b>CLI</b>
        </button>
        <nav>
          <button onClick={() => go("/docs")}>Docs</button>
          <button onClick={() => go("/guides")}>Guides</button>
          <button onClick={() => go("/changelog")}>Changelog</button>
          <button onClick={() => go("/faq")}>FAQ</button>
        </nav>
        <div className="actions">
          <button
            className="icon"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? "☀" : "☾"}
          </button>
          <a href="https://github.com/RJRYT/ytsearch-cli" target="_blank">
            GitHub ↗
          </a>
        </div>
      </header>
      {isHome ? (
        <Home tab={tab} setTab={setTab} go={go} />
      ) : command ? (
        <Command c={command} go={go} />
      ) : loc.pathname === "/changelog" ? (
        <Changelog />
      ) : loc.pathname === "/faq" ? (
        <FAQ />
      ) : (
        <Docs go={go} q={q} setQ={setQ} filtered={filtered} />
      )}
      <footer>
        <div>
          <b>YTSearch CLI</b>
          <span>
            Command-line YouTube search powered by{" "}
            <a href="https://ytsearch.rjryt.com">ytsearch.js</a>.
          </span>
        </div>
        <div>
          <a href="https://rjryt.com">RJRYT</a>
          <a href="https://github.com/RJRYT">GitHub</a>
          <a href="https://www.npmjs.com/package/ytsearch-cli">npm</a>
        </div>
      </footer>
    </div>
  );
}
function Home({ tab, setTab, go }) {
  const c = commands.find((x) => x[0] === tab) || commands[0];
  const [run, setRun] = useState(false);
  return (
    <main>
      <section className="hero">
        <div className="eyebrow">
          YTSearch CLI <span>v1.2.3</span>
        </div>
        <h1>
          YouTube search,
          <br />
          <em>from your terminal.</em>
        </h1>
        <p>
          Search videos, channels, playlists, movies, and live streams with a
          fast command-line interface powered by{" "}
          <a href="https://ytsearch.rjryt.com">ytsearch.js</a>.
        </p>
        <div className="heroBtns">
          <button className="primary" onClick={() => go("/docs/quick-start")}>
            Get started →
          </button>
          <button className="secondary" onClick={() => go("/docs")}>
            Browse docs
          </button>
        </div>
        <div className="install">
          <span>$</span> npm install -g ytsearch-cli{" "}
          <button
            onClick={() =>
              navigator.clipboard?.writeText("npm install -g ytsearch-cli")
            }
          >
            Copy
          </button>
        </div>
      </section>
      <section className="terminal">
        <div className="termTop">
          <span>ytsearch-cli</span>
          <i />
          <i />
          <i />
        </div>
        <div className="termBody">
          <div className="prompt">
            <b>$</b> ytsearch {tab} "
            {tab === "video"
              ? "javascript tutorial"
              : tab === "channel"
              ? "react"
              : "lofi hip hop"}
            "
          </div>
          <div className="result">
            <strong>Search results</strong>
            <span>────────────────────────────────────</span>
            <b>
              {tab === "video"
                ? "JavaScript Tutorial for Beginners"
                : tab === "channel"
                ? "Traversy Media"
                : "Top results for your query"}
            </b>
            <small>youtube.com • ready to open</small>
            <small>Run this command locally to retrieve live results.</small>
          </div>
          <div className="termStatus">
            {run ? "✓ command ready" : "● waiting for input"}{" "}
            <button onClick={() => setRun(!run)}>
              {run ? "Reset" : "Run demo"}
            </button>
          </div>
        </div>
      </section>
      <section className="explorer">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">COMMAND EXPLORER</span>
            <h2>Pick a command. See it in action.</h2>
          </div>
          <button className="textBtn" onClick={() => go("/docs")}>
            All commands →
          </button>
        </div>
        <div className="commandTabs">
          {commands.map((x) => (
            <button
              className={tab === x[0] ? "active" : ""}
              onClick={() => setTab(x[0])}
            >
              {x[0]}
            </button>
          ))}
        </div>
        <div className="commandPreview">
          <div>
            <span className="label">COMMAND</span>
            <code>{c[2]}</code>
          </div>
          <p>
            {c[1]}. Explore the full reference, options, examples, and output
            behavior.
          </p>
          <button
            className="secondary"
            onClick={() => go("/docs/commands/" + c[0])}
          >
            Open reference →
          </button>
        </div>
      </section>
      <section className="cards">
        <Card
          n="01"
          t="Human-friendly output"
          d="Choose default, compact, online, or detailed display modes."
        />
        <Card
          n="02"
          t="Automation ready"
          d="Use --json when terminal output needs to feed another tool."
        />
        <Card
          n="03"
          t="Interactive mode"
          d="Launch --watch for guided searches, settings, and pagination."
        />
      </section>
      <section className="ecosystem">
        <span className="eyebrow">THE ECOSYSTEM</span>
        <h2>One data layer. Two developer experiences.</h2>
        <div className="eco">
          <div>
            <b>ytsearch.js</b>
            <p>Node.js library for YouTube search and metadata.</p>
            <a href="https://ytsearch.rjryt.com">Explore ytsearch.js →</a>
          </div>
          <div className="line">→</div>
          <div>
            <b>YTSearch CLI</b>
            <p>Bring the same capabilities directly to the terminal.</p>
            <a href="https://github.com/RJRYT/ytsearch-cli">
              View repository →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
function Card(p) {
  return (
    <div className="card">
      <small>{p.n}</small>
      <h3>{p.t}</h3>
      <p>{p.d}</p>
    </div>
  );
}
function Docs({ go, q, setQ, filtered }) {
  return (
    <main className="docs">
      <aside>
        <span className="eyebrow">DOCUMENTATION</span>
        <button onClick={() => go("/docs/quick-start")}>Quick start</button>
        <button onClick={() => go("/docs/options")}>Options</button>
        <button onClick={() => go("/docs/display-modes")}>Display modes</button>
        <button onClick={() => go("/docs/json")}>JSON output</button>
        <button onClick={() => go("/docs/interactive-mode")}>
          Interactive mode
        </button>
        <span className="eyebrow gap">COMMANDS</span>
        {commands.map((c) => (
          <button onClick={() => go("/docs/commands/" + c[0])}>{c[0]}</button>
        ))}
      </aside>
      <article>
        <span className="eyebrow">YTSEARCH CLI DOCUMENTATION</span>
        <h1>Search YouTube from the command line.</h1>
        <p className="lead">
          Install the CLI, run your first search, then explore commands and
          output formats.
        </p>
        <div className="search">
          <span>⌕</span>
          <input
            placeholder="Search documentation…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        {q && (
          <div className="searchResults">
            {filtered.map((c) => (
              <button onClick={() => go("/docs/commands/" + c[0])}>
                <b>ytsearch {c[0]}</b>
                <span>{c[1]}</span>
              </button>
            ))}
          </div>
        )}
        <h2>Install</h2>
        <Code s="npm install -g ytsearch-cli" />
        <h2>First search</h2>
        <Code s={'ytsearch video "javascript tutorial"'} />
        <h2>Explore</h2>
        <div className="linkGrid">
          <button onClick={() => go("/docs/commands/video")}>
            Video search →
          </button>
          <button onClick={() => go("/docs/commands/channel")}>
            Channel search →
          </button>
          <button onClick={() => go("/docs/commands/playlist")}>
            Playlist search →
          </button>
          <button onClick={() => go("/docs/json")}>JSON automation →</button>
        </div>
      </article>
    </main>
  );
}
function Command({ c, go }) {
  return (
    <main className="article">
      <span className="eyebrow">COMMAND REFERENCE</span>
      <h1>
        <code>ytsearch {c[0]}</code>
      </h1>
      <p className="lead">{c[1]} with YTSearch CLI.</p>
      <Code s={c[2]} />
      <h2>Usage</h2>
      <Code s={c[2].replace(/".*"/, "<query>")} />
      <h2>Common options</h2>
      <div className="table">
        <div>
          <b>--limit</b>
          <span>Control the number of returned results.</span>
        </div>
        <div>
          <b>--sort</b>
          <span>relevance, upload_date, view_count, rating</span>
        </div>
        <div>
          <b>--mode</b>
          <span>default, compact, online, detailed</span>
        </div>
        <div>
          <b>--json</b>
          <span>Emit machine-readable JSON.</span>
        </div>
      </div>
      <h2>Related</h2>
      <button className="secondary" onClick={() => go("/docs")}>
        Back to documentation →
      </button>
    </main>
  );
}
function Code({ s }) {
  return (
    <div className="code">
      <span>$</span>
      <code>{s}</code>
      <button onClick={() => navigator.clipboard?.writeText(s)}>Copy</button>
    </div>
  );
}
function Changelog() {
  return (
    <main className="article">
      <span className="eyebrow">RELEASE HISTORY</span>
      <h1>Changelog</h1>
      <p className="lead">
        Project history from the repository, from the initial CLI to v1.2.3.
      </p>
      {history.map((h, i) => (
        <div className="commit">
          <div>
            <b>v{h[0]}</b>
            <small>{h[1]}</small>
          </div>
          <div>
            <span className={"tag " + h[2]}>{h[2]}</span>
            <p>{h[3]}</p>
            <a
              href="https://github.com/RJRYT/ytsearch-cli/commits/main"
              target="_blank"
            >
              View commits ↗
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}
function FAQ() {
  return (
    <main className="article">
      <span className="eyebrow">FAQ</span>
      <h1>Frequently asked questions</h1>
      {[
        [
          "Does it require a YouTube API key?",
          "YTSearch CLI is powered by ytsearch.js and does not require a YouTube Data API key for its search workflow.",
        ],
        [
          "Which Node.js versions are supported?",
          "The v1.2.3 package targets Node.js 14 or newer.",
        ],
        [
          "Can I get JSON?",
          "Yes. Add --json to supported commands when you need machine-readable output.",
        ],
        [
          "Is there an interactive mode?",
          "Yes. Run ytsearch --watch for the interactive flow.",
        ],
        [
          "Where is the library documentation?",
          "Visit ytsearch.js documentation at ytsearch.rjryt.com.",
        ],
      ].map((x) => (
        <details>
          <summary>{x[0]}</summary>
          <p>{x[1]}</p>
        </details>
      ))}
    </main>
  );
}
function AppShell() {
  return <App />;
}
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);
