import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [step, setStep] = useState("register"); // register | otp
  const [loading, setLoading] = useState(false);
  const [emailForOtp, setEmailForOtp] = useState("");

  const password = watch("password");

  // ================= REGISTER =================
  const onRegister = async (data) => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
        data,
        { withCredentials: true }
      );

      if (res.data.success) {
        setEmailForOtp(data.email);
        setStep("otp");
        navigate
      }

    } catch (error) {
      console.log("Register error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  // ================= VERIFY OTP =================
  const onVerifyOtp = async (data) => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/verify-user/${emailForOtp}`,
        {
          otp: data.otp,
        },
        { withCredentials: true }
      );

      console.log("OTP Verified:", res.data);
      if (res.data.success) {
        navigate("/");}
    } catch (error) {
      console.log("OTP error:", error.response?.data || error.message);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(step === "register" ? onRegister : onVerifyOtp)}
      className="space-y-4"
    >
      {/* ================= REGISTER FORM ================= */}
      {step === "register" && (
        <>
          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password required",
                  minLength: 6,
                })}
                className="w-full mt-1 px-4 py-2 border rounded-lg pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-gray-600">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="w-full mt-1 px-4 py-2 border rounded-lg pr-10"
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>
        </>
      )}

      {/* ================= OTP FORM ================= */}
      {step === "otp" && (
        <div>
          <label className="text-sm text-gray-600">
            Enter OTP sent to your email
          </label>
          <input
            type="text"
            {...register("otp", { required: "OTP required" })}
            className="w-full mt-1 px-4 py-2 border rounded-lg text-center tracking-widest"
          />
          {errors.otp && (
            <p className="text-sm text-red-500">{errors.otp.message}</p>
          )}
        </div>
      )}

      {/* ================= BUTTON ================= */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 rounded-lg bg-indigo-600 text-white flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading && <Loader2 className="animate-spin" size={18} />}
        {step === "register" ? "Register" : "Verify OTP"}
      </button>
    </form>
  );
}

export default RegistrationForm;
