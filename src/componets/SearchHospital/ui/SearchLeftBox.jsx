import React, { use, useState } from 'react'

function SearchLeftBox() {
      const handleSearch = () => {
  
    console.log("searching hospital");
  };

  const handleReset = () => {
    console.log("reseting search")
  };

  const [department,setDepartment]=useState([])
  const [distance,setDistance]=useState(0)
  const [openNow,setOpenNow]=useState(false)

  return (
         <div className="md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md space-y-5 flex-shrink-0">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-center">SEARCH HOSPITALS</h2>

        {/* Search Input */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Hospital Name / City / Pincode
          </label>
          <input
            type="text"
            placeholder="Type here..."
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            
          />
        </div>

        {/* Filters */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Filters:</label>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="p-3 border rounded w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Departments</option>
              <option value="OPD">OPD</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
            </select>

            <select
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="p-3 border rounded w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Any Distance</option>
              <option value="1">1 km</option>
              <option value="5">5 km</option>
              <option value="10">10 km</option>
            </select>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={openNow}
                onChange={(e) => setOpenNow(e.target.checked)}
                className="w-5 h-5 accent-blue-600"
              />
              <span className="font-medium">Open Now</span>
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-400 text-white px-6 py-3 rounded hover:bg-gray-500 transition"
          >
            Reset
          </button>
        </div>
      </div>
  )
}

export default SearchLeftBox