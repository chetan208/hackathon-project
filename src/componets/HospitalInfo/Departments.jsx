import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Stethoscope, 
  Heart, 
  Baby, 
  Brain, 
  Bone, 
  Smile,
  Users,
  Clock,
  ArrowRight,
  AlertCircle
} from "lucide-react";

const Departments = ({ hospital }) => {
  const navigate = useNavigate();
  const [expandedDept, setExpandedDept] = useState(null);

  // Icon mapping for department names
  const iconMap = {
    opd: Stethoscope,
    cardiology: Heart,
    pediatrics: Baby,
    neurology: Brain,
    orthopedics: Bone,
    dermatology: Smile,
    emergency: AlertCircle,
    surgery: Stethoscope,
    laboratory: Stethoscope,
    pharmacy: Stethoscope,
    icu: Heart,
    dental: Smile,
  };

  // Color mapping for departments
  const colorMap = {
    opd: "#0055ff",
    cardiology: "#ff0055",
    pediatrics: "#00aaff",
    neurology: "#aa00ff",
    orthopedics: "#ffaa00",
    dermatology: "#00cc66",
    emergency: "#ff6b6b",
    surgery: "#ff8c00",
    laboratory: "#0077be",
    pharmacy: "#00d4ff",
    icu: "#ff1744",
    dental: "#ffb300",
  };

  // Default image placeholder
  const getDefaultImage = (deptName) => {
    const images = {
      opd: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
      cardiology: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=300&fit=crop",
      pediatrics: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
      neurology: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      orthopedics: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=300&fit=crop",
      dermatology: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
      emergency: "https://images.unsplash.com/photo-1516574187841-cb80ebf1666b?w=400&h=300&fit=crop",
      surgery: "https://images.unsplash.com/photo-1582719534277-edebaf0f0c3c?w=400&h=300&fit=crop",
      laboratory: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      pharmacy: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=400&h=300&fit=crop",
      icu: "https://images.unsplash.com/photo-1582671776015-f186e0b3ce8f?w=400&h=300&fit=crop",
      dental: "https://images.unsplash.com/photo-1631217314830-4d2f2b4f8c89?w=400&h=300&fit=crop",
    };
    return images[deptName.toLowerCase()] || images.opd;
  };

  // Transform hospital departments to display format
  const transformedDepartments = hospital?.departments?.map((dept, index) => {
    const deptNameLower = dept.name.toLowerCase();
    const icon = iconMap[deptNameLower] || Stethoscope;
    const color = colorMap[deptNameLower] || "#0055ff";
    const image = dept.entrancePhoto?.url || getDefaultImage(deptNameLower);
    
    return {
      id: dept._id || index,
      name: dept.name.charAt(0).toUpperCase() + dept.name.slice(1),
      description: dept.description,
      queue: Math.floor(Math.random() * 15) + 1, // Placeholder queue data
      waitTime: Math.floor(Math.random() * 30) + 5, // Placeholder wait time
      doctorsCount: dept.Doctors?.length || 0,
      icon: icon,
      color: color,
      image: image,
      schedule: dept.workingSchedule,
      doctors: dept.Doctors,
      status: dept.status,
    };
  }) || [];

  // Show message if no departments
  if (!hospital || transformedDepartments.length === 0) {
    return (
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Departments</h2>
            <p className="text-gray-600">Select a department to view queue status or get your token</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <AlertCircle className="mx-auto mb-3 text-blue-600" size={32} />
            <p className="text-gray-600">No departments found for this hospital.</p>
          </div>
        </div>
      </div>
    );
  }

  const handleViewQueue = (dept) => {
    setExpandedDept(expandedDept === dept.id ? null : dept.id);
  };

  const handleGetToken = (deptName) => {
    navigate(`/generate-token/${hospital._id}`);  
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Departments</h2>
          <p className="text-gray-600">
            {hospital?.name} offers {transformedDepartments.length} departments. Select a department to view queue status or get your token
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformedDepartments.map((dept) => {
            const IconComponent = dept.icon;
            const isExpanded = expandedDept === dept.id;

            return (
              <div
                key={dept.id}
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 group ${
                  isExpanded 
                    ? "border-[#0055ff] shadow-lg" 
                    : "border-gray-200 hover:shadow-lg hover:border-[#0055ff]"
                }`}
              >
                {/* Department Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    className="w-full h-full object-cover  transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = getDefaultImage(dept.name);
                    }}
                  />
                  
                  {/* Icon Overlay */}
                  <div 
                    className="absolute top-4 right-4 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-md"
                    style={{ backgroundColor: `${dept.color}90` }}
                  >
                    <IconComponent size={24} className="text-white" />
                  </div>

                  {/* Status Badge */}
                  {dept.status && (
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                        {dept.status}
                      </span>
                    </div>
                  )}
                </div>

                {/* Department Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                  
                  {/* Description */}
                  {dept.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{dept.description}</p>
                  )}

                  {/* Queue Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users size={16} />
                        <span>Current Queue</span>
                      </div>
                      <span className="font-bold text-gray-900">{dept.queue} patients</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={16} />
                        <span>Est. Wait Time</span>
                      </div>
                      <span className="font-bold text-gray-900">{dept.waitTime} mins</span>
                    </div>

                    {/* Doctors Count */}
                    {dept.doctorsCount > 0 && (
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Stethoscope size={16} />
                          <span>Available Doctors</span>
                        </div>
                        <span className="font-bold text-gray-900">{dept.doctorsCount}</span>
                      </div>
                    )}
                  </div>

                  {/* Schedule Info (Expanded) */}
                  {isExpanded && dept.schedule && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      {dept.schedule.is24X7 ? (
                        <div className="text-sm">
                          <p className="font-semibold text-blue-900 mb-2">✓ Available 24/7</p>
                        </div>
                      ) : (
                        <div className="text-sm space-y-2">
                          <p className="font-semibold text-blue-900">Working Hours:</p>
                          {dept.schedule.workingDays && dept.schedule.workingDays.length > 0 && (
                            <p className="text-blue-800">
                              <span className="font-medium">Days:</span> {dept.schedule.workingDays.join(", ")}
                            </p>
                          )}
                          {dept.schedule.timeSlots && dept.schedule.timeSlots.length > 0 && (
                            <div className="text-blue-800">
                              <span className="font-medium">Time:</span>
                              {dept.schedule.timeSlots.map((slot, idx) => (
                                <p key={idx} className="ml-4">
                                  {slot.openingTime} - {slot.closingTime}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleViewQueue(dept)}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition ${
                        isExpanded
                          ? "bg-[#0055ff] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {isExpanded ? "Hide Details" : "View Queue"}
                    </button>
                    <button 
                      onClick={() => handleGetToken(dept.name)}
                      className="flex-1 text-white bg-[#0055ff] py-2.5 rounded-lg text-sm font-medium transition hover:bg-[#0044dd] flex items-center justify-center gap-1 group-hover:gap-2"
                    >
                      Get Token
                      <ArrowRight size={16} className="transition-all" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Departments;