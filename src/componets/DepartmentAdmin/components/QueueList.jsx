
import React, { useState } from 'react';
import { 
  Activity, 
  Users, 
  Calendar, 
  Stethoscope,
  TrendingUp,
  Search,
  Filter,
  Download,
  Clock,
  CheckCircle,
  XCircle,
  Pause,
  SkipForward,
  User,
  Phone,
  MapPin,
  Coffee,
  AlertCircle,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const LiveQueue = ({queueDetails}) => {
  const [currentToken, setCurrentToken] = useState('A-21');
  
  const queueData = [
    { token: 'A-21', name: 'Rajesh Kumar', age: 45, type: 'Follow-up', status: 'serving', waitTime: 0, arrivalTime: '10:25 AM' },
    { token: 'A-22', name: 'Priya Sharma', age: 32, type: 'Consultation', status: 'waiting', waitTime: 14, arrivalTime: '10:30 AM' },
    { token: 'A-23', name: 'Amit Singh', age: 58, type: 'Follow-up', status: 'waiting', waitTime: 28, arrivalTime: '10:35 AM' },
    { token: 'A-24', name: 'Sunita Devi', age: 41, type: 'New Patient', status: 'waiting', waitTime: 42, arrivalTime: '10:40 AM' },
    { token: 'A-25', name: 'Vikram Mehta', age: 50, type: 'Consultation', status: 'waiting', waitTime: 56, arrivalTime: '10:45 AM' },
    { token: 'A-26', name: 'Anjali Rao', age: 29, type: 'Follow-up', status: 'waiting', waitTime: 70, arrivalTime: '10:50 AM' },
    { token: 'A-27', name: 'Rahul Verma', age: 36, type: 'Consultation', status: 'waiting', waitTime: 84, arrivalTime: '10:55 AM' },
    { token: 'A-28', name: 'Neha Gupta', age: 44, type: 'New Patient', status: 'waiting', waitTime: 98, arrivalTime: '11:00 AM' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'serving': return 'bg-green-500';
      case 'waiting': return 'bg-blue-500';
      case 'paused': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Live Queue</h1>
        <p className="text-gray-500">Real-time patient queue monitoring</p>
      </div>

      {/* Stats Bar */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 bg-[#0055ff] text-white p-4 rounded-lg">
          <p className="text-sm opacity-90 mb-1">Now Serving</p>
          <p className="text-3xl font-bold">{currentToken}</p>
        </div>
        <div className="flex-1 bg-white border border-gray-200 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Waiting</p>
          <p className="text-3xl font-bold text-gray-800">{queueDetails.length}</p>
        </div>
        <div className="flex-1 bg-white border border-gray-200 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Avg Wait</p>
          <p className="text-3xl font-bold text-gray-800">14 mins</p>
        </div>
      </div>

      {/* Queue Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Position</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Token</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Patient Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Age</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Arrival Time</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Wait Time</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {queueDetails.map((patient, index) => (
              <tr key={index} className={`hover:bg-gray-50 ${patient?.status === 'serving' ? 'bg-green-50' : ''}`}>
                <td className="px-6 py-4">
                  <span className="font-semibold text-gray-800">{index + 1}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-bold text-[#0055ff]">{patient.token}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-800">{patient?.patientData?.name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-600">{patient?.patientData.age}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">{patient?.patientData?.visitType}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">{patient?.arrivalTime}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-sm font-medium ${patient?.waitTime > 30 ? 'text-orange-600' : 'text-gray-600'}`}>
                    {patient.waitTime === 0 ? 'Being served' : `${patient?.waitTime} mins`}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    patient.status === 'serving' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveQueue