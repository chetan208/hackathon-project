import React, { useState, useEffect, useRef } from "react";
import { User, LogOut, ChevronDown, Settings, Mail, Shield } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice"; // adjust path

const NavbarUserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userData);
  
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleLogout = () => {
    setOpen(false);
    dispatch(logout());
  };

  // Get user initials
  const getUserInitials = () => {
    if (!user?.name) return "U";
    const names = user.name.trim().split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return user.name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${
          open
            ? "bg-blue-50 border-2 border-blue-200"
            : "hover:bg-gray-100 border-2 border-transparent"
        }`}
      >
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0055ff] to-[#0044cc] text-white flex items-center justify-center font-bold shadow-md">
          {getUserInitials()}
        </div>

        {/* User Info */}
        <div className="hidden sm:flex flex-col items-start">
          <span className="font-semibold text-gray-800 text-sm leading-tight">
            {user?.name || "User"}
          </span>
          {user?.email && (
            <span className="text-xs text-gray-500 leading-tight">
              {user.email.length > 20 ? `${user.email.substring(0, 20)}...` : user.email}
            </span>
          )}
        </div>

        {/* Chevron */}
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-3 w-64 bg-white border-2 border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50 animate-slideDown">
          {/* User Info Header */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0055ff] to-[#0044cc] text-white flex items-center justify-center font-bold text-lg">
                {getUserInitials()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 text-sm truncate">
                  {user?.name || "User"}
                </p>
                {user?.email && (
                  <p className="text-xs text-gray-600 truncate">{user.email}</p>
                )}
                {user?.role && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                    {user.role}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {/* Profile */}
            <button
              onClick={() => {
                setOpen(false);
                // Add navigation logic here
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0055ff] transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                <User className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold">Profile</p>
                <p className="text-xs text-gray-500">View and edit your profile</p>
              </div>
            </button>

            {/* Settings */}
            <button
              onClick={() => {
                setOpen(false);
                // Add navigation logic here
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0055ff] transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                <Settings className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold">Settings</p>
                <p className="text-xs text-gray-500">Account preferences</p>
              </div>
            </button>

            {/* Privacy (Optional) */}
            <button
              onClick={() => {
                setOpen(false);
                // Add navigation logic here
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0055ff] transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                <Shield className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold">Privacy & Security</p>
                <p className="text-xs text-gray-500">Manage your data</p>
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Logout */}
          <div className="py-2">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-red-50 group-hover:bg-red-100 flex items-center justify-center transition-colors">
                <LogOut className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold">Logout</p>
                <p className="text-xs text-red-500">Sign out of your account</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>


    </div>
  );
};

export default NavbarUserMenu;