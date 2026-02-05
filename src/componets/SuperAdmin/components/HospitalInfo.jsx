import React, { useEffect, useState } from 'react';
import { Edit2, Save, X, Upload, MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const HospitalInfoComponent = () => {
  const [data, setData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);
  const [bannerPreview, setBannerPreview] = useState('');
  const [logoPreview, setLogoPreview] = useState('');

  const email = useSelector((state) => state.auth.userData.email);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/hospitals/hospital-info/${email}`,
          { withCredentials: true }
        );

        if (response.data.success) {
          setData(response.data.hospital);
          setEditData(response.data.hospital);
          setBannerPreview(response.data.hospital?.branding?.banner?.url || '');
          setLogoPreview(response.data.hospital?.branding?.logo?.url || '');
        }
      } catch (error) {
        console.error('Error fetching hospital data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div className="p-10">Loading...</div>;

  const handleEditClick = () => {
    setIsEditing(true);
    setEditData(data);
    setBannerPreview(data?.branding?.banner?.url || '');
    setLogoPreview(data?.branding?.logo?.url || '');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(data);
  };

  const handleSave = () => {
    setData({
      ...editData,
      branding: {
        ...editData.branding,
        banner: { url: bannerPreview },
        logo: { url: logoPreview }
      }
    });
    setIsEditing(false);
  };

  const handleImageChange = (e, setter) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setter(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold">Hospital Information</h1>
            <p className="text-slate-500">Manage hospital details and branding</p>
          </div>
          {!isEditing && (
            <button
              onClick={handleEditClick}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex gap-2"
            >
              <Edit2 size={18} /> Edit
            </button>
          )}
        </div>

        {/* Banner */}
        <div className="rounded-xl overflow-hidden mb-8 relative h-64 bg-slate-200">
          <img src={isEditing ? bannerPreview : data?.branding?.banner?.url} className="w-full h-full object-cover" />
          {isEditing && (
            <label className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer">
              <Upload className="text-white" />
              <input type="file" hidden onChange={(e) => handleImageChange(e, setBannerPreview)} />
            </label>
          )}
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl p-8 shadow">

          {/* Logo + Name */}
          <div className="flex gap-6 border-b pb-6 mb-6">
            <div className="relative w-24 h-24">
              <img src={isEditing ? logoPreview : data?.branding?.logo?.url} className="w-full h-full object-cover rounded-lg border" />
              {isEditing && (
                <label className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer">
                  <Upload size={14} className="text-white" />
                  <input type="file" hidden onChange={(e) => handleImageChange(e, setLogoPreview)} />
                </label>
              )}
            </div>

            <div>
              {isEditing ? (
                <input
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  className="text-3xl font-bold border px-3 py-1 rounded"
                />
              ) : (
                <h2 className="text-3xl font-bold">{data.name}</h2>
              )}
              <p className="text-green-600 text-sm mt-1">
                {data.isVerified ? 'Email Verified' : 'Not Verified'}
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Info icon={MapPin} label="Address">
              {`${data.address?.street}, ${data.address?.city}, ${data.address?.state} - ${data.address?.zipCode}`}
            </Info>

            <Info icon={Phone} label="Phone">
              {data.phoneNumber || 'N/A'}
            </Info>

            <Info icon={Mail} label="Email">
              {data.email}
            </Info>

            <Info icon={Globe} label="Website">
              {data.website}
            </Info>

            <Info icon={Clock} label="Hours">
              Open 24/7
            </Info>
          </div>

          {isEditing && (
            <div className="flex gap-4 mt-8">
              <button onClick={handleCancel} className="flex-1 border py-3 rounded-lg flex gap-2 justify-center">
                <X /> Cancel
              </button>
              <button onClick={handleSave} className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex gap-2 justify-center">
                <Save /> Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Info = ({ icon: Icon, label, children }) => (
  <div className="flex gap-4">
    <Icon className="text-blue-600 mt-1" />
    <div>
      <p className="text-xs text-slate-500 font-semibold">{label}</p>
      <p className="font-semibold">{children}</p>
    </div>
  </div>
);

export default HospitalInfoComponent;
