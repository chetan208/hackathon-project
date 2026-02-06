import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const ImportantNotice = () => {
  const notices = [
    "Token valid for today only",
    "Arrive 10 minutes before your token",
    "Keep your mobile accessible",
    "Bring valid ID proof",
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg border-2 border-amber-200 p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100/30 rounded-full -mr-12 -mt-12"></div>
      
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-5">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Important Notice</h3>
        </div>

        <div className="space-y-3">
          {notices.map((notice, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm">{notice}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantNotice;