import React, { useState, useEffect } from "react";
import {
  Activity,
  Users,
  Clock,
  Pause,
  Play,
  SkipForward,
  ChevronsRight,
  User,
  Calendar,
  Timer,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";
import { use } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CurrentPatient from "./Ui/CurrentPatient";
import StatsCards from "./Ui/StatsCards";
import DeshboardWaitingQueue from "./Ui/DeshboardWaitingQueue";
import ControlButtons from "./Ui/ControlButtons";


const DepartmentDashboard = ({
  department,
  queueDetails,
  setQueueDetails,
  isPaused,
  setIsPaused,
  currentPatient,
  setCurrentPatient,
  avgWaitTime,
  servedTokensCount
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());


  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSkipToken = () => {
    alert(`Token ${currentToken} has been skipped`);
    // Logic to skip token
  };

  const togglePause = async () => {
    if (isPaused) {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/resume-token/${currentPatient._id}`,
          {
            withCredentials: true,
          },
        );
        console.log(res.data);
        setIsPaused(!isPaused);

        setQueueDetails((prevQueue) => {
          if (prevQueue.length === 0) return prevQueue;

          return prevQueue.map((token, index) => {
            if (index === 0) {
              return {
                ...token,
                status: "IN_PROGRESS",
              };
            }
            return token;
          });
        });
      } catch (error) {
        console.log("error in starting counter", error);
      }
    }

    if (!isPaused) {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/pause-token/${currentPatient._id}`,
          {
            withCredentials: true,
          },
        );
        console.log(res.data);
        setIsPaused(!isPaused);
      } catch (error) {
        console.log("error in pausing token", error);
      }
    }
  };

  const onComplete = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/complete-token/${currentPatient._id}`,
        {
          withCredentials: true,
        },
      );

      setQueueDetails((prevQueue) => {
        if (prevQueue.length === 0) return prevQueue;

        // Remove first token
        const updatedQueue = prevQueue.slice(1);

        return updatedQueue;
      });

      console.log(res.data);
    } catch (error) {
      console.log("Error completing token:", error);
    }
  };

  useEffect(()=>{
    setCurrentPatient(queueDetails[0])
  },[queueDetails])



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0055ff] to-[#0088ff] rounded-xl flex items-center justify-center shadow-lg">
                <Activity className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {department?.name}
                </h1>
                <p className="text-gray-500 flex items-center space-x-2 mt-1">
                  <span className="text-sm">
                    Department Code:{" "}
                    {department?.name.slice(0, 4).toUpperCase()}
                  </span>
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-green-600 font-medium">
                    {department?.status}
                  </span>
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Current Time</p>
              <p className="text-2xl font-bold text-gray-800 font-mono">
                {currentTime.toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </p>
              <p className="text-xs text-gray-400">
                {currentTime.toLocaleDateString("en-IN", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <StatsCards
          departmentData={department}
          queueDetails={queueDetails}
          isPaused={isPaused}
          avgWaitTime={avgWaitTime}
          servedTokensCount={servedTokensCount}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Token Details - Left Side (2 columns) */}

          <div className="lg:col-span-2 space-y-6">
            {/* Current Patient Card */}

            {!isPaused && <CurrentPatient currentPatient={currentPatient} />}

            {/* Control Buttons */}
            <ControlButtons
              isPaused={isPaused}
              togglePause={togglePause}
              onComplete={onComplete}
            />
          </div>

          {/* Waiting Queue - Right Side (1 column) */}

          <DeshboardWaitingQueue waitingQueue={queueDetails} />
        </div>
      </div>
    </div>
  );
};

export default DepartmentDashboard;
