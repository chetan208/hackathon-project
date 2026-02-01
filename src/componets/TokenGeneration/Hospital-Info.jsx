import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TokenPage = () => {
  // Dummy hospital data
  const hospital = {
    name: "City Hospital",
    department: "OPD",
    address: "123, Main Street, City Name",
  };

  // Patient form state
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [visitType, setVisitType] = useState("new");

  const navigate = useNavigate()

  // Generate token handler
  const handleGenerateToken = () => {
    navigate("/token-status-page")
  };

  // Today's date
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4 mt-16">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow overflow-hidden flex flex-col md:flex-row mt-10 ">
        {/* Left side: Hospital + Form */}
        <div className="md:w-1/2 p-6 border-r md:border-r md:border-gray-200">
          {/* Hospital Info */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">{hospital.name}</h1>
            <p className="text-gray-600 mb-1">Department: {hospital.department}</p>
            <p className="text-gray-700">{hospital.address}</p>
            <p className="text-gray-700 mt-1">Today’s Date: {today}</p>
          </div>

          {/* Patient Form */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Patient Details</h2>
            <div className="mb-3">
              <label className="block text-gray-700 mb-1">Patient Name</label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter patient name"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 mb-1">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter age"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 mb-1">Mobile Number</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter mobile number"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 mb-1">Visit Type</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    value="new"
                    checked={visitType === "new"}
                    onChange={(e) => setVisitType(e.target.value)}
                  />
                  New Patient
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    value="follow-up"
                    checked={visitType === "follow-up"}
                    onChange={(e) => setVisitType(e.target.value)}
                  />
                  Follow-up
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Queue info + Action */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          {/* Queue Info */}
          <div className="mb-6 bg-gray-50 p-4 rounded border">
            <h2 className="text-xl font-semibold mb-3">Queue Information (Real-Time)</h2>
            <p className="mb-2">Current Token Serving: A-21</p>
            <p className="mb-2">Total Patients Ahead: 5</p>
            <p>Estimated Wait Time: 12 mins</p>
          </div>

          {/* Important Notice */}
          <div className="mb-6 bg-yellow-50 p-4 rounded border">
            <h2 className="text-xl font-semibold mb-2">Important Notice</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Token valid only for today</li>
              <li>Please arrive before your turn</li>
            </ul>
          </div>

          {/* Action Button */}
          <button
            onClick={handleGenerateToken}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
          >
            Generate Token
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenPage;
