"use client"

import React from "react"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImagePlus, X, ArrowLeft, FileText } from "lucide-react"
import type { HospitalBranding } from "@/types/registration"
import { DEFAULT_POLICIES } from "@/types/registration"
import Image from "next/image"

interface StepBrandingProps {
  data: HospitalBranding
  onChange: (data: HospitalBranding) => void
  onNext: () => void
  onBack: () => void
}

export function StepBranding({ data, onChange, onNext, onBack }: StepBrandingProps) {
  const logoInputRef = useRef<HTMLInputElement>(null)
  const bannerInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (
    type: "logo" | "banner",
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        onChange({
          ...data,
          [type]: file,
          [`${type}Preview`]: reader.result as string,
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveFile = (type: "logo" | "banner") => {
    onChange({
      ...data,
      [type]: null,
      [`${type}Preview`]: null,
    })
  }

  const handlePolicyChange = (policies: string) => {
    onChange({ ...data, policies })
  }

  const handleResetPolicies = () => {
    onChange({ ...data, policies: DEFAULT_POLICIES })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Hospital Branding</h2>
        <p className="text-muted-foreground">
          Upload your hospital logo, banner, and customize your policies
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Logo Upload */}
        <div className="space-y-3">
          <Label className="flex items-center gap-2">
            <ImagePlus className="h-4 w-4 text-primary" />
            Hospital Logo
          </Label>
          <input
            ref={logoInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange("logo", e)}
            className="hidden"
          />
          {data.logoPreview ? (
            <div className="relative aspect-square w-full max-w-[200px] rounded-lg border-2 border-dashed border-border overflow-hidden group">
              <Image
                src={data.logoPreview || "/placeholder.svg"}
                alt="Logo preview"
                fill
                className="object-contain p-2"
              />
              <button
                onClick={() => handleRemoveFile("logo")}
                className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => logoInputRef.current?.click()}
              className="flex flex-col items-center justify-center aspect-square w-full max-w-[200px] rounded-lg border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <ImagePlus className="h-8 w-8 text-muted-foreground mb-2" />
              <span className="text-sm text-muted-foreground">Upload Logo</span>
              <span className="text-xs text-muted-foreground mt-1">
                PNG, JPG up to 2MB
              </span>
            </button>
          )}
        </div>

        {/* Banner Upload */}
        <div className="space-y-3">
          <Label className="flex items-center gap-2">
            <ImagePlus className="h-4 w-4 text-primary" />
            Hospital Banner
          </Label>
          <input
            ref={bannerInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange("banner", e)}
            className="hidden"
          />
          {data.bannerPreview ? (
            <div className="relative aspect-video w-full rounded-lg border-2 border-dashed border-border overflow-hidden group">
              <Image
                src={data.bannerPreview || "/placeholder.svg"}
                alt="Banner preview"
                fill
                className="object-cover"
              />
              <button
                onClick={() => handleRemoveFile("banner")}
                className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => bannerInputRef.current?.click()}
              className="flex flex-col items-center justify-center aspect-video w-full rounded-lg border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <ImagePlus className="h-8 w-8 text-muted-foreground mb-2" />
              <span className="text-sm text-muted-foreground">Upload Banner</span>
              <span className="text-xs text-muted-foreground mt-1">
                Recommended: 1200x400px
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Policies */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            Hospital Policies
          </Label>
          <Button variant="ghost" size="sm" onClick={handleResetPolicies}>
            Reset to Default
          </Button>
        </div>
        <Textarea
          value={data.policies}
          onChange={(e) => handlePolicyChange(e.target.value)}
          rows={12}
          className="font-mono text-sm"
          placeholder="Enter hospital policies..."
        />
        <p className="text-xs text-muted-foreground">
          You can edit these policies anytime from your dashboard. Supports Markdown
          formatting.
        </p>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={onNext} size="lg">
          Continue to Departments
        </Button>
      </div>
    </div>
  )
}
