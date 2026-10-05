import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import DocLayout from "./components/DocLayout.jsx";
import Home from "./pages/Home.jsx";
import DocsIndex from "./pages/docs/Index.jsx";
import Installation from "./pages/docs/Installation.jsx";
import QuickStart from "./pages/docs/QuickStart.jsx";
import Command from "./pages/docs/Command.jsx";
import Options from "./pages/docs/Options.jsx";
import DisplayModes from "./pages/docs/DisplayModes.jsx";
import Json from "./pages/docs/Json.jsx";
import Interactive from "./pages/docs/Interactive.jsx";
import Pagination from "./pages/docs/Pagination.jsx";
import Errors from "./pages/docs/Errors.jsx";
import Compatibility from "./pages/docs/Compatibility.jsx";
import Guides from "./pages/Guides.jsx";
import Changelog from "./pages/Changelog.jsx";
import FAQ from "./pages/FAQ.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route element={<DocLayout />}>
          <Route path="docs/" element={<DocsIndex />} />
          <Route path="docs/installation/" element={<Installation />} />
          <Route path="docs/quick-start/" element={<QuickStart />} />
          <Route path="docs/commands/:slug/" element={<Command />} />
          <Route path="docs/options/" element={<Options />} />
          <Route path="docs/display-modes/" element={<DisplayModes />} />
          <Route path="docs/json/" element={<Json />} />
          <Route path="docs/interactive-mode/" element={<Interactive />} />
          <Route path="docs/pagination/" element={<Pagination />} />
          <Route path="docs/errors/" element={<Errors />} />
          <Route path="docs/compatibility/" element={<Compatibility />} />
        </Route>
        <Route path="guides/" element={<Guides />} />
        <Route path="changelog/" element={<Changelog />} />
        <Route path="faq/" element={<FAQ />} />
        <Route path="404/" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
