

import React,{useEffect, useState} from "react";
import {
  LayoutDashboard,
  Building2,
  UserRound,
  Users,
  Ticket,
  BarChart3,
  Settings,
  Bell,
  Activity,
  Clock,
  CheckCircle,
  Stethoscope,
} from "lucide-react";

import axios from 'axios'

function Deshboard({hospitalData, doctorCount, activeDepartments}) {

  
  const [time, setTime] = useState(new Date());


   useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // every 1 second

    return () => clearInterval(interval); // cleanup
  }, []);

  


  



  return (
    <div className="flex-1 p-8">
        {/* TOP HEADER */}
        <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-xl text-white">
              <Activity />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Hospital Overview
              </h1>
              <p className="text-gray-500 text-sm">
                System Status : <span className="text-green-600">Operational</span>
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Current Time</p>
            <p className="font-semibold">{time.toLocaleTimeString()}</p>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <StatCard
            icon={<Building2 />}
            title="Departments"
            value={hospitalData?.departments.length || 0}
            color="blue"
          />
          <StatCard
            icon={<Stethoscope />}
            title="Doctors On Duty"
            value={doctorCount}
            color="green"
          />
          <StatCard
            icon={<Clock />}
            title="Avg Wait Time"
            value="18 min"
            color="orange"
          />
          <StatCard
            icon={<CheckCircle />}
            title="Patients Served"
            value="126"
            color="emerald"
          />
        </div>

        {/* LOWER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">
              Active Departments
            </h2>

            <div className="space-y-4">

              {
                activeDepartments.map((dept) => (
                  <DepartmentRow
                    key={dept._id}
                    name={dept.name}
                    status={dept.status}
                    color={dept.status === "Active" ? "green" : dept.status === "Busy" ? "red" : "yellow"}
                  />
                ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">
              System Alerts
            </h2>

            <div className="space-y-4">
              <AlertCard text="OPD queue exceeding normal limit" />
              <AlertCard text="Doctor availability low in Neurology" />
              <AlertCard text="Emergency tokens increased today" />
            </div>
          </div>
        </div>
      </div>
  )
}


const StatCard = ({ icon, title, value, color }) => (
  <div className="bg-white rounded-xl shadow p-5">
    <div className={`text-${color}-600 mb-2`}>{icon}</div>
    <p className="text-sm text-gray-500">{title}</p>
    <h3 className="text-xl font-bold">{value}</h3>
  </div>
);

const DepartmentRow = ({ name, status, color }) => (
  <div className="flex justify-between items-center border p-4 rounded-lg">
    <span className="font-medium">{name}</span>
    <span className={`text-${color}-600 font-medium`}>
      {status}
    </span>
  </div>
);

const AlertCard = ({ text }) => (
  <div className="border-l-4 border-blue-600 bg-blue-50 p-3 rounded">
    <p className="text-sm">{text}</p>
  </div>
);

export default Deshboard
