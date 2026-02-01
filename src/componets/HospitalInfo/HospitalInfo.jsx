// components/HospitalHero.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/image.png"

const HospitalHero = () => {
  const hospital = {
    name: "City Hospital",
    city: "Delhi",
    address: "123 Main Street, Near Central Park",
    contact: "+91 9876543210",
    email: "info@cityhospital.com",
    timings: "9:00 AM – 8:00 PM",
    type: "Government",
  };
 
  const navigate=useNavigate();

  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center">
      
      {/* Left Side - Placeholder Image */}
      <div className="md:w-1/2 w-full h-80 md:h-90 border-4 border-gray-800 flex items-center justify-center  relative">
       
        <img
        src={image}
        className="cover h-full w-full"
        ></img>
      </div>

      {/* Right Side - Info */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-start p-12 bg-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">{hospital.name}</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-2">{hospital.city}, {hospital.address}</p>
        <p className="text-lg md:text-xl text-gray-700 mb-2">Contact: {hospital.contact} | Email: {hospital.email}</p>
        <p className="text-lg md:text-xl text-gray-700 mb-2">Timings: {hospital.timings}</p>
        <p className="text-lg md:text-xl text-gray-700 mb-6">Type: {hospital.type}</p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button

          onClick={()=>navigate("generate-token")}
          
          className="bg-green-600 text-white px-8 py-4 rounded hover:bg-green-700 transition text-lg md:text-xl shadow-lg">
            Get Token
          </button>
          <button className="bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-700 transition text-lg md:text-xl shadow-lg">
            Book Appointment
          </button>
        </div>
      </div>

    </div>
  );
};

export default HospitalHero;
