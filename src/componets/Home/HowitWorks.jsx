import hospitalImage from "../../assets/hospital.jpg";
import {
  Search,
  Layers,
  Ticket,
  Activity,
  Database,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Hospital",
    desc: "Find nearby hospitals using city, pincode, or GPS.",
  },
  {
    icon: Layers,
    title: "Select Department",
    desc: "Choose the department you need. Each has its own queue.",
  },
  {
    icon: Ticket,
    title: "Get Digital Token",
    desc: "Generate a token instantly with estimated wait time.",
  },
  {
    icon: Activity,
    title: "Track Queue Live",
    desc: "Monitor the queue and visit when your turn is near.",
  },
  {
    icon: Database,
    title: "Records Saved",
    desc: "All visits and tokens are saved for logged-in users.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-8 lg:flex lg:items-center lg:gap-16">
        
        {/* Left Side - Steps */}
        <div className="lg:flex-1 lg:max-w-md space-y-8 mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg mb-8 text-center lg:text-left">
            Your hospital visit simplified in 5 easy steps
          </p>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side - Image */}
        <div className="lg:flex-1 mt-12 lg:mt-0 flex justify-center">
          <img
            src={hospitalImage}
            alt="Hospital Illustration"
            className="w-full max-w-sm rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
