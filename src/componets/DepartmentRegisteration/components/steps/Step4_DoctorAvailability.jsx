'use client';

import { useContext, useState } from 'react';
import { DepartmentRegistrationContext } from '../../context/DepartmentRegistrationContext';

const SPECIALIZATIONS = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Dermatology',
  'Psychiatry',
  'Surgery',
  'ENT',
  'Ophthalmology',
  'Gastroenterology'
];

const AVAILABILITY_OPTIONS = [
  'Full-time',
  'Part-time',
  'Morning Shift',
  'Evening Shift',
  'Night Shift',
  'On-call'
];

export default function Step4_DoctorAvailability() {
  const { formData, updateDoctor, addDoctor, removeDoctor } = useContext(DepartmentRegistrationContext);
  const [errors, setErrors] = useState({});

  const handleDoctorChange = (doctorId, field, value) => {
    updateDoctor(doctorId, field, value);
    if (errors[`${doctorId}-${field}`]) {
      setErrors(prev => ({ ...prev, [`${doctorId}-${field}`]: '' }));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Doctor Availability</h2>
        <p className="text-gray-600">Add doctors and their availability in your department</p>
      </div>

      <div className="space-y-4">
        {formData.doctors.map((doctor, index) => (
          <div key={doctor.id} className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Doctor {index + 1}</h3>
              {formData.doctors.length > 1 && (
                <button
                  onClick={() => removeDoctor(doctor.id)}
                  className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Doctor Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={doctor.name}
                  onChange={(e) => handleDoctorChange(doctor.id, 'name', e.target.value)}
                  placeholder="e.g., Dr. John Smith"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    errors[`${doctor.id}-name`] ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors[`${doctor.id}-name`] && (
                  <p className="mt-1 text-sm text-red-600">{errors[`${doctor.id}-name`]}</p>
                )}
              </div>

              {/* Specialization */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialization *
                </label>
                <select
                  value={doctor.specialization}
                  onChange={(e) => handleDoctorChange(doctor.id, 'specialization', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    errors[`${doctor.id}-specialization`] ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select specialization</option>
                  {SPECIALIZATIONS.map(spec => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
                {errors[`${doctor.id}-specialization`] && (
                  <p className="mt-1 text-sm text-red-600">{errors[`${doctor.id}-specialization`]}</p>
                )}
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability *
              </label>
              <select
                value={doctor.availability}
                onChange={(e) => handleDoctorChange(doctor.id, 'availability', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  errors[`${doctor.id}-availability`] ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              >
                <option value="">Select availability</option>
                {AVAILABILITY_OPTIONS.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors[`${doctor.id}-availability`] && (
                <p className="mt-1 text-sm text-red-600">{errors[`${doctor.id}-availability`]}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add Doctor Button */}
      <button
        onClick={addDoctor}
        className="w-full py-3 px-4 border-2 border-dashed border-blue-400 rounded-lg text-blue-600 font-medium hover:bg-blue-50 transition"
      >
        + Add Another Doctor
      </button>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">Minimum Requirement:</span> You need at least one doctor for your department.
        </p>
      </div>
    </div>
  );
}

export function validateStep4(formData) {
  const errors = {};
  
  if (formData.doctors.length === 0) {
    errors.doctors = 'At least one doctor is required';
  } else {
    formData.doctors.forEach(doctor => {
      if (!doctor.name.trim()) {
        errors[`${doctor.id}-name`] = 'Doctor name is required';
      }
      if (!doctor.specialization) {
        errors[`${doctor.id}-specialization`] = 'Specialization is required';
      }
      if (!doctor.availability) {
        errors[`${doctor.id}-availability`] = 'Availability is required';
      }
    });
  }
  
  return errors;
}
