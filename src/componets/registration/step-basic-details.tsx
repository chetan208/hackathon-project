"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Building2, Mail, Phone, MapPin, Globe } from "lucide-react"
import type { HospitalBasicDetails } from "@/types/registration"

interface StepBasicDetailsProps {
  data: HospitalBasicDetails
  onChange: (data: HospitalBasicDetails) => void
  onNext: () => void
}

export function StepBasicDetails({ data, onChange, onNext }: StepBasicDetailsProps) {
  const handleChange = (field: keyof HospitalBasicDetails, value: string) => {
    onChange({ ...data, [field]: value })
  }

  const isValid =
    data.name &&
    data.email &&
    data.phone &&
    data.address &&
    data.city &&
    data.state &&
    data.pincode

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Hospital Basic Details</h2>
        <p className="text-muted-foreground">
          Enter your hospital&apos;s basic information to get started
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-primary" />
            Hospital Name *
          </Label>
          <Input
            id="name"
            placeholder="Enter hospital name"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="hospital@example.com"
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={data.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="address" className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            Street Address *
          </Label>
          <Textarea
            id="address"
            placeholder="Enter complete street address"
            value={data.address}
            onChange={(e) => handleChange("address", e.target.value)}
            rows={2}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              placeholder="City"
              value={data.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="state">State *</Label>
            <Input
              id="state"
              placeholder="State"
              value={data.state}
              onChange={(e) => handleChange("state", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="pincode">PIN Code *</Label>
            <Input
              id="pincode"
              placeholder="XXXXXX"
              value={data.pincode}
              onChange={(e) => handleChange("pincode", e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="website" className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            Website (Optional)
          </Label>
          <Input
            id="website"
            type="url"
            placeholder="https://www.hospital.com"
            value={data.website || ""}
            onChange={(e) => handleChange("website", e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="description">Hospital Description (Optional)</Label>
          <Textarea
            id="description"
            placeholder="Brief description about your hospital, services, specialties..."
            value={data.description || ""}
            onChange={(e) => handleChange("description", e.target.value)}
            rows={3}
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={onNext} disabled={!isValid} size="lg">
          Continue to Email Verification
        </Button>
      </div>
    </div>
  )
}
