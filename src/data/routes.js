export const SITE = {
  name: "YTSearch CLI",
  packageName: "ytsearch-cli",
  version: "1.2.3",
  domain: "https://ytsearch-cli.rjryt.com",
  description:
    "A command-line interface for searching YouTube videos, channels, playlists, movies, and live streams with ytsearch.js.",
  repository: "https://github.com/RJRYT/ytsearch-cli",
  github: "https://github.com/RJRYT",
  npm: "https://www.npmjs.com/package/ytsearch-cli",
  library: "https://ytsearch.rjryt.com",
  portfolio: "https://rjryt.com",
  node: ">=14.0.0",
};

const commandMeta = {
  search: [
    "Search YouTube from the command line",
    "Search across YouTube videos, channels, playlists, movies, and live streams with one CLI command.",
  ],
  video: [
    "YouTube video search from the terminal",
    "Search YouTube videos from your terminal with sorting, result limits, display modes, JSON output, and pagination.",
  ],
  channel: [
    "YouTube channel search from the terminal",
    "Find YouTube channels from the command line with formatted output or machine-readable JSON.",
  ],
  playlist: [
    "YouTube playlist search from the terminal",
    "Search YouTube playlists from your terminal and inspect playlist results with configurable output.",
  ],
  movie: [
    "YouTube movie search from the terminal",
    "Search YouTube movies from the command line using the movie search command in YTSearch CLI.",
  ],
  live: [
    "YouTube live stream search from the terminal",
    "Find YouTube livestreams from the command line using YTSearch CLI and ytsearch.js.",
  ],
  details: [
    "YouTube video details from the terminal",
    "Retrieve detailed metadata for a YouTube video, including channel, views, duration, upload date, URL, and availability state.",
  ],
  "playlist-videos": [
    "YouTube playlist videos from the terminal",
    "Fetch videos from a YouTube playlist with pagination, limits, formatted output, or JSON.",
  ],
};

export const routes = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "weekly",
    title: "YTSearch CLI — YouTube Search from Your Terminal",
    description: SITE.description,
    type: "website",
  },
  {
    path: "/docs/",
    priority: "0.9",
    changefreq: "weekly",
    title: "YTSearch CLI Documentation — Commands, Options and Usage",
    description:
      "Complete YTSearch CLI documentation for installing the package, searching YouTube, using commands, output modes, JSON, pagination, errors, and interactive mode.",
    type: "article",
  },
  {
    path: "/docs/installation/",
    priority: "0.8",
    changefreq: "monthly",
    title: "Install YTSearch CLI — npm, Node.js and Compatibility",
    description:
      "Install YTSearch CLI globally with npm, check Node.js compatibility, and verify the ytsearch command in your terminal.",
    type: "article",
  },
  {
    path: "/docs/quick-start/",
    priority: "0.9",
    changefreq: "monthly",
    title: "YTSearch CLI Quick Start — Your First YouTube Search",
    description:
      "Start using YTSearch CLI in minutes: install the package, run a YouTube search, inspect results, and open the command reference.",
    type: "article",
  },
  ...Object.entries(commandMeta).map(([slug, [title, description]]) => ({
    path: `/docs/commands/${slug}/`,
    priority: "0.8",
    changefreq: "monthly",
    title: `${title} — YTSearch CLI`,
    description,
    type: "article",
    command: slug,
  })),
  {
    path: "/docs/options/",
    priority: "0.8",
    changefreq: "monthly",
    title: "YTSearch CLI Options — limit, sort, mode, json and watch",
    description:
      "Reference for YTSearch CLI global options including --limit, --sort, --mode, --json, and --watch with defaults and supported values.",
    type: "article",
  },
  {
    path: "/docs/display-modes/",
    priority: "0.7",
    changefreq: "monthly",
    title: "YTSearch CLI Display Modes — default, compact, online and detailed",
    description:
      "Learn how YTSearch CLI formats results with default, compact, online, and detailed display modes.",
    type: "article",
  },
  {
    path: "/docs/json/",
    priority: "0.8",
    changefreq: "monthly",
    title: "YTSearch CLI JSON Output — Automation and Machine-Readable Results",
    description:
      "Use the --json option with YTSearch CLI to produce raw JSON suitable for scripts, pipelines, automation, and other terminal tools.",
    type: "article",
  },
  {
    path: "/docs/interactive-mode/",
    priority: "0.7",
    changefreq: "monthly",
    title: "YTSearch CLI Interactive Mode — ytsearch --watch",
    description:
      "Use ytsearch --watch to launch the interactive YTSearch CLI flow for searches, details, playlist videos, settings, and pagination.",
    type: "article",
  },
  {
    path: "/docs/pagination/",
    priority: "0.7",
    changefreq: "monthly",
    title: "YTSearch CLI Pagination — Search and Playlist Pages",
    description:
      "Understand next-page behavior in YTSearch CLI search and playlist commands and how pagination prompts work.",
    type: "article",
  },
  {
    path: "/docs/errors/",
    priority: "0.7",
    changefreq: "monthly",
    title: "YTSearch CLI Errors — YtSearchError and Validation",
    description:
      "Reference common YTSearch CLI errors, invalid YouTube IDs, invalid playlists, error formats, and troubleshooting hints.",
    type: "article",
  },
  {
    path: "/docs/compatibility/",
    priority: "0.7",
    changefreq: "monthly",
    title: "YTSearch CLI Compatibility — Node.js and Package Support",
    description:
      "Check YTSearch CLI Node.js requirements, package compatibility, CommonJS packaging, and the relationship with ytsearch.js.",
    type: "article",
  },
  {
    path: "/guides/",
    priority: "0.8",
    changefreq: "monthly",
    title: "YTSearch CLI Guides — Search, JSON Automation and Workflows",
    description:
      "Practical YTSearch CLI guides for terminal search, automation, JSON pipelines, interactive mode, and playlist workflows.",
    type: "article",
  },
  {
    path: "/changelog/",
    priority: "0.7",
    changefreq: "monthly",
    title: "YTSearch CLI Changelog — Release History",
    description:
      "Release history for YTSearch CLI, including v1.2.3, v1.2.2, v1.2.1, v1.2.0, v1.1.0, and the initial release.",
    type: "article",
  },
  {
    path: "/faq/",
    priority: "0.7",
    changefreq: "monthly",
    title: "YTSearch CLI FAQ — Frequently Asked Questions",
    description:
      "Answers to common questions about YTSearch CLI installation, Node.js support, YouTube API requirements, JSON output, interactive mode, and ytsearch.js.",
    type: "article",
  },
  {
    path: "/404/",
    title: "Page Not Found — YTSearch CLI",
    description:
      "The requested YTSearch CLI documentation page could not be found.",
    type: "website",
    noindex: true,
  },
];

export function getRoute(pathname) {
  const normalized =
    pathname === "/" ? "/" : `${pathname.replace(/\/+$/, "")}/`;
  return (
    routes.find((r) => r.path === normalized) ||
    routes.find((r) => r.path === "/404/")
  );
}
