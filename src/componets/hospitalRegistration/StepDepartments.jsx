'use client';

import { Plus, Trash2, Building, ArrowLeft, User, CheckCircle2 } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function StepDepartments({
  departments,
  onBack,
  onComplete,
  handleRemoveDepartment
}) {
  const navigate = useNavigate()

  const isValid = departments.length >= 1

  const handleAddDepartment = () => {
    navigate("/department-registration", {
      state: { from: "hospital-registration" }
    })
  }

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
                  <h3 className="font-semibold text-gray-900">
                    {dept.name}
                  </h3>

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
        onClick={handleAddDepartment}
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
    </div>
  )
}
