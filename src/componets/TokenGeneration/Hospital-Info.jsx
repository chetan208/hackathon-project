import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  AlertCircle, 
  User, 
  Phone, 
  Hash,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

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

  const navigate = useNavigate();

  // Generate token handler
  const handleGenerateToken = () => {
    if (!patientName || !age || !mobile) {
      alert("Please fill in all required fields");
      return;
    }
    navigate("/token-status-page");
  };

  // Today's date
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0055ff] to-[#0044cc] bg-clip-text text-transparent mb-3">
            Generate Your Token
          </h1>
          <p className="text-gray-600">Fill in your details to get started</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Hospital Info & Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hospital Information Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[#0055ff] to-[#0044cc] p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{hospital.name}</h2>
                    <div className="space-y-2 text-blue-50">
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">Department: {hospital.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{hospital.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{today}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Building2 className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Details Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#0055ff] to-[#0044cc] rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span>Patient Details</span>
              </h3>

              <div className="space-y-5">
                {/* Patient Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Patient Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0055ff] focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                      placeholder="Enter patient name"
                    />
                  </div>
                </div>

                {/* Age and Mobile Number Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Age */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Age <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Hash className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0055ff] focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                        placeholder="Enter age"
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0055ff] focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                        placeholder="Enter mobile number"
                        maxLength="10"
                      />
                    </div>
                  </div>
                </div>

                {/* Visit Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Visit Type <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label
                      className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        visitType === "new"
                          ? "border-[#0055ff] bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        value="new"
                        checked={visitType === "new"}
                        onChange={(e) => setVisitType(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            visitType === "new"
                              ? "border-[#0055ff] bg-[#0055ff]"
                              : "border-gray-300"
                          }`}
                        >
                          {visitType === "new" && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span
                          className={`font-semibold ${
                            visitType === "new" ? "text-[#0055ff]" : "text-gray-700"
                          }`}
                        >
                          New Patient
                        </span>
                      </div>
                    </label>

                    <label
                      className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        visitType === "follow-up"
                          ? "border-[#0055ff] bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        value="follow-up"
                        checked={visitType === "follow-up"}
                        onChange={(e) => setVisitType(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            visitType === "follow-up"
                              ? "border-[#0055ff] bg-[#0055ff]"
                              : "border-gray-300"
                          }`}
                        >
                          {visitType === "follow-up" && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span
                          className={`font-semibold ${
                            visitType === "follow-up" ? "text-[#0055ff]" : "text-gray-700"
                          }`}
                        >
                          Follow-up
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Queue Info & Actions */}
          <div className="lg:col-span-1 space-y-6">
            {/* Real-Time Queue Information */}
            <div className="bg-gradient-to-br from-[#0055ff] to-[#0044cc] rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Live Queue Status</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-green-100">Live</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-100 mb-1">Currently Serving</p>
                      <p className="text-2xl font-bold">A-21</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-100 mb-1">Patients Ahead</p>
                      <p className="text-2xl font-bold">5</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-100 mb-1">Estimated Wait</p>
                      <p className="text-2xl font-bold">12 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg border-2 border-amber-200 p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Important Notice</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm">Token is valid only for today</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm">Please arrive before your turn</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm">Keep your mobile phone accessible</p>
                </div>
              </div>
            </div>

            {/* Generate Token Button */}
            <button
              onClick={handleGenerateToken}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Generate Token</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Tips Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📋 Before You Proceed</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="w-8 h-8 bg-[#0055ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Double Check Details</p>
                <p className="text-sm text-gray-600">Ensure all information is correct before generating token</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="w-8 h-8 bg-[#0055ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Save Token Number</p>
                <p className="text-sm text-gray-600">Note down your token for future reference</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="w-8 h-8 bg-[#0055ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Monitor Status</p>
                <p className="text-sm text-gray-600">Track queue updates in real-time on the next page</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenPage;