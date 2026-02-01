import React, { useState } from "react";
import { FaCheckCircle, FaSignal, FaClock, FaUsers, FaUserPlus } from "react-icons/fa";

const TokenHeroDashboard = () => {
  const [tokenInfo] = useState({
    tokenNumber: "A-26",
    department: "OPD",
    hospital: "City Hospital",
  });

  const [queueInfo] = useState({
    nowServing: "A-23",
    patientsAhead: 3,
    estimatedWait: 8, // in mins
    totalWait: 15, // for progress circle
    isRunning: true,
  });

  const handleRefresh = () => alert("Status refreshed!");
  const handleCancel = () => alert("Token canceled!");
  const handleRegister = () => alert("Redirect to Register page!");

  // Calculate progress percentage
  const progress = Math.min((queueInfo.estimatedWait / queueInfo.totalWait) * 100, 100);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Patient Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Token Info Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <div className="relative">
            <FaCheckCircle className="text-green-500 text-7xl mb-4" />
            <div className="absolute top-2 right-2 w-5 h-5 bg-green-400 rounded-full animate-ping"></div>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-green-700">Token Confirmed</h2>
          <div className="w-36 h-36 bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-600 rounded-full mb-4 shadow-inner">
            {tokenInfo.tokenNumber}
          </div>
          <p className="font-semibold">Department: {tokenInfo.department}</p>
          <p className="font-semibold">Hospital: {tokenInfo.hospital}</p>
        </div>

        {/* Queue Status Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaSignal className={`${queueInfo.isRunning ? "text-green-500 animate-pulse" : "text-gray-400"} text-2xl`} />
            Queue Status
          </h2>

          {/* Circular progress */}
          <div className="relative w-32 h-32 mb-4">
            <svg className="transform -rotate-90" width="128" height="128">
              <circle
                cx="64"
                cy="64"
                r="60"
                stroke="#e5e7eb"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="64"
                cy="64"
                r="60"
                stroke="#3b82f6"
                strokeWidth="12"
                fill="none"
                strokeDasharray={2 * Math.PI * 60}
                strokeDashoffset={2 * Math.PI * 60 * (1 - progress / 100)}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
              {queueInfo.estimatedWait} min
            </div>
          </div>

          <p><FaClock className="inline mr-2 text-blue-600" />Now Serving: {queueInfo.nowServing}</p>
          <p><FaUsers className="inline mr-2 text-yellow-600" />Patients Ahead: {queueInfo.patientsAhead}</p>
        </div>

        {/* Actions Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4 hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold mb-2">Actions</h2>
          <button
            onClick={handleRefresh}
            className="bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Refresh Status
          </button>
          <button
            onClick={handleCancel}
            className="bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Cancel Token
          </button>
          <button
            onClick={handleRegister}
            className="bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 flex items-center justify-center gap-2 transition"
          >
            <FaUserPlus /> Register
          </button>
        </div>

        {/* Other Info Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-2 hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold mb-2">Other Information</h2>
          <p className="font-semibold">Hospital Timings: 9 AM – 8 PM</p>
          <p className="font-semibold">Help Desk: 1800-XXX-XXX</p>
        </div>

      </div>
    </div>
  );
};

export default TokenHeroDashboard;
