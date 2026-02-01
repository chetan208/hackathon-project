import React, { useState } from 'react';
import LeftSection from './ui/LeftSection';
import RightSection from './ui/RightSection';

function HospitalSearchPage() {
  // Search and Filter States
  const [searchText, setSearchText] = useState('');
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

  // Sample hospital data
  const [hospitals] = useState([
    {
      id: 1,
      name: "Apollo Hospital",
      address: "Sector 26, Noida, UP 201301",
      distance: "2.5 km",
      rating: 4.5,
      reviews: 1234,
      type: "Private Hospital",
      departments: ["Cardiology", "Orthopedics", "Neurology"],
      isOpen: true,
      emergency: true,
      parking: true,
      pharmacy: true,
      ambulance: true,
      phone: "+91 120 4567890",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Max Super Speciality Hospital",
      address: "Saket, New Delhi 110017",
      distance: "5.2 km",
      rating: 4.7,
      reviews: 2156,
      type: "Private Hospital",
      departments: ["Pediatrics", "Gynecology", "ENT"],
      isOpen: true,
      emergency: true,
      parking: true,
      pharmacy: true,
      ambulance: true,
      phone: "+91 11 2651 5050",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Fortis Hospital",
      address: "Shalimar Bagh, Delhi 110088",
      distance: "7.8 km",
      rating: 4.3,
      reviews: 987,
      type: "Private Hospital",
      departments: ["Cardiology", "Ophthalmology", "Dermatology"],
      isOpen: false,
      emergency: true,
      parking: true,
      pharmacy: false,
      ambulance: true,
      phone: "+91 11 4277 6222",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      name: "AIIMS Delhi",
      address: "Ansari Nagar, New Delhi 110029",
      distance: "3.1 km",
      rating: 4.6,
      reviews: 3421,
      type: "Government Hospital",
      departments: ["General Medicine", "Surgery", "Pediatrics"],
      isOpen: true,
      emergency: true,
      parking: true,
      pharmacy: true,
      ambulance: true,
      phone: "+91 11 2658 8500",
      image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      name: "City Care Clinic",
      address: "Connaught Place, Delhi 110001",
      distance: "1.2 km",
      rating: 4.0,
      reviews: 456,
      type: "Clinic",
      departments: ["General Medicine", "Dermatology"],
      isOpen: true,
      emergency: false,
      parking: false,
      pharmacy: false,
      ambulance: false,
      phone: "+91 11 2334 5678",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      name: "MedLife Diagnostics",
      address: "Dwarka Sector 12, Delhi 110075",
      distance: "6.5 km",
      rating: 4.2,
      reviews: 678,
      type: "Diagnostic Center",
      departments: ["Pathology", "Radiology"],
      isOpen: true,
      emergency: false,
      parking: true,
      pharmacy: false,
      ambulance: false,
      phone: "+91 11 4567 1234",
      image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=400&h=250&fit=crop"
    }
  ]);

  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);

  const handleSearch = () => {
    let filtered = hospitals;

    if (searchText) {
      filtered = filtered.filter(h => 
        h.name.toLowerCase().includes(searchText.toLowerCase()) ||
        h.address.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (department) {
      filtered = filtered.filter(h => 
        h.departments.some(d => d.toLowerCase().includes(department.toLowerCase()))
      );
    }

    if (facilityType) {
      filtered = filtered.filter(h => h.type === facilityType);
    }

    if (distance) {
      filtered = filtered.filter(h => 
        parseFloat(h.distance) <= parseFloat(distance)
      );
    }

    if (rating) {
      filtered = filtered.filter(h => h.rating >= parseFloat(rating));
    }

    if (openNow) {
      filtered = filtered.filter(h => h.isOpen);
    }

    if (hasEmergency) {
      filtered = filtered.filter(h => h.emergency);
    }

    if (hasParking) {
      filtered = filtered.filter(h => h.parking);
    }

    if (hasPharmacy) {
      filtered = filtered.filter(h => h.pharmacy);
    }

    if (hasAmbulance) {
      filtered = filtered.filter(h => h.ambulance);
    }

    setFilteredHospitals(filtered);
    console.log("Searching with filters:", {
      searchText, department, distance, openNow, rating, 
      facilityType, hasEmergency, hasParking, hasPharmacy, hasAmbulance
    });
  };

 
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
  return (
    <div className="min-h-screen mt-16 bg-gray-50">



      {/* Main Content */}
      
        <div className="flex pt-5 flex-col justify-center lg:flex-row gap-6">
          
          {/* Left Side - Search Filters */}
<LeftSection/>

          {/* Right Side - Search Results */}
<RightSection/>
        </div>
      
    </div>
  );
}

export default HospitalSearchPage;