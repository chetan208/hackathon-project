import React from "react";
import {
  Users,
  UserCog,
  ClipboardList,
  ShieldCheck,
  Stethoscope,
  Ambulance,
  Monitor,
} from "lucide-react";

const staffDepartments = [
  {
    name: "Nursing Staff",
    icon: Users,
    count: 18,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Reception",
    icon: ClipboardList,
    count: 6,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Pharmacy",
    icon: Stethoscope,
    count: 5,
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Lab Technicians",
    icon: Monitor,
    count: 7,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Security",
    icon: ShieldCheck,
    count: 4,
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Ambulance Staff",
    icon: Ambulance,
    count: 3,
    color: "bg-indigo-100 text-indigo-600",
  },
];

const Staff = () => {
  return (
    <div>
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Staff Overview
        </h1>
        <p className="text-gray-500 text-sm">
          Department wise hospital staff
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffDepartments.map((staff) => (
          <div
            key={staff.name}
            className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {staff.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Total Staff
                </p>
              </div>

              <div
                className={`p-3 rounded-full ${staff.color}`}
              >
                <staff.icon size={26} />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <UserCog className="text-gray-400" size={20} />
              <span className="text-3xl font-bold text-gray-800">
                {staff.count}
              </span>
              <span className="text-gray-500 text-sm mt-2">
                Members
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
