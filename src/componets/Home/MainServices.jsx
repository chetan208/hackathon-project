import React from "react";
import {
  Search,
  Ticket,
  Activity,
  CalendarCheck,
  AlertTriangle,
  Hospital,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Hospitals",
    desc: "Find hospitals by city, pincode or nearby location",
  },
  {
    icon: Ticket,
    title: "Get Queue Token",
    desc: "Book digital token and avoid long queues",
  },
  {
    icon: Activity,
    title: "Check Queue",
    desc: "View live queue position and waiting time",
  },
  {
    icon: CalendarCheck,
    title: "Book Appointment",
    desc: "Schedule hospital visits online",
  },
  {
    icon: AlertTriangle,
    title: "Emergency",
    desc: "Quick access to nearby emergency hospitals",
    danger: true,
  },
  {
    icon: Hospital,
    title: "Hospital Login",
    desc: "Hospitals manage queues and appointments",
  },
];

const MainServices = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Main Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            SmartQueue provides simple tools for patients and hospitals
            to manage visits efficiently.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex gap-5">
                
                {/* Icon */}
                <div className="mt-1">
                  <Icon
                    size={26}
                    className={
                      service.danger
                        ? "text-red-600"
                        : "text-blue-600"
                    }
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {service.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MainServices;
