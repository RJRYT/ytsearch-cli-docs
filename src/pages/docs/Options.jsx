import PageHero from "../../components/PageHero.jsx";
import { globalOptions } from "../../data/commands.js";
export default function Options() {
  return (
    <>
      <PageHero
        eyebrow="OPTIONS"
        title="Control YTSearch CLI with global flags."
        description="Reference the limit, sort, mode, JSON, and watch options supported by the v1.2.3 command-line interface."
        crumbs={[
          { label: "Docs", to: "/docs/" },
          { label: "Options", to: "/docs/options/" },
        ]}
      />
      <div className="table">
        {globalOptions.map((o) => (
          <div key={o.name}>
            <div>
              <code>{o.short}</code> <code>{o.name}</code>
              {o.value && (
                <>
                  {" "}
                  <code>{o.value}</code>
                </>
              )}
            </div>
            <span>
              {o.description}. Default: <code>{o.default}</code>
              {o.values && (
                <>
                  . Values: <code>{o.values.join(", ")}</code>
                </>
              )}
            </span>
          </div>
        ))}
      </div>
      <p>
        Interactive search has an additional <code>json</code> choice in its
        mode selector; normal <code>--mode</code> accepts default, compact,
        online, and detailed.
      </p>
    </>
  );
}
