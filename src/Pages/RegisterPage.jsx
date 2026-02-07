import React from "react";
import HospitalRegisterButton from "../componets/RegisterPageComponents.jsx/HospitalRegisterButton";
import RegistrationForm from "../componets/RegisterPageComponents.jsx/RegistrationForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 pt-15">

      {/* Outer Container */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* LEFT: Registration Form */}
          <div className="p-8 md:p-10 space-y-6">

            <div>
              <h1 className="text-3xl font-semibold text-gray-800">
                Create Account
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Register as a user to get started
              </p>
            </div>

            <RegistrationForm />

          </div>

          {/* RIGHT: Hospital CTA */}
          <div className="bg-indigo-50 p-8 md:p-10 flex flex-col justify-center">

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Are you a Hospital Owner?
              </h2>

              <p className="text-sm text-gray-600">
                Register your hospital and manage departments, staff,
                queues, and analytics from one dashboard.
              </p>

              <HospitalRegisterButton />
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Register;
