import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone, Clock, ArrowRight, Star, Heart } from "lucide-react";

const HospitalHero = ({ hospital }) => {
  const navigate = useNavigate();

  // Extract hospital details with fallbacks
  const hospitalName = hospital?.name || "Hospital";
  const hospitalType = hospital?.type || "General Hospital";
  const hospitalCity = hospital?.address?.city || "City";
  const hospitalAddress = hospital?.address?.street || "Address not available";
  const hospitalPhone = hospital?.contact || "Contact not available";
  const hospitalTimings = hospital?.timings || "Check website for timings";
  const hospitalRating = hospital?.rating || 4.5;
  const totalReviews = hospital?.totalReviews || 0;
  const isVerified = hospital?.isVerified || false;

  // Services list
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

  // Get logo - handle both URL and direct logo object
  const getLogoDisplay = () => {
    if (hospital?.branding?.logo?.url) {
      return (
        <img
          src={hospital.branding.logo.url}
          alt={`${hospitalName} Logo`}
          className="w-full h-full object-cover rounded-lg"
        />
      );
    }
    return (
      <span className="text-4xl font-bold text-[#0055ff]">
        {hospitalName.charAt(0).toUpperCase()}
      </span>
    );
  };

  // Get banner image
  const bannerUrl = hospital?.branding?.banner?.url;

  return (
    <div className="min-h-screen mt-15 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner / Cover Image */}
        <div className="relative">
          <div className="h-64 bg-gradient-to-r from-[#0055ff] to-[#0088ff] overflow-hidden">
            {bannerUrl ? (
              <img
                src={bannerUrl}
                alt={`${hospitalName} Banner`}
                className="w-full h-full object-cover opacity-95"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-[#0055ff] to-[#0088ff]"></div>
            )}
          </div>
          
          {/* Profile Picture */}
          <div className="absolute -bottom-16 left-8">
            <div className="w-32 h-32 bg-white rounded-2xl border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden">
              {getLogoDisplay()}
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
                    {hospitalName}
                  </h1>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-[#0055ff] text-sm font-semibold rounded-full">
                      {hospitalType}
                    </span>
                    {isVerified && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full flex items-center gap-1">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-lg text-gray-600">{hospitalCity}</p>
              </div>

              {/* Essential Info */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="text-[#0055ff] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-base">{hospitalAddress}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="text-[#0055ff] flex-shrink-0" size={20} />
                  <p className="text-base">
                    <span className="font-semibold">Open:</span> {hospitalTimings}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="text-[#0055ff] flex-shrink-0" size={20} />
                  <p className="text-base">{hospitalPhone}</p>
                </div>
              </div>

              {/* Get Token Button */}
              <button
                onClick={() => navigate(`/generate-token/${hospital._id}`)}
                className="bg-[#0055ff] hover:bg-[#0044dd] text-white px-8 py-3 rounded-xl text-base font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Your Token
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right Side - Rating & Services */}
            <div className="space-y-6">
              
              {/* Hospital Rating */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hospital Rating</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl font-bold text-gray-900">{hospitalRating.toFixed(1)}</div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={24}
                          className={star <= Math.floor(hospitalRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{totalReviews.toLocaleString()} reviews</p>
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

        

            </div>

          </div>

         
        </div>

      </div>
    </div>
  );
};

export default HospitalHero;