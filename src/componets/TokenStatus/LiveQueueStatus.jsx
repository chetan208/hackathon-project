import React, { useState, useEffect } from "react";
import { Clock, Users, TrendingDown, Activity } from "lucide-react";

function LiveQueueStatus({ queueData = {} }) {
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      setIsLive(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nowServing = queueData.nowServing || "A-23";
  const patientsAhead = queueData.patientsAhead || 3;
  const estimatedWait = queueData.estimatedWait || 8;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#0055ff] to-[#0044cc] rounded-lg flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span>Live Queue Status</span>
        </h3>
        <div className="flex items-center space-x-2 bg-green-50 px-3 py-1.5 rounded-full">
          <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
          <span className="text-green-700 text-sm font-medium">Live</span>
        </div>
      </div>

      {/* Queue Status Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Now Serving */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <Clock className="w-5 h-5 text-[#0055ff]" />
            </div>
            <div>
              <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-1">Now Serving</p>
              <p className="text-2xl font-bold text-[#0055ff]">{nowServing}</p>
            </div>
          </div>
        </div>

        {/* Patients Ahead */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <Users className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-1">Ahead of You</p>
              <p className="text-2xl font-bold text-amber-600">{patientsAhead}</p>
            </div>
          </div>
        </div>

        {/* Estimated Wait */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <TrendingDown className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-1">Est. Wait</p>
              <p className="text-2xl font-bold text-purple-600">{estimatedWait}m</p>
            </div>
          </div>
        </div>
      </div>

      {/* Live Updates Indicator */}
      <div className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-200 text-center">
        <p className="text-xs text-blue-700 font-medium">Updates every 30 seconds</p>
      </div>
    </div>
  );
}

export default LiveQueueStatus;