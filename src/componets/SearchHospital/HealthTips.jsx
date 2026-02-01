// components/HealthTips.jsx
import React from "react";

const tips = [
  {
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water daily to keep your body hydrated.",
    icon: "💧",
  },
  {
    title: "Eat Healthy",
    description: "Include fruits, vegetables, and whole grains in your diet.",
    icon: "🥗",
  },
  {
    title: "Exercise Regularly",
    description: "At least 30 minutes of exercise daily helps maintain good health.",
    icon: "🏃‍♂️",
  },
  {
    title: "Get Enough Sleep",
    description: "7-8 hours of sleep is essential for physical and mental well-being.",
    icon: "🛌",
  },
  {
    title: "Wash Hands", 
    description: "Maintain hygiene by washing hands before meals and after coming home.",
    icon: "🧼",
  },
];

const HealthTips = () => {
  return (
    <div className="mt-15 w-[90%] mx-auto mb-15">
      <h2 className="text-2xl font-bold mb-6 text-center">Health Tips for You</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-green-50 p-5 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="text-4xl mb-3">{tip.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTips;
