import { useState } from "react";

const AdminPanel = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [emergencyOn, setEmergencyOn] = useState(false);

  // SIDEBAR
  const sidebarItems = [
    "Dashboard",
    "Departments",
    "All Queues",
    "Tokens & Rules",
    "Staff Management",
    "Reports & Analytics",
    "Emergency Control",
  ];

  // DASHBOARD DATA
  const dashboardStats = [
    { title: "Patients Today", value: 142 },
    { title: "Tokens Generated", value: 160 },
    { title: "Active Departments", value: 6 },
    { title: "Avg Waiting Time", value: "15 mins" },
  ];

  // DEPARTMENTS DATA
  const departments = [
    { name: "OPD", nowServing: "A-21", waiting: 18 },
    { name: "Cardiology", nowServing: "C-09", waiting: 7 },
    { name: "Pediatrics", nowServing: "P-04", waiting: 4 },
  ];

  // ALL QUEUES DATA
  const queues = [
    { token: "A-21", dept: "OPD", status: "Serving" },
    { token: "A-22", dept: "OPD", status: "Waiting" },
    { token: "C-09", dept: "Cardiology", status: "Serving" },
    { token: "P-04", dept: "Pediatrics", status: "Serving" },
  ];

  // TOKEN RULES
  const tokenRules = [
    { rule: "Max tokens per hour", value: 40 },
    { rule: "Emergency priority", value: "Enabled" },
    { rule: "Avg service time", value: "5 mins" },
  ];

  // STAFF DATA
  const staff = [
    { name: "Dr. Sharma", role: "Doctor", dept: "Cardiology" },
    { name: "Nurse Anjali", role: "Nurse", dept: "OPD" },
    { name: "Admin Ravi", role: "Queue Admin", dept: "Pediatrics" },
  ];

  // REPORT DATA
  const reports = [
    { title: "Most Busy Dept", value: "OPD" },
    { title: "Peak Time", value: "10 AM - 12 PM" },
    { title: "Avg Token Completion", value: "14 mins" },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {dashboardStats.map((s, i) => (
              <Card key={i} title={s.title} value={s.value} />
            ))}
          </div>
        );

      case "Departments":
        return (
          <Table
            headers={["Department", "Now Serving", "Waiting"]}
            rows={departments.map(d => [d.name, d.nowServing, d.waiting])}
          />
        );

      case "All Queues":
        return (
          <Table
            headers={["Token", "Department", "Status"]}
            rows={queues.map(q => [q.token, q.dept, q.status])}
          />
        );

      case "Tokens & Rules":
        return (
          <div className="space-y-3">
            {tokenRules.map((r, i) => (
              <div key={i} className="bg-white p-4 rounded shadow">
                <strong>{r.rule}</strong> : {r.value}
              </div>
            ))}
          </div>
        );

      case "Staff Management":
        return (
          <Table
            headers={["Name", "Role", "Department"]}
            rows={staff.map(s => [s.name, s.role, s.dept])}
          />
        );

      case "Reports & Analytics":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reports.map((r, i) => (
              <Card key={i} title={r.title} value={r.value} />
            ))}
          </div>
        );

      case "Emergency Control":
        return (
          <div className="bg-red-50 p-6 rounded border">
            <h2 className="text-xl font-bold text-red-600 mb-4">
              Emergency Mode
            </h2>
            <button
              onClick={() => setEmergencyOn(!emergencyOn)}
              className={`px-4 py-2 rounded text-white ${
                emergencyOn ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {emergencyOn ? "Emergency ON" : "Activate Emergency"}
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* NAVBAR */}
      <header className="bg-blue-900 text-white px-6 py-3 flex justify-between">
        <h1 className="font-semibold">Hospital Super Admin</h1>
        <button className="bg-red-500 px-3 py-1 rounded">Logout</button>
      </header>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-64 bg-white border-r p-4">
          {sidebarItems.map(item => (
            <div
              key={item}
              onClick={() => setActiveMenu(item)}
              className={`p-2 rounded cursor-pointer mb-1
                ${
                  activeMenu === item
                    ? "bg-blue-100 font-semibold"
                    : item === "Emergency Control"
                    ? "text-red-600 hover:bg-red-50"
                    : "hover:bg-blue-50"
                }
              `}
            >
              ▶ {item}
            </div>
          ))}
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

/* SMALL REUSABLE UI */
const Card = ({ title, value }) => (
  <div className="bg-white p-4 rounded shadow">
    <p className="text-sm text-gray-500">{title}</p>
    <h3 className="text-2xl font-bold">{value}</h3>
  </div>
);

const Table = ({ headers, rows }) => (
  <table className="w-full bg-white rounded shadow overflow-hidden">
    <thead className="bg-gray-200">
      <tr>
        {headers.map((h, i) => (
          <th key={i} className="p-2 text-left">{h}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, i) => (
        <tr key={i} className="border-t">
          {row.map((cell, j) => (
            <td key={j} className="p-2">{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default AdminPanel;
