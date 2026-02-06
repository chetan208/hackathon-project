import {useState} from 'react';


function LeftSection({searchQuerry ,setSearchQuerry}) {

     const handleReset = () => {
        setSearchText('');
        setDepartment('');
        setDistance('');
        setOpenNow(false);
        setRating('');
        setFacilityType('');
        setHasEmergency(false);
        setHasParking(false);
        setHasPharmacy(false);
        setHasAmbulance(false);
        setInsuranceAccepted('');
        setFilteredHospitals(hospitals);
        console.log("Reset all filters");
      };

    const handleSearch = () => {
     console.log(searchQuerry)
    
  };

        // Search and Filter States
        const [searchText, setSearchText] = useState(searchQuerry || '');
        const [department, setDepartment] = useState('');
        const [distance, setDistance] = useState('');
        const [openNow, setOpenNow] = useState(false);
        const [rating, setRating] = useState('');
        const [facilityType, setFacilityType] = useState('');
        const [hasEmergency, setHasEmergency] = useState(false);
        const [hasParking, setHasParking] = useState(false);
        const [hasPharmacy, setHasPharmacy] = useState(false);
        const [hasAmbulance, setHasAmbulance] = useState(false);
        const [insuranceAccepted, setInsuranceAccepted] = useState('');
  return (
    <div>
                  <div className="w-full lg:w-80 xl:w-96 shrink-0">
            <div className="bg-white h-164
             rounded-xl
              shadow-md
               border border-gray-200 sticky top-24">
              {/* Header */}
              <div className="bg-linear-to-r from-[#0055ff] to-[#0044dd] p-5 rounded-t-xl">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search Filters
                </h2>
              </div>

              {/* Content */}
              <div className="pl-5 pr-5 pb-5  space-y-4 max-h-[calc(100vh-200px)] overflow-hidden">
                {/* Search Input */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Search Location
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Hospital name, city, pincode..."
                      value={searchQuerry}
                      onChange={(e) => setSearchQuerry(e.target.value)}
                      className="w-full h-10 p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:border-transparent transition"
                    />
                    <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>

                {/* Filters Section */}
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide border-b pb-2">
                    Filters
                  </h3>
                  <div className='flex justify-between'> 
                      {/* Department */}
                  <div>
                    <label className="block mb-2 text-xs font-medium text-gray-600">
                      Department
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full h-10 pl-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055ff] bg-white transition"
                    >
                      <option value="">All Departments</option>
                      <option value="general">General Medicine</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="neurology">Neurology</option>
                      <option value="gynecology">Gynecology</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="ent">ENT</option>
                      <option value="ophthalmology">Ophthalmology</option>
                      <option value="pathology">Pathology</option>
                      <option value="radiology">Radiology</option>
                    </select>
                  </div>

                  {/* Facility Type */}
                  <div>
                    <label className="block mb-2 text-xs font-medium text-gray-600">
                      Facility Type
                    </label>
                    <select
                      value={facilityType}
                      onChange={(e) => setFacilityType(e.target.value)}
                      className="w-full h-10 pl-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055ff] bg-white transition"
                    >
                      <option value="">All Types</option>
                      <option value="Government Hospital">Government Hospital</option>
                      <option value="Private Hospital">Private Hospital</option>
                      <option value="Clinic">Clinic</option>
                      <option value="Diagnostic Center">Diagnostic Center</option>
                    </select>
                  </div>
                  </div>
                
                  <div className='flex justify-between'>
                                     {/* Distance */}
                  <div>
                    <label className="block mb-2 text-xs font-medium text-gray-600">
                      Maximum Distance
                    </label>
                    <select
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      className="w-full h-10 pl-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055ff] bg-white transition"
                    >
                      <option value="">Any Distance</option>
                      <option value="1">Within 1 km</option>
                      <option value="2">Within 2 km</option>
                      <option value="5">Within 5 km</option>
                      <option value="10">Within 10 km</option>
                      <option value="20">Within 20 km</option>
                    </select>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block mb-1 text-xs font-medium text-gray-600">
                      Minimum Rating
                    </label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055ff] bg-white transition"
                    >
                      <option value="">Any Rating</option>
                      <option value="4.5">4.5★ & Above</option>
                      <option value="4">4★ & Above</option>
                      <option value="3.5">3.5★ & Above</option>
                      <option value="3">3★ & Above</option>
                    </select>
                  </div> 
                  </div>


                  {/* Insurance */}
                  <div>
                    <label className="block mb-1 text-xs font-medium text-gray-600">
                      Insurance Accepted
                    </label>
                    <select
                      value={insuranceAccepted}
                      onChange={(e) => setInsuranceAccepted(e.target.value)}
                      className="w-full p-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055ff] bg-white transition"
                    >
                      <option value="">All Insurance</option>
                      <option value="cghs">CGHS</option>
                      <option value="echs">ECHS</option>
                      <option value="ayushman">Ayushman Bharat</option>
                      <option value="private">Private Insurance</option>
                    </select>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-2 pt-2">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={openNow}
                        onChange={(e) => setOpenNow(e.target.checked)}
                        className="w-4 h-4 text-[#0055ff] border-gray-300 rounded focus:ring-2 focus:ring-[#0055ff] cursor-pointer"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#0055ff] transition">
                        Open Now
                      </span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={hasEmergency}
                        onChange={(e) => setHasEmergency(e.target.checked)}
                        className="w-4 h-4 text-[#0055ff] border-gray-300 rounded focus:ring-2 focus:ring-[#0055ff] cursor-pointer"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#0055ff] transition">
                        24/7 Emergency
                      </span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={hasParking}
                        onChange={(e) => setHasParking(e.target.checked)}
                        className="w-4 h-4 text-[#0055ff] border-gray-300 rounded focus:ring-2 focus:ring-[#0055ff] cursor-pointer"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#0055ff] transition">
                        Parking Available
                      </span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={hasPharmacy}
                        onChange={(e) => setHasPharmacy(e.target.checked)}
                        className="w-4 h-4 text-[#0055ff] border-gray-300 rounded focus:ring-2 focus:ring-[#0055ff] cursor-pointer"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#0055ff] transition">
                        Pharmacy Available
                      </span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={hasAmbulance}
                        onChange={(e) => setHasAmbulance(e.target.checked)}
                        className="w-4 h-4 text-[#0055ff] border-gray-300 rounded focus:ring-2 focus:ring-[#0055ff] cursor-pointer"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#0055ff] transition">
                        Ambulance Service
                      </span>
                    </label>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <button
                    onClick={handleSearch}
                    className="flex-1 bg-[#0055ff] text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-[#0044dd] active:scale-95 transition-all shadow-md hover:shadow-lg text-sm"
                  >
                    Search
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex-1 bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-semibold hover:bg-gray-300 active:scale-95 transition-all text-sm"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default LeftSection