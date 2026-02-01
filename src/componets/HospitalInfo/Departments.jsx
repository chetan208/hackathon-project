// components/Departments.jsx
import React from "react";

const departments = [
  { id: 1, name: "OPD", queue: 10, waitTime: 15 },
  { id: 2, name: "Cardiology", queue: 6, waitTime: 20 },
  { id: 3, name: "Pediatrics", queue: 4, waitTime: 8 },
  { id: 4, name: "Neurology", queue: 3, waitTime: 12 },
  { id: 5, name: "Orthopedics", queue: 5, waitTime: 18 },
  { id: 6, name: "Dermatology", queue: 2, waitTime: 10 },
];
 
const Departments = () => {
  return (
    <div className="mt-12 w-[90%] mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center border-b pb-2">
        DEPARTMENTS AVAILABLE
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center hover:shadow-xl transition-all duration-300"
          >
            {/* Placeholder for Department Image */}
            <div className="w-full h-32 bg-gray-200 border-2 border-gray-300 rounded-lg flex items-center justify-center mb-4">
              <span className="text-lg font-semibold text-gray-600">
                {dept.name} Image
              </span>
            </div>

            {/* Department Info */}
            <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
            <p className="text-gray-700 mb-1">Current Queue: {dept.queue}</p>
            <p className="text-gray-700 mb-4">Est. Wait Time: {dept.waitTime} mins</p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View Queue
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                Get Token
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
