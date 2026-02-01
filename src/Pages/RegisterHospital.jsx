import React from "react";
import LeftSection from "../componets/RegisterHospital/LeftSection";
import RightSection from "../componets/RegisterHospital/RightSection";

const HospitalSignup = () => {
  const hospital = {
    name: "City Hospital",
    city: "Delhi",
    address: "123 Main Street, Near Central Park",
    contact: "+91 9876543210",
    email: "info@cityhospital.com",
    timings: "9:00 AM – 8:00 PM",
    type: "Government",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-30">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden">
        
        {/* Left Section - Hero / Info */}

<LeftSection/>

        {/* Right Section - Signup Form */}
<RightSection/>

      </div>
    </div>
  );
};

export default HospitalSignup;
