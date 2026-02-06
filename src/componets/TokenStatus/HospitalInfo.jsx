import React from "react";
import { Calendar, Clock, Phone } from "lucide-react";

function HospitalInfo({ hospital = {} }) {
  const operatingHours = hospital.operatingHours || "9:00 AM – 8:00 PM";
  const helpDesk = hospital.helpDesk || "1800-XXX-XXX";

  return (
    <div className="bg-gradient-to-br from-[#0055ff] to-[#0044cc] rounded-2xl shadow-lg border border-blue-200 p-6 text-white">
      <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <Calendar className="w-5 h-5" />
        </div>
        <span>Hospital Info</span>
      </h3>

      <div className="space-y-3">
        {/* Operating Hours */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <div className="flex items-center space-x-2 mb-1">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Operating Hours</span>
          </div>
          <p className="text-base font-bold">{operatingHours}</p>
        </div>

        {/* Help Desk */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <div className="flex items-center space-x-2 mb-2">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">Help Desk</span>
          </div>
          <p className="text-base font-bold mb-2">{helpDesk}</p>
          <button className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors w-full font-semibold">
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HospitalInfo;