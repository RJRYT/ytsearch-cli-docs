# YTSearch CLI website

React + Vite documentation site for `ytsearch-cli`, prerendered to static HTML for GitHub Pages.

## Architecture

- Componentized React UI under `src/components/` and `src/pages/`
- Route/content metadata in `src/data/routes.js`
- CLI contract mirrored from `public/spec/v1.2.3.json`
- Build-time React SSR/prerender in `scripts/prerender.mjs`
- Build-time sitemap and robots generation
- Static `404.html` for GitHub Pages
- Per-route title, description, canonical, robots, Open Graph, Twitter and JSON-LD metadata
- SEO artifact verification with `npm run verify:seo`

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run verify:seo
```

The final `dist/` directory contains one HTML entry point per documentation route, `sitemap.xml`, `robots.txt`, `404.html`, and the bundled assets.
