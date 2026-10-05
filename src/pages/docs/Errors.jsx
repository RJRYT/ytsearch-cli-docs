import PageHero from "../../components/PageHero.jsx";
import CodeBlock from "../../components/CodeBlock.jsx";
export default function Errors() {
  return (
    <>
      <PageHero
        eyebrow="ERRORS"
        title="Understand YTSearch CLI errors."
        description="Learn the error format and validation hints used for invalid YouTube video IDs, playlist IDs, and unexpected failures."
        crumbs={[
          { label: "Docs", to: "/docs/" },
          { label: "Errors", to: "/docs/errors/" },
        ]}
      />
      <h2>Error format</h2>
      <CodeBlock>
        INVALID_VIDEO: Please provide a valid YouTube video ID
      </CodeBlock>
      <h2>Known codes</h2>
      <div className="table">
        <div>
          <code>INVALID_VIDEO</code>
          <span>Invalid or missing YouTube video ID.</span>
        </div>
        <div>
          <code>INVALID_PLAYLIST</code>
          <span>Invalid or missing YouTube playlist ID.</span>
        </div>
        <div>
          <code>YtSearchError</code>
          <span>
            The known package error type used for structured CLI errors.
          </span>
        </div>
      </div>
      <h2>Hints</h2>
      <p>
        For video errors, the package contract suggests <code>dQw4w9WgXcQ</code>{" "}
        as an example of a valid video ID. For playlist errors, it provides{" "}
        <code>PL4QNnZJr8sRPEJPqe7jZnsLPTBu1E3nIY</code> as an example.
      </p>
    </>
  );
}
