import { Menu, Search, Bell, ChevronDown } from "lucide-react";

export default function Topbar({ setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-20 bg-bg/80 backdrop-blur border-b border-border">
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Mobile hamburger */}
        <button className="lg:hidden btn btn-secondary p-2" onClick={() => setSidebarOpen(true)}>
          <Menu className="w-5 h-5" />
        </button>

        {/* Search */}
        <div className="relative flex-1 max-w-xl">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            placeholder="Search lines, machines, alerts, reports…"
            className="w-full bg-bg-subtle border border-border rounded-xl pl-10 pr-4 py-2
                       outline-none focus:ring-2 focus:ring-brand"
          />
        </div>

        {/* Actions */}
        <button className="btn btn-secondary p-2">
          <Bell className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 rounded-xl border border-border px-2 py-1">
          <div className="w-8 h-8 rounded-full bg-brand grid place-items-center text-white font-bold">P</div>
          <span className="text-sm">Pamli</span>
          <ChevronDown className="w-4 h-4 text-text-muted" />
        </div>
      </div>
    </header>
  );
}
