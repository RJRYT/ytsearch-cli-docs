import { Outlet } from "react-router-dom";
import DocSidebar from "./DocSidebar.jsx";
export default function DocLayout() {
  return (
    <main className="docsShell">
      <DocSidebar />
      <article className="docArticle">
        <Outlet />
      </article>
    </main>
  );
}
