import React from "react";
import {
  MapPin,
  Ticket,
  Activity,
  CalendarCheck,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: <MapPin size={28} className="text-blue-600" />,
    title: "Search Nearby Hospitals",
    desc: "Find hospitals around you using city, pincode or location.",
  },
  {
    icon: <Ticket size={28} className="text-blue-600" />,
    title: "Get Digital Queue Token",
    desc: "Book your token online and avoid standing in long queues.",
  },
  {
    icon: <Activity size={28} className="text-blue-600" />,
    title: "Live Queue Status",
    desc: "Track your queue position and estimated waiting time.",
  },
  {
    icon: <CalendarCheck size={28} className="text-blue-600" />,
    title: "Online Appointments",
    desc: "Schedule hospital visits without hassle.",
  },
  {
    icon: <Clock size={28} className="text-blue-600" />,
    title: "Reduced Waiting Time",
    desc: "Smart system helps patients get treated faster.",
  },
];

const WhatDoesPlatformDo = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What does this platform do?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A smart queue management system designed to save time
            for both patients and hospitals.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50">
                {item.icon}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatDoesPlatformDo;
