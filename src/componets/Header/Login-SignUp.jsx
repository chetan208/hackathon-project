import React from 'react'
import {Link} from 'react-router-dom'

function LoginSignUp() {
  return (
    <div>
      <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              Register
            </Link>
          </div>
    </div>
  )
}

export default LoginSignUp
