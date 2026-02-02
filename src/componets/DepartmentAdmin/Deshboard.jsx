import React, { useState } from "react";
import {
  Activity,
  Users,
  Calendar,
  Stethoscope,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import DepartmentDashboard from "./components/Deshboard";
import LiveQueue from "./components/QueueList";
import TokenList from "./components/TokenList";
import DoctorAvailability from "./components/DoctarAvlability";
import Reports from "./components/Reports";

const SmartQueue = () => {
  const [activetab, setActiveTab] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: Activity },
    { name: "Live Queue", icon: Users },
    { name: "Token List", icon: Calendar },
    { name: "Doctor Availability", icon: Stethoscope },
    { name: "Reports", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex mt-10">
      
      {/* SIDEBAR */}
      <aside
        className={`
          bg-white border-r shadow-sm px-3 py-6 pt-12
          transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (
            <h2 className="text-lg font-bold text-blue-600">
              OPD Department
            </h2>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* NAV */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = activetab === item.name;

            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`
                  w-full flex items-center gap-3 px-3 py-3 rounded-lg
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                  }
                `}
              >
                <item.icon size={20} className="shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        {activetab === "Dashboard" && <DepartmentDashboard />}
        {activetab === "Live Queue" && <LiveQueue />}
        {activetab === "Token List" && <TokenList />}
        {activetab === "Doctor Availability" && <DoctorAvailability />}
        {activetab === "Reports" && <Reports />}
      </main>
    </div>
  );
};

export default SmartQueue;
