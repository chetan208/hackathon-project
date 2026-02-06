import React from "react";
import { Building2, MapPin, Phone, Calendar, CheckCircle2 } from "lucide-react";

const HospitalInfoCard = ({ hospital, today }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
      <div className="bg-gradient-to-r from-[#0055ff] via-blue-600 to-[#0044cc] p-8 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">{hospital?.name}</h2>
              <div className="space-y-3 text-blue-50">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span className="text-sm">{hospital?.address?.street || hospital?.city}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-3 h-3" />
                  </div>
                  <span className="text-sm">{hospital?.contact || "Contact not available"}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-3 h-3" />
                  </div>
                  <span className="text-sm">{today}</span>
                </div>
              </div>
            </div>
            <div className="w-20 h-20 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
              {hospital?.branding?.logo?.url ? (
                <img
                  src={hospital.branding.logo.url}
                  alt={hospital?.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              ) : (
                <Building2 className="w-10 h-10" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hospital Status Bar */}
      <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Hospital is accepting patients</span>
        </div>
        {hospital?.isVerified && (
          <div className="flex items-center space-x-1 text-green-600">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-xs font-semibold">Verified</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalInfoCard;