import React from 'react'
import {useNavigate} from 'react-router-dom'



function LeftContent() {


  const navigate = useNavigate();
  const [searchString, setSearchString] = React.useState('');

  const handleFindHospital = () => {
    navigate('/search-hospital',{state:{searchString:searchString}});
  }
  return (
    <div className=" sm:px-8 md:px-10 ml-0 md:ml-10 text-center md:text-left">
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight  text-left">
        Find Hospitals & Manage Queque
        <span className="text-[#0055ff]"> Smartly</span>
      </h1>

      <p className="mt-4 sm:mt-5 text-gray-600 max-w-xl mx-auto md:mx-0 text-sm sm:text-base  text-left">
        One platform to search hospitals, book tokens, check live waiting time,
        and avoid long queues. Designed for patients and hospitals.
      </p>

      {/* Search Box */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 items-center sm:items-stretch justify-center md:justify-start">
        <input
          type="text"
          placeholder="Search hospital, city or pincode"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          className="w-full sm:w-80 md:w-96 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={handleFindHospital}>
          Find Hospital
        </button>
      </div>

      {/* Stats */}
      <div className="mt-8 sm:mt-10 flex  sm:flex-row gap-6 sm:gap-8 text-sm items-center sm:items-start justify-center md:justify-start">
        <div>
          <p className="text-xl font-bold text-blue-600">100+</p>
          <p className="text-gray-600">Hospitals</p>
        </div>
        <div>
          <p className="text-xl font-bold text-blue-600">Live</p>
          <p className="text-gray-600">Queue Tracking</p>
        </div>
        <div>
          <p className="text-xl font-bold text-blue-600">Zero</p>
          <p className="text-gray-600">Waiting Chaos</p>
        </div>
      </div>

    </div>
  )
}

export default LeftContent
