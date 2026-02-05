'use client';

import { useState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form";
import { Mail, CheckCircle2, Loader2, ArrowLeft, ArrowRight,Eye, EyeOff } from "lucide-react"
import axios from "axios";
import SetPassword from "./components/SetPassword.jsx";

export default function StepEmailVerification({ email, verified, onVerify, onNext, onBack }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const [resendTimer, setResendTimer] = useState(30)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef([])

  useEffect(() => {
    if (resendTimer > 0 && !canResend) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000)
      return () => clearTimeout(timer)
    } else if (resendTimer === 0) {
      setCanResend(true)
    }
  }, [resendTimer, canResend])

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value[0]
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").slice(0, 6)
    if (!/^\d+$/.test(pastedData)) return
    
    const newOtp = [...otp]
    pastedData.split("").forEach((char, i) => {
      if (i < 6) newOtp[i] = char
    })
    setOtp(newOtp)
  }

  const handleVerify = async () => {
    const otpString = otp.join("")
    if (otpString.length !== 6) return
    console.log("Verifying OTP:", otpString)
    
    setIsLoading(true)
    // Simulate API call
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const res = await axios.post(`${backendUrl}/api/hospitals/verify/${email}`, { otp: otpString })
      if(res.data.success){
        onVerify()
      }else{
        alert(res.data.message)
      }
      console.log("OTP verification response:", res.data)

      setIsLoading(false)
      
    } catch (error) {
      console.error("Error verifying OTP:", error)  
    }
   
    setIsLoading(false)
  }

  const handleResend = async () => {
    setCanResend(false)
    setResendTimer(30)
    setOtp(["", "", "", "", "", ""])
    // Simulate resend API call
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  const isOtpComplete = otp.every((digit) => digit !== "")

  

  if (verified) {
    return (
      <div className="space-y-8">

  {/* Success */}
  <div className="flex flex-col items-center justify-center py-12 text-center">
    <div className="rounded-full bg-emerald-100 p-6 mb-6">
      <CheckCircle2 className="h-16 w-16 text-emerald-500" />
    </div>

    <h2 className="text-2xl font-bold text-gray-900">
      Email Verified!
    </h2>

    <p className="text-gray-500 mt-2 max-w-md">
      Your email <span className="font-semibold text-gray-900">{email}</span> has been
      successfully verified.
    </p>
  </div>

  {/* 🔐 Setup Password */}
  <div className="max-w-md mx-auto space-y-5">
    <SetPassword onNext={onNext} onBack={onBack} email={email} />
  </div>

  

</div>

    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Verify Your Email</h2>
        <p className="text-gray-500 mt-1">
          We've sent a 6-digit verification code to your email
        </p>
      </div>

      <div className="flex flex-col items-center py-8">
        <div className="rounded-full bg-teal-100 p-5 mb-6">
          <Mail className="h-12 w-12 text-teal-500" />
        </div>

        <p className="text-sm text-gray-500 mb-1">Code sent to</p>
        <p className="font-semibold text-gray-900 mb-8">{email}</p>

        {/* OTP Input */}
        <div className="flex gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className={`
                w-14 h-16 text-center text-2xl font-bold rounded-xl border-2 outline-none transition-all
                ${digit 
                  ? "border-teal-500 bg-teal-50" 
                  : "border-gray-200 hover:border-gray-300"
                }
                focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20
              `}
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          disabled={!isOtpComplete || isLoading}
          className={`
            flex items-center justify-center gap-2 w-full max-w-xs px-6 py-3 rounded-xl font-semibold transition-all
            ${isOtpComplete && !isLoading
              ? "bg-teal-500 text-white hover:bg-teal-600 shadow-lg shadow-teal-500/25"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Verifying...
            </>
          ) : (
            "Verify Email"
          )}
        </button>

        <p className="text-sm text-gray-500 mt-6">
          Didn't receive the code?{" "}
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-teal-600 font-semibold hover:underline"
            >
              Resend Code
            </button>
          ) : (
            <span className="text-gray-400">Resend in {resendTimer}s</span>
          )}
        </p>
      </div>

      <div className="flex justify-start pt-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>
      </div>
    </div>
  )
}
