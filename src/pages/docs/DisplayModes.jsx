import PageHero from "../../components/PageHero.jsx";
import { displayModes } from "../../data/commands.js";
export default function DisplayModes() {
  return (
    <>
      <PageHero
        eyebrow="DISPLAY MODES"
        title="Choose how results are displayed."
        description="YTSearch CLI supports four normal formatted output modes: default, compact, online, and detailed."
        crumbs={[
          { label: "Docs", to: "/docs/" },
          { label: "Display modes", to: "/docs/display-modes/" },
        ]}
      />
      <div className="modeGrid">
        {displayModes.map(([name, desc]) => (
          <div key={name}>
            <code>--mode {name}</code>
            <p>{desc}</p>
          </div>
        ))}
      </div>
      <h2>Example</h2>
      <pre className="terminalSnippet">
        ytsearch video "node js" --mode detailed
      </pre>
      <p>
        Interactive search also exposes <code>json</code> as a mode choice. For
        the normal CLI flag, JSON is selected with <code>--json</code>.
      </p>
    </>
  );
}
