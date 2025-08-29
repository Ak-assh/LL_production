export default function ChartPlaceholder({ title, height = 260 }) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-xs text-text-muted">Chart placeholder</span>
      </div>
      <div
        className="rounded-xl border border-dashed border-border grid place-items-center text-text-muted"
        style={{ height }}
      >
        (Your chart goes here)
      </div>
    </div>
  );
}
