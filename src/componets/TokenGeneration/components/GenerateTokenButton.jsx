import React from "react";
import { ArrowRight } from "lucide-react";

const GenerateTokenButton = ({ isSubmitting, selectedDeptData, onSubmit }) => {
  return (
    <button
      onClick={onSubmit}
      disabled={isSubmitting || !selectedDeptData}
      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 transition-all duration-200 flex items-center justify-center space-x-2"
    >
      {isSubmitting ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Generating...</span>
        </>
      ) : (
        <>
          <span>Generate Token</span>
          <ArrowRight className="w-5 h-5" />
        </>
      )}
    </button>
  );
};

export default GenerateTokenButton;