import React, { use, useState,useEffect } from "react";
import { Clock, Plus, Trash2, ArrowRight } from "lucide-react";


const WorkingSchedule = ({onNext,onPrevious,updateFormData}) => {
  const daysOfWeek = [
    { short: "Mon", full: "Monday" },
    { short: "Tue", full: "Tuesday" },
    { short: "Wed", full: "Wednesday" },
    { short: "Thu", full: "Thursday" },
    { short: "Fri", full: "Friday" },
    { short: "Sat", full: "Saturday" },
    { short: "Sun", full: "Sunday" },
  ];

  const [is24x7, setIs24x7] = useState(false);
  const [workingDays, setWorkingDays] = useState([]);
  const [timeSlots, setTimeSlots] = useState([
    { openingTime: "", closingTime: "" },
  ]);

  const [workingSchedule, setWorkingSchedule] = useState({
    is24x7: false,
    workingDays,
    timeSlots,
  });

  useEffect(() => {
    setWorkingSchedule({
      is24x7,
      workingDays,
      timeSlots,
    });
  }, [is24x7, workingDays, timeSlots]);

  useEffect(() => {
    updateFormData("workingSchedule", workingSchedule);
  }, [workingSchedule]);



  const isValid = is24x7 || (workingDays.length > 0 && timeSlots.length > 0);

  const toggleDay = (day) => {
    setWorkingDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const addTimeSlot = () => {
    setTimeSlots([...timeSlots, { openingTime: "", closingTime: "" }]);
  };

  const updateTimeSlot = (index, field, value) => {
    const updated = [...timeSlots];
    updated[index][field] = value;
    setTimeSlots(updated);
  };

  const removeTimeSlot = (index) => {
    setTimeSlots(timeSlots.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Working Schedule
        </h2>
        <p className="text-gray-600">
          Configure department working days & hours
        </p>
      </div>

      {/* 24x7 Toggle */}
      <div className="mb-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={is24x7}
            onChange={(e) => setIs24x7(e.target.checked)}
            className="w-5 h-5 accent-blue-600"
          />
          <span className="font-medium text-gray-800">
            Department works 24 × 7
          </span>
        </label>
      </div>

      {/* Hide if 24x7 */}
      {!is24x7 && (
        <div className="space-y-6">
          {/* Working Days */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Working Days <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
              {daysOfWeek.map((day) => (
                <button
                  key={day.short}
                  type="button"
                  onClick={() => toggleDay(day.short)}
                  className={`py-3 rounded-lg font-semibold text-sm transition
                    ${
                      workingDays.includes(day.short)
                        ? "bg-blue-600 text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:border-blue-400"
                    }`}
                >
                  {day.short}
                </button>
              ))}
            </div>
          </div>

          {/* Time Slots */}
          {/* Time Slots */}
<div>
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
      <Clock className="w-5 h-5 text-blue-600" />
      Time Slots
    </h3>

    <button
      type="button"
      onClick={addTimeSlot}
      className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
    >
      <Plus className="w-4 h-4" />
      Add Slot
    </button>
  </div>

  <div className="space-y-4">
    {timeSlots.map((slot, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-xl bg-gray-50"
      >
        {/* Opening Time */}
        <div className="w-full">
          <label className="text-xs font-medium text-gray-600 mb-1 block">
            From
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="time"
              value={slot.openingTime}
              onChange={(e) =>
                updateTimeSlot(index, "openingTime", e.target.value)
              }
              className="w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Arrow */}
        <ArrowRight className="w-5 h-5 text-gray-400 hidden md:block mt-6" />

        {/* Closing Time */}
        <div className="w-full">
          <label className="text-xs font-medium text-gray-600 mb-1 block">
            To
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="time"
              value={slot.closingTime}
              onChange={(e) =>
                updateTimeSlot(index, "closingTime", e.target.value)
              }
              className="w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Remove */}
        {timeSlots.length > 1 && (
          <button
            type="button"
            onClick={() => removeTimeSlot(index)}
            className="mt-6 md:mt-0 text-red-500 hover:text-red-600"
            title="Remove slot"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        )}
      </div>
    ))}
  </div>
</div>

        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t">
        <button 
        onClick={onPrevious}
        className="px-6 py-2 bg-gray-100 rounded-lg">
          Previous
        </button>
        <button
          disabled={!isValid}
          onClick={onNext}
          className={`px-8 py-2 rounded-lg font-medium
            ${
              isValid
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WorkingSchedule;
