import React, { useState , useEffect} from "react";
import {
  LayoutDashboard,
  Building2,
  UserRound,
  Users,
  Ticket,
  Settings,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Info
} from "lucide-react";
import Deshboard from "./components/Deshboard";
import Doctors from "./components/Docters";
import DepartmentsComponent from "./components/Department";
import HospitalInfoComponent from "./components/HospitalInfo";

import axios from 'axios'
import { useSelector } from "react-redux";

const HospitalAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const [hospitalData, setHospitalData] = useState(null);
    const [doctorCount, setDoctorCount] = useState(0);
    const [activeDepartments, setActiveDepartments] = useState([]);

    console.log(hospitalData)

  const sidebarItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Doctors", icon: Stethoscope },
    { name: "Departments", icon: Building2 },
    { name: "Hospital Info", icon: Info },
    { name: "Reports", icon: Ticket },
    { name: "Settings", icon: Settings },
  ];

  const email = useSelector((state) => state.auth.userData.email);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/hospitals/basic-info/${email}`);
        console.log("Hospital Basic Info:", res.data);
        setHospitalData(res.data.hospital);

        if (res.data.hospital && res.data.hospital.departments) {
          res.data.hospital.departments.map((department) => {
            const doctorsInDept = department.Doctors ? department.Doctors.length : 0;
            setDoctorCount((prevCount) => prevCount + doctorsInDept);
            return null;
          });

          const activeDepts = res.data.hospital.departments.filter((dept) => dept.status === "Active");
          setActiveDepartments(activeDepts);
          
        }
        
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        
      }
      }
      fetchData();
  },[])

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* SIDEBAR */}
      <aside
        className={`
          bg-white border-r shadow-sm px-3 py-6 pt-25
          transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (
            <h2 className="text-xl font-bold text-blue-600">
              {hospitalData ? hospitalData.name : "Hospital Admin"}
            </h2>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          >
            {collapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
        </div>

        {/* NAV */}
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <li key={item.name}>
                <button
                  onClick={() => setActiveTab(item.name)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-3 rounded-lg
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-semibold"
                        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                    }
                  `}
                >
                  <item.icon size={20} className="shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 mt-10">
        {activeTab === "Dashboard" && <Deshboard hospitalData={hospitalData} doctorCount={doctorCount} activeDepartments={activeDepartments} />}
        {activeTab === "Doctors" && <Doctors departments={hospitalData?.departments || []}/>}
        {activeTab === "Departments" && <DepartmentsComponent />}
        {activeTab === "Hospital Info" &&  <HospitalInfoComponent/>}
      </main>
    </div>
  );
};

export default HospitalAdminDashboard;
