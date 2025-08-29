import { useState } from "react";
import KpiCard from "../components/KpiCard";
import ChartPlaceholder from "../components/ChartPlaceholder";
import AiInsightPanel from "../components/AiInsightPanel";

export default function ProductionPage() {
  // --- NEW: Role + Date state ---
  const [role, setRole] = useState("Operator"); // Operator | Supervisor | Manager/CEO
  const [date, setDate] = useState("");         // yyyy-mm-dd

  // Existing basic filters (kept simple for MVP)
  const [plant, setPlant] = useState("Plant A");
  const [line, setLine]   = useState("Line 1");

  const kpis = [
    { label: "Plan vs Actual (Today)", value: "98.4% / 92.1%", trend: { dir: "down", value: "1.2%" } },
    { label: "Downtime (min)", value: "46", trend: { dir: "down", value: "8" } },
    { label: "Changeovers", value: "5", trend: { dir: "up", value: "1" } },
    { label: "FPY", value: "94.8%", trend: { dir: "up", value: "0.7%" } },
  ];

  const applyFilters = () => {
    // In future: fetch KPIs/charts using { role, date, plant, line }
    console.log({ role, date, plant, line });
  };

  return (
    <div className="space-y-6">
      {/* Row 0: Role + Date (requested: above 'Production') */}
      <div className="card p-4 flex flex-col md:flex-row md:items-center gap-3">
        {/* Role selector */}
        <label className="flex items-center gap-2 text-sm">
          <span className="text-text-muted">Role</span>
          <select
            aria-label="Select user role"
            className="bg-bg-subtle border border-border rounded-xl px-3 py-2 text-sm"
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            <option>Operator</option>
            <option>Supervisor</option>
            <option>Manager/CEO</option>
          </select>
        </label>

        {/* Date selector (single-day) */}
        <label className="flex items-center gap-2 text-sm">
          <span className="text-text-muted">Date</span>
          <input
            aria-label="Select date"
            type="date"
            className="bg-bg-subtle border border-border rounded-xl px-3 py-2 text-sm"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </label>
      </div>

      {/* Row 1: Title + Plant/Line filters */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold">Production</h1>
        <div className="flex gap-2">
          <select
            aria-label="Select plant"
            className="bg-bg-subtle border border-border rounded-xl px-3 py-2 text-sm"
            value={plant}
            onChange={e => setPlant(e.target.value)}
          >
            <option>Plant A</option><option>Plant B</option>
          </select>

          <select
            aria-label="Select line"
            className="bg-bg-subtle border border-border rounded-xl px-3 py-2 text-sm"
            value={line}
            onChange={e => setLine(e.target.value)}
          >
            <option>Line 1</option><option>Line 2</option><option>Line 3</option>
          </select>

          <button className="btn btn-primary" onClick={applyFilters}>Apply</button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map(k => <KpiCard key={k.label} {...k} />)}
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="space-y-4 xl:col-span-2">
          <ChartPlaceholder title="Shift Output (Good / Rework / Scrap)" height={240} />
          <ChartPlaceholder title="Downtime by Reason (MTTR trend)" height={220} />
          <ChartPlaceholder title="Changeovers (Planned vs Actual)" height={220} />
          <ChartPlaceholder title="First Pass Yield (SPC-like bands)" height={220} />
        </div>

        {/* Right column: AI insights react to role/date */}
        <div className="xl:col-span-1">
          <AiInsightPanel role={role} date={date} />
        </div>
      </div>
    </div>
  );
}
