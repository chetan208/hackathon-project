import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Plus,
  Trash2,
  Mail,
  Users,
  Shield,
  X,
  Search,
} from "lucide-react";
import { useParams } from "react-router-dom";

function Admins() {
  const { id} = useParams();

  // Department Admins
  const [admins, setAdmins] = useState([]);

  useEffect(()=>{

    window.scrollTo(0, 0);

    const fetchAdmins = async () => {
      try {
        
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/hospitals/fetch-department-admin/${id}`);
      
        setAdmins(res.data.admins);

      } catch (error) {
        console.log("Error fetching admins:", error);
      }
    }
    fetchAdmins();
  },[])

  // Form State
  const [newAdminName, setNewAdminName] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [addingAdmin, setAddingAdmin] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // UI State
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle Add Admin
  const handleAddAdmin = async () => {
   

    if (!newAdminEmail.trim()) {
      setErrorMessage("Please enter admin email");
      return;
    }

    if (!newAdminEmail.includes("@")) {
      setErrorMessage("Please enter a valid email format");
      return;
    }

    // Check if email already exists
    if (admins.some(admin => admin.email.toLowerCase() === newAdminEmail.toLowerCase())) {
      setErrorMessage("This email is already added");
      return;
    }

    setErrorMessage("");

    try {
      
      // Make API call to add admin to backend
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/hospitals/add-dept-admin`, {
        departmentId: id,
        adminEmail: newAdminEmail.trim(),
      },{withCredentials: true});

      if(!res.data.success){
        
        setErrorMessage(res.data.message);
      }else{
        setSuccessMessage(res.data.message);
      }
     
      

    } catch (error) {

      console.log("Error adding admin:", error);
      setErrorMessage("Failed to add admin. Please try again.");
      
    }
    
    // Reset form
    setNewAdminName("");
    setNewAdminEmail("");
    setShowAddForm(false);

    
  };

  // Handle Remove Admin
  const handleRemoveAdmin = (id) => {
    if (window.confirm("Are you sure you want to remove this admin?")) {
      setAdmins(admins.filter((admin) => admin.id !== id));
      setSuccessMessage("Admin access revoked successfully");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  // Filter admins based on search
  const filteredAdmins = admins.filter((admin) => {
    const matchesSearch =
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
            <Shield className="w-6 h-6 text-[#0055ff]" />
            <span>Department Admins</span>
          </h3>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center space-x-2 px-4 py-2 bg-[#0055ff] hover:bg-[#0044cc] text-white rounded-lg font-semibold transition"
          >
            <Plus className="w-5 h-5" />
            <span>Add Admin</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Success/Error Messages */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-700 font-semibold">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 font-semibold">
            {errorMessage}
          </div>
        )}

        {/* Add Admin Form */}
        {showAddForm && (
          <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <Users className="w-5 h-5 text-[#0055ff]" />
              <span>Add New Admin</span>
            </h4>

            <div className="space-y-4">
              
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={newAdminEmail}
                  onChange={(e) => {
                    setNewAdminEmail(e.target.value);
                    setErrorMessage("");
                  }}
                  placeholder="admin@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0055ff] focus:ring-4 focus:ring-blue-50 outline-none transition"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleAddAdmin}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Admin</span>
                </button>

                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setNewAdminName("");
                    setNewAdminEmail("");
                    setErrorMessage("");
                  }}
                  className="px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search */}
        <div className="mb-6 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0055ff] focus:ring-4 focus:ring-blue-50 outline-none transition"
          />
        </div>

        {/* Admins List */}
        {filteredAdmins.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
            <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600 font-semibold mb-2">No admins found</p>
            <p className="text-gray-500 text-sm">
              {searchTerm
                ? "Try adjusting your search"
                : "Click 'Add Admin' to grant access to someone"}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredAdmins.map((admin) => (
              <div
                key={admin._id}
                className="flex items-center justify-between p-5 border-2 border-gray-200 rounded-xl hover:border-[#0055ff] hover:bg-blue-50 transition group"
              >
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0055ff] to-[#0044cc] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {admin.name.charAt(0)}
                  </div>

                  {/* Name & Email */}
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{admin.name}</h4>
                    <p className="text-sm text-gray-600 flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{admin.email}</span>
                    </p>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveAdmin(admin.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition opacity-0 group-hover:opacity-100"
                  title="Remove admin access"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Total Count */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            Total Department Admins:{" "}
            <span className="font-bold text-gray-900">{filteredAdmins.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Admins;