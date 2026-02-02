import React, { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  UserRound,
  Users,
  Ticket,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Deshboard from "./components/Deshboard";
import Doctors from "./components/Docters";

const HospitalAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Doctors", icon: Building2 },
    { name: "Staff", icon: UserRound },
    { name: "Token System", icon: Users },
    { name: "Reports", icon: Ticket },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* SIDEBAR */}
      <aside
        className={`
          bg-white border-r shadow-sm px-3 py-6 pt-25
          transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (
            <h2 className="text-xl font-bold text-blue-600">
              City Hospital
            </h2>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          >
            {collapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
        </div>

        {/* NAV */}
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <li key={item.name}>
                <button
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
              </li>
            );
          })}
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 mt-10">
        {activeTab === "Dashboard" && <Deshboard />}
        {activeTab === "Doctors" && <Doctors/>}
        {activeTab === ""}
      </main>
    </div>
  );
};

export default HospitalAdminDashboard;
