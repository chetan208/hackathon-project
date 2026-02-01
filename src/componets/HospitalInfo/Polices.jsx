// components/HospitalPolicies.jsx
import React from "react";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

const policies = [
  { text: "Emergency cases get priority", type: "alert" },
  { text: "Online token valid for today only", type: "info" },
  { text: "Follow hospital timings strictly", type: "info" },
  { text: "Wear masks inside hospital premises", type: "alert" },
];

const HospitalPolicies = () => {
  return (
    <div className="w-[90%] mx-auto mt-12 mb-20">
      <div className="border-2 border-gray-300 rounded-xl bg-gradient-to-r from-blue-50 to-white shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 border-b pb-2">
          HOSPITAL POLICIES / NOTES
        </h2>
        <ul className="space-y-4">
          {policies.map((policy, index) => (
            <li key={index} className="flex items-center gap-3">
              {policy.type === "alert" ? (
                <ExclamationCircleIcon className="w-6 h-6 text-red-500" />
              ) : (
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
              )}
              <span className="text-gray-700 font-medium">{policy.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HospitalPolicies;
