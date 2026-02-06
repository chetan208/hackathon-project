import React, { useState } from "react";
import { Stethoscope, AlertCircle, ChevronDown, CheckCircle2, Heart, Baby, Brain, Bone, Smile } from "lucide-react";

// Icon mapping
const iconComponents = {
  Stethoscope,
  Heart,
  Baby,
  Brain,
  Bone,
  Smile,
  AlertCircle,
};

const DepartmentSelector = ({ departments, selectedDepartment, setSelectedDepartment ,setSelectedDepartmentId}) => {
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [error, setError] = useState("");

  const selectedDeptData = departments.find(
    d => d.original.toLowerCase() === selectedDepartment.toLowerCase()
  );

  const handleSelectDepartment = (dept) => {
  
    setSelectedDepartmentId(dept.id);
    setSelectedDepartment(dept.original);
    setShowDepartmentDropdown(false);
    setError("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-[#0055ff] to-[#0044cc] rounded-lg flex items-center justify-center">
          <Stethoscope className="w-5 h-5 text-white" />
        </div>
        <span>Select Department</span>
      </h3>

      {departments.length === 0 ? (
        <div className="text-center py-8">
          <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-600">No departments available for this hospital</p>
        </div>
      ) : (
        <div className="relative">
          {/* Custom Dropdown */}
          <button
            onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}
            className={`w-full p-4 border-2 rounded-xl text-left flex items-center justify-between transition-all ${
              error
                ? "border-red-300 bg-red-50"
                : selectedDepartment
                ? "border-[#0055ff] bg-blue-50"
                : "border-gray-200 hover:border-gray-300 bg-white"
            }`}
          >
            <div className="flex items-center space-x-3">
              {selectedDeptData ? (
                <>
                  <div className="w-8 h-8 bg-gradient-to-br from-[#0055ff] to-[#0044cc] rounded-lg flex items-center justify-center">
                    {React.createElement(iconComponents[selectedDeptData.icon] || Stethoscope, {
                      className: "w-4 h-4 text-white"
                    })}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{selectedDeptData.name}</p>
                    <p className="text-xs text-gray-600">{selectedDeptData.doctors} doctors available</p>
                  </div>
                </>
              ) : (
                <span className="text-gray-500">Choose a department...</span>
              )}
            </div>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform ${
                showDepartmentDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {showDepartmentDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#0055ff] rounded-xl shadow-xl z-50">
              <div className="max-h-80 overflow-y-auto">
                {departments.map((dept) => {
                  const DeptIcon = iconComponents[dept.icon] || Stethoscope;
                  return (
                    <button
                      key={dept.id}
                      onClick={() => handleSelectDepartment(dept)}
                      className={`w-full px-4 py-4 text-left flex items-center space-x-3 transition-all border-b border-gray-100 last:border-b-0 hover:bg-blue-50 ${
                        selectedDepartment === dept.original ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#0055ff] to-[#0044cc] rounded-lg flex items-center justify-center flex-shrink-0">
                        <DeptIcon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{dept.name}</p>
                        <p className="text-xs text-gray-600">{dept.doctors} doctors • {dept.status}</p>
                      </div>
                      {selectedDepartment === dept.original && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {error && (
            <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default DepartmentSelector;