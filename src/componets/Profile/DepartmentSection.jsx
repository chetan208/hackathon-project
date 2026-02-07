import React, { useEffect } from 'react'
import { Building2, Shield, Users } from "lucide-react";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function DepartmentSection() {
  const [departments, setDepartments] = React.useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchDepartments = async()=>{
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/departments-accessible`,{
          withCredentials:true
        });
       
     


        if(response.data.success){
          setDepartments(response.data.departmentsAccess)
        }
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    }
    fetchDepartments();
  },[])

  return (
    <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Departments You Manage
          </h2>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {
              departments.map((dept)=>(
            <div className="bg-white rounded-xl shadow p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Building2 className="text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {dept.name}
                </h3>
              </div>

              <p className="text-sm text-gray-600">
                Status: <span className="text-green-600 font-medium">{dept.status}</span>
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users size={16} />
                Doctors: {dept.Doctors.length}
              </div>

              <button
              onClick={()=>navigate(`/department-admin/${dept._id}`)}
              className="w-full mt-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                View Department
              </button>
            </div>
              )
            )
            }

            {/* Department Card */}
            

           

          </div>
        </div>
  )
}

export default DepartmentSection
