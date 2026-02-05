import React, { useState, useEffect } from 'react';
import { Edit2 } from 'lucide-react';

const ReviewInformation = ({ formData, onNext, onPrevious, goToStep }) => {
  const [mainPhotoPreview, setMainPhotoPreview] = useState('');
  const [additionalPhotoPreviews, setAdditionalPhotoPreviews] = useState([]);

  const daysMap = {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday'
  };

  // ============ CONVERT FILE TO PREVIEW URL ============
  useEffect(() => {
    // Main Entrance Photo
    if (formData.mainEntrancePhoto instanceof File) {
      const url = URL.createObjectURL(formData.mainEntrancePhoto);
      setMainPhotoPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [formData.mainEntrancePhoto]);

  // Additional Photos
  useEffect(() => {
    const previews = [];
    if (Array.isArray(formData.additionalPhotos)) {
      formData.additionalPhotos.forEach((photo) => {
        if (photo instanceof File) {
          previews.push(URL.createObjectURL(photo));
        }
      });
    }
    setAdditionalPhotoPreviews(previews);
    return () => previews.forEach(url => URL.revokeObjectURL(url));
  }, [formData.additionalPhotos]);

  // ============ FORMAT TIME (24hr to 12hr) ============
  const formatTime = (time24) => {
    if (!time24) return '';
    
    try {
      // Handle both "HH:mm" and "HH:mm:ss" formats
      const timeParts = time24.split(':');
      const h = parseInt(timeParts[0], 10);
      const m = timeParts[1];
      
      const ampm = h >= 12 ? 'PM' : 'AM';
      const hour12 = h % 12 || 12;
      return `${hour12}:${m} ${ampm}`;
    } catch (err) {
      console.error('Time format error:', err);
      return time24;
    }
  };

  // ============ GET WORKING DAYS TEXT ============
  const getWorkingDaysText = () => {
    if (!formData.workingSchedule?.workingDays) return '';
    const days = Array.isArray(formData.workingSchedule.workingDays) 
      ? formData.workingSchedule.workingDays 
      : [];
    return days.map(day => daysMap[day] || day).join(', ');
  };

  // ============ GET TIME SLOTS ============
  const getTimeSlots = () => {
    if (!formData.workingSchedule?.timeSlots) return [];
    const slots = formData.workingSchedule.timeSlots;
    
    if (!Array.isArray(slots)) return [];
    
    // Filter out invalid slots and map them properly
    return slots
      .filter(slot => slot && (slot.start || slot.startTime) && (slot.end || slot.endTime))
      .map(slot => ({
        start: slot.start || slot.startTime || '',
        end: slot.end || slot.endTime || ''
      }));
  };

  const workingDaysText = getWorkingDaysText();
  const timeSlots = getTimeSlots();

  console.log('Form Data:', formData);
  console.log('Time Slots:', timeSlots);
  console.log('Main Photo Preview:', mainPhotoPreview);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Review Your Information
        </h2>
        <p className="text-gray-600">
          Please review all details before submission
        </p>
      </div>

      <div className="space-y-6">

        {/* ========== STEP 1: BASIC DETAILS ========== */}
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-900">Step 1: Basic Details</h3>
            <button 
              onClick={() => goToStep(0)} 
              className="text-blue-600 flex gap-1 text-sm hover:text-blue-800 transition"
            >
              <Edit2 size={16} /> Edit
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 font-medium">Department Name</p>
              <p className="text-gray-900">{formData.departmentName || 'N/A'}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600 font-medium">Description</p>
              <p className="text-gray-900">{formData.description || 'N/A'}</p>
            </div>
          </div>
        </div>

        {/* ========== STEP 2: MEDIA & LOCATION ========== */}
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-900">Step 2: Media & Location</h3>
            <button 
              onClick={() => goToStep(1)} 
              className="text-blue-600 flex gap-1 text-sm hover:text-blue-800 transition"
            >
              <Edit2 size={16} /> Edit
            </button>
          </div>

          <div className="space-y-6">
            {/* Main Entrance Photo */}
            {mainPhotoPreview ? (
              <div>
                <p className="text-sm text-gray-600 font-medium mb-3">Main Entrance Photo</p>
                <img
                  src={mainPhotoPreview}
                  alt="Main Entrance"
                  className="w-full max-w-md h-48 object-cover rounded-lg border border-gray-300"
                  onError={(e) => {
                    console.error('Image load error:', e);
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="150"%3E%3Crect fill="%23f0f0f0" width="200" height="150"/%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%23999"%3EImage not found%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            ) : (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">No main entrance photo uploaded</p>
              </div>
            )}

            {/* Additional Photos */}
            {additionalPhotoPreviews.length > 0 ? (
              <div>
                <p className="text-sm text-gray-600 font-medium mb-3">Additional Photos</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {additionalPhotoPreviews.map((preview, i) => (
                    <div key={i} className="relative group">
                      <img
                        src={preview}
                        alt={`Additional ${i + 1}`}
                        className="w-full h-24 object-cover rounded-lg border border-gray-300 group-hover:shadow-md transition"
                        onError={(e) => {
                          console.error('Additional image load error:', e);
                        }}
                      />
                      <p className="text-xs text-gray-600 mt-1 text-center">Photo {i + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">No additional photos uploaded</p>
              </div>
            )}

            {/* Location Details */}
            {formData.departmentAddress && (
              <div>
                <p className="text-sm text-gray-600 font-medium mb-2">Location Details</p>
                <div className="bg-gray-50 p-3 rounded-lg space-y-1 text-sm">
                  {formData.departmentAddress.hasSpecialBuilding ? (
                    <p className="text-gray-900">🏢 Department has special building</p>
                  ) : (
                    <>
                      <p className="text-gray-900">
                        <span className="font-medium">Floor:</span> {formData.departmentAddress.floorNumber || 'N/A'}
                      </p>
                      {formData.departmentAddress.wing && (
                        <p className="text-gray-900">
                          <span className="font-medium">Wing:</span> {formData.departmentAddress.wing}
                        </p>
                      )}
                      {formData.departmentAddress.landmark && (
                        <p className="text-gray-900">
                          <span className="font-medium">Landmark:</span> {formData.departmentAddress.landmark}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========== STEP 3: WORKING SCHEDULE ========== */}
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-900">Step 3: Working Schedule</h3>
            <button 
              onClick={() => goToStep(2)} 
              className="text-blue-600 flex gap-1 text-sm hover:text-blue-800 transition"
            >
              <Edit2 size={16} /> Edit
            </button>
          </div>

          <div className="space-y-4">
            {formData.workingSchedule?.is24X7 ? (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-lg font-semibold text-blue-900">🕐 Open 24 × 7</p>
              </div>
            ) : (
              <>
                {/* Working Days */}
                <div>
                  <p className="text-sm text-gray-600 font-medium mb-2">Working Days</p>
                  <p className="text-gray-900">{workingDaysText || 'No days selected'}</p>
                </div>

                {/* Time Slots */}
                {timeSlots.length > 0 ? (
                  <div>
                    <p className="text-sm text-gray-600 font-medium mb-2">Time Slots</p>
                    <div className="space-y-2">
                      {timeSlots.map((slot, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-2 p-2 bg-gray-50 rounded border border-gray-200"
                        >
                          <span className="text-sm font-medium text-gray-700">
                            {formatTime(slot.start)} – {formatTime(slot.end)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  null
                )}
              </>
            )}
          </div>
        </div>

        {/* ========== STEP 4: DOCTORS ========== */}
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-900">Step 4: Doctors</h3>
            <button 
              onClick={() => goToStep(3)} 
              className="text-blue-600 flex gap-1 text-sm hover:text-blue-800 transition"
            >
              <Edit2 size={16} /> Edit
            </button>
          </div>

          {formData.doctors && formData.doctors.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 bg-gray-50">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Name</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Specialization</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Availability</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.doctors.map((doc) => (
                    <tr key={doc.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                      <td className="py-3 px-3 text-gray-900">{doc.name}</td>
                      <td className="py-3 px-3 text-gray-900">{doc.specialization}</td>
                      <td className="py-3 px-3 text-gray-900">
                        {Array.isArray(doc.availabilityDays) && doc.availabilityDays.length > 0
                          ? doc.availabilityDays
                              .map(day => daysMap[day] || day)
                              .join(', ')
                          : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">No doctors added</p>
            </div>
          )}
        </div>

        {/* Ready to Submit */}
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
          <p className="text-lg font-semibold text-green-900">
            ✅ Ready to Submit?
          </p>
          <p className="text-green-800 mt-2">
            Review all information above and click <b>Submit</b> to complete registration.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
        <button 
          onClick={onPrevious} 
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-medium"
        >
          Previous
        </button>
        <button 
          onClick={onNext} 
          className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewInformation;