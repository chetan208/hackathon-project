import React from "react";
import { Shield, Building2, User } from "lucide-react";
import { useSelector } from "react-redux";

function RoleInfo() {
  const role = useSelector((state) => state.auth.userData?.role);

  let roleTitle = "";
  let roleDescription = "";
  let Icon = User;
  let bgColor = "bg-gray-100";
  let iconColor = "text-gray-600";

  if (role === "hospitalAdmin") {
    roleTitle = "Hospital Admin";
    roleDescription =
      "You have full access to manage the hospital, departments, staff, and queues.";
    Icon = Building2;
    bgColor = "bg-indigo-100";
    iconColor = "text-indigo-600";
  } 
  else if (role === "departmentAdmin") {
    roleTitle = "Department Admin";
    roleDescription =
      "You can manage only the departments assigned to you.";
    Icon = Shield;
    bgColor = "bg-blue-100";
    iconColor = "text-blue-600";
  } 
  else {
    roleTitle = "User";
    roleDescription =
      "You have limited access based on your assigned permissions.";
    Icon = User;
    bgColor = "bg-gray-100";
    iconColor = "text-gray-600";
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 flex gap-4 items-start">
      <div className={`p-3 rounded-lg ${bgColor}`}>
        <Icon className={iconColor} />
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Role Information
        </h2>

        <p className="text-gray-600 mt-1">
          You are logged in as a <strong>{roleTitle}</strong>.
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {roleDescription}
        </p>
      </div>
    </div>
  );
}

export default RoleInfo;
