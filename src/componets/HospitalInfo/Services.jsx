import React from "react";
import { 
  Ambulance,
  TestTube,
  Pill,
  Activity,
  Scissors,
  Bed,
  FileText,
  UserCheck,
  Clock,
  Shield,
  HeartPulse,
  Syringe
} from "lucide-react";

const HospitalServices = () => {
  const services = [
    {
      id: 1,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency care with dedicated trauma unit",
      icon: Ambulance,
      color: "#ff0055",
      illustration: "https://illustrations.popsy.co/red/ambulance.svg"
    },
    {
      id: 2,
      title: "Diagnostic Lab",
      description: "Advanced diagnostic facilities with quick report generation",
      icon: TestTube,
      color: "#00aaff",
      illustration: "https://illustrations.popsy.co/blue/medical-research.svg"
    },
    {
      id: 3,
      title: "In-House Pharmacy",
      description: "24x7 pharmacy with all essential medicines in stock",
      icon: Pill,
      color: "#00cc66",
      illustration: "https://illustrations.popsy.co/green/medicine.svg"
    },
    {
      id: 4,
      title: "ICU & Critical Care",
      description: "State-of-the-art ICU with ventilators and monitoring systems",
      icon: HeartPulse,
      color: "#ff5555",
      illustration: "https://illustrations.popsy.co/red/heartbeat.svg"
    },
    {
      id: 5,
      title: "Surgery & OT",
      description: "Modern operation theaters with advanced surgical equipment",
      icon: Scissors,
      color: "#aa00ff",
      illustration: "https://illustrations.popsy.co/violet/surgery.svg"
    },
    {
      id: 6,
      title: "Imaging & X-Ray",
      description: "Digital X-Ray, CT Scan, and MRI facilities available",
      icon: Activity,
      color: "#ffaa00",
      illustration: "https://illustrations.popsy.co/orange/x-ray.svg"
    },
    {
      id: 7,
      title: "Health Checkup",
      description: "Complete health checkup packages at affordable rates",
      icon: UserCheck,
      color: "#0055ff",
      illustration: "https://illustrations.popsy.co/blue/health-checkup.svg"
    },
    {
      id: 8,
      title: "Blood Bank",
      description: "24/7 blood bank with all blood groups available",
      icon: Syringe,
      color: "#ff0055",
      illustration: "https://illustrations.popsy.co/red/blood-donation.svg"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services with state-of-the-art facilities and experienced medical professionals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 transition-all duration-300 group border border-gray-200 hover:border-transparent"
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <IconComponent size={28} style={{ color: service.color }} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>


        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Doctors", value: "50+" },
            { label: "Beds", value: "200+" },
            { label: "Departments", value: "12" },
            { label: "Years Experience", value: "25+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-[#0055ff] mb-1">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>



      </div>
    </div>
  );
};

export default HospitalServices;