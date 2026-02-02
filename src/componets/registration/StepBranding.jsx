'use client';

import { useRef, useState } from "react"
import { ImagePlus, X, ArrowLeft, ArrowRight, FileText, ChevronDown, ChevronUp, RotateCcw } from "lucide-react"

const DEFAULT_POLICIES = {
  appointment: "Patients must arrive 15 minutes before their scheduled appointment time. Late arrivals may need to be rescheduled. Please bring all relevant medical documents and a valid ID.",
  cancellation: "Appointments can be cancelled or rescheduled up to 24 hours in advance without any charges. Cancellations within 24 hours may incur a nominal fee.",
  payment: "We accept cash, credit/debit cards, and all major insurance providers. Payment is expected at the time of service unless prior arrangements have been made.",
  emergency: "For medical emergencies, please proceed directly to the Emergency Department or call emergency services. Our emergency services are available 24/7.",
}

const POLICY_LABELS = {
  appointment: "Appointment Policy",
  cancellation: "Cancellation Policy", 
  payment: "Payment Policy",
  emergency: "Emergency Policy",
}

export default function StepBranding({ data, onChange, onNext, onBack }) {
  const logoInputRef = useRef(null)
  const bannerInputRef = useRef(null)
  const [expandedPolicy, setExpandedPolicy] = useState(null)

  const handleFileChange = (type, e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        onChange({
          ...data,
          [type]: file,
          [`${type}Preview`]: reader.result,
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveFile = (type) => {
    onChange({
      ...data,
      [type]: null,
      [`${type}Preview`]: null,
    })
  }

  const handlePolicyChange = (key, value) => {
    onChange({
      ...data,
      policies: { ...data.policies, [key]: value }
    })
  }

  const handleResetPolicy = (key) => {
    onChange({
      ...data,
      policies: { ...data.policies, [key]: DEFAULT_POLICIES[key] }
    })
  }

  const togglePolicy = (key) => {
    setExpandedPolicy(expandedPolicy === key ? null : key)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Hospital Branding</h2>
        <p className="text-gray-500 mt-1">
          Upload your hospital logo, banner, and customize your policies
        </p>
      </div>

      {/* Upload Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Logo Upload */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <ImagePlus className="h-4 w-4 text-teal-500" />
            Hospital Logo
          </label>
          <input
            ref={logoInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange("logo", e)}
            className="hidden"
          />
          {data.logoPreview ? (
            <div className="relative aspect-square w-full max-w-[200px] rounded-2xl border-2 border-gray-200 overflow-hidden group bg-gray-50">
              <img
                src={data.logoPreview || "/placeholder.svg"}
                alt="Logo preview"
                className="w-full h-full object-contain p-4"
              />
              <button
                onClick={() => handleRemoveFile("logo")}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => logoInputRef.current?.click()}
              className="flex flex-col items-center justify-center aspect-square w-full max-w-[200px] rounded-2xl border-2 border-dashed border-gray-300 hover:border-teal-500 hover:bg-teal-50/50 transition-all cursor-pointer"
            >
              <ImagePlus className="h-10 w-10 text-gray-400 mb-3" />
              <span className="text-sm font-medium text-gray-600">Upload Logo</span>
              <span className="text-xs text-gray-400 mt-1">PNG, JPG up to 2MB</span>
            </button>
          )}
        </div>

        {/* Banner Upload */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <ImagePlus className="h-4 w-4 text-teal-500" />
            Hospital Banner
          </label>
          <input
            ref={bannerInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange("banner", e)}
            className="hidden"
          />
          {data.bannerPreview ? (
            <div className="relative aspect-[3/1] w-full rounded-2xl border-2 border-gray-200 overflow-hidden group">
              <img
                src={data.bannerPreview || "/placeholder.svg"}
                alt="Banner preview"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => handleRemoveFile("banner")}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => bannerInputRef.current?.click()}
              className="flex flex-col items-center justify-center aspect-[3/1] w-full rounded-2xl border-2 border-dashed border-gray-300 hover:border-teal-500 hover:bg-teal-50/50 transition-all cursor-pointer"
            >
              <ImagePlus className="h-10 w-10 text-gray-400 mb-3" />
              <span className="text-sm font-medium text-gray-600">Upload Banner</span>
              <span className="text-xs text-gray-400 mt-1">Recommended: 1200x400px</span>
            </button>
          )}
        </div>
      </div>

      {/* Policies Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-teal-500" />
          <h3 className="text-lg font-semibold text-gray-900">Hospital Policies</h3>
          <span className="text-xs text-gray-400 ml-2">(Click to edit or use defaults)</span>
        </div>

        <div className="space-y-3">
          {Object.keys(POLICY_LABELS).map((key) => (
            <div
              key={key}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              {/* Policy Header */}
              <button
                onClick={() => togglePolicy(key)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{POLICY_LABELS[key]}</span>
                <div className="flex items-center gap-2">
                  {data.policies[key] !== DEFAULT_POLICIES[key] && (
                    <span className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded-full">
                      Modified
                    </span>
                  )}
                  {expandedPolicy === key ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Policy Content */}
              {expandedPolicy === key && (
                <div className="px-4 pb-4 space-y-3">
                  <textarea
                    value={data.policies[key]}
                    onChange={(e) => handlePolicyChange(key, e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none text-sm"
                    placeholder={`Enter ${POLICY_LABELS[key].toLowerCase()}...`}
                  />
                  <button
                    onClick={() => handleResetPolicy(key)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 transition-colors"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset to default
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400">
          You can edit these policies anytime from your dashboard.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold bg-teal-500 text-white hover:bg-teal-600 shadow-lg shadow-teal-500/25 transition-all"
        >
          Continue to Departments
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
