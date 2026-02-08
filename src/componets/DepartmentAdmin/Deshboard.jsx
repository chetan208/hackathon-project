import React, { useEffect, useState } from "react";
import {
  Activity,
  Users,
  Calendar,
  Stethoscope,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import DepartmentDashboard from "./components/Deshboard";
import LiveQueue from "./components/QueueList";
import TokenList from "./components/TokenList";
import DoctorAvailability from "./components/DoctarAvlability";
import Reports from "./components/Reports";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import socket from "../../services/socket";

const DeshBoard = () => {
  const [activetab, setActiveTab] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [departmentAdminData, setDepartmentAdminData] = useState(null);
  

  const menuItems = [
    { name: "Dashboard", icon: Activity },
    { name: "Live Queue", icon: Users },
    { name: "Token List", icon: Calendar },
    { name: "Doctor Availability", icon: Stethoscope },
    { name: "Reports", icon: TrendingUp },
  ];

  const { id } = useParams();

  useEffect(() => {
    socket.connect();

    socket.emit("join-department-admin", id);

    const fetchDepartmentAdminData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/hospitals/fetch-department-detailsfor-admin/${id}`,
          { withCredentials: true },
        );
        setDepartmentAdminData(res.data.department);
      } catch (error) {
        console.log("Error fetching department admin data:", error);
      }
    };
    fetchDepartmentAdminData();

    return () => {
      socket.disconnect();
    };
  }, []);

  const [queueDetails, setQueueDetails] = useState([]);
  const [isPaused, setIsPaused] = useState(true);

  const [currentPatient, setCurrentPatient] = useState();

  useEffect(() => {
    const fetchQueueDetails = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/hospitals/fetch-queue/${id}`,
          {
            withCredentials: true,
          },
        );
        setQueueDetails(res.data.queue);
        setCurrentPatient(res.data.queue[0]); // Set the first patient as the current patient
      } catch (error) {
        console.log("Error fetching queue details:", error);
      }
    };

    fetchQueueDetails();
  }, []);

  useEffect(() => {
    socket.on("new-token", (tokenData) => {
      console.log("New token received in dashboard:", tokenData);
      setQueueDetails((prevQueue) => [...prevQueue, tokenData]);
    });
  }, []);

  const [avgWaitTime, setAvgWaitTime] = useState(0);
  const [servedTokensCount, setServedTokensCount] = useState(0);

  useEffect(() => {
    const fetchAvgWaitTime = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/queue/average-time/${id}`,
          {
            withCredentials: true,
          },
        );
        setAvgWaitTime(res.data.averageTimeMinutes);
        setServedTokensCount(res.data.totalTokens);
      } catch (error) {
        console.log("Error fetching average wait time:", error);
      }
    };
    fetchAvgWaitTime();

    

    
  }, [queueDetails]);


  useEffect(()=>{
    setQueueDetails((prevQueue) => {
      const updatedQueue = prevQueue.map((user, index) => ({
        ...user,
        usersAhead: index,
        waitingTime: avgWaitTime * index, // minutes
      }));
      return updatedQueue;
    });

    setCurrentPatient(queueDetails[0]);

  },[avgWaitTime])

  return (
    <div className="min-h-screen bg-gray-100 flex mt-10">
      {/* SIDEBAR */}
      <Sidebar
        menuItems={menuItems}
        activetab={activetab}
        setActiveTab={setActiveTab}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        {activetab === "Dashboard" && (
          <DepartmentDashboard
            department={departmentAdminData}
            queueDetails={queueDetails}
            setQueueDetails={setQueueDetails}
            isPaused={isPaused}
            currentPatient={currentPatient}
            setCurrentPatient={setCurrentPatient}
            setIsPaused={setIsPaused}
            avgWaitTime={avgWaitTime}
            servedTokensCount={servedTokensCount}
          />
        )}
        {activetab === "Live Queue" && (
          <LiveQueue queueDetails={queueDetails} />
        )}
        {activetab === "Token List" && <TokenList />}
        {activetab === "Doctor Availability" && <DoctorAvailability />}
        {activetab === "Reports" && <Reports />}
      </main>
    </div>
  );
};

export default DeshBoard;
