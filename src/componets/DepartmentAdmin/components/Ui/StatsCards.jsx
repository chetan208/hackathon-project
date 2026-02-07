import { CheckCircle, Clock, Users } from 'lucide-react'
import React from 'react'
import { Activity } from 'react'

function StatsCards({departmentData, queueDetails,isPaused,avgWaitTime,servedTokensCount}) {

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {/* Now Serving */}
          <div className="bg-gradient-to-br from-[#0055ff] to-[#0088ff] rounded-xl shadow-lg p-6 text-white col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-2">
              <Activity size={20} />
              <p className="text-sm font-medium opacity-90">Now Serving</p>
            </div>
            <p className="text-4xl font-bold mb-1">{!isPaused ? "Active" : "Paused"}</p>
            <p className="text-xs opacity-80">{!isPaused ? queueDetails[0]?.token : null}</p>
          </div>

          {/* Patients Waiting */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center space-x-2 mb-2">
              <Users size={20} className="text-orange-600" />
              <p className="text-sm font-medium text-gray-600">Patients Waiting</p>
            </div>
            <p className="text-4xl font-bold text-gray-800 mb-1">{queueDetails.length}</p>
            <p className="text-xs text-gray-500">In Queue</p>
          </div>

          {/* Avg Waiting Time */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center space-x-2 mb-2">
              <Clock size={20} className="text-purple-600" />
              <p className="text-sm font-medium text-gray-600">Avg Wait Time</p>
            </div>
            <p className="text-4xl font-bold text-gray-800 mb-1">{avgWaitTime}</p>
            <p className="text-xs text-gray-500">Minutes</p>
          </div>

          {/* Tokens Served */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle size={20} className="text-green-600" />
              <p className="text-sm font-medium text-gray-600">Served Today</p>
            </div>
            <p className="text-4xl font-bold text-gray-800 mb-1">{servedTokensCount}</p>
            <p className="text-xs text-gray-500">Tokens</p>
          </div>

          {/* Doctors Available */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center space-x-2 mb-2">
              <Activity size={20} className="text-blue-600" />
              <p className="text-sm font-medium text-gray-600">Doctors On Duty</p>
            </div>
            <p className="text-4xl font-bold text-gray-800 mb-1">{departmentData?.Doctors?.length}</p>
            <p className="text-xs text-gray-500">Available</p>
          </div>
        </div>
  )
}

export default StatsCards
