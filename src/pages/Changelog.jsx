import { changelog } from "../data/changelog.js";
import PageHero from "../components/PageHero.jsx";
export default function Changelog() {
  return (
    <main className="articlePage">
      <PageHero
        eyebrow="RELEASE HISTORY"
        title="YTSearch CLI changelog."
        description="A repository-derived history of the CLI from the initial release through v1.2.3."
        crumbs={[{ label: "Changelog", to: "/changelog/" }]}
      />
      <div className="releaseList">
        {changelog.map((x, i) => (
          <article className="release" key={i}>
            <div>
              <strong>v{x[0]}</strong>
              <small>{x[1]}</small>
            </div>
            <div>
              <span className={`tag ${x[2]}`}>{x[2]}</span>
              <p>{x[3]}</p>
              <a
                href="https://github.com/RJRYT/ytsearch-cli/commits/main"
                target="_blank"
                rel="noreferrer"
              >
                View repository history ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
