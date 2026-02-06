import React from "react";
import { User, Hash, Phone, AlertCircle } from "lucide-react";

const PatientDetailsForm = ({ register, errors, visitType, setValue }) => {
  // Handle mobile number input - only digits
  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setValue("mobile", value.slice(0, 10));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-[#0055ff] to-[#0044cc] rounded-lg flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <span>Patient Information</span>
      </h3>

      <div className="space-y-6">
        {/* Patient Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              {...register("patientName", {
                required: "Patient name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters"
                },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Name should only contain letters"
                }
              })}
              className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-4 outline-none transition-all ${
                errors.patientName
                  ? "border-red-300 bg-red-50 focus:ring-red-100"
                  : "border-gray-200 focus:border-[#0055ff] focus:ring-blue-50"
              }`}
              placeholder="Enter your full name"
            />
          </div>
          {errors.patientName && (
            <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.patientName.message}</span>
            </p>
          )}
        </div>

        {/* Age and Mobile Number Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Age */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Age <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Hash className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="number"
                {...register("age", {
                  required: "Age is required",
                  min: {
                    value: 1,
                    message: "Age must be at least 1"
                  },
                  max: {
                    value: 150,
                    message: "Please enter a valid age"
                  },
                  valueAsNumber: true
                })}
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-4 outline-none transition-all ${
                  errors.age
                    ? "border-red-300 bg-red-50 focus:ring-red-100"
                    : "border-gray-200 focus:border-[#0055ff] focus:ring-blue-50"
                }`}
                placeholder="Enter your age"
                min="0"
                max="150"
              />
            </div>
            {errors.age && (
              <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.age.message}</span>
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Phone className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="tel"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit mobile number"
                  }
                })}
                onChange={handleMobileChange}
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-4 outline-none transition-all ${
                  errors.mobile
                    ? "border-red-300 bg-red-50 focus:ring-red-100"
                    : "border-gray-200 focus:border-[#0055ff] focus:ring-blue-50"
                }`}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
              />
            </div>
            {errors.mobile && (
              <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.mobile.message}</span>
              </p>
            )}
          </div>
        </div>

        {/* Visit Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            Visit Type <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "new", label: "New Patient", icon: "👤" },
              { value: "follow-up", label: "Follow-up Visit", icon: "🔄" },
            ].map((option) => (
              <label
                key={option.value}
                className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all group ${
                  visitType === option.value
                    ? "border-[#0055ff] bg-blue-50"
                    : "border-gray-200 hover:border-[#0055ff] hover:bg-blue-50/50"
                }`}
              >
                <input
                  type="radio"
                  value={option.value}
                  {...register("visitType")}
                  className="sr-only"
                />
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      visitType === option.value
                        ? "border-[#0055ff] bg-[#0055ff]"
                        : "border-gray-300 group-hover:border-[#0055ff]"
                    }`}
                  >
                    {visitType === option.value && (
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div className="text-left">
                    <span
                      className={`font-semibold block ${
                        visitType === option.value ? "text-[#0055ff]" : "text-gray-700"
                      }`}
                    >
                      {option.label}
                    </span>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsForm;