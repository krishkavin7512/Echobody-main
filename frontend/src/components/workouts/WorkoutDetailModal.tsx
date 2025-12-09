
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Dumbbell, Flame, Weight, Repeat, Edit, X } from "lucide-react";

interface WorkoutDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  workout: {
    id: string;
    date: string;
    name: string;
    muscleGroup: string;
    sets: number;
    reps: number;
    weight: number;
    caloriesBurned: number;
    notes?: string;
  } | null;
  onEdit: (workoutId: string) => void;
}

export default function WorkoutDetailModal({
  isOpen,
  onClose,
  workout,
  onEdit,
}: WorkoutDetailModalProps) {
  if (!workout) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="sm:max-w-[425px] p-0 overflow-hidden card-glass border-none"
            onEscapeKeyDown={onClose}
            onPointerDownOutside={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <DialogHeader className="relative pb-4">
                <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Dumbbell className="h-6 w-6 text-primary" /> {workout.name}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {workout.date}
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
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Muscle Group:</span>
                  <span className="font-semibold text-foreground">{workout.muscleGroup}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Repeat className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Sets x Reps:</span>
                  <span className="font-semibold text-foreground">{workout.sets} x {workout.reps}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Weight className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Weight:</span>
                  <span className="font-semibold text-foreground">{workout.weight} kg</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-orange-400" />
                  <span className="text-muted-foreground">Calories Burned:</span>
                  <span className="font-semibold text-foreground">{workout.caloriesBurned}</span>
                </div>
                {workout.notes && (
                  <div>
                    <h4 className="font-semibold text-foreground mt-2">Notes:</h4>
                    <p className="text-muted-foreground text-sm">{workout.notes}</p>
                  </div>
                )}
              </div>

              <div className="flex justify-end pt-4 border-t border-border mt-4">
                <Button onClick={() => onEdit(workout.id)} className="focus-outline">
                  <Edit className="mr-2 h-4 w-4" /> Edit Workout
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
