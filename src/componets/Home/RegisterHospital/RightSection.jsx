import React from 'react'

function RightSection() {
  return (
    <div>
              <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Hospital Signup
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Fill details to register your hospital
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Hospital Name"
              className="w-full h-10 px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="City"
              className="w-full h-10 px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="Full Address"
              className="w-full h-10 px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full h-10 px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Official Email"
              className="w-full h-10 px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <div className='w-full flex justify-between' >
            <select className="w-55 px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Hospital Type</option>
              <option>Government</option>
              <option>Private</option>
              <option>Clinic</option>
              <option>Diagnostic Center</option>
            </select>

            <input
              type="text"
              placeholder="Opening Timings (e.g. 9 AM - 8 PM)"
              className="w-50 px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            </div>


            {/* Extra Real-world Fields */}
 

 

            <input
              type="password"
              placeholder="Create Password"
              className="w-full h-10 px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Register Hospital
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-4">
            Already registered? <span className="text-blue-600 cursor-pointer">Login</span>
          </p>
        </div>
    </div>
  )
}

export default RightSection
