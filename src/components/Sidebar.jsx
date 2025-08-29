import {
  LayoutDashboard, Factory, Activity, AlertTriangle, PackageSearch,
  Boxes, Truck, CalendarClock, Bot, Bell, FileText, Settings
} from "lucide-react";

const iconByName = {
  "Overview": LayoutDashboard,
  "Production": Factory,
  "Downtime & Losses": Activity,
  "Quality": AlertTriangle,
  "Assembly Recon": PackageSearch,
  "Inventory": Boxes,
  "Logistics": Truck,
  "Scheduler": CalendarClock,
  "AI Hub": Bot,
  "Alerts & Briefs": Bell,
  "Reports": FileText,
  "Admin & Setup": Settings,
};

export default function Sidebar({ items, active, onSelect, sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}
        onClick={() => setSidebarOpen(false)}
      />
      {/* Drawer */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-72 bg-bg-surface border-r border-border p-4
                    lg:translate-x-0 transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="w-8 h-8 rounded-lg bg-brand grid place-items-center font-bold">LL</div>
          <div className="font-semibold">Logic Leap</div>
        </div>

        <nav className="mt-4 space-y-1">
          {items.map((label) => {
            const Icon = iconByName[label] || LayoutDashboard;
            const isActive = active === label;
            return (
              <button
                key={label}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm
                  ${isActive ? "bg-brand text-white" : "hover:bg-bg-subtle text-text-muted"}`}
                onClick={() => { onSelect(label); setSidebarOpen(false); }}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
