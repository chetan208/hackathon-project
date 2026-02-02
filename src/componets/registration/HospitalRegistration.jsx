'use client';

import { useState } from "react"
import StepIndicator from "./StepIndicator"
import StepBasicDetails from "./StepBasicDetails"
import StepEmailVerification from "./StepEmailVerification"
import StepBranding from "./StepBranding"
import StepDepartments from "./StepDepartments"
import { CheckCircle2, Hospital, ArrowRight, LayoutDashboard } from "lucide-react"

const DEFAULT_POLICIES = {
  appointment: "Patients must arrive 15 minutes before their scheduled appointment time. Late arrivals may need to be rescheduled. Please bring all relevant medical documents and a valid ID.",
  cancellation: "Appointments can be cancelled or rescheduled up to 24 hours in advance without any charges. Cancellations within 24 hours may incur a nominal fee.",
  payment: "We accept cash, credit/debit cards, and all major insurance providers. Payment is expected at the time of service unless prior arrangements have been made.",
  emergency: "For medical emergencies, please proceed directly to the Emergency Department or call emergency services. Our emergency services are available 24/7.",
}

export default function HospitalRegistration() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isComplete, setIsComplete] = useState(false)
  const [data, setData] = useState({
    basicDetails: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      website: "",
      description: "",
    },
    emailVerified: false,
    branding: {
      logo: null,
      banner: null,
      logoPreview: null,
      bannerPreview: null,
      policies: DEFAULT_POLICIES,
    },
    departments: [],
  })

  const handleComplete = () => {
    // Here you would typically send data to your backend
    console.log("Registration complete:", data)
    setIsComplete(true)
  }

  // Success Screen
  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 flex items-center justify-center p-4">
        <div className="text-center max-w-lg">
          <div className="mx-auto rounded-full bg-emerald-100 p-8 w-fit mb-8">
            <CheckCircle2 className="h-20 w-20 text-emerald-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Registration Complete!</h1>
          <p className="text-gray-500 text-lg mb-8">
            Congratulations! <span className="font-semibold text-gray-900">{data.basicDetails.name}</span> has been
            successfully registered in our Queue Management System.
          </p>
          <div className="flex flex-col gap-4 max-w-xs mx-auto">
            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-teal-500 text-white hover:bg-teal-600 shadow-lg shadow-teal-500/25 transition-all">
              <LayoutDashboard className="h-5 w-5" />
              Go to Dashboard
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-all">
              Add More Departments
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="rounded-2xl bg-teal-500 p-3">
              <Hospital className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Hospital Registration</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Complete the registration process to set up your hospital in our queue management system
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-10">
          <StepIndicator currentStep={currentStep} />
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 lg:p-10">
          {currentStep === 1 && (
            <StepBasicDetails
              data={data.basicDetails}
              onChange={(basicDetails) => setData({ ...data, basicDetails })}
              onNext={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && (
            <StepEmailVerification
              email={data.basicDetails.email}
              verified={data.emailVerified}
              onVerify={() => setData({ ...data, emailVerified: true })}
              onNext={() => setCurrentStep(3)}
              onBack={() => setCurrentStep(1)}
            />
          )}

          {currentStep === 3 && (
            <StepBranding
              data={data.branding}
              onChange={(branding) => setData({ ...data, branding })}
              onNext={() => setCurrentStep(4)}
              onBack={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 4 && (
            <StepDepartments
              departments={data.departments}
              onChange={(departments) => setData({ ...data, departments })}
              onBack={() => setCurrentStep(3)}
              onComplete={handleComplete}
            />
          )}
        </div>
      </div>
    </div>
  )
}
