import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Users, 
  Clock, 
  Pause,
  Play,
  SkipForward,
  ChevronsRight,
  User,
  Calendar,
  Timer,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Phone,
  MapPin,
  FileText
} from 'lucide-react';

const DepartmentDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPaused, setIsPaused] = useState(false);
  const [currentToken, setCurrentToken] = useState('A-21');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Dummy Data
  const departmentData = {
    name: 'Cardiology Department',
    code: 'CARD',
    currentToken: 'A-21',
    patientsWaiting: 12,
    avgWaitingTime: 14, // in minutes
    tokensServedToday: 45,
    doctorsAvailable: 3
  };

  const currentPatient = {
    tokenNumber: 'A-21',
    name: 'Rajesh Kumar',
    age: 45,
    gender: 'Male',
    appointmentType: 'Follow-up',
    phoneNumber: '+91 98765 43210',
    address: 'Hamirpur, HP',
    issueTime: '10:30 AM',
    arrivalTime: '10:25 AM',
    estimatedDuration: 15, // minutes
    notes: 'Chest pain follow-up consultation'
  };

  const waitingQueue = [
    { token: 'A-22', name: 'Priya Sharma', waitTime: 14, type: 'Consultation' },
    { token: 'A-23', name: 'Amit Singh', waitTime: 28, type: 'Follow-up' },
    { token: 'A-24', name: 'Sunita Devi', waitTime: 42, type: 'New Patient' },
    { token: 'A-25', name: 'Vikram Mehta', waitTime: 56, type: 'Consultation' },
    { token: 'A-26', name: 'Anjali Rao', waitTime: 70, type: 'Follow-up' }
  ];

  const handleSkipToken = () => {
    alert(`Token ${currentToken} has been skipped`);
    // Logic to skip token
  };

  const handleNextToken = () => {
    const currentIndex = parseInt(currentToken.split('-')[1]);
    const nextTokenNumber = `A-${currentIndex + 1}`;
    setCurrentToken(nextTokenNumber);
    // Logic to move to next token
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0055ff] to-[#0088ff] rounded-xl flex items-center justify-center shadow-lg">
                <Activity className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{departmentData.name}</h1>
                <p className="text-gray-500 flex items-center space-x-2 mt-1">
                  <span className="text-sm">Department Code: {departmentData.code}</span>
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-green-600 font-medium">Active</span>
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Current Time</p>
              <p className="text-2xl font-bold text-gray-800 font-mono">
                {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </p>
              <p className="text-xs text-gray-400">{currentTime.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {/* Now Serving */}
          <div className="bg-gradient-to-br from-[#0055ff] to-[#0088ff] rounded-xl shadow-lg p-6 text-white col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-2">
              <Activity size={20} />
              <p className="text-sm font-medium opacity-90">Now Serving</p>
            </div>
            <p className="text-4xl font-bold mb-1">{departmentData.currentToken}</p>
            <p className="text-xs opacity-75">Token Number</p>
          </div>

          {/* Patients Waiting */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center space-x-2 mb-2">
              <Users size={20} className="text-orange-600" />
              <p className="text-sm font-medium text-gray-600">Patients Waiting</p>
            </div>
            <p className="text-4xl font-bold text-gray-800 mb-1">{departmentData.patientsWaiting}</p>
            <p className="text-xs text-gray-500">In Queue</p>
          </div>

          {/* Avg Waiting Time */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center space-x-2 mb-2">
              <Clock size={20} className="text-purple-600" />
              <p className="text-sm font-medium text-gray-600">Avg Wait Time</p>
            </div>
            <p className="text-4xl font-bold text-gray-800 mb-1">{departmentData.avgWaitingTime}</p>
            <p className="text-xs text-gray-500">Minutes</p>
          </div>

          {/* Tokens Served */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle size={20} className="text-green-600" />
              <p className="text-sm font-medium text-gray-600">Served Today</p>
            </div>
            <p className="text-4xl font-bold text-gray-800 mb-1">{departmentData.tokensServedToday}</p>
            <p className="text-xs text-gray-500">Tokens</p>
          </div>

          {/* Doctors Available */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center space-x-2 mb-2">
              <Activity size={20} className="text-blue-600" />
              <p className="text-sm font-medium text-gray-600">Doctors On Duty</p>
            </div>
            <p className="text-4xl font-bold text-gray-800 mb-1">{departmentData.doctorsAvailable}</p>
            <p className="text-xs text-gray-500">Available</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Token Details - Left Side (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Patient Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#0055ff] bg-opacity-10 rounded-full flex items-center justify-center">
                    <User className="text-[#0055ff]" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Current Patient Details</h2>
                    <p className="text-sm text-gray-500">Token: {currentPatient.tokenNumber}</p>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-full ${isPaused ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                  <span className="text-sm font-semibold">{isPaused ? 'Paused' : 'Active'}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Patient Name</p>
                  <p className="text-lg font-semibold text-gray-800">{currentPatient.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Age / Gender</p>
                  <p className="text-lg font-semibold text-gray-800">{currentPatient.age} / {currentPatient.gender}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Appointment Type</p>
                  <p className="text-lg font-semibold text-gray-800">{currentPatient.appointmentType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Estimated Duration</p>
                  <p className="text-lg font-semibold text-gray-800">{currentPatient.estimatedDuration} mins</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone size={18} className="text-[#0055ff]" />
                  <span className="text-sm">{currentPatient.phoneNumber}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin size={18} className="text-[#0055ff]" />
                  <span className="text-sm">{currentPatient.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Timer size={18} className="text-[#0055ff]" />
                  <span className="text-sm">Arrived at: {currentPatient.arrivalTime}</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <FileText size={18} className="text-[#0055ff] mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-1">Notes</p>
                    <p className="text-sm text-gray-600">{currentPatient.notes}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Queue Controls</h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={togglePause}
                  className={`flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-semibold transition transform hover:scale-105 shadow-md ${
                    isPaused 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                  }`}
                >
                  {isPaused ? <Play size={20} /> : <Pause size={20} />}
                  <span>{isPaused ? 'Resume' : 'Pause'}</span>
                </button>

                <button
                  onClick={handleSkipToken}
                  className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-xl font-semibold transition transform hover:scale-105 shadow-md"
                >
                  <SkipForward size={20} />
                  <span>Skip Token</span>
                </button>

                <button
                  onClick={handleNextToken}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0055ff] to-[#0088ff] hover:from-[#0044dd] hover:to-[#0066dd] text-white py-4 px-6 rounded-xl font-semibold transition transform hover:scale-105 shadow-md"
                >
                  <ChevronsRight size={20} />
                  <span>Next Token</span>
                </button>
              </div>
            </div>
          </div>

          {/* Waiting Queue - Right Side (1 column) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-800">Waiting Queue</h3>
                <div className="bg-[#0055ff] bg-opacity-10 text-[#0055ff] px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold">{waitingQueue.length} Patients</span>
                </div>
              </div>

              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {waitingQueue.map((patient, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-4 hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#0055ff] text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{patient.name}</p>
                          <p className="text-xs text-gray-500">Token: {patient.token}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-blue-200">
                      <div className="flex items-center space-x-2">
                        <Clock size={14} className="text-[#0055ff]" />
                        <span className="text-xs text-gray-600">Est. Wait: <span className="font-semibold text-gray-800">{patient.waitTime} mins</span></span>
                      </div>
                      <span className="text-xs bg-white px-2 py-1 rounded text-gray-600">{patient.type}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Average Waiting Time Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp size={18} className="text-purple-600" />
                    <p className="text-sm font-semibold text-gray-800">Next Patient Wait Time</p>
                  </div>
                  <p className="text-3xl font-bold text-purple-600">{waitingQueue[0]?.waitTime || 0}</p>
                  <p className="text-xs text-gray-600 mt-1">Estimated minutes until your turn</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Today's Average</p>
              <p className="text-2xl font-bold text-gray-800">{departmentData.avgWaitingTime} mins</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Longest Wait</p>
              <p className="text-2xl font-bold text-orange-600">42 mins</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Shortest Wait</p>
              <p className="text-2xl font-bold text-green-600">5 mins</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Patient Satisfaction</p>
              <p className="text-2xl font-bold text-blue-600">4.8/5.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDashboard;