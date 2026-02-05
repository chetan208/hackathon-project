import React from 'react';
import { CheckCircle2 } from 'lucide-react';

import axios from 'axios';

import RegistrationSuccess from './RegistrationSuccess';



const ConfirmSubmission = ({ formData, onPrevious }) => {

  const [success,setSuccess] = React.useState(false);

  const onSubmit = async() => {

    const backendurl = import.meta.env.VITE_BACKEND_URL;
   
   try {
    const res = await axios.post(`${backendurl}/api/hospitals/add-department`, formData, {withCredentials: true});
    console.log(res.data);

    const fd= new FormData()

    fd.append('mainEntrancePhoto', formData.mainEntrancePhoto);
    fd.append('departmentId', res.data.departmentId); //--- TEMPORARY FIX ---
    formData.additionalPhotos.forEach(file => {
  fd.append('additionalPhotos', file);
});

    const response = await axios.post(`${backendurl}/api/hospitals/department/upload-image`,fd , {withCredentials:true})
    console.log(response)
   } catch (error) {
    console.error("Error submitting department registration:", error);
   }
};

if (success) {
  return (
    <RegistrationSuccess formData={formData} />
  );
}

  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Confirm Submission
        </h2>
        <p className="text-gray-600">
          All information is verified and ready for submission
        </p>
      </div>

      <div className="space-y-6">
        {/* Final Checklist */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Final Checklist</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                Department basic details completed
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                Entrance photo uploaded and floor number set
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                Working schedule configured
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                Doctor information added ({formData.doctors.length} doctor{formData.doctors.length !== 1 ? 's' : ''})
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                All details reviewed
              </span>
            </div>
          </div>
        </div>

        {/* Department Status Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">Department Status:</span> Your department will be set to ACTIVE upon successful submission.
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
        <button
          type="button"
          onClick={onSubmit}
          className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 shadow-sm hover:shadow transition"
        >
          Submit Registration
        </button>
        <button
          type="button"
          onClick={onPrevious}
          className="w-full py-2 text-gray-600 hover:text-gray-800 text-sm font-medium transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ConfirmSubmission;
