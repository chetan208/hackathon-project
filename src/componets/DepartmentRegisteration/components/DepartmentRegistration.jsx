'use client';

import { useContext, useState } from 'react';
import { DepartmentRegistrationContext } from '../context/DepartmentRegistrationContext';
import StepIndicator from './StepIndicator';
import Step1_BasicDetails, { validateStep1 } from './steps/Step1_BasicDetails';
import Step2_MediaLocation, { validateStep2 } from './steps/Step2_MediaLocation';
import Step3_Schedule, { validateStep3 } from './steps/Step3_Schedule';
import Step4_DoctorAvailability, { validateStep4 } from './steps/Step4_DoctorAvailability';
import Step5_Review from './steps/Step5_Review';
import Step6_Submit from './steps/Step6_Submit';

export default function DepartmentRegistration() {
  const { formData, currentStep, nextStep, prevStep } = useContext(DepartmentRegistrationContext);
  const [validationErrors, setValidationErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validateCurrentStep = () => {
    let errors = {};

    switch (currentStep) {
      case 1:
        errors = validateStep1(formData);
        break;
      case 2:
        errors = validateStep2(formData);
        break;
      case 3:
        errors = validateStep3(formData);
        break;
      case 4:
        errors = validateStep4(formData);
        break;
      default:
        break;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setShowAlert(false);
      nextStep();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowAlert(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    prevStep();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1_BasicDetails />;
      case 2:
        return <Step2_MediaLocation />;
      case 3:
        return <Step3_Schedule />;
      case 4:
        return <Step4_DoctorAvailability />;
      case 5:
        return <Step5_Review />;
      case 6:
        return <Step6_Submit />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
            <span className="text-2xl text-white">🏥</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Department Registration
          </h1>
          <p className="text-gray-600">
            Complete all steps to register your hospital department
          </p>
        </div>

        {/* Step Indicator */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <StepIndicator />
        </div>

        {/* Validation Alert */}
        {showAlert && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg">
            <p className="text-red-700 font-semibold">Please enter required details</p>
            <p className="text-red-600 text-sm mt-1">Fill all the required fields (marked with *) before proceeding</p>
          </div>
        )}

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        {currentStep !== 6 && (
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="flex-1 py-3 px-6 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        )}

        {/* Back button for final step */}
        {currentStep === 5 && (
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="flex-1 py-3 px-6 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
            >
              Back to Edit
            </button>
          </div>
        )}

        {/* Progress indicator text */}
        <div className="text-center mt-8 text-sm text-gray-600">
          Step {currentStep} of 6 - {currentStep === 1 ? 'Basic Details' : currentStep === 2 ? 'Media & Location' : currentStep === 3 ? 'Schedule' : currentStep === 4 ? 'Doctor Availability' : currentStep === 5 ? 'Review' : 'Submit'}
        </div>
      </div>
    </div>
  );
}
