import React from 'react';
import { X, Calendar } from 'lucide-react';

const DoctorAvailability = ({ formData, updateFormData, onNext, onPrevious }) => {
  const specializations = [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Dermatology',
    'Oncology',
    'Radiology',
    'Psychiatry',
    'General Surgery',
    'Internal Medicine'
  ];

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const isValid = formData.doctors.every(
    doctor =>
      doctor.name.trim() &&
      doctor.specialization.trim() &&
      doctor.availabilityDays.length > 0
  );

  const handleDoctorChange = (id, field, value) => {
    const updatedDoctors = formData.doctors.map(doctor =>
      doctor.id === id ? { ...doctor, [field]: value } : doctor
    );
    updateFormData('doctors', updatedDoctors);
  };

  const toggleDay = (id, day) => {
    const updatedDoctors = formData.doctors.map(doctor => {
      if (doctor.id !== id) return doctor;

      const exists = doctor.availabilityDays.includes(day);
      return {
        ...doctor,
        availabilityDays: exists
          ? doctor.availabilityDays.filter(d => d !== day)
          : [...doctor.availabilityDays, day]
      };
    });

    updateFormData('doctors', updatedDoctors);
  };

  const addDoctor = () => {
    const newId = Math.max(...formData.doctors.map(d => d.id), 0) + 1;
    updateFormData('doctors', [
      ...formData.doctors,
      { id: newId, name: '', specialization: '', availabilityDays: [] }
    ]);
  };

  const removeDoctor = (id) => {
    if (formData.doctors.length > 1) {
      updateFormData(
        'doctors',
        formData.doctors.filter(d => d.id !== id)
      );
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-2">Doctor Availability</h2>
      <p className="text-gray-600 mb-6">
        Add doctors and select available working days
      </p>

      <div className="space-y-6">
        {formData.doctors.map((doctor, index) => (
          <div key={doctor.id} className="border rounded-lg p-6 relative">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Doctor {index + 1}</h3>

              {formData.doctors.length > 1 && (
                <button
                  onClick={() => removeDoctor(doctor.id)}
                  className="text-red-600 hover:bg-red-50 p-1 rounded"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm mb-1">Name *</label>
              <input
                value={doctor.name}
                onChange={(e) =>
                  handleDoctorChange(doctor.id, 'name', e.target.value)
                }
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Dr. Rahul"
              />
            </div>

            {/* Specialization (Input) */}
            <div className="mb-4">
              <label className="block text-sm mb-1">Specialization *</label>
              <input
                list="specializations"
                value={doctor.specialization}
                onChange={(e) =>
                  handleDoctorChange(doctor.id, 'specialization', e.target.value)
                }
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Type or select"
              />
              <datalist id="specializations">
                {specializations.map(spec => (
                  <option key={spec} value={spec} />
                ))}
              </datalist>
            </div>

            {/* Availability (Day Picker) */}
            <div>
              <label className="flex items-center gap-2 text-sm mb-2">
                <Calendar size={16} /> Available Days *
              </label>

              <div className="flex flex-wrap gap-2">
                {daysOfWeek.map(day => {
                  const active = doctor.availabilityDays.includes(day);
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => toggleDay(doctor.id, day)}
                      className={`px-3 py-1.5 rounded-full text-sm border transition
                        ${
                          active
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-gray-100 text-gray-700 border-gray-300'
                        }
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addDoctor}
          className="w-full border-dashed border-2 border-blue-400 text-blue-600 py-3 rounded-lg"
        >
          + Add Another Doctor
        </button>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t">
        <button
          onClick={onPrevious}
          className="px-6 py-2 bg-gray-100 rounded-lg"
        >
          Previous
        </button>

        <button
          onClick={onNext}
          disabled={!isValid}
          className={`px-8 py-2 rounded-lg ${
            isValid
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DoctorAvailability;
