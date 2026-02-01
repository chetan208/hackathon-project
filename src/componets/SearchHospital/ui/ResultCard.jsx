import React from 'react'

function ResultCard({h}) {
  return (
    <>
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
    
    </>
  )
}

export default ResultCard