import { Link } from "react-router-dom";
export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">YTSearch CLI</Link>
      {items.map((x, i) => (
        <span key={i}>
          / <Link to={x.to}>{x.label}</Link>
        </span>
      ))}
    </nav>
  );
}
