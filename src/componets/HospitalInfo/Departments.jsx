import React from "react";
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
  ArrowRight
} from "lucide-react";

const Departments = () => {
  const navigate = useNavigate();

  const departments = [
    { 
      id: 1, 
      name: "OPD", 
      queue: 10, 
      waitTime: 15, 
      icon: Stethoscope, 
      color: "#0055ff",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
    },
    { 
      id: 2, 
      name: "Cardiology", 
      queue: 6, 
      waitTime: 20, 
      icon: Heart, 
      color: "#ff0055",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=300&fit=crop"
    },
    { 
      id: 3, 
      name: "Pediatrics", 
      queue: 4, 
      waitTime: 8, 
      icon: Baby, 
      color: "#00aaff",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop"
    },
    { 
      id: 4, 
      name: "Neurology", 
      queue: 3, 
      waitTime: 12, 
      icon: Brain, 
      color: "#aa00ff",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop"
    },
    { 
      id: 5, 
      name: "Orthopedics", 
      queue: 5, 
      waitTime: 18, 
      icon: Bone, 
      color: "#ffaa00",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=300&fit=crop"
    },
    { 
      id: 6, 
      name: "Dermatology", 
      queue: 2, 
      waitTime: 10, 
      icon: Smile, 
      color: "#00cc66",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop"
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Departments</h2>
          <p className="text-gray-600">Select a department to view queue status or get your token</p>
        </div>

        {/* Departments Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={dept.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#0055ff] transition-all duration-300 group"
              >
                {/* Department Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    className="w-full h-full object-cover  transition-transform duration-300"
                  />
                  {/* Icon Overlay */}
                  <div 
                    className="absolute top-4 right-4 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm"
                    style={{ backgroundColor: `${dept.color}90` }}
                  >
                    <IconComponent size={24} className="text-white" />
                  </div>
                </div>

                {/* Department Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{dept.name}</h3>

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
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button 
                      className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
                    >
                      View Queue
                    </button>
                    <button 
                      className="flex-1 text-white bg-[#0055ff] py-2.5 rounded-lg text-sm font-medium transition flex items-center justify-center gap-1 group-hover:gap-2"

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