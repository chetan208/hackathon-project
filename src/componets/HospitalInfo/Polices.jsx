import React from "react";
import { 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Shield,
  FileText,
  Info
} from "lucide-react";

const HospitalPolicies = () => {
  const policies = [
    { 
      text: "Emergency cases are given top priority regardless of token number", 
      type: "alert",
      icon: AlertCircle,
      color: "#ff0055"
    },
    { 
      text: "Online tokens are valid only for the date of booking", 
      type: "info",
      icon: Clock,
      color: "#0055ff"
    },
    { 
      text: "Please arrive 15 minutes before your scheduled time", 
      type: "info",
      icon: Clock,
      color: "#0055ff"
    },
    { 
      text: "Masks are mandatory inside hospital premises", 
      type: "alert",
      icon: Shield,
      color: "#ff5555"
    },
    { 
      text: "Carry valid ID proof and previous medical records if any", 
      type: "info",
      icon: FileText,
      color: "#0055ff"
    },
    { 
      text: "Smoking and alcohol consumption strictly prohibited", 
      type: "alert",
      icon: AlertCircle,
      color: "#ff0055"
    },
    { 
      text: "Maximum 1 attendant allowed with patient", 
      type: "info",
      icon: Info,
      color: "#0055ff"
    },
    { 
      text: "Follow all safety and hygiene protocols", 
      type: "alert",
      icon: Shield,
      color: "#ff5555"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Hospital Policies & Guidelines</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please read and follow these important policies for a smooth hospital visit
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {policies.map((policy, index) => {
            const IconComponent = policy.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5  transition-all"
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${policy.color}15` }}
                >
                  <IconComponent size={20} style={{ color: policy.color }} />
                </div>
                <p className="text-gray-700 leading-relaxed pt-1.5">
                  {policy.text}
                </p>
              </div>
            );
          })}
        </div>

 

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Have questions about our policies?</p>
          <button className="bg-[#0055ff] hover:bg-[#0044dd] text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
            Contact Support Team
          </button>
        </div>

      </div>
    </div>
  );
};

export default HospitalPolicies;