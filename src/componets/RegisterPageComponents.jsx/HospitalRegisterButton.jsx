import React from "react";
import { Building2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HospitalRegisterButton() {
  const navigate = useNavigate();

  return (
    <div className="border border-dashed border-indigo-300 bg-indigo-50 rounded-xl p-5 text-center space-y-3">

      {/* Icon */}
      <div className="flex justify-center">
        <div className="p-3 bg-white rounded-full shadow-sm">
          <Building2 className="text-indigo-600" />
        </div>
      </div>

      {/* Text */}
      <div>
        <p className="text-sm text-gray-700 font-medium">
          Want to manage a hospital?
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Register your hospital and get full admin access
        </p>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/hospital-registration")}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
      >
        Register Your Hospital
        <ArrowRight size={16} />
      </button>

    </div>
  );
}

export default HospitalRegisterButton;
