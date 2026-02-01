import { useState } from "react";

const DepartmentAdminPanel = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [nowServing, setNowServing] = useState("A-21");

  // SIDEBAR
  const sidebarItems = [
    "Dashboard",
    "Live Queue",
    "Token List",
    "Doctor Availability",
    "Reports",
  ];

  // DASHBOARD DATA
  const dashboardData = {
    department: "OPD",
    nowServing: nowServing,
    waiting: 12,
    avgTime: "14 mins",
  };

  // QUEUE DATA
  const [queue, setQueue] = useState([
    { token: "A-21", name: "Ramesh", status: "Serving" },
    { token: "A-22", name: "Suresh", status: "Waiting" },
    { token: "A-23", name: "Ankit", status: "Waiting" },
  ]);

  // DOCTORS
  const doctors = [
    { name: "Dr. Verma", status: "Available" },
    { name: "Dr. Singh", status: "Busy" },
  ];

  // REPORTS
  const reports = [
    { title: "Patients Today", value: 58 },
    { title: "Avg Service Time", value: "6 mins" },
    { title: "Peak Hour", value: "11 AM - 1 PM" },
  ];

  // ACTIONS
  const nextToken = () => {
    const next = queue.find(q => q.status === "Waiting");
    if (!next) return;

    setQueue(queue.map(q =>
      q.token === nowServing
        ? { ...q, status: "Completed" }
        : q.token === next.token
        ? { ...q, status: "Serving" }
        : q
    ));
    setNowServing(next.token);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card title="Department" value={dashboardData.department} />
            <Card title="Now Serving" value={dashboardData.nowServing} />
            <Card title="Patients Waiting" value={dashboardData.waiting} />
            <Card title="Avg Waiting Time" value={dashboardData.avgTime} />
          </div>
        );

      case "Live Queue":
        return (
          <div className="space-y-4">
            <Table
              headers={["Token", "Patient Name", "Status"]}
              rows={queue.map(q => [q.token, q.name, q.status])}
            />

            <div className="flex gap-3">
              <Button text="Next Token" onClick={nextToken} />
              <Button text="Skip" />
              <Button text="Hold" />
              <Button text="Priority Token" danger />
            </div>
          </div>
        );

      case "Token List":
        return (
          <Table
            headers={["Token", "Patient", "Status"]}
            rows={queue.map(q => [q.token, q.name, q.status])}
          />
        );

      case "Doctor Availability":
        return (
          <div className="space-y-3">
            {doctors.map((d, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded shadow flex justify-between"
              >
                <span>{d.name}</span>
                <span
                  className={`font-semibold ${
                    d.status === "Available"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {d.status}
                </span>
              </div>
            ))}
          </div>
        );

      case "Reports":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reports.map((r, i) => (
              <Card key={i} title={r.title} value={r.value} />
            ))}
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
        <h1 className="font-semibold">
          Department Admin (OPD)
        </h1>
        <button className="bg-red-500 px-3 py-1 rounded">Logout</button>
      </header>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-64 bg-white border-r p-4">
          {sidebarItems.map(item => (
            <div
              key={item}
              onClick={() => setActiveTab(item)}
              className={`p-2 rounded cursor-pointer mb-1
                ${
                  activeTab === item
                    ? "bg-blue-100 font-semibold"
                    : "hover:bg-blue-50"
                }
              `}
            >
              ▶ {item}
            </div>
          ))}
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

/* SMALL UI PARTS */
const Card = ({ title, value }) => (
  <div className="bg-white p-4 rounded shadow">
    <p className="text-sm text-gray-500">{title}</p>
    <h3 className="text-2xl font-bold">{value}</h3>
  </div>
);

const Table = ({ headers, rows }) => (
  <table className="w-full bg-white rounded shadow">
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

const Button = ({ text, onClick, danger }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded text-white
      ${danger ? "bg-red-600" : "bg-blue-600"}
    `}
  >
    {text}
  </button>
);

export default DepartmentAdminPanel;
