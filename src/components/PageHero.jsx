import Breadcrumbs from "./Breadcrumbs.jsx";
export default function PageHero({ eyebrow, title, description, crumbs = [] }) {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <div className="pageHero">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </>
  );
}
