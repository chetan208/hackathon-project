import React from 'react'

function DesktopNavItems() {
  return (
    <div className="hidden md:flex space-x-6  mr-5 md:mr-10">
            <a href="/about" className="text-gray-800 hover:text-blue-600 transition">
              About Us
            </a>
            <a href="/contact" className="text-gray-800 hover:text-blue-600 transition">
              Contact
            </a>
            <a href="/how-it-works" className="text-gray-800 hover:text-blue-600 transition">
              How it works
            </a>
          </div>
  )
}

export default DesktopNavItems
