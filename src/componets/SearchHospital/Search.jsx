// components/SearchWithResults.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchLeftBox from "./ui/SearchLeftBox";
import ResultCard from "./ui/ResultCard"

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



  return (
    <div className="mt-20  h-[90%] w-[90%] mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Left Side - Search */}
 <SearchLeftBox/>

      {/* Right Side - Results */}
      <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md  max-h-[80vh]">
        <h2 className="text-2xl font-bold mb-5 border-b pb-2 text-center">SEARCH RESULTS</h2>

        <div className="overflow-y-auto max-h-[90%]" >
          {results.length === 0 && <p className="text-gray-500 text-center">No hospitals found.</p>}

        {results.map((h) => (
          <ResultCard h={h} />  
        ))}

        </div>
        
      </div>
    </div>
  );
};

export default SearchWithResults;
