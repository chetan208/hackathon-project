'use client';

import { useContext } from 'react';
import { DepartmentRegistrationContext } from '../context/DepartmentRegistrationContext';

const steps = [
  { number: 1, title: 'Basic Details' },
  { number: 2, title: 'Media & Location' },
  { number: 3, title: 'Schedule' },
  { number: 4, title: 'Doctors' },
  { number: 5, title: 'Review' },
  { number: 6, title: 'Submit' }
];

export default function StepIndicator() {
  const { currentStep, goToStep } = useContext(DepartmentRegistrationContext);

  return (
    <div className="w-full mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            {/* Step Circle */}
            <button
              onClick={() => goToStep(step.number)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all cursor-pointer ${
                currentStep === step.number
                  ? 'bg-blue-600 text-white shadow-lg scale-110'
                  : currentStep > step.number
                  ? 'bg-blue-200 text-blue-600'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step.number}
            </button>

            {/* Step Title */}
            <div className="ml-3 hidden sm:block">
              <p
                className={`text-sm font-medium ${
                  currentStep === step.number
                    ? 'text-blue-600'
                    : currentStep > step.number
                    ? 'text-blue-500'
                    : 'text-gray-600'
                }`}
              >
                {step.title}
              </p>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-2 h-0.5 bg-gray-300 ml-4">
                <div
                  className={`h-full transition-all ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-transparent'
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
