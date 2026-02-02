"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { StepIndicator } from "./step-indicator"
import { StepBasicDetails } from "./step-basic-details"
import { StepEmailVerification } from "./step-email-verification"
import { StepBranding } from "./step-branding"
import { StepDepartments } from "./step-departments"
import type { RegistrationData } from "@/types/registration"
import { DEFAULT_POLICIES } from "@/types/registration"
import { CheckCircle2, Hospital } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  { id: 1, title: "Basic Details", description: "Hospital information" },
  { id: 2, title: "Verify Email", description: "Confirm your email" },
  { id: 3, title: "Branding", description: "Logo, banner & policies" },
  { id: 4, title: "Departments", description: "Add departments" },
]

export function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isComplete, setIsComplete] = useState(false)
  const [data, setData] = useState<RegistrationData>({
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

  if (isComplete) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <div className="mx-auto rounded-full bg-accent/20 p-6 w-fit">
            <CheckCircle2 className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Registration Complete!</h1>
          <p className="text-muted-foreground">
            Congratulations! <span className="font-semibold text-foreground">{data.basicDetails.name}</span> has been
            successfully registered. You can now access your hospital dashboard.
          </p>
          <div className="flex flex-col gap-3">
            <Button size="lg" className="w-full">
              Go to Dashboard
            </Button>
            <Button variant="outline" size="lg" className="w-full bg-transparent">
              Add More Departments
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="rounded-lg bg-primary/10 p-2">
            <Hospital className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-foreground">Hospital Registration</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Complete the registration process to set up your hospital in our queue
          management system
        </p>
      </div>

      {/* Step Indicator */}
      <div className="max-w-3xl mx-auto px-4">
        <StepIndicator steps={steps} currentStep={currentStep} />
      </div>

      {/* Form Card */}
      <Card className="max-w-2xl mx-auto shadow-lg border-border/50">
        <CardContent className="p-6 md:p-8">
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
        </CardContent>
      </Card>
    </div>
  )
}
