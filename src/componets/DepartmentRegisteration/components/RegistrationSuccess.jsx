import React from 'react';
import { CheckCircle2, Building2 } from 'lucide-react';

import {useNavigate} from 'react-router-dom';

const RegistrationSuccess = ({ formData }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        

        

        {/* Success Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Registration Successful!
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Your department has been registered successfully
          </p>

          {/* Registration Details */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Registration Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Department</span>
                <span className="font-medium text-gray-900">{formData.departmentName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Status</span>
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-semibold">
                  ACTIVE
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Floor Number</span>
                <span className="font-medium text-gray-900">{formData.departmentAddress.floorNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Total Doctors</span>
                <span className="font-medium text-gray-900">{formData.doctors.length}</span>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">What's Next?</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-600 font-bold">•</span>
                <span>Your department is now active and visible to patients</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-600 font-bold">•</span>
                <span>You can manage appointments and schedules from your dashboard</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-600 font-bold">•</span>
                <span>Patients can now book appointments with your doctors</span>
              </li>
            </ul>
          </div>

          {/* Back to Dashboard Button */}
          <button
            type="button"
            onClick={() => navigate('/super-admin')}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-sm hover:shadow transition"
          >
            Back to Dashboard
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Step 6 of 6 - Submit
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
