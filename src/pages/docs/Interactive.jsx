import PageHero from "../../components/PageHero.jsx";
import CodeBlock from "../../components/CodeBlock.jsx";
export default function Interactive() {
  return (
    <>
      <PageHero
        eyebrow="INTERACTIVE MODE"
        title="Use ytsearch --watch for a guided CLI flow."
        description="Interactive watch mode provides a menu-driven terminal experience for searches, video details, playlist videos, settings, and exit control."
        crumbs={[
          { label: "Docs", to: "/docs/" },
          { label: "Interactive mode", to: "/docs/interactive-mode/" },
        ]}
      />
      <CodeBlock>ytsearch --watch</CodeBlock>
      <CodeBlock>ytsearch -w</CodeBlock>
      <h2>Main menu</h2>
      <p>
        Video, channel, playlist, movie, live, details, playlist-videos, any,
        settings, and exit are available in the interactive menu.
      </p>
      <h2>Search settings</h2>
      <p>
        Interactive search supports default, compact, online, detailed, and JSON
        output choices, with a limit range of 10–50 and the same sorting values
        as normal search.
      </p>
      <p>Ctrl+C exits the interactive flow.</p>
    </>
  );
}
