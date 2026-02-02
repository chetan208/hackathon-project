'use client';

import { Building2, Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react"

export default function StepBasicDetails({ data, onChange, onNext }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value })
  }

  const isValid =
    data.name &&
    data.email &&
    data.phone &&
    data.address &&
    data.city &&
    data.state &&
    data.pincode

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Hospital Basic Details</h2>
        <p className="text-gray-500 mt-1">
          Enter your hospital's basic information to get started
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-5">
          {/* Hospital Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Building2 className="h-4 w-4 text-teal-500" />
              Hospital Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter hospital name"
              value={data.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Mail className="h-4 w-4 text-teal-500" />
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="hospital@example.com"
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Phone className="h-4 w-4 text-teal-500" />
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={data.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
            />
          </div>

          {/* Website */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Globe className="h-4 w-4 text-teal-500" />
              Website <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <input
              type="url"
              placeholder="https://www.hospital.com"
              value={data.website || ""}
              onChange={(e) => handleChange("website", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-5">
          {/* Address */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <MapPin className="h-4 w-4 text-teal-500" />
              Street Address <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Enter complete street address"
              value={data.address}
              onChange={(e) => handleChange("address", e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none"
            />
          </div>

          {/* City, State, Pincode */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="City"
                value={data.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="State"
                value={data.state}
                onChange={(e) => handleChange("state", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                PIN Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="XXXXXX"
                value={data.pincode}
                onChange={(e) => handleChange("pincode", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Hospital Description <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <textarea
              placeholder="Brief description about your hospital, services, specialties..."
              value={data.description || ""}
              onChange={(e) => handleChange("description", e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none"
            />
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-end pt-4">
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`
            flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all
            ${isValid
              ? "bg-teal-500 text-white hover:bg-teal-600 shadow-lg shadow-teal-500/25"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          Continue to Email Verification
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
