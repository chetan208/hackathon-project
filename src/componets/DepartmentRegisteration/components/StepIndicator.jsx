import { Check } from "lucide-react"

const steps = [
  { id: 1, title: "Basic Details", description: "Basic Details" },
  { id: 2, title: "Media ", description: "Media" },
  { id: 3, title: "Schedule", description: "Schedule" },
  { id: 4, title: "Doctors", description: "Doctors" },
  { id: 5, title: "Review", description: "Review" },
  { id: 6, title: "Submit", description: "Submit" },
]

export default function StepIndicator({ currentStep }) {
  return (
    <div className="w-full bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            {/* Step Circle */}
            <div className="flex flex-col items-center z-10">
              <div
                className={`
                  flex h-14 w-14 items-center justify-center rounded-full border-2 font-semibold transition-all duration-500
                  ${currentStep > step.id
                    ? "bg-gradient-to-tr from-teal-500 to-teal-400 border-teal-500 text-white shadow-md"
                    : currentStep === step.id
                    ? "bg-teal-50 border-teal-500 text-teal-600 shadow-inner"
                    : "bg-gray-50 border-gray-300 text-gray-400"
                  }
                `}
              >
                {currentStep > step.id ? <Check className="h-6 w-6" /> : step.id}
              </div>
              {/* Step Title */}
              <div className="mt-2 text-center">
                <p
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    currentStep >= step.id ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{step.description}</p>
              </div>
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 rounded-full transition-all duration-500 ${
                  currentStep > step.id
                    ? "bg-gradient-to-r from-teal-500 to-teal-400"
                    : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
