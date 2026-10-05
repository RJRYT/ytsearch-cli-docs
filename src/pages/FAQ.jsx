import PageHero from "../components/PageHero.jsx";
const items = [
  [
    "Does YTSearch CLI require a YouTube Data API key?",
    "The CLI is powered by ytsearch.js for its YouTube search workflow and the package contract does not require a YouTube Data API key.",
  ],
  [
    "Which Node.js versions are supported?",
    "YTSearch CLI v1.2.3 requires Node.js 14 or newer.",
  ],
  [
    "Can I get JSON output?",
    "Yes. Supported commands accept --json for raw machine-readable JSON output.",
  ],
  [
    "Is interactive mode available?",
    "Yes. Run ytsearch --watch or ytsearch -w.",
  ],
  [
    "What search types are supported?",
    "The CLI supports any/all search, videos, channels, playlists, movies, and live streams.",
  ],
  [
    "Where is the underlying library documented?",
    "The command-line package is powered by ytsearch.js. See the ytsearch.js documentation for the programmatic API.",
  ],
];
export default function FAQ() {
  return (
    <main className="articlePage">
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        description="Answers about installation, supported Node.js versions, YouTube search types, JSON output, interactive mode, and the ytsearch.js relationship."
        crumbs={[{ label: "FAQ", to: "/faq/" }]}
      />
      <div className="faqList">
        {items.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
