'use client';

import { useState } from "react"
import { Plus, Trash2, Building, ArrowLeft, User, CheckCircle2, X } from "lucide-react"

const SUGGESTED_DEPARTMENTS = [
  "General Medicine",
  "Cardiology",
  "Orthopedics",
  "Pediatrics",
  "Gynecology",
  "Dermatology",
  "Neurology",
  "Ophthalmology",
  "ENT",
  "Radiology",
  "Psychiatry",
  "Urology",
]

export default function StepDepartments({ departments, onChange, onBack, onComplete }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newDepartment, setNewDepartment] = useState({
    name: "",
    description: "",
    headDoctor: "",
  })

  const handleAddDepartment = () => {
    if (!newDepartment.name || !newDepartment.description) return

    const department = {
      ...newDepartment,
      id: Date.now().toString(),
    }

    onChange([...departments, department])
    setNewDepartment({ name: "", description: "", headDoctor: "" })
    setIsModalOpen(false)
  }

  const handleRemoveDepartment = (id) => {
    onChange(departments.filter((d) => d.id !== id))
  }

  const isValid = departments.length >= 1

  const availableSuggestions = SUGGESTED_DEPARTMENTS.filter(
    (s) => !departments.some((d) => d.name.toLowerCase() === s.toLowerCase())
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Add Departments</h2>
        <p className="text-gray-500 mt-1">
          Register at least one department to complete your hospital setup
        </p>
      </div>

      {/* Department List */}
      {departments.length > 0 && (
        <div className="grid gap-3">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="group flex items-start justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-teal-200 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-teal-100 p-3">
                  <Building className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{dept.name}</h3>
                  <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">
                    {dept.description}
                  </p>
                  {dept.headDoctor && (
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                      <User className="h-3 w-3" />
                      Head: {dept.headDoctor}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleRemoveDepartment(dept.id)}
                className="p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-50 text-red-500 transition-all"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add Department Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full flex items-center justify-center gap-2 p-5 border-2 border-dashed border-gray-300 rounded-xl hover:border-teal-500 hover:bg-teal-50/50 transition-all text-gray-600 hover:text-teal-600 font-medium"
      >
        <Plus className="h-5 w-5" />
        Add New Department
      </button>

      {!isValid && (
        <p className="text-sm text-amber-600 text-center bg-amber-50 p-3 rounded-xl">
          Please add at least one department to continue
        </p>
      )}

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
          onClick={onComplete}
          disabled={!isValid}
          className={`
            flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all
            ${isValid
              ? "bg-teal-500 text-white hover:bg-teal-600 shadow-lg shadow-teal-500/25"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          <CheckCircle2 className="h-5 w-5" />
          Complete Registration
        </button>
      </div>

      {/* Add Department Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">Add Department</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 space-y-5">
              {/* Department Name */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Department Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Cardiology"
                  value={newDepartment.name}
                  onChange={(e) =>
                    setNewDepartment({ ...newDepartment, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                />
                {/* Suggestions */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {availableSuggestions.slice(0, 6).map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() =>
                        setNewDepartment({ ...newDepartment, name: suggestion })
                      }
                      className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-teal-100 hover:text-teal-700 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Brief description of department services..."
                  value={newDepartment.description}
                  onChange={(e) =>
                    setNewDepartment({ ...newDepartment, description: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none"
                />
              </div>

              {/* Head Doctor */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Head Doctor <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Dr. Name"
                  value={newDepartment.headDoctor}
                  onChange={(e) =>
                    setNewDepartment({ ...newDepartment, headDoctor: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-gray-100 flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleAddDepartment}
                disabled={!newDepartment.name || !newDepartment.description}
                className={`
                  flex-1 px-4 py-3 rounded-xl font-semibold transition-all
                  ${newDepartment.name && newDepartment.description
                    ? "bg-teal-500 text-white hover:bg-teal-600"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                Add Department
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
