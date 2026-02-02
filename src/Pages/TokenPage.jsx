import React, { useState, useEffect } from "react";
import { CheckCircle, Clock, Users, RefreshCw, X, UserPlus, Activity, Phone, Calendar } from "lucide-react";

const PatientDashboard = () => {
  const [tokenInfo] = useState({
    tokenNumber: "A-26",
    department: "OPD",
    hospital: "City Hospital",
  });

  const [queueInfo, setQueueInfo] = useState({
    nowServing: "A-23",
    patientsAhead: 3,
    estimatedWait: 8,
    totalWait: 15,
    isRunning: true,
  });

  const [pulseAnimation, setPulseAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    alert("Status refreshed!");
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel your token?")) {
      alert("Token canceled!");
    }
  };

  const handleRegister = () => {
    alert("Redirect to Register page!");
  };

  const progress = Math.min((queueInfo.estimatedWait / queueInfo.totalWait) * 100, 100);
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="min-h-screen bg-gradient-to-br mt-16 from-blue-50 via-white to-indigo-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Queue Overview
          </h2>
          <p className="text-gray-600">Save Your Time. Track Your Queue in Real-Time.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Token Confirmed Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-br from-[#0055ff] to-[#0044cc] p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Token Status</h3>
                  <div className={`${pulseAnimation ? 'scale-110' : 'scale-100'} transition-transform duration-500`}>
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Confirmed</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center shadow-inner">
                      <span className="text-4xl font-bold bg-gradient-to-br from-[#0055ff] to-[#0044cc] bg-clip-text text-transparent">
                        {tokenInfo.tokenNumber}
                      </span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Your Token</h4>
                  <p className="text-gray-500 text-sm">Keep this number handy</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-sm">Department</span>
                    <span className="font-semibold text-gray-900">{tokenInfo.department}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-sm">Hospital</span>
                    <span className="font-semibold text-gray-900">{tokenInfo.hospital}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Queue Status & Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Queue Status Card */}
            <div className="bg-white rounded-2xl shadow-lg  transition-all duration-300 p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#0055ff] to-[#0044cc] rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <span>Queue Status</span>
                </h3>
                {queueInfo.isRunning && (
                  <div className="flex items-center space-x-2 bg-green-50 px-3 py-1.5 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 text-sm font-medium">Active</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Circular Progress */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-36 h-36">
                    <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0055ff" />
                          <stop offset="100%" stopColor="#0044cc" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Clock className="w-6 h-6 text-[#0055ff] mb-1" />
                      <span className="text-2xl font-bold text-gray-900">{queueInfo.estimatedWait}</span>
                      <span className="text-xs text-gray-500">minutes</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">Estimated Wait</p>
                </div>

                {/* Queue Info */}
                <div className="sm:col-span-2 space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Clock className="w-5 h-5 text-[#0055ff]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Now Serving</p>
                        <p className="text-2xl font-bold text-[#0055ff]">{queueInfo.nowServing}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Users className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Patients Ahead</p>
                        <p className="text-2xl font-bold text-amber-600">{queueInfo.patientsAhead}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions & Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Actions Card */}
              <div className="bg-white rounded-2xl shadow-lg  transition-all duration-300 p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={handleRefresh}
                    className="w-full bg-gradient-to-r from-[#0055ff] to-[#0044cc] text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-98 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <RefreshCw className="w-5 h-5" />
                    <span>Refresh Status</span>
                  </button>

                  <button
                    onClick={handleCancel}
                    className="w-full bg-white border-2 border-red-500 text-red-500 py-3 px-4 rounded-xl font-semibold hover:bg-red-50 hover:scale-98 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <X className="w-5 h-5" />
                    <span>Cancel Token</span>
                  </button>

                  <button
                    onClick={handleRegister}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-98 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <UserPlus className="w-5 h-5" />
                    <span>New Registration</span>
                  </button>
                </div>
              </div>

              {/* Hospital Info Card */}
              <div className="bg-gradient-to-br from-[#0055ff] to-[#0044cc] rounded-2xl shadow-lg  transition-all duration-300 p-6 text-white">
                <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span>Hospital Information</span>
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">Operating Hours</span>
                    </div>
                    <p className="text-lg font-bold">9:00 AM – 8:00 PM</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-medium">Help Desk</span>
                    </div>
                    <p className="text-lg font-bold">1800-XXX-XXX</p>
                    <button className="mt-2 text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg transition-colors">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Helpful Tips</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-start space-x-2">
              <div className="w-5 h-5 bg-[#0055ff] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">1</span>
              </div>
              <p>Arrive 5 minutes before your estimated time</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-5 h-5 bg-[#0055ff] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">2</span>
              </div>
              <p>Keep your token number ready for verification</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-5 h-5 bg-[#0055ff] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">3</span>
              </div>
              <p>Refresh status regularly for real-time updates</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;