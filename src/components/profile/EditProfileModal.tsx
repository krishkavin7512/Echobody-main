
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedUser: any) => void; // Replace 'any' with actual User type
  currentUser: any; // Replace 'any' with actual User type
}

export default function EditProfileModal({
  isOpen,
  onClose,
  onSave,
  currentUser,
}: EditProfileModalProps) {
  const [name, setName] = useState(currentUser?.name || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [age, setAge] = useState(currentUser?.age || "");
  const [height_cm, setHeight_cm] = useState(currentUser?.height_cm || "");
  const [weight_kg, setWeight_kg] = useState(currentUser?.weight_kg || "");
  const [gender, setGender] = useState(currentUser?.gender || "");
  const [goal, setGoal] = useState(currentUser?.goal || "");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setEmail(currentUser.email || "");
      setAge(currentUser.age || "");
      setHeight_cm(currentUser.height_cm || "");
      setWeight_kg(currentUser.weight_kg || "");
      setGender(currentUser.gender || "");
      setGoal(currentUser.goal || "");
    }
  }, [currentUser]);

  const handleSubmit = async () => {
    const updatedUser = {
      ...currentUser,
      name,
      email,
      age: parseInt(age as string),
      height_cm: parseInt(height_cm as string),
      weight_kg: parseFloat(weight_kg as string),
      gender,
      goal,
    };

    // Placeholder for API call
    // const token = localStorage.getItem("token");
    // try {
    //   const response = await fetch("/api/profile/update", {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(updatedUser),
    //   });
    //   if (!response.ok) {
    //     throw new Error("Failed to update profile");
    //   }
    //   const data = await response.json();
    //   onSave(data); // Update local state with response from server
    //   onClose();
    // } catch (error) {
    //   console.error("Error updating profile:", error);
    //   // Handle error (e.g., show a toast notification)
    // }

    onSave(updatedUser); // For mock data, directly save
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="sm:max-w-[425px] p-0 overflow-hidden card-glass border-none"
            onEscapeKeyDown={onClose}
            onPointerDownOutside={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-profile-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <DialogHeader className="relative pb-4">
                <DialogTitle id="edit-profile-title" className="text-2xl font-bold text-foreground">
                  Edit Profile
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full focus-outline"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </Button>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="col-span-3 focus-outline"
                    aria-label="Name"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="col-span-3 focus-outline"
                    aria-label="Email"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="age" className="text-right">
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="col-span-3 focus-outline"
                    aria-label="Age"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="height" className="text-right">
                    Height (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    value={height_cm}
                    onChange={(e) => setHeight_cm(e.target.value)}
                    className="col-span-3 focus-outline"
                    aria-label="Height in centimeters"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="weight" className="text-right">
                    Weight (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight_kg}
                    onChange={(e) => setWeight_kg(e.target.value)}
                    className="col-span-3 focus-outline"
                    aria-label="Weight in kilograms"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="gender" className="text-right">
                    Gender
                  </Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger id="gender" className="col-span-3 focus-outline" aria-label="Gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="goal" className="text-right">
                    Goal
                  </Label>
                  <Input
                    id="goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="col-span-3 focus-outline"
                    aria-label="Fitness Goal"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-border mt-4">
                <Button onClick={handleSubmit} className="btn-neon focus-outline">
                  Save Changes
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
