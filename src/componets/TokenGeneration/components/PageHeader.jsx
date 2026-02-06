import React from "react";
import { Stethoscope } from "lucide-react";

const PageHeader = ({ hospitalName }) => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center mb-4 px-4 py-2 bg-blue-100 rounded-full">
        <Stethoscope className="w-4 h-4 text-[#0055ff] mr-2" />
        <span className="text-sm font-semibold text-[#0055ff]">Token Generation</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0055ff] to-[#0044cc] bg-clip-text text-transparent mb-3">
        Get Your Appointment Token
      </h1>
      <p className="text-gray-600 text-lg">Quick and easy token generation for {hospitalName}</p>
    </div>
  );
};

export default PageHeader;