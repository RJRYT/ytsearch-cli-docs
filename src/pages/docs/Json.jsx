import PageHero from "../../components/PageHero.jsx";
import CodeBlock from "../../components/CodeBlock.jsx";
export default function Json() {
  return (
    <>
      <PageHero
        eyebrow="JSON OUTPUT"
        title="Use YTSearch CLI in automation pipelines."
        description="The --json flag switches supported commands from formatted terminal output to raw JSON, making results easier to consume in scripts and tooling."
        crumbs={[
          { label: "Docs", to: "/docs/" },
          { label: "JSON output", to: "/docs/json/" },
        ]}
      />
      <h2>Search JSON</h2>
      <CodeBlock>ytsearch video "javascript" --json</CodeBlock>
      <h2>Playlist JSON</h2>
      <CodeBlock>ytsearch playlist-videos PLxxxxxxxx --json</CodeBlock>
      <h2>Why use it?</h2>
      <ul>
        <li>Pipe machine-readable results into other programs.</li>
        <li>Avoid parsing human-oriented tables.</li>
        <li>Keep CLI workflows reproducible for scripts and automation.</li>
      </ul>
      <p>
        The package contract defines JSON as{" "}
        <code>JSON.stringify(results, null, 2)</code> for search and the
        corresponding playlist page object for playlist-videos.
      </p>
    </>
  );
}
