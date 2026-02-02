"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Mail, CheckCircle2, RefreshCw, ArrowLeft } from "lucide-react"

interface StepEmailVerificationProps {
  email: string
  verified: boolean
  onVerify: () => void
  onNext: () => void
  onBack: () => void
}

export function StepEmailVerification({
  email,
  verified,
  onVerify,
  onNext,
  onBack,
}: StepEmailVerificationProps) {
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [resendTimer, setResendTimer] = useState(30)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    if (resendTimer > 0 && !canResend) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000)
      return () => clearTimeout(timer)
    } else if (resendTimer === 0) {
      setCanResend(true)
    }
  }, [resendTimer, canResend])

  const handleVerify = async () => {
    if (otp.length !== 6) return
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    onVerify()
    setIsLoading(false)
  }

  const handleResend = async () => {
    setCanResend(false)
    setResendTimer(30)
    // Simulate resend API call
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  if (verified) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-accent/20 p-4 mb-4">
            <CheckCircle2 className="h-12 w-12 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Email Verified!</h2>
          <p className="text-muted-foreground mt-2 max-w-md">
            Your email <span className="font-medium text-foreground">{email}</span> has been
            successfully verified.
          </p>
        </div>

        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button onClick={onNext} size="lg">
            Continue to Branding
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Verify Your Email</h2>
        <p className="text-muted-foreground">
          We&apos;ve sent a 6-digit verification code to your email
        </p>
      </div>

      <div className="flex flex-col items-center py-8">
        <div className="rounded-full bg-primary/10 p-4 mb-6">
          <Mail className="h-10 w-10 text-primary" />
        </div>

        <p className="text-sm text-muted-foreground mb-2">Code sent to</p>
        <p className="font-medium text-foreground mb-8">{email}</p>

        <div className="mb-6">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button
          onClick={handleVerify}
          disabled={otp.length !== 6 || isLoading}
          className="w-full max-w-xs mb-4"
          size="lg"
        >
          {isLoading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Verifying...
            </>
          ) : (
            "Verify Email"
          )}
        </Button>

        <div className="text-sm text-muted-foreground">
          Didn&apos;t receive the code?{" "}
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-primary font-medium hover:underline"
            >
              Resend Code
            </button>
          ) : (
            <span>Resend in {resendTimer}s</span>
          )}
        </div>
      </div>

      <div className="flex justify-start pt-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
    </div>
  )
}
