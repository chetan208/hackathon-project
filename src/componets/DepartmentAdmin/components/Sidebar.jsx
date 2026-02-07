import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'

function Sidebar(
    { menuItems, activetab, setActiveTab, collapsed, setCollapsed }
) {
  return (
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
  )
}

export default Sidebar
