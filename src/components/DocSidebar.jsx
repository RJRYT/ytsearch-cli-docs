import { NavLink } from "react-router-dom";
import { commands } from "../data/commands.js";
const base = [
  ["Quick start", "/docs/quick-start/"],
  ["Installation", "/docs/installation/"],
  ["Options", "/docs/options/"],
  ["Display modes", "/docs/display-modes/"],
  ["JSON output", "/docs/json/"],
  ["Interactive mode", "/docs/interactive-mode/"],
  ["Pagination", "/docs/pagination/"],
  ["Errors", "/docs/errors/"],
  ["Compatibility", "/docs/compatibility/"],
];
export default function DocSidebar() {
  return (
    <aside className="docSidebar">
      <span className="eyebrow">DOCUMENTATION</span>
      {base.map(([label, to]) => (
        <NavLink key={to} to={to}>
          {label}
        </NavLink>
      ))}
      <span className="eyebrow sidebarGap">COMMANDS</span>
      {commands.map((c) => (
        <NavLink key={c.slug} to={`/docs/commands/${c.slug}/`}>
          {c.label}
        </NavLink>
      ))}
    </aside>
  );
}
