// components/SearchWithResults.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const dummyHospitals = [
  { id: 1, name: "City Hospital", city: "Delhi", distance: 2.3, departments: ["OPD", "Ortho", "Cardio"], queue: 18, waitTime: 20 },
  { id: 2, name: "Care Plus", city: "Delhi", distance: 4.1, departments: ["Pediatrics", "OPD"], queue: 9, waitTime: 10 },
  { id: 3, name: "Healing Touch", city: "Gurgaon", distance: 5.5, departments: ["OPD", "Cardiology"], queue: 12, waitTime: 15 },
];

const SearchWithResults = () => {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("");
  const [distance, setDistance] = useState("");
  const [openNow, setOpenNow] = useState(false);
  const [results, setResults] = useState(dummyHospitals);

  const navigate=useNavigate()

  const handleSearch = () => {
    const filtered = dummyHospitals.filter((h) => {
      const matchQuery =
        query === "" ||
        h.name.toLowerCase().includes(query.toLowerCase()) ||
        h.city.toLowerCase().includes(query.toLowerCase());
      const matchDept = department === "" || h.departments.includes(department);
      const matchDistance = distance === "" || h.distance <= parseFloat(distance);
      return matchQuery && matchDept && matchDistance;
    });
    setResults(filtered);
  };

  const handleReset = () => {
    setQuery("");
    setDepartment("");
    setDistance("");
    setOpenNow(false);
    setResults(dummyHospitals);
  };

  return (
    <div className="mt-20  w-[90%] mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Left Side - Search */}
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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

      {/* Right Side - Results */}
      <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md overflow-y-auto max-h-[80vh]">
        <h2 className="text-2xl font-bold mb-5 border-b pb-2 text-center">SEARCH RESULTS</h2>

        {results.length === 0 && <p className="text-gray-500 text-center">No hospitals found.</p>}

        {results.map((h) => (
          <div key={h.id} className="border rounded p-4 mb-4 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold">{h.name}</h3>
            <p>
              {h.city} | Distance: {h.distance} km
            </p>
            <p>Departments: {h.departments.join(", ")}</p>
            <p>Current Queue: {h.queue} patients</p>
            <p>Est. Wait Time: {h.waitTime} mins</p>
            <div className="mt-2 flex space-x-2">
              <button
              onClick={()=>navigate("/hospital")}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                View Details
              </button>
              <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                Get Token
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchWithResults;
