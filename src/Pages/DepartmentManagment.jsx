import React, { useState, useEffect } from "react";
import { ArrowLeft, Users, CheckCircle, AlertCircle } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Admins from "../componets/ManageDepartmentAdmin/Admins";
import axios from "axios";

const DepartmentAdminPage = () => {
  const {id } = useParams();
  const navigate = useNavigate();

  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchDepartmentDetails = async () => {
      try {
        
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/hospitals/department-details/${id}`, {
          withCredentials: true,
        });

        console.log("Department Details Response:", response.data);
        setDepartment(response.data.department);
        setLoading(false);

      } catch (error) {
        console.log("Error fetching department details:", error);
        setErrorMessage("Failed to fetch department details");
      }
    };
    fetchDepartmentDetails();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 pt-23">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        {/* Alerts */}
        {successMessage && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span>{successMessage}</span>
          </div>
        )}

        {errorMessage && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT → DEPARTMENT INFO */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={department?.entrancePhoto.url}
              alt={department?.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  {department?.name}
                </h1>
                {department.isActive && (
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                    Active
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-4">
                {department?.description}
              </p>

              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-4 h-4" />
                <span className="font-medium">
                  {department?.Doctors.length} Doctors
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT → ADMIN ACCESS */}
          <div className="lg:col-span-2">
            <Admins
              
              departmentId={id}
              onSuccess={(msg) => {
                setSuccessMessage(msg);
                setTimeout(() => setSuccessMessage(""), 3000);
              }}
              onError={(msg) => {
                setErrorMessage(msg);
                setTimeout(() => setErrorMessage(""), 3000);
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default DepartmentAdminPage;
