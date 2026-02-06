import React from "react";
import { Stethoscope, TrendingUp, Users, Clock } from "lucide-react";

const QueueStatusCard = ({ selectedDeptData, queueInfo }) => {
  if (!selectedDeptData) {
    return (
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg p-8 text-gray-600 text-center">
        <Stethoscope className="w-12 h-12 mx-auto mb-3 opacity-50" />
        <p className="font-semibold">Select a department to see queue status</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#0055ff] to-[#0044cc] rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold">Live Queue Status</h3>
          <div className="flex items-center space-x-2 px-3 py-1 bg-white/15 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-green-100">Live</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-blue-100 mb-1">Now Serving</p>
                <p className="text-3xl font-bold">{queueInfo.current}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-start space-x-2">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-blue-100 mb-0.5">Ahead</p>
                  <p className="text-2xl font-bold">{queueInfo.ahead}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-start space-x-2">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-blue-100 mb-0.5">Wait</p>
                  <p className="text-2xl font-bold">{queueInfo.waitTime}m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueStatusCard;