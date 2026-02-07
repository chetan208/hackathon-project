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

const DeshBoard = () => {
  const [activetab, setActiveTab] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: Activity },
    { name: "Live Queue", icon: Users },
    { name: "Token List", icon: Calendar },
    { name: "Doctor Availability", icon: Stethoscope },
    { name: "Reports", icon: TrendingUp },
  ];

  const {id} = useParams()

  useEffect(()=>{

    const fetchDepartmentAdminData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/hospitals/fetch-department-detailsfor-admin/${id}`, {withCredentials: true});
        console.log("Department Admin Data:", res.data);
      } catch (error) {
        console.log("Error fetching department admin data:", error);
        
      }
    }
    fetchDepartmentAdminData()

  },[])

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
        {activetab === "Dashboard" && <DepartmentDashboard />}
        {activetab === "Live Queue" && <LiveQueue />}
        {activetab === "Token List" && <TokenList />}
        {activetab === "Doctor Availability" && <DoctorAvailability />}
        {activetab === "Reports" && <Reports />}
      </main>

    </div>
  );
};

export default DeshBoard;
