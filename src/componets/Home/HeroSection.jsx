import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const Navigate=useNavigate();
  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Find Hospitals & <br />
              Manage Queues <span className="text-blue-600">Smartly</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              One platform for all hospitals.  
              Save time, avoid long queues, and get treated faster.
            </p>

            {/* Search */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-xl">
              <input
                type="text"
                placeholder="Search Hospital / City / Pincode"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
              onClick={()=>Navigate("/search-hospital")}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Find Hospital
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
              alt="Hospital Queue Management"
              className="w-full max-w-lg rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
