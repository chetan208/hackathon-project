'use client';

import React, { createContext, useState } from 'react';

export const DepartmentRegistrationContext = createContext();

export function DepartmentRegistrationProvider({ children }) {
  const [formData, setFormData] = useState({
    // Step 1: Basic Details
    departmentName: '',
    description: '',
    
    // Step 2: Media & Location
    entrancePhoto: null,
    entrancePhotoPreview: null,
    floorNumber: '',
    
    // Step 3: Working Schedule
    openingTime: '09:00',
    closingTime: '17:00',
    workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    
    // Step 4: Doctor Availability
    doctors: [{ id: 1, name: '', specialization: '', availability: '' }],
    
    // Step 5 & 6: Review and Submission
    status: 'PENDING'
  });

  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateDoctor = (doctorId, field, value) => {
    setFormData(prev => ({
      ...prev,
      doctors: prev.doctors.map(doc =>
        doc.id === doctorId ? { ...doc, [field]: value } : doc
      )
    }));
  };

  const addDoctor = () => {
    const newId = Math.max(...formData.doctors.map(d => d.id), 0) + 1;
    setFormData(prev => ({
      ...prev,
      doctors: [...prev.doctors, { id: newId, name: '', specialization: '', availability: '' }]
    }));
  };

  const removeDoctor = (doctorId) => {
    if (formData.doctors.length > 1) {
      setFormData(prev => ({
        ...prev,
        doctors: prev.doctors.filter(doc => doc.id !== doctorId)
      }));
    }
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 6));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  return (
    <DepartmentRegistrationContext.Provider
      value={{
        formData,
        updateFormData,
        updateDoctor,
        addDoctor,
        removeDoctor,
        currentStep,
        goToStep,
        nextStep,
        prevStep
      }}
    >
      {children}
    </DepartmentRegistrationContext.Provider>
  );
}
