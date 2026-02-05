import React, { useState } from "react";
import StepIndicator from "./components/StepIndicator";
import BasicDetails from "./components/BasicDetails";
import MediaLocation from "./components/MediaLocation";
import WorkingSchedule from "./components/WorkingSchedule";
import DoctorAvailability from "./components/DoctorAvailability";
import ReviewInformation from "./components/ReviewInformation";
import ConfirmSubmission from "./components/ConfirmSubmission";
import RegistrationSuccess from "./components/RegistrationSuccess";

import { Building2 } from "lucide-react";

const steps = [
  { id: 1, title: "Basic Details" },
  { id: 2, title: "Media & Location" },
  { id: 3, title: "Schedule" },
  { id: 4, title: "Doctors" },
  { id: 5, title: "Review" },
  { id: 6, title: "Submit" },
];

export default function Layout() {
  const [currentStep, setCurrentStep] = useState(1);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const [formData, setFormData] = useState({
    departmentName: "",
    description: "",
    mainEntrancePhoto: null,

    workingSchedule:{
      is24X7: false,
      workingDays: [],
      timeSlots: []
    },
    
   
    doctors: [
      { id: 1, name: '', specialization: '', availabilityDays: [] }
    ],

    departmentAddress: {
    floorNumber: "",
    wing: "",
    landmark: "",
    hasSpecialBuilding: false
  },

    additionalPhotos:[]
  });

  console.log("Form Data:", formData);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    setRegistrationComplete(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToStep = (stepNumber) => {
    setCurrentStep(stepNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (registrationComplete) {
    return <RegistrationSuccess formData={formData} />;
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicDetails
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <MediaLocation
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 3:
        return (
          <WorkingSchedule
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 4:
        return (
          <DoctorAvailability
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 5:
        return (
          <ReviewInformation
            formData={formData}
            onNext={handleNext}
            onPrevious={handlePrevious}
            goToStep={goToStep}
          />
        );
      case 6:
        return (
          <ConfirmSubmission
            formData={formData}
            onSubmit={handleSubmit}
            onPrevious={handlePrevious}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 pt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
 
          <div className="flex items-center justify-center gap-3 mb-4">
        
            <div className="rounded-2xl bg-teal-500 p-3">
             
              <Building2 className="h-8 w-8 text-white" />{" "}
            </div>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Department Registration
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
        
            Complete all steps to register your hospital department
          </p>
        </div>

        {/* Step Indicator */}
        <StepIndicator currentStep={currentStep} />

        {/* Step Content */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
}
