import React, { useEffect } from 'react'
import HospitalInfo from '../componets/HospitalInfo/HospitalInfo'
import Departments from '../componets/HospitalInfo/Departments'
import HospitalPolicies from '../componets/HospitalInfo/Polices'
import HospitalServices from '../componets/HospitalInfo/Services'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function HospitalInfoPage() {
  const { id } = useParams();

  const [hospital, setHospital] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchHospitalInfo = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/hospitals/hospital-info/${id}`
        );
        
        setHospital(response.data.hospital);
      } catch (error) {
        console.error('Error fetching hospital information:', error);
        setError(error.message || 'Failed to load hospital information');
      } finally {
        setLoading(false);
      }
    };

    fetchHospitalInfo();
  }, [id]);

  // Loading Skeleton Component
  const LoadingSkeleton = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Hospital Hero Skeleton */}
      <div className="max-w-7xl mx-auto">
        {/* Banner Skeleton */}
        <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
        
        {/* Logo Skeleton */}
        <div className="px-8 pt-20 pb-12">
          <div className="flex items-end gap-6 mb-12">
            <div className="w-32 h-32 bg-gray-200 rounded-2xl animate-pulse -mt-16"></div>
            <div className="flex-1 space-y-3 mb-4">
              <div className="h-10 bg-gray-200 rounded-lg w-1/3 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded-lg w-1/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-1/2 animate-pulse"></div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
              </div>
              <div className="h-12 bg-gray-200 rounded-lg w-40 animate-pulse"></div>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Skeleton */}
      <div className="bg-white py-16 mt-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-8 bg-gray-200 rounded w-48 mb-12 animate-pulse"></div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <div className="h-10 bg-gray-200 rounded flex-1"></div>
                    <div className="h-10 bg-gray-200 rounded flex-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Error Component
  const ErrorComponent = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          {error || 'Unable to load hospital information. Please try again.'}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#0055ff] hover:bg-[#0044dd] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  // Empty State Component
  const EmptyComponent = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="text-6xl mb-4">🏥</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Hospital Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The hospital you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-[#0055ff] hover:bg-[#0044dd] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );

  // Show loading skeleton while loading
  if (loading) {
    return <LoadingSkeleton />;
  }

  // Show error if there's an error
  if (error) {
    return <ErrorComponent />;
  }

  // Show empty state if hospital is not found
  if (!hospital) {
    return <EmptyComponent />;
  }

  // Render full page when data is loaded
  return (
    <div className="bg-gray-50">
      <HospitalInfo hospital={hospital} />
      <Departments hospital={hospital} />
      <HospitalServices hospital={hospital} />
      <HospitalPolicies hospital={hospital} />
    </div>
  );
}

export default HospitalInfoPage;