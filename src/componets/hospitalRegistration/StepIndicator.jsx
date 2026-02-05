import { Check } from "lucide-react"

const steps = [
  { id: 1, title: "Basic Details", description: "Hospital information" },
  { id: 2, title: "Verify Email", description: "Confirm your email" },
  { id: 3, title: "Branding", description: "Logo, banner & policies" },
  { id: 4, title: "Departments", description: "Add departments" },
]

export default function StepIndicator({ currentStep }) {
  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`
                  flex h-12 w-12 items-center justify-center rounded-full border-2 font-semibold transition-all duration-300
                  ${currentStep > step.id
                    ? "border-teal-500 bg-teal-500 text-white"
                    : currentStep === step.id
                    ? "border-teal-500 bg-teal-50 text-teal-600"
                    : "border-gray-200 bg-gray-50 text-gray-400"
                  }
                `}
              >
                {currentStep > step.id ? (
                  <Check className="h-6 w-6" />
                ) : (
                  step.id
                )}
              </div>
              <div className="mt-3 text-center hidden md:block">
                <p
                  className={`text-sm font-semibold ${
                    currentStep >= step.id ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-gray-500 max-w-[120px] mt-0.5">
                  {step.description}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 flex-1 mx-4 rounded-full transition-all duration-300 ${
                  currentStep > step.id ? "bg-teal-500" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
