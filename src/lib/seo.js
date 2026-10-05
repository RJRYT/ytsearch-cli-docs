export function absoluteUrl(path) {
  const base = "https://ytsearch-cli.rjryt.com";
  return `${base}${path === "/" ? "/" : path.replace(/\/+$/, "") + "/"}`;
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function jsonLdForRoute(route) {
  const url = absoluteUrl(route.path);
  const base = {
    "@context": "https://schema.org",
    "@type": route.path === "/" ? "WebSite" : "TechArticle",
    name: route.title,
    description: route.description,
    url,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "YTSearch CLI",
      url: absoluteUrl("/"),
    },
    publisher: { "@type": "Person", name: "RJRYT", url: "https://rjryt.com/" },
  };
  if (route.path !== "/") {
    base.headline = route.title;
    base.about = {
      "@type": "SoftwareApplication",
      name: "ytsearch-cli",
      applicationCategory: "DeveloperApplication",
    };
  }
  return JSON.stringify(base);
}
