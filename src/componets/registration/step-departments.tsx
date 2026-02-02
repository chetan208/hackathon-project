"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Trash2, Building, ArrowLeft, User, CheckCircle2 } from "lucide-react"
import type { Department } from "@/types/registration"

interface StepDepartmentsProps {
  departments: Department[]
  onChange: (departments: Department[]) => void
  onBack: () => void
  onComplete: () => void
}

export function StepDepartments({
  departments,
  onChange,
  onBack,
  onComplete,
}: StepDepartmentsProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newDepartment, setNewDepartment] = useState<Omit<Department, "id">>({
    name: "",
    description: "",
    headDoctor: "",
  })

  const handleAddDepartment = () => {
    if (!newDepartment.name || !newDepartment.description) return

    const department: Department = {
      ...newDepartment,
      id: Date.now().toString(),
    }

    onChange([...departments, department])
    setNewDepartment({ name: "", description: "", headDoctor: "" })
    setIsDialogOpen(false)
  }

  const handleRemoveDepartment = (id: string) => {
    onChange(departments.filter((d) => d.id !== id))
  }

  const isValid = departments.length >= 1

  const suggestedDepartments = [
    "General Medicine",
    "Cardiology",
    "Orthopedics",
    "Pediatrics",
    "Gynecology",
    "Dermatology",
    "Neurology",
    "Ophthalmology",
    "ENT",
    "Radiology",
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Add Departments</h2>
        <p className="text-muted-foreground">
          Register at least one department to complete your hospital setup
        </p>
      </div>

      {/* Department List */}
      {departments.length > 0 && (
        <div className="grid gap-3">
          {departments.map((dept) => (
            <Card key={dept.id} className="group">
              <CardContent className="flex items-start justify-between p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{dept.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {dept.description}
                    </p>
                    {dept.headDoctor && (
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <User className="h-3 w-3" />
                        Head: {dept.headDoctor}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveDepartment(dept.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Add Department Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full border-dashed h-16 bg-transparent">
            <Plus className="mr-2 h-5 w-5" />
            Add New Department
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Department</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="deptName">Department Name *</Label>
              <Input
                id="deptName"
                placeholder="e.g., Cardiology"
                value={newDepartment.name}
                onChange={(e) =>
                  setNewDepartment({ ...newDepartment, name: e.target.value })
                }
              />
              <div className="flex flex-wrap gap-1 mt-1">
                {suggestedDepartments
                  .filter(
                    (s) =>
                      !departments.some((d) => d.name.toLowerCase() === s.toLowerCase())
                  )
                  .slice(0, 5)
                  .map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() =>
                        setNewDepartment({ ...newDepartment, name: suggestion })
                      }
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="deptDesc">Description *</Label>
              <Textarea
                id="deptDesc"
                placeholder="Brief description of department services..."
                value={newDepartment.description}
                onChange={(e) =>
                  setNewDepartment({ ...newDepartment, description: e.target.value })
                }
                rows={3}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="headDoctor">Head Doctor (Optional)</Label>
              <Input
                id="headDoctor"
                placeholder="Dr. Name"
                value={newDepartment.headDoctor}
                onChange={(e) =>
                  setNewDepartment({ ...newDepartment, headDoctor: e.target.value })
                }
              />
            </div>

            <Button
              onClick={handleAddDepartment}
              disabled={!newDepartment.name || !newDepartment.description}
              className="w-full"
            >
              Add Department
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {!isValid && (
        <p className="text-sm text-muted-foreground text-center">
          Please add at least one department to continue
        </p>
      )}

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={onComplete} disabled={!isValid} size="lg">
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Complete Registration
        </Button>
      </div>
    </div>
  )
}
