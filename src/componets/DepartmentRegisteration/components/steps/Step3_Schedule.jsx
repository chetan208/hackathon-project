'use client';

import { useContext, useState } from 'react';
import { DepartmentRegistrationContext } from '../../context/DepartmentRegistrationContext';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function Step3_Schedule() {
  const { formData, updateFormData } = useContext(DepartmentRegistrationContext);
  const [errors, setErrors] = useState({});

  const handleTimeChange = (field, value) => {
    updateFormData(field, value);
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleDayToggle = (day) => {
    const days = formData.workingDays.includes(day)
      ? formData.workingDays.filter(d => d !== day)
      : [...formData.workingDays, day];
    updateFormData('workingDays', days);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Working Schedule</h2>
        <p className="text-gray-600">Set your department's working hours and days</p>
      </div>

      <div className="space-y-6">
        {/* Operating Hours */}
        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
          <h3 className="font-semibold text-gray-900">Operating Hours</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Opening Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Opening Time *
              </label>
              <input
                type="time"
                value={formData.openingTime}
                onChange={(e) => handleTimeChange('openingTime', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  errors.openingTime ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.openingTime && (
                <p className="mt-1 text-sm text-red-600">{errors.openingTime}</p>
              )}
            </div>

            {/* Closing Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Closing Time *
              </label>
              <input
                type="time"
                value={formData.closingTime}
                onChange={(e) => handleTimeChange('closingTime', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  errors.closingTime ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.closingTime && (
                <p className="mt-1 text-sm text-red-600">{errors.closingTime}</p>
              )}
            </div>
          </div>
        </div>

        {/* Working Days */}
        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
          <h3 className="font-semibold text-gray-900">Working Days *</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {DAYS.map(day => (
              <button
                key={day}
                onClick={() => handleDayToggle(day)}
                className={`py-3 px-4 rounded-lg font-medium transition text-center ${
                  formData.workingDays.includes(day)
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-400'
                }`}
              >
                {day.substring(0, 3)}
              </button>
            ))}
          </div>
          
          {formData.workingDays.length === 0 && (
            <p className="text-sm text-red-600">Please select at least one working day</p>
          )}
        </div>

        {/* Selected Days Summary */}
        {formData.workingDays.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Operating Schedule:</span> {formData.workingDays.join(', ')} from {formData.openingTime} to {formData.closingTime}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function validateStep3(formData) {
  const errors = {};
  if (!formData.openingTime) {
    errors.openingTime = 'Opening time is required';
  }
  if (!formData.closingTime) {
    errors.closingTime = 'Closing time is required';
  }
  if (formData.workingDays.length === 0) {
    errors.workingDays = 'Please select at least one working day';
  }
  return errors;
}
