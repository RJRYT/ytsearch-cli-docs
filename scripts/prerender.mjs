import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";
import React from "react";
import { renderToString } from "react-dom/server";

const root = process.cwd();
const dist = path.join(root, "dist");
const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
const { Root } = await vite.ssrLoadModule("/src/main.jsx");
const { routes, SITE } = await vite.ssrLoadModule("/src/data/routes.js");
const { absoluteUrl, escapeHtml, jsonLdForRoute } = await vite.ssrLoadModule(
  "/src/lib/seo.js"
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const script =
  template.match(/<script type="module"[^>]+src="([^"]+)"/)?.[1] ||
  "/src/main.jsx";
const stylesheet =
  [...template.matchAll(/<link[^>]+href="([^"]+\.css)"[^>]*>/g)].map(
    (m) => m[1]
  )[0] || null;

function head(route) {
  const canonical = absoluteUrl(route.path);
  const robots = route.noindex
    ? "noindex,follow"
    : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";
  return `
    <meta name="description" content="${escapeHtml(route.description)}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="${route.type || "article"}" />
    <meta property="og:site_name" content="YTSearch CLI" />
    <meta property="og:title" content="${escapeHtml(route.title)}" />
    <meta property="og:description" content="${escapeHtml(
      route.description
    )}" />
    <meta property="og:url" content="${canonical}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(route.title)}" />
    <meta name="twitter:description" content="${escapeHtml(
      route.description
    )}" />
    <script type="application/ld+json">${jsonLdForRoute(route)}</script>`;
}

function html(route, markup) {
  const themeScript = `(function(){try{var t=localStorage.getItem('ytcli-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.dataset.theme='dark';else document.documentElement.dataset.theme='light'}catch(e){}})();`;
  return template
    .replace('<html lang="en">', '<html lang="en">')
    .replace(
      /<head>[\s\S]*?<\/head>/,
      `<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><meta name="theme-color" content="#0b0d12"/><meta name="color-scheme" content="dark light"/><meta name="generator" content="YTSearch CLI documentation"/>    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /><link rel="manifest" href="/site.webmanifest" /><title>${escapeHtml(route.title)}</title>${head(route)}${
        stylesheet
          ? `<link rel="stylesheet" crossorigin href="${stylesheet}"/>`
          : ""
      }</head>`
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root" data-ssr="true">${markup}</div>`
    )
    .replace(
      /<script type="module" src="[^"]+"><\/script>/,
      `<script>${themeScript}</script><script type="module" crossorigin src="${script}"></script>`
    );
}

for (const route of routes) {
  const markup = renderToString(
    React.createElement(Root, { ssrPath: route.path })
  );
  const relative =
    route.path === "/"
      ? "index.html"
      : path.join(
          route.path.replace(/^\//, "").replace(/\/$/, ""),
          "index.html"
        );
  const target = path.join(dist, relative);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html(route, markup));
}

fs.writeFileSync(
  path.join(dist, "404.html"),
  fs.readFileSync(path.join(dist, "404/index.html"), "utf8")
);
const sitemapUrls = routes
  .filter((r) => !r.noindex)
  .map(
    (r) =>
      `  <url>\n    <loc>${absoluteUrl(
        r.path
      )}</loc>\n    <lastmod>2026-09-23T00:00:00Z</lastmod>\n    <changefreq>${
        r.changefreq || "monthly"
      }</changefreq>\n    <priority>${r.priority || "0.5"}</priority>\n  </url>`
  )
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`
);
fs.writeFileSync(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\nDisallow: /404/\nSitemap: ${SITE.domain}/sitemap.xml\n`
);
await vite.close();
console.log(
  `Prerendered ${routes.length} routes; generated sitemap.xml, robots.txt and 404.html.`
);
