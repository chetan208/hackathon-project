'use client';

import { useContext } from 'react';
import { DepartmentRegistrationContext } from '../../context/DepartmentRegistrationContext';

export default function Step5_Review() {
  const { formData, goToStep } = useContext(DepartmentRegistrationContext);

  const handleEditStep = (step) => {
    goToStep(step);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Information</h2>
        <p className="text-gray-600">Please review all details before submission</p>
      </div>

      {/* Step 1: Basic Details */}
      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg text-gray-900">Step 1: Basic Details</h3>
          <button
            onClick={() => handleEditStep(1)}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Edit
          </button>
        </div>
        
        <div className="space-y-2">
          <div>
            <p className="text-sm text-gray-600">Department Name</p>
            <p className="font-medium text-gray-900">{formData.departmentName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Description</p>
            <p className="text-gray-700 whitespace-pre-wrap">{formData.description}</p>
          </div>
        </div>
      </div>

      {/* Step 2: Media & Location */}
      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg text-gray-900">Step 2: Media & Location</h3>
          <button
            onClick={() => handleEditStep(2)}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Edit
          </button>
        </div>
        
        <div className="space-y-3">
          {formData.entrancePhotoPreview && (
            <div>
              <p className="text-sm text-gray-600 mb-2">Entrance Photo</p>
              <img
                src={formData.entrancePhotoPreview || "/placeholder.svg"}
                alt="Department entrance"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}
          <div>
            <p className="text-sm text-gray-600">Floor Number</p>
            <p className="font-medium text-gray-900">{formData.floorNumber}</p>
          </div>
        </div>
      </div>

      {/* Step 3: Schedule */}
      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg text-gray-900">Step 3: Working Schedule</h3>
          <button
            onClick={() => handleEditStep(3)}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Edit
          </button>
        </div>
        
        <div className="space-y-2">
          <div>
            <p className="text-sm text-gray-600">Operating Hours</p>
            <p className="font-medium text-gray-900">
              {formData.openingTime} - {formData.closingTime}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Working Days</p>
            <p className="font-medium text-gray-900">
              {formData.workingDays.join(', ')}
            </p>
          </div>
        </div>
      </div>

      {/* Step 4: Doctors */}
      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg text-gray-900">Step 4: Doctor Availability</h3>
          <button
            onClick={() => handleEditStep(4)}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Edit
          </button>
        </div>
        
        <div className="space-y-4">
          {formData.doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="border border-gray-300 rounded-lg p-4 bg-white"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Doctor {index + 1} Name</p>
                  <p className="font-medium text-gray-900">{doctor.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Specialization</p>
                  <p className="font-medium text-gray-900">{doctor.specialization}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Availability</p>
                  <p className="font-medium text-gray-900">{doctor.availability}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-800">
          <span className="font-semibold">Ready?</span> Click "Submit" to complete the registration process.
        </p>
      </div>
    </div>
  );
}
