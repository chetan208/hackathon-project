import React from "react";
import {
  Stethoscope,
  HeartPulse,
  Baby,
  Brain,
  Eye,
  Bone,
  UserRound,
} from "lucide-react";

const departments = [
 
  {
    name: "Orthopedics",
    icon: Bone,
    doctors: 6,
    color: "bg-yellow-100 text-yellow-600",
  },
];

const Doctors = ({departments}) => {
  return (
    <div>
      {/* PAGE HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Doctors Overview
        </h1>
        <p className="text-gray-500 text-sm">
          Department wise available doctors
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div
            key={dept.name}
            className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {dept.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Total Doctors
                </p>
              </div>

              <div
                className={`p-3 rounded-full`}
              >
                {/* <dept.icon size={26} /> */}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <UserRound className="text-gray-400" size={20} />
              <span className="text-3xl font-bold text-gray-800">
                {dept.Doctors.length}
              </span>
              <span className="text-gray-500 text-sm mt-2">
                Doctors
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
