import { Pause, Play, SkipForward, CheckCircle } from "lucide-react";
import React from "react";

function ControlButtons({
  togglePause,
  isPaused,
  onSkip,
  onComplete,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-5">
        Queue Controls
      </h3>

      <div className="grid grid-cols-3 gap-4">
        {/* Pause / Resume */}
        <button
          onClick={togglePause}
          className={`flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all shadow-md ${
            isPaused
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-yellow-500 hover:bg-yellow-600 text-white"
          }`}
        >
          {isPaused ? <Play size={20} /> : <Pause size={20} />}
          {isPaused ? "Resume" : "Pause"}
        </button>

        {/* Skip Token */}
        {
            !isPaused && (
                <button
          onClick={onSkip}
          className="flex items-center justify-center gap-2 py-4 rounded-xl font-semibold bg-orange-500 hover:bg-orange-600 text-white transition-all shadow-md"
        >
          <SkipForward size={20} />
          Skip
        </button>
            )
        }
        

        {/* Mark as Completed */}
        {
            !isPaused && (
                <button
          onClick={onComplete}
          className="flex items-center justify-center gap-2 py-4 rounded-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md"
        >
          <CheckCircle size={20} />
          Complete
        </button>
            )
        }
        

      </div>
    </div>
  );
}

export default ControlButtons;
