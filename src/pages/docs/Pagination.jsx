import PageHero from "../../components/PageHero.jsx";
import CodeBlock from "../../components/CodeBlock.jsx";
export default function Pagination() {
  return (
    <>
      <PageHero
        eyebrow="PAGINATION"
        title="Load more YouTube search and playlist results."
        description="Search and playlist commands expose pagination through the underlying ytsearch.js page APIs and prompt when another page is available."
        crumbs={[
          { label: "Docs", to: "/docs/" },
          { label: "Pagination", to: "/docs/pagination/" },
        ]}
      />
      <h2>Search pagination</h2>
      <CodeBlock>ytsearch video "react"</CodeBlock>
      <p>
        When another page is available, the CLI can prompt{" "}
        <code>Load next page?</code> and continue through the underlying{" "}
        <code>SearchResult.nextPage()</code> flow.
      </p>
      <h2>Playlist pagination</h2>
      <p>
        The playlist-videos command uses playlist page pagination through{" "}
        <code>PlaylistPage.nextPage()</code>. Its command-specific default limit
        is 50.
      </p>
    </>
  );
}
