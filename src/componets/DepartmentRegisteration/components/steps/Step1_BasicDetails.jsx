'use client';

import { useContext, useState } from 'react';
import { DepartmentRegistrationContext } from '../../context/DepartmentRegistrationContext';

export default function Step1_BasicDetails() {
  const { formData, updateFormData } = useContext(DepartmentRegistrationContext);
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};
    if (!formData.departmentName.trim()) {
      newErrors.departmentName = 'Department name is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Department Basic Details</h2>
        <p className="text-gray-600">Enter the basic information about your department</p>
      </div>

      <div className="space-y-4">
        {/* Department Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department Name *
          </label>
          <input
            type="text"
            name="departmentName"
            value={formData.departmentName}
            onChange={handleChange}
            placeholder="e.g., Cardiology Department"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              errors.departmentName ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
          />
          {errors.departmentName && (
            <p className="mt-1 text-sm text-red-600">{errors.departmentName}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide a detailed description of your department"
            rows="5"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none ${
              errors.description ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </div>
      </div>

      {/* Validation info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">Tip:</span> Provide clear and accurate information to help patients understand your department better.
        </p>
      </div>
    </div>
  );
}

export function validateStep1(formData) {
  const errors = {};
  if (!formData.departmentName.trim()) {
    errors.departmentName = 'Department name is required';
  }
  if (!formData.description.trim()) {
    errors.description = 'Description is required';
  }
  return errors;
}
