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
// ==================== REPORTS COMPONENT ====================
const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const stats = {
    totalPatients: 156,
    completed: 45,
    waiting: 12,
    cancelled: 8,
    avgWaitTime: 14,
    avgConsultTime: 18,
    patientSatisfaction: 4.8
  };

  const departmentStats = [
    { dept: 'Cardiology', tokens: 45, avgTime: 18, satisfaction: 4.8 },
    { dept: 'Neurology', tokens: 32, avgTime: 22, satisfaction: 4.6 },
    { dept: 'Orthopedics', tokens: 28, avgTime: 15, satisfaction: 4.7 },
    { dept: 'Pediatrics', tokens: 51, avgTime: 12, satisfaction: 4.9 }
  ];

  const hourlyData = [
    { hour: '9 AM', patients: 12 },
    { hour: '10 AM', patients: 18 },
    { hour: '11 AM', patients: 22 },
    { hour: '12 PM', patients: 15 },
    { hour: '1 PM', patients: 8 },
    { hour: '2 PM', patients: 16 },
    { hour: '3 PM', patients: 20 },
    { hour: '4 PM', patients: 14 }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Reports & Analytics</h1>
          <p className="text-gray-500">Performance metrics and insights</p>
        </div>
        <div className="flex gap-3">
          {['today', 'week', 'month'].map(period => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedPeriod === period 
                  ? 'bg-[#0055ff] text-white' 
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-200 p-5 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Total Patients</p>
            <ArrowUpRight className="text-green-600" size={18} />
          </div>
          <p className="text-3xl font-bold text-gray-800 mb-1">{stats.totalPatients}</p>
          <p className="text-xs text-green-600 font-medium">+12% from yesterday</p>
        </div>

        <div className="bg-white border border-gray-200 p-5 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Completed</p>
            <CheckCircle className="text-green-600" size={18} />
          </div>
          <p className="text-3xl font-bold text-gray-800 mb-1">{stats.completed}</p>
          <p className="text-xs text-gray-500">Success rate: 95%</p>
        </div>

        <div className="bg-white border border-gray-200 p-5 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Avg Wait Time</p>
            <Clock className="text-blue-600" size={18} />
          </div>
          <p className="text-3xl font-bold text-gray-800 mb-1">{stats.avgWaitTime}</p>
          <p className="text-xs text-green-600 font-medium">-5% improvement</p>
        </div>

        <div className="bg-white border border-gray-200 p-5 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Satisfaction</p>
            <TrendingUp className="text-purple-600" size={18} />
          </div>
          <p className="text-3xl font-bold text-gray-800 mb-1">{stats.patientSatisfaction}</p>
          <p className="text-xs text-gray-500">Out of 5.0</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Hourly Distribution */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Patient Distribution (Hourly)</h3>
          <div className="space-y-3">
            {hourlyData.map((data, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">{data.hour}</span>
                  <span className="text-sm font-medium text-gray-800">{data.patients} patients</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#0055ff] h-2 rounded-full transition-all"
                    style={{ width: `${(data.patients / 25) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Performance */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Department Performance</h3>
          <div className="space-y-4">
            {departmentStats.map((dept, index) => (
              <div key={index} className="pb-4 border-b border-gray-200 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800">{dept.dept}</span>
                  <span className="text-sm text-gray-500">{dept.tokens} tokens</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Avg Time</p>
                    <p className="font-medium text-gray-800">{dept.avgTime} mins</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Rating</p>
                    <p className="font-medium text-gray-800">{dept.satisfaction}/5.0</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800">Detailed Breakdown</h3>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Metric</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Value</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Change</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-800">Total Appointments</td>
              <td className="px-6 py-4 font-medium text-gray-800">156</td>
              <td className="px-6 py-4 text-green-600 font-medium">+12%</td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Good</span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-800">Average Wait Time</td>
              <td className="px-6 py-4 font-medium text-gray-800">14 mins</td>
              <td className="px-6 py-4 text-green-600 font-medium">-5%</td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Excellent</span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-800">Consultation Time</td>
              <td className="px-6 py-4 font-medium text-gray-800">18 mins</td>
              <td className="px-6 py-4 text-gray-600 font-medium">0%</td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Normal</span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-800">Cancellation Rate</td>
              <td className="px-6 py-4 font-medium text-gray-800">5.1%</td>
              <td className="px-6 py-4 text-red-600 font-medium">+2%</td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Attention</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports