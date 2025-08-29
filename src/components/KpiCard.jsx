export default function KpiCard({ label, value, trend }) {
  const isUp = trend?.dir === "up";
  return (
    <div className="card p-5">
      <div className="text-text-muted text-sm">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      {trend && (
        <div className={`mt-3 inline-flex items-center gap-2 rounded-lg px-2 py-1 text-xs
                         ${isUp ? "bg-green-500/10 text-green-400" : "bg-danger/10 text-danger"}`}>
          <span className="font-medium">{isUp ? "▲" : "▼"} {trend.value}</span>
          <span className="text-text-muted">vs last 7d</span>
        </div>
      )}
    </div>
  );
}
