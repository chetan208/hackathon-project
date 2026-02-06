import React, { useEffect, useState } from 'react';
import { Plus, Users, Clock, MapPin, Home } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import DepartmentCard from './DepartmentCard';
import { useSelector } from 'react-redux';

const DepartmentsComponent = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/department-registration');
  };

  const email = useSelector((state) => state.auth.userData.email);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/hospitals/department-details`,
          { withCredentials: true }
        );
        setDepartments(res.data.hospital.departments);
        setError(null);
      } catch (error) {
        console.error("Error fetching departments:", error);
        setError("Failed to fetch departments");
        setDepartments([]);
      } finally {
        setLoading(false);
      }
    };
    fetchDepartments();
  }, []);

  // Fallback image if no entrance photo
  const fallbackImage = 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=300&h=200&fit=crop';

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-semibold">Loading departments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Departments</h1>
            <p className="text-slate-500">View all hospital departments</p>
          </div>
          <button
            onClick={handleAddClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <Plus size={20} />
            Add Department
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {/* Empty State */}
        {!loading && departments.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <Users size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No Departments Yet</h3>
            <p className="text-slate-500 mb-6">Start by adding your first department</p>
            <button
              onClick={handleAddClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              <Plus size={20} />
              Add First Department
            </button>
          </div>
        )}

        {/* Departments Grid */}
        {departments.length > 0 && (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (

              <DepartmentCard key={dept._id} dept={dept} />
              

            ))}
          </div>

        )}
      </div>
    </div>
  );
};

export default DepartmentsComponent;