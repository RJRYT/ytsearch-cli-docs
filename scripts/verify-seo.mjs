import fs from "node:fs";
import path from "node:path";
const dist = path.join(process.cwd(), "dist");
const expected = [
  "index.html",
  "docs/index.html",
  "docs/installation/index.html",
  "docs/quick-start/index.html",
  "docs/commands/video/index.html",
  "docs/commands/channel/index.html",
  "docs/commands/playlist/index.html",
  "docs/commands/movie/index.html",
  "docs/commands/live/index.html",
  "docs/commands/details/index.html",
  "docs/commands/playlist-videos/index.html",
  "docs/options/index.html",
  "docs/display-modes/index.html",
  "docs/json/index.html",
  "docs/interactive-mode/index.html",
  "docs/pagination/index.html",
  "docs/errors/index.html",
  "docs/compatibility/index.html",
  "guides/index.html",
  "changelog/index.html",
  "faq/index.html",
  "404.html",
  "sitemap.xml",
  "robots.txt",
];
let failed = 0;
for (const rel of expected) {
  const p = path.join(dist, rel);
  if (!fs.existsSync(p)) {
    console.error(`Missing: ${rel}`);
    failed++;
    continue;
  }
  if (rel.endsWith(".html")) {
    const h = fs.readFileSync(p, "utf8");
    for (const marker of [
      "<title>",
      '<meta name="description"',
      '<meta name="robots"',
      '<link rel="canonical"',
      "application/ld+json",
    ]) {
      if (!h.includes(marker)) {
        console.error(`Missing ${marker} in ${rel}`);
        failed++;
      }
    }
    if (!h.includes('data-ssr="true"')) {
      console.error(`Missing SSR markup in ${rel}`);
      failed++;
    }
  }
}
if (failed) {
  process.exitCode = 1;
  console.error(`SEO verification failed with ${failed} issue(s).`);
} else
  console.log(
    `SEO verification passed: ${expected.length} expected build artifacts checked.`
  );
