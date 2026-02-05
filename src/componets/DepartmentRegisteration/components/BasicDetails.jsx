import React from 'react';

const BasicDetails = ({ formData, updateFormData, onNext, onPrevious }) => {
  const isValid = formData.departmentName.trim() && formData.description.trim();

  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Department Basic Details
        </h2>
        <p className="text-gray-600">
          Enter the basic information about your department
        </p>
      </div>

      <div className="space-y-6">
        {/* Department Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.departmentName}
            onChange={(e) => updateFormData('departmentName', e.target.value)}
            placeholder="e.g., Cardiology Department"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => updateFormData('description', e.target.value)}
            placeholder="Provide a detailed description of your department"
            rows={6}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
          />
        </div>

        {/* Tip Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">Tip:</span> Provide clear and accurate information to help patients understand your department better.
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
        <button
          type="button"
          disabled
          className="px-6 py-2.5 bg-gray-100 text-gray-400 rounded-lg font-medium cursor-not-allowed"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!isValid}
          className={`
            px-8 py-2.5 rounded-lg font-medium transition-all
            ${isValid
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BasicDetails;
