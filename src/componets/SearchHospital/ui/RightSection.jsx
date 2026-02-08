import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function RightSection({hospitals}) {
  const navigate = useNavigate();
  

  return (
    <div>
      <div className="flex-1 mt-1  rounded-xl shadow-md ">
        <div className="mb-4 flex  flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Search Results
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Found {hospitals.length} hospitals
            </p>
          </div>
          <div>
            <select className="p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0055ff] bg-white">
              <option>Sort by: Relevance</option>
              <option>Sort by: Distance</option>
              <option>Sort by: Rating</option>
              <option>Sort by: Reviews</option>
            </select>
          </div>
        </div>

        {/* Hospital Cards */}
        <div className="space-y-4  w-200  max-h-145 overflow-y-auto">
          {hospitals.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No hospitals found</h3>
              <p className="text-gray-500">Try adjusting your filters or search criteria</p>
            </div>
          ) : (
            hospitals.map((hospital) => (
              <div key={hospital._id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0 bg-gray-200">
                    <img
                      src={hospital.logoData?.url}
                      alt={hospital.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-2">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800 hover:text-[#0055ff] transition cursor-pointer">
                            {hospital.name}
                          </h3>
                          {hospital?.isOpen && (
                            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                              Open
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span>{hospital.address.street}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-[#0055ff] font-semibold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            {hospital?.distance}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600">{hospital?.type}</span>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                        <div className="flex items-center gap-1 bg-green-50 px-3 py-1.5 rounded-lg">
                          <span className="text-lg font-bold text-green-700">{hospital?.rating}</span>
                          <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-500">{hospital.reviews} reviews</span>
                      </div>
                    </div>

                    {/* Departments */}
                   

                    {/* Facilities */}
                  

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2">
                      <button
                      onClick={() => navigate(`/hospital/${hospital._id}`)}
                       className="flex-1 sm:flex-none bg-[#0055ff] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#0044dd] transition text-sm">
                        Get Token
                      </button>
                      <button
                      onClick={() => navigate(`/hospital/${hospital._id}`)}
                       className="flex-1 sm:flex-none border-2 border-[#0055ff] text-[#0055ff] px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition text-sm">
                        View Details
                      </button>
                      <a
                        href={`tel:${hospital?.phone}`}
                        className="flex items-center gap-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition text-sm"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default RightSection