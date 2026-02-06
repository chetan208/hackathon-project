import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TokenConfirm from "./TokenConfirm";
import LiveQueueStatus from "./LiveQueueStatus";
import QuickActions from "./QuickActions";
import HospitalInfo from "./HospitalInfo";
import HelpfulTips from "./HelpfulTips";

const PatientDashboard = () => {
  const { id } = useParams();
  const [tokenDetails, setTokenDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [queueData, setQueueData] = useState({
    nowServing: "A-23",
    patientsAhead: 3,
    estimatedWait: 8,
  });

  // Fetch token details
  useEffect(() => {
    const fetchTokenDetails = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/token-details/${id}`
        );

        if (res.data.success) {
          setTokenDetails(res.data.tokenDetails);
        } else {
          console.log("Failed to fetch token details:", res.data.message);
        }
      } catch (error) {
        console.log("Error fetching token details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchTokenDetails();
    }
  }, [id]);

  // Simulate live queue updates
  useEffect(() => {
    const interval = setInterval(() => {
      setQueueData(prev => ({
        ...prev,
        patientsAhead: Math.max(0, prev.patientsAhead - 1),
        estimatedWait: Math.max(0, prev.estimatedWait - 1)
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Button handlers
  const handleRefresh = () => {
    alert("Status refreshed!");
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel your token?")) {
      alert("Token canceled!");
    }
  };

  const handleRegister = () => {
    alert("Redirect to Register page!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#0055ff] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading token details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Queue Overview
          </h2>
          <p className="text-gray-600">Save Your Time. Track Your Queue in Real-Time.</p>
        </div>

        {/* Token Confirm Section */}
        <div className="mb-8">
          <TokenConfirm tokenInfo={tokenDetails} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Live Queue Status (Full Width on Mobile) */}
          <div className="lg:col-span-2">
            <LiveQueueStatus queueData={queueData} />
          </div>

          {/* Right Column - Quick Actions & Hospital Info */}
          <div className="space-y-6">
            <QuickActions
              onRefresh={handleRefresh}
              onCancel={handleCancel}
              onRegister={handleRegister}
            />
            <HospitalInfo hospital={{}} />
          </div>
        </div>

        {/* Tips Section */}
        <div>
          <HelpfulTips />
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;