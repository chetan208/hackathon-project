import React from "react";
import { RefreshCw, X, UserPlus } from "lucide-react";

function QuickActions({ onRefresh, onCancel, onRegister }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
      <div className="space-y-3">
        <button
          onClick={onRefresh}
          className="w-full bg-gradient-to-r from-[#0055ff] to-[#0044cc] text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Refresh Status</span>
        </button>

        <button
          onClick={onCancel}
          className="w-full bg-white border-2 border-red-500 text-red-500 py-3 px-4 rounded-lg font-semibold hover:bg-red-50 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <X className="w-5 h-5" />
          <span>Cancel Token</span>
        </button>

      </div>
    </div>
  );
}

export default QuickActions;