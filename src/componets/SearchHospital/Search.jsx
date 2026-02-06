import React, { useState,useEffect, use } from 'react';
import LeftSection from './ui/LeftSection';
import RightSection from './ui/RightSection';
import { useLocation} from 'react-router-dom';
import axios from 'axios';

function HospitalSearchPage() {
  // Search and Filter States
  const [searchText, setSearchText] = useState('');
  const [hospitals, setHospitals] = useState([]);
 

   const location = useLocation();
   const { searchString } = location.state || {};

   console.log(searchText)

   console.log(hospitals)

  

  
   
useEffect(() => {
    setSearchText(searchString || '');
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {

  
  
    if (!searchText.trim()) return;
  
    console.log("Fetching hospitals with search text:", searchText);

    const timer = setTimeout(async () => {
      try {
    

        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/hospitals/search?q=${searchText}`
        );

        setHospitals(res.data);
      } catch (err) {
        console.error(err);
      }
    }, 500); // 👈 3 seconds debounce

    // cleanup → agar user firse type kare
    return () => clearTimeout(timer);

},[searchText])

 

  

 

  return (
    <div className="min-h-screen mt-16 bg-gray-50">



      {/* Main Content */}
      
        <div className="flex pt-5 flex-col justify-center lg:flex-row gap-6">
          
          {/* Left Side - Search Filters */}
<LeftSection searchQuerry={searchText} setSearchQuerry={setSearchText} />

          {/* Right Side - Search Results */}
<RightSection hospitals={hospitals} />
        </div>
      
    </div>
  );
}

export default HospitalSearchPage;