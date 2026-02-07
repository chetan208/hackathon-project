import React from "react";
import { Building2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HospitalAdminSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-5">

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-indigo-100 rounded-lg">
          <Building2 className="text-indigo-600" />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Hospital Admin Access
          </h2>
          <p className="text-sm text-gray-600">
            You manage the hospital and its departments.
          </p>
        </div>
      </div>

      {/* Limited Info */}
      <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
        <ul className="list-disc list-inside space-y-1">
          <li>Manage all hospital departments</li>
          <li>Monitor queues and staff</li>
          <li>Access detailed analytics from dashboard</li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="pt-2">
        <button
          onClick={() => navigate("/hospital/dashboard")}
          className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Go to Hospital Dashboard
          <ArrowRight size={18} />
        </button>
      </div>

    </div>
  );
};

export default HospitalAdminSection;
