import { Clock, TrendingUp } from 'lucide-react'
import React from 'react'

function DeshboardWaitingQueue({waitingQueue}) {
  return (
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
                          <p className="font-semibold text-gray-800 text-sm">{patient?.patientData.name}</p>
                          <p className="text-xs text-gray-500">Token: {patient?.token}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-blue-200">
                      <div className="flex items-center space-x-2">
                        <Clock size={14} className="text-[#0055ff]" />
                        <span className="text-xs text-gray-600">Est. Wait: <span className="font-semibold text-gray-800">{patient?.waitTime} mins</span></span>
                      </div>
                      <span className="text-xs bg-white px-2 py-1 rounded text-gray-600">{patient.patientData.visitType}</span>
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
  )
}

export default DeshboardWaitingQueue
