export default function SectionHeader({ title, children }) {
  return (
    <div className="split-head">
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
