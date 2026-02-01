
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



const TokenList = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tokenData = [
    { token: 'A-15', name: 'Rahul Sharma', age: 42, type: 'Follow-up', status: 'completed', time: '09:15 AM', doctor: 'Dr. Amit Kumar' },
    { token: 'A-16', name: 'Priya Singh', age: 35, type: 'Consultation', status: 'completed', time: '09:30 AM', doctor: 'Dr. Amit Kumar' },
    { token: 'A-17', name: 'Vijay Mehta', age: 51, type: 'New Patient', status: 'completed', time: '09:45 AM', doctor: 'Dr. Sneha Patel' },
    { token: 'A-18', name: 'Anita Rao', age: 38, type: 'Follow-up', status: 'completed', time: '10:00 AM', doctor: 'Dr. Amit Kumar' },
    { token: 'A-19', name: 'Suresh Kumar', age: 46, type: 'Consultation', status: 'skipped', time: '10:15 AM', doctor: '-' },
    { token: 'A-20', name: 'Deepa Verma', age: 33, type: 'Follow-up', status: 'cancelled', time: '10:20 AM', doctor: '-' },
    { token: 'A-21', name: 'Rajesh Kumar', age: 45, type: 'Follow-up', status: 'serving', time: '10:25 AM', doctor: 'Dr. Amit Kumar' },
    { token: 'A-22', name: 'Priya Sharma', age: 32, type: 'Consultation', status: 'waiting', time: '10:30 AM', doctor: '-' },
    { token: 'A-23', name: 'Amit Singh', age: 58, type: 'Follow-up', status: 'waiting', time: '10:35 AM', doctor: '-' },
    { token: 'A-24', name: 'Sunita Devi', age: 41, type: 'New Patient', status: 'waiting', time: '10:40 AM', doctor: '-' },
  ];

  const getStatusBadge = (status) => {
    const styles = {
      completed: 'bg-green-100 text-green-800',
      serving: 'bg-blue-100 text-blue-800',
      waiting: 'bg-yellow-100 text-yellow-800',
      skipped: 'bg-orange-100 text-orange-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return styles[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle size={16} />;
      case 'serving': return <Activity size={16} />;
      case 'waiting': return <Clock size={16} />;
      case 'skipped': return <SkipForward size={16} />;
      case 'cancelled': return <XCircle size={16} />;
      default: return null;
    }
  };

  const filteredTokens = tokenData.filter(token => {
    const matchesStatus = filterStatus === 'all' || token.status === filterStatus;
    const matchesSearch = token.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         token.token.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Token List</h1>
        <p className="text-gray-500">View all tokens for today</p>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by token or patient name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'waiting', 'serving', 'completed', 'skipped', 'cancelled'].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filterStatus === status 
                  ? 'bg-[#0055ff] text-white' 
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Token Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Token</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Patient Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Age</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Time</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Doctor</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredTokens.map((token, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <span className="font-bold text-[#0055ff]">{token.token}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-800">{token.name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-600">{token.age}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">{token.type}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">{token.time}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">{token.doctor}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(token.status)}`}>
                    {getStatusIcon(token.status)}
                    {token.status.charAt(0).toUpperCase() + token.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-6 flex gap-4">
        <div className="flex-1 bg-white border border-gray-200 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Total Tokens</p>
          <p className="text-2xl font-bold text-gray-800">{tokenData.length}</p>
        </div>
        <div className="flex-1 bg-white border border-gray-200 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Completed</p>
          <p className="text-2xl font-bold text-green-600">{tokenData.filter(t => t.status === 'completed').length}</p>
        </div>
        <div className="flex-1 bg-white border border-gray-200 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Waiting</p>
          <p className="text-2xl font-bold text-yellow-600">{tokenData.filter(t => t.status === 'waiting').length}</p>
        </div>
        <div className="flex-1 bg-white border border-gray-200 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Cancelled/Skipped</p>
          <p className="text-2xl font-bold text-red-600">{tokenData.filter(t => t.status === 'cancelled' || t.status === 'skipped').length}</p>
        </div>
      </div>
    </div>
  );
};

export default TokenList