import { Phone, User, Timer } from "lucide-react";
import React from "react";

function CurrentPatient({ currentPatient }) {

  // 👉 NO PATIENT STATE
  if (!currentPatient) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center ">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <User className="text-[#0055ff]" size={28} />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">
         There is no patient in the queue
        </h2>
      </div>
    );
  }

  // 👉 NORMAL STATE
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-[#0055ff] bg-opacity-10 rounded-full flex items-center justify-center">
            <User className="text-[#0055ff]" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Current Patient Details
            </h2>
            <p className="text-sm text-gray-500">
              Token: {currentPatient.token}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">Patient Name</p>
          <p className="text-lg font-semibold text-gray-800">
            {currentPatient.patientData.name}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Age / Gender</p>
          <p className="text-lg font-semibold text-gray-800">
            {currentPatient.patientData.age} /{" "}
            {currentPatient.patientData.gender || "NA"}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Visit Type</p>
          <p className="text-lg font-semibold text-gray-800">
            {currentPatient.patientData.visitType}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Estimated Duration</p>
          <p className="text-lg font-semibold text-gray-800">
            {currentPatient.estimatedDuration} mins
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3 text-gray-700">
          <Phone size={18} className="text-[#0055ff]" />
          <span className="text-sm">
            {currentPatient.patientData.contactNumber}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentPatient;
