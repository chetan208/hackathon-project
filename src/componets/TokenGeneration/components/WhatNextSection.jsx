import React from "react";

const WhatNextSection = () => {
  const steps = [
    {
      step: "1",
      title: "Verify Details",
      desc: "Double-check all information before generating your token",
      icon: "✔️",
    },
    {
      step: "2",
      title: "Generate Token",
      desc: "Click the button to get your unique appointment token",
      icon: "🎫",
    },
    {
      step: "3",
      title: "Track Progress",
      desc: "Monitor your position in the queue in real-time",
      icon: "📍",
    },
  ];

  return (
    <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mr-20 -mt-20"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">✨ What to do next?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:border-[#0055ff] transition-all group"
            >
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#0055ff] text-white rounded-full flex items-center justify-center font-bold text-sm">
                {item.step}
              </div>
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="font-bold text-gray-900 mb-2">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatNextSection;