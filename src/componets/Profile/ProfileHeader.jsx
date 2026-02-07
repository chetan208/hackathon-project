import React from 'react'
import { useSelector } from 'react-redux'

function ProfileHeader() {

    const user = useSelector((state) => state.auth.userData);

  return (
    <div className="bg-white rounded-xl shadow p-6 flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-600">
            {user?.name ? user.name.substring(0, 2).toUpperCase() : "U"}
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-800">
              {user?.name || "User"}
            </h1>
            <p className="text-gray-500">{user?.email || "user@example.com"}</p>

            <span className="inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700">
              {user?.role || "User"}
            </span>
          </div>
        </div>
  )
}

export default ProfileHeader
