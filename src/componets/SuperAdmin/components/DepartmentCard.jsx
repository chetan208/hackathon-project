import React from 'react'
import { Clock, Users, MapPin, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function DepartmentCard({ dept }) {
  const navigate = useNavigate()
  const fallbackImage =
    'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=400&h=260&fit=crop'

  return (
    <div
      key={dept._id}
      className="
        bg-white 
        rounded-2xl 
        border border-slate-200
        hover:shadow-xl hover:border-teal-300
        transition-all duration-300 
        overflow-hidden 
        w-full max-w-[420px]
        cursor-pointer
      "
      onClick={() => navigate(`/department-access/${dept._id}`)}
    >
      {/* Image */}
      <div className="h-52 w-full bg-slate-200">
        <img
          src={dept.entrancePhoto?.url || fallbackImage}
          alt={dept.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between min-h-[260px]">
        {/* Title + Status */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-900 leading-tight">
              {dept.name}
            </h3>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 
            text-xs font-semibold rounded-full">
              {dept.status || 'Active'}
            </span>
          </div>

          <p className="text-sm text-slate-500 mb-5 line-clamp-2">
            {dept.description || 'No description'}
          </p>
        </div>

        {/* Info Section */}
        <div className="space-y-4 border-t border-slate-100 pt-4">
          {/* Hours */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50">
              <Clock size={16} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Hours</p>
              <p className="text-sm font-semibold text-slate-900">
                {dept.workingSchedule?.is24X7
                  ? '24 / 7'
                  : dept.workingSchedule?.timeSlots?.length > 0
                  ? `${dept.workingSchedule.timeSlots[0].openingTime} - ${dept.workingSchedule.timeSlots[0].closingTime}`
                  : 'Not Set'}
              </p>
            </div>
          </div>

          {/* Doctors */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50">
              <Users size={16} className="text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Doctors</p>
              <p className="text-sm font-semibold text-slate-900">
                {dept.Doctors?.length || 0}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-50">
              <MapPin size={16} className="text-red-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Location</p>
              <p className="text-sm font-semibold text-slate-900">
                {dept.departmentAddress?.floorNumber
                  ? `Floor ${dept.departmentAddress.floorNumber}`
                  : 'Not Set'}
                {dept.departmentAddress?.wing
                  ? ` · Wing ${dept.departmentAddress.wing}`
                  : ''}
              </p>
            </div>
          </div>
        </div>

        {/* Landmark */}
        {dept.departmentAddress?.landmark && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100">
            <Home size={14} className="text-purple-600" />
            <p className="text-xs text-slate-600">
              {dept.departmentAddress.landmark}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DepartmentCard
