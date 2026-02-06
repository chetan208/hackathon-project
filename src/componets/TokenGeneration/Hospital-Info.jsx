import React, { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AlertCircle } from "lucide-react";

import PageHeader from "./components/PageHeader";
import HospitalInfoCard from "./components/HospitalInfoCard";
import DepartmentSelector from "./components/DepartmentSelector";
import PatientDetailsForm from "./components/PatientInfoForm";
import QueueStatusCard from "./components/QueueStatusCard";
import ImportantNotice from "./components/ImportantNotice";
import GenerateTokenButton from "./components/GenerateTokenButton";
import WhatNextSection from "./components/WhatNextSection";
import axios from "axios";


const TokenPage = ({ hospital }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const initialDepartment = location.state?.department || "";
  const [selectedDepartment, setSelectedDepartment] = useState(initialDepartment);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      patientName: "",
      age: "",
      mobile: "",
      visitType: "new",
    },
    mode: "onBlur",
  });

  const visitType = watch("visitType");

  // Get available departments from hospital
  const departments = useMemo(() => {
    const iconMap = {
      opd: "Stethoscope",
      cardiology: "Heart",
      pediatrics: "Baby",
      neurology: "Brain",
      orthopedics: "Bone",
      dermatology: "Smile",
      emergency: "AlertCircle",
      surgery: "Stethoscope",
      laboratory: "Stethoscope",
      pharmacy: "Stethoscope",
      icu: "Heart",
      dental: "Smile",
    };

    return hospital?.departments?.map(dept => ({
      id: dept._id,
      name: dept.name.charAt(0).toUpperCase() + dept.name.slice(1),
      original: dept.name,
      icon: iconMap[dept.name.toLowerCase()] || "Stethoscope",
      status: dept.status || "Active",
      doctors: dept.Doctors?.length || 0,
    })) || [];
  }, [hospital?.departments]);

  // Get selected department data
  const selectedDeptData = departments.find(
    d => d.original.toLowerCase() === selectedDepartment.toLowerCase()
  );

  // Queue simulation based on department
  const queueInfo = useMemo(() => {
    if (!selectedDeptData) {
      return { current: "A-00", ahead: 0, waitTime: 0 };
    }
    const queueNumber = Math.floor(Math.random() * 30) + 10;
    const ahead = Math.floor(Math.random() * 15) + 1;
    const waitTime = ahead * 3;
    
    return {
      current: `A-${queueNumber}`,
      ahead: ahead,
      waitTime: waitTime,
    };
  }, [selectedDeptData]);

  // Today's date
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Form submission handler
  const onSubmit = async (data) => {
    if (!selectedDepartment) {
      alert("Please select a department");
      return;
    }
    console.log("Selected Department:", selectedDepartment);
    console.log("Selected Department ID:", selectedDepartmentId);

    try {
      setIsSubmitting(true);
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/generate-token`,{
        hospitalId: hospital._id,
        departmentId: selectedDepartmentId,
        departmentName: selectedDepartment,
        patientData: {
          name: data.patientName,
          age: data.age,
          contactNumber: data.mobile,
          visitType: data.visitType
        }
      })
      setIsSubmitting(false);
      console.log(res.data)
      if(res.data.success){
        navigate(`/token-status/${res.data.tokenData._id}`)
      }
      
    } catch (error) {
        console.log("Token generation error:", error);
      
    }
    
  };

  if (!hospital) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Hospital Not Found</h2>
          <p className="text-gray-600 mb-6">Please select a hospital first</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-[#0055ff] text-white rounded-lg hover:bg-[#0044dd] transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <PageHeader hospitalName={hospital?.name} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Hospital Info & Form */}
          <div className="lg:col-span-2 space-y-6">
            <HospitalInfoCard hospital={hospital} today={today} />

            <DepartmentSelector
              departments={departments}
              selectedDepartment={selectedDepartment}
              setSelectedDepartment={setSelectedDepartment}
              setSelectedDepartmentId={setSelectedDepartmentId}
            />

            <PatientDetailsForm
              register={register}
              errors={errors}
              visitType={visitType}
              setValue={setValue}
            />
          </div>

          {/* Right Column - Queue Info & Actions */}
          <div className="lg:col-span-1 space-y-6">
            <QueueStatusCard
              selectedDeptData={selectedDeptData}
              queueInfo={queueInfo}
            />

            <ImportantNotice />

            <GenerateTokenButton
              isSubmitting={isSubmitting}
              selectedDeptData={selectedDeptData}
              onSubmit={handleSubmit(onSubmit)}
            />

            <p className="text-center text-sm text-gray-600">
              By generating a token, you agree to our{" "}
              <button className="text-[#0055ff] hover:underline font-semibold">
                terms and conditions
              </button>
            </p>
          </div>
        </div>

        <WhatNextSection />
      </div>
    </div>
  );
};

export default TokenPage;