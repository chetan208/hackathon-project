'use client';
import React from "react"
import { Building2, Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react";
import { set, useForm } from "react-hook-form";
import axios from "axios";

export default function StepBasicDetails({ setData, onNext }) {

  const [loading , setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Basic Details Submitted:", data);
    setData(prevData => ({
      ...prevData,
      basicDetails: data
    }));

    const basicDetails = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address:{
        street: data.address,
        city: data.city,
        state: data.state,
        zipCode: data.pincode
      },
      website: data.website,
      description: data.description,
    
      }

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const res= await axios.post(`${backendUrl}/api/hospitals/register`, basicDetails)
      console.log(res.data)

      setLoading(false);
      onNext();
        

    }catch (error) {
      console.error("Error in registering basic details:", error.response?.data || error.message);
      setError(error.response?.data?.message || "An error occurred while registering. Please try again.");  
      setLoading(false);
      return;
    }


   
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Hospital Basic Details
        </h2>
        <p className="text-gray-500 mt-1">
          Enter your hospital's basic information to get started
        </p>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* LEFT */}
        <div className="space-y-5">

          {/* Hospital Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Building2 className="h-4 w-4 text-teal-500" />
              Hospital Name *
            </label>
            <input
              {...register("name", { required: "Hospital name is required" })}
              className="w-full px-4 py-3 rounded-xl border"
              placeholder="Enter hospital name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Mail className="h-4 w-4 text-teal-500" />
              Email *
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email"
                }
              })}
              className="w-full px-4 py-3 rounded-xl border"
              placeholder="hospital@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Phone className="h-4 w-4 text-teal-500" />
              Phone *
            </label>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[0-9]{10,15}$/,
                  message: "Invalid phone number"
                }
              })}
              className="w-full px-4 py-3 rounded-xl border"
              placeholder="+91 XXXXX XXXXX"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Website */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Globe className="h-4 w-4 text-teal-500" />
              Website (Optional)
            </label>
            <input
              {...register("website", {
                pattern: {
                  value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                  message: "Invalid website URL"
                }
              })}
              className="w-full px-4 py-3 rounded-xl border"
              placeholder="https://www.hospital.com"
            />
            {errors.website && <p className="text-red-500 text-sm">{errors.website.message}</p>}
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">

          {/* Address */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <MapPin className="h-4 w-4 text-teal-500" />
              Street Address *
            </label>
            <textarea
              {...register("address", { required: "Street address is required" })}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border resize-none"
              placeholder="Building name, street name, area, landmark
"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>

          {/* City State Pin */}
          <div className="grid grid-cols-3 gap-3">

            <div>
              <label className="text-sm font-medium mb-2 block">
                City *
              </label>
              <input
                {...register("city", { required: "City is required" })}
                className="w-full px-4 py-3 rounded-xl border"
                placeholder="city"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                State *
              </label>
              <input
                {...register("state", { required: "State is required" })}
                className="w-full px-4 py-3 rounded-xl border"
                placeholder="State"  
              />
              {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                PIN Code *
              </label>
              <input
                {...register("pincode", {
                  required: "PIN code is required",
                  pattern: {
                    value: /^[0-9]{5,6}$/,
                    message: "Invalid PIN code"
                  }
                })}
                className="w-full px-4 py-3 rounded-xl border"
                placeholder="XXXXXX"
              />
              {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
            </div>

          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Hospital Description (Optional)
            </label>
            <textarea
              {...register("description")}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border resize-none"
              placeholder="Briefly describe your hospital, services, specialties, and facilities..."
            />
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          disabled={!isValid}
          className={`
            flex items-center gap-2 px-8 py-3 rounded-xl font-semibold
            ${isValid
              ? "bg-teal-500 text-white hover:bg-teal-600 shadow-lg"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }
            ${loading ? "opacity-70 cursor-wait" : ""}
          `}
        >
          {loading ? "Submitting..." : "Next"}
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

    </form>
  );
}
