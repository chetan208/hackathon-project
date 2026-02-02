'use client';

import { useContext, useState, useRef } from 'react';
import { DepartmentRegistrationContext } from '../../context/DepartmentRegistrationContext';

export default function Step2_MediaLocation() {
  const { formData, updateFormData } = useContext(DepartmentRegistrationContext);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, entrancePhoto: 'Please upload a valid image file' }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, entrancePhoto: 'File size should be less than 5MB' }));
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        updateFormData('entrancePhotoPreview', event.target.result);
        updateFormData('entrancePhoto', file.name);
        setErrors(prev => ({ ...prev, entrancePhoto: '' }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFloorChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      updateFormData('floorNumber', value);
      if (errors.floorNumber) {
        setErrors(prev => ({ ...prev, floorNumber: '' }));
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Media & Location</h2>
        <p className="text-gray-600">Upload department entrance photo and location details</p>
      </div>

      <div className="space-y-4">
        {/* Entrance Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Entrance Photo *
          </label>
          
          <div
            onClick={() => fileInputRef.current.click()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
              errors.entrancePhoto
                ? 'border-red-400 bg-red-50'
                : formData.entrancePhoto
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
            }`}
          >
            {formData.entrancePhotoPreview ? (
              <div className="space-y-3">
                <img
                  src={formData.entrancePhotoPreview || "/placeholder.svg"}
                  alt="Entrance preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-sm text-gray-600">Click to change photo</p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-4xl">📸</div>
                <p className="font-medium text-gray-700">Click or drag image here</p>
                <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
              </div>
            )}
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          
          {errors.entrancePhoto && (
            <p className="mt-2 text-sm text-red-600">{errors.entrancePhoto}</p>
          )}
        </div>

        {/* Floor Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Floor Number *
          </label>
          <input
            type="text"
            value={formData.floorNumber}
            onChange={handleFloorChange}
            placeholder="e.g., 2"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              errors.floorNumber ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
          />
          {errors.floorNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.floorNumber}</p>
          )}
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">Note:</span> A clear entrance photo helps patients identify your department easily.
        </p>
      </div>
    </div>
  );
}

export function validateStep2(formData) {
  const errors = {};
  if (!formData.entrancePhoto) {
    errors.entrancePhoto = 'Entrance photo is required';
  }
  if (!formData.floorNumber) {
    errors.floorNumber = 'Floor number is required';
  }
  return errors;
}
