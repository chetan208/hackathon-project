import React from "react";

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
        <div className="bg-blue-600 text-white p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold leading-tight">
            Register Your Hospital
          </h1>
          <p className="mt-4 text-blue-100">
            Join our smart queue management platform and help patients
            avoid long waiting lines.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <p><span className="font-semibold">Hospital:</span> {hospital.name}</p>
            <p><span className="font-semibold">City:</span> {hospital.city}</p>
            <p><span className="font-semibold">Type:</span> {hospital.type}</p>
            <p><span className="font-semibold">Timings:</span> {hospital.timings}</p>
          </div>
        </div>

        {/* Right Section - Signup Form */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Hospital Signup
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Fill details to register your hospital
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Hospital Name"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="Full Address"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Official Email"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <select className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Hospital Type</option>
              <option>Government</option>
              <option>Private</option>
              <option>Clinic</option>
              <option>Diagnostic Center</option>
            </select>

            <input
              type="text"
              placeholder="Opening Timings (e.g. 9 AM - 8 PM)"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* Extra Real-world Fields */}
 

 

            <input
              type="password"
              placeholder="Create Password"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Register Hospital
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-4">
            Already registered? <span className="text-blue-600 cursor-pointer">Login</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default HospitalSignup;
