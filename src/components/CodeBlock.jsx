export default function CodeBlock({ children }) {
  const value =
    typeof children === "string" ? children : String(children ?? "");
  return (
    <div className="codeBlock">
      <span>$</span>
      <code>{value}</code>
      <button onClick={() => navigator.clipboard?.writeText(value)}>
        Copy
      </button>
    </div>
  );
}
