import React from "react";
import { Lightbulb } from "lucide-react";

function HelpfulTips() {
  const tips = [
    "Arrive 5 minutes before your estimated time",
    "Keep your token number ready for verification",
    "Refresh status regularly for real-time updates"
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
        <Lightbulb className="w-5 h-5 text-amber-500" />
        <span>Helpful Tips</span>
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-[#0055ff] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">{index + 1}</span>
            </div>
            <p>{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelpfulTips;