import React from "react";

import RoleInfo from "../componets/Profile/RoleInfo";
import DepartmentSection from "../componets/Profile/DepartmentSection";
import { useSelector } from "react-redux";
import HospitalAdminSection from "../componets/Profile/HospitalAdminSection";
import ProfileHeader from "../componets/Profile/ProfileHeader";

const Profile = () => {

    const role = useSelector((state)=>state.auth.userData?.role)
    console.log(role)
  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-25">
      {/* Page Container */}
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Profile Header */}
        <ProfileHeader/>

        {/* Role Info */}
        <RoleInfo/>

        {/* Departments Section */}
        {role === "hospitalAdmin" && <HospitalAdminSection/>}
        {role === "departmentAdmin" && <DepartmentSection/>}
       

        {/* Account Meta */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Account Details
          </h2>

          <div className="mt-3 text-sm text-gray-600 space-y-1">
            <p>Last Login: 02 Feb 2026</p>
            <p>Account Status: Active</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
