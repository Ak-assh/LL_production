import { useState } from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import ProductionPage from "./pages/ProductionPage";

// Keep full menu to lock layout now; others show placeholder.
export const MENU = [
  "Overview",
  "Production",
  "Downtime & Losses",
  "Quality",
  "Assembly Recon",
  "Inventory",
  "Logistics",
  "Scheduler",
  "AI Hub",
  "Alerts & Briefs",
  "Reports",
  "Admin & Setup",
];

export default function App() {
  const [active, setActive] = useState("Production");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    if (active === "Production") return <ProductionPage />;
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-2">{active}</h1>
        <p className="text-text-muted">Coming soon. For now, build Production UI.</p>
      </div>
    );
  };

  return (
    <DashboardLayout
      active={active}
      onSelect={setActive}
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    >
      {renderPage()}
    </DashboardLayout>
  );
}
