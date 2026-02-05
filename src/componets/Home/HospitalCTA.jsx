import hospitalImage from "../../assets/hospital.jpg"; // replace with your image
import {useNavigate} from "react-router-dom";

export default function HospitalCTA() {
  const navigate = useNavigate(); 
  
  return (
    <section className="bg-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-8 lg:flex lg:items-center lg:gap-16">
        
        {/* Left Side - Image */}
        <div className="lg:flex-1 flex justify-center">
          <img
            src={hospitalImage}
            alt="Hospital Illustration"
            className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:flex-1 mt-12 lg:mt-0 lg:pl-12 space-y-6">
          {/* Small tagline */}
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Join the Smart Hospital Platform
          </p>

          {/* Main heading */}
          <h2 className="text-4xl font-bold text-gray-900">
            FOR HOSPITALS
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg">
            Register your hospital on our platform and manage queues digitally.  
            Improve patient experience, reduce wait times, and grow your hospital’s reach.
          </p>

          {/* CTA button */}
          <button 
          onClick={() => navigate('/hospital-registration')}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Register Your Hospital
          </button>
        </div>
      </div>
    </section>
  );
}
