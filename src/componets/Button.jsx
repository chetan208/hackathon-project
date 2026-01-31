import React from 'react'

function Signup() {

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl text-black font-semibold text-center mb-6">
          Create Account
        </h2>

        <form  className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            
            required
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 text-[#ffffff] py-2 rounded-lg hover:bg-emerald-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <span className="text-emerald-600 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Signup
