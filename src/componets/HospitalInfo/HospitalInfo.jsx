import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone, Clock, ArrowRight, Star } from "lucide-react";

const HospitalHero = () => {
  const hospital = {
    name: "City Hospital",
    city: "Delhi",
    address: "123 Main Street, Near Central Park",
    contact: "+91 9876543210",
    timings: "9:00 AM – 8:00 PM",
    type: "Government Hospital",
    rating: 4.8,
    totalReviews: 1250
  };

  const services = [
    'Emergency 24/7',
    'OPD',
    'Laboratory',
    'Pharmacy',
    'X-Ray',
    'ICU',
    'Surgery',
    'Cardiology',
    'Orthopedics',
    'Pediatrics',
    'Neurology',
    'Dental'
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen mt-15 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner / Cover Image */}
        <div className="relative">
          <div className="h-64 bg-gradient-to-r from-[#0055ff] to-[#0088ff]"></div>
          
          {/* Profile Picture */}
          <div className="absolute -bottom-16 left-8">
            <div className="w-32 h-32 bg-white rounded-2xl border-4 border-white shadow-xl flex items-center justify-center">
              <span className="text-4xl font-bold text-[#0055ff]">
                {hospital.name.charAt(0)}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-8 pt-20 pb-12">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Side - Hospital Information */}
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-4xl font-bold text-gray-900">
                    {hospital.name}
                  </h1>
                  <span className="px-3 py-1 bg-blue-100 text-[#0055ff] text-sm font-semibold rounded-full">
                    {hospital.type}
                  </span>
                </div>
                <p className="text-lg text-gray-600">{hospital.city}</p>
              </div>

              {/* Essential Info */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="text-[#0055ff] mt-1 flex-shrink-0" size={20} />
                  <p className="text-base">{hospital.address}</p>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="text-[#0055ff] flex-shrink-0" size={20} />
                  <p className="text-base">
                    <span className="font-semibold">Open:</span> {hospital.timings}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="text-[#0055ff] flex-shrink-0" size={20} />
                  <p className="text-base">{hospital.contact}</p>
                </div>
              </div>

              {/* Get Token Button */}
              <button
                onClick={() => navigate("generate-token")}
                className="bg-[#0055ff] hover:bg-[#0044dd] text-white px-8 py-3 rounded-xl text-base font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Get Your Token
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right Side - Rating & Services */}
            <div className="space-y-6">
              
              {/* Hospital Rating */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hospital Rating</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl font-bold text-gray-900">{hospital.rating}</div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={24}
                          className={star <= Math.floor(hospital.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{hospital.totalReviews.toLocaleString()} reviews</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="space-y-2">
                    {[
                      { label: 'Doctor Care', percent: 95 },
                      { label: 'Cleanliness', percent: 92 },
                      { label: 'Staff Behavior', percent: 88 },
                      { label: 'Waiting Time', percent: 85 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">{item.label}</span>
                          <span className="text-gray-600">{item.percent}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-[#0055ff] h-2 rounded-full transition-all"
                            style={{ width: `${item.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Available Services */}


            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HospitalHero;