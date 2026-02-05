import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";


function SetPassword({ onNext , onBack,email}) {
     const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  });

  const password = watch("password");

  
  const onSubmit =async (data) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    try {
        const res = await axios.post(`${backendUrl}/api/hospitals/set-password`, {
            email: email,
            password: data.password
        })
        console.log("Password set successfully:", res.data);
        onNext();
        
    } catch (error) {
        console.log("Error in setting password:", error);   
    }

  };

  return (
     <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

      {/* Password Section */}
      <div className="max-w-md mx-auto space-y-5">

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Set Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter a strong password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match"
              })}
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <p className="text-xs text-gray-500 text-center">
          Password must be at least 6 characters long.
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 rounded-xl text-gray-600 hover:bg-gray-100"
        >
          Back
        </button>

        <button
          type="submit"
          disabled={!isValid}
          className={`
            px-8 py-3 rounded-xl font-semibold transition-all
            ${isValid
              ? "bg-teal-500 text-white hover:bg-teal-600 shadow-lg"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          Continue
        </button>
      </div>

    </form>
  )
}

export default SetPassword
