
import React, { useState } from 'react';
import { 
  Activity, 
  Users, 
  Calendar, 
  Stethoscope,
  TrendingUp,
  Search,
  Filter,
  Download,
  Clock,
  CheckCircle,
  XCircle,
  Pause,
  SkipForward,
  User,
  Phone,
  MapPin,
  Coffee,
  AlertCircle,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { useEffect } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

const DoctorAvailability = () => {

  const {id } = useParams()
  const [doctorsData, setDoctorsData] = useState([])

  useEffect(()=>{
    const fetchDoctorData = async () => {
      try {

        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/hospitals/fetch-department-doctors/${id}`, {
          withCredentials: true
        });
        console.log("Doctor data fetched successfully:", response.data);
        setDoctorsData(response.data.doctors);
 
      } catch (error) {
        console.log("Error fetching doctor data:", error);
      }
    }
    fetchDoctorData();
  },[])

  const doctors = [
    { 
      id: 1, 
      name: 'Dr. Amit Kumar', 
      specialization: 'Cardiologist', 
      status: 'available', 
      currentPatient: null,
      patientsToday: 12,
      shift: '9:00 AM - 5:00 PM',
      room: 'Room 101',
      phone: '+91 98765 43210'
    },
    { 
      id: 2, 
      name: 'Dr. Sneha Patel', 
      specialization: 'Cardiologist', 
      status: 'busy', 
      currentPatient: 'A-21 - Rajesh Kumar',
      patientsToday: 10,
      shift: '9:00 AM - 5:00 PM',
      room: 'Room 102',
      phone: '+91 98765 43211'
    },
    { 
      id: 3, 
      name: 'Dr. Rakesh Sharma', 
      specialization: 'Senior Cardiologist', 
      status: 'on_break', 
      currentPatient: null,
      patientsToday: 15,
      shift: '9:00 AM - 5:00 PM',
      room: 'Room 103',
      phone: '+91 98765 43212'
    },
    { 
      id: 4, 
      name: 'Dr. Priya Verma', 
      specialization: 'Cardiologist', 
      status: 'available', 
      currentPatient: null,
      patientsToday: 8,
      shift: '2:00 PM - 10:00 PM',
      room: 'Room 104',
      phone: '+91 98765 43213'
    },
    { 
      id: 5, 
      name: 'Dr. Vikram Singh', 
      specialization: 'Cardiologist', 
      status: 'off_duty', 
      currentPatient: null,
      patientsToday: 0,
      shift: '6:00 PM - 2:00 AM',
      room: 'Room 105',
      phone: '+91 98765 43214'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'available': return { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' };
      case 'busy': return { bg: 'bg-blue-100', text: 'text-blue-800', dot: 'bg-blue-500' };
      case 'on_break': return { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' };
      case 'off_duty': return { bg: 'bg-gray-100', text: 'text-gray-800', dot: 'bg-gray-500' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-800', dot: 'bg-gray-500' };
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'available': return 'Available';
      case 'busy': return 'Busy';
      case 'on_break': return 'On Break';
      case 'off_duty': return 'Off Duty';
      default: return 'Unknown';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Doctor Availability</h1>
        <p className="text-gray-500">Monitor doctor status and assignments</p>
      </div>

      {/* Quick Stats */}
      {/* <div className="flex gap-4 mb-6">
        <div className="flex-1 bg-white border border-gray-200 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Available Now</p>
          <p className="text-2xl font-bold text-green-600">{doctors.filter(d => d.status === 'available').length}</p>
        </div>
        <div className="flex-1 bg-white border border-gray-200 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Currently Busy</p>
          <p className="text-2xl font-bold text-blue-600">{doctors.filter(d => d.status === 'busy').length}</p>
        </div>
        <div className="flex-1 bg-white border border-gray-200 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">On Break</p>
          <p className="text-2xl font-bold text-yellow-600">{doctors.filter(d => d.status === 'on_break').length}</p>
        </div>
        <div className="flex-1 bg-white border border-gray-200 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Off Duty</p>
          <p className="text-2xl font-bold text-gray-600">{doctors.filter(d => d.status === 'off_duty').length}</p>
        </div>
      </div> */}

      {/* Doctor List */}
      <div className="space-y-4">
        {doctorsData.map(doctor => {
          const statusStyle = getStatusColor(doctor?.status);
          return (
            <div key={doctor.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-14 h-14 bg-[#0055ff] bg-opacity-10 rounded-full flex items-center justify-center">
                    <Stethoscope className="text-[#0055ff]" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-gray-800">{doctor?.name}</h3>
                      
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{doctor?.specialization}</p>
                    
                    

                    {doctor.currentPatient && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-1">Currently Attending</p>
                        <p className="font-medium text-[#0055ff]">{doctor?.currentPatient}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorAvailability
