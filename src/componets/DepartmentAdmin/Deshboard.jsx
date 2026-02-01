import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Users, 
  Clock, 
  UserPlus, 
  TrendingUp, 
  AlertCircle,
  Heart,
  Stethoscope,
  Baby,
  Brain,
  Eye,
  Bone,
  Scissors,
  Pill,
  Droplet,
  Smile,
  Waves,
  Thermometer,
  ChevronRight,
  Bell,
  Search,
  Calendar,
  CheckCircle,
  XCircle
} from 'lucide-react';
import DepartmentDashboard from './components/Deshboard';
import LiveQueue from './components/QueueList';
import TokenList from './components/TokenList';
import DoctorAvailability from './components/DoctarAvlability';
import Reports from './components/Reports';

const SmartQueue = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDept, setSelectedDept] = useState('OPD');
  const [notifications, setNotifications] = useState(3);

  const [activetab,setActiveTab]=useState("Dashboard")



  console.log(activetab)

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
  

      <div className="flex max-w-7xl mx-auto  mt-20">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg min-h-screen p-6 sticky top-20 h-fit">
          <nav className="space-y-2">
            {[
              { name: 'Dashboard', icon: Activity, active: true },
              { name: 'Live Queue', icon: Users },
              { name: 'Token List', icon: Calendar },
              { name: 'Doctor Availability', icon: Stethoscope },
              { name: 'Reports', icon: TrendingUp }
            ].map((item, idx) => (
              <button
                key={idx}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                  item.name == activetab 
                    ? 'bg-[#0055ff] text-white shadow-lg shadow-blue-200' 
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
                onClick={()=>setActiveTab(item.name)}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>

         
        </aside>

        {activetab == "Dashboard" && <DepartmentDashboard/>}
        {activetab == "Live Queue" && <LiveQueue/>}
        {activetab == "Token List" && <TokenList/>}
        {activetab == "Doctor Availability" && <DoctorAvailability/>}
        {activetab == "Reports" && <Reports/>}
      
      
      </div>
    </div>
  );
};

export default SmartQueue;