import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("ytcli-theme");
    if (stored === "light") setDark(false);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("ytcli-theme", dark ? "dark" : "light");
  }, [dark]);
  return (
    <button
      className="iconBtn"
      onClick={() => setDark((v) => !v)}
      aria-label="Toggle dark and light theme"
      title="Toggle theme"
    >
      {dark ? "☀" : "☾"}
    </button>
  );
}
