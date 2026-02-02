'use client';

import { useContext, useState } from 'react';
import { DepartmentRegistrationContext } from '../../context/DepartmentRegistrationContext';

export default function Step6_Submit() {
  const { formData, updateFormData } = useContext(DepartmentRegistrationContext);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Update status to ACTIVE
    updateFormData('status', 'ACTIVE');
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">✓</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900">Registration Successful!</h2>
          <p className="text-gray-600 text-lg">
            Your department has been registered successfully
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-3">
          <h3 className="font-semibold text-green-900">Registration Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-green-800">Department</span>
              <span className="font-medium text-green-900">{formData.departmentName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-800">Status</span>
              <span className="font-medium text-green-900 bg-green-200 px-3 py-1 rounded-full">
                {formData.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-800">Floor Number</span>
              <span className="font-medium text-green-900">{formData.floorNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-800">Total Doctors</span>
              <span className="font-medium text-green-900">{formData.doctors.length}</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-2">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">What's Next?</span>
          </p>
          <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
            <li>Your department is now active and visible to patients</li>
            <li>You can manage appointments and schedules from your dashboard</li>
            <li>Patients can now book appointments with your doctors</li>
          </ul>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirm Submission</h2>
        <p className="text-gray-600">All information is verified and ready for submission</p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 space-y-3">
        <h3 className="font-semibold text-yellow-900">Final Checklist</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-green-600 text-xl">✓</span>
            <span className="text-yellow-800">Department basic details completed</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-600 text-xl">✓</span>
            <span className="text-yellow-800">Entrance photo uploaded and floor number set</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-600 text-xl">✓</span>
            <span className="text-yellow-800">Working schedule configured</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-600 text-xl">✓</span>
            <span className="text-yellow-800">Doctor information added ({formData.doctors.length} doctor{formData.doctors.length !== 1 ? 's' : ''})</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-600 text-xl">✓</span>
            <span className="text-yellow-800">All details reviewed</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">Department Status:</span> Your department will be set to <span className="font-semibold">ACTIVE</span> upon successful submission.
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Registration'}
        </button>
        <button
          onClick={() => window.history.back()}
          disabled={isSubmitting}
          className="w-full py-3 px-6 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition disabled:opacity-50"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
