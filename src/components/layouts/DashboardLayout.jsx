import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { MENU } from "../App";

export default function DashboardLayout({
  children, active, onSelect, sidebarOpen, setSidebarOpen
}) {
  return (
    <div className="min-h-screen">
      <Sidebar
        items={MENU}
        active={active}
        onSelect={onSelect}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="lg:pl-72">
        <Topbar setSidebarOpen={setSidebarOpen} />
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
