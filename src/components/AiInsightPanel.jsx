/**
 * AI Insight Panel
 * - Now adapts messaging to selected role and date.
 * - Keep it simple for MVP; wire to real AI/API later.
 */
export default function AiInsightPanel({ role = "Operator", date = "" }) {
  const roleHint =
    role === "Operator"   ? "Actionable steps for the current shift."
  : role === "Supervisor" ? "Prioritize lines with biggest impact today."
  :                         "High-level summary for decision-making.";

  const dateLabel = date ? new Date(date).toLocaleDateString() : "Today";

  return (
    <div className="card p-5 h-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">AI Insight Panel</h3>
        <span className="text-xs text-text-muted">{dateLabel}</span>
      </div>

      <div className="text-xs text-text-muted mb-3">Role: <span className="text-text">{role}</span> • {roleHint}</div>

      <div className="space-y-3 text-sm">
        <div className="p-3 rounded-xl bg-bg-subtle">
          <div className="font-medium">Prioritized KPIs</div>
          <div className="text-text-muted">
            Focus: OEE variance driven by changeovers on Line 2.
          </div>
        </div>
        <div className="p-3 rounded-xl bg-bg-subtle">
          <div className="font-medium">Predictive signals (next 4h)</div>
          <div className="text-text-muted">Bottleneck risk ↑ on Line 2; expected OEE −3.2%.</div>
        </div>
        <div className="p-3 rounded-xl bg-bg-subtle">
          <div className="font-medium">Suggested actions</div>
          <ul className="list-disc ml-5 text-text-muted">
            {role === "Operator" && (
              <>
                <li>Prepare tools earlier for next changeover.</li>
                <li>Flag minor stops {'>'} 2 min in log.</li>

              </>
            )}
            {role === "Supervisor" && (
              <>
                <li>Reassign Setup B crew for next 2 hours.</li>
                <li>Pull forward 20-min preventive maintenance.</li>
              </>
            )}
            {role === "Manager/CEO" && (
              <>
                <li>Review daily plan adherence vs last week.</li>
                <li>Confirm spare availability for Line 2 key station.</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
