
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Calendar, Dumbbell, Flame } from "lucide-react";

interface WorkoutCardProps {
  workout: {
    id: string;
    date: string;
    name: string;
    muscleGroup: string;
    sets: number;
    reps: number;
    weight: number;
    caloriesBurned: number;
  };
  onSelect: (workoutId: string) => void;
  onEdit: (workoutId: string) => void;
  onDelete: (workoutId: string) => void;
}

export default function WorkoutCard({
  workout,
  onSelect,
  onEdit,
  onDelete,
}: WorkoutCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01, boxShadow: "0 10px 20px rgba(0,255,220,0.1)" }}
      className="workout-neon rounded-xl overflow-hidden cursor-pointer focus-outline"
      onClick={() => onSelect(workout.id)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${workout.name} on ${workout.date}`}
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-primary" /> {workout.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <Calendar className="h-4 w-4" /> {workout.date}
          </p>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>Muscle Group: <span className="text-foreground font-medium">{workout.muscleGroup}</span></p>
          <p>Sets x Reps: <span className="text-foreground font-medium">{workout.sets} x {workout.reps}</span></p>
          <p>Weight: <span className="text-foreground font-medium">{workout.weight} kg</span></p>
          <p className="flex items-center gap-1">
            <Flame className="h-4 w-4 text-orange-400" /> Calories Burned: <span className="text-foreground font-medium">{workout.caloriesBurned}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(workout.id);
            }}
            aria-label={`Edit ${workout.name}`}
            className="focus-outline"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(workout.id);
            }}
            aria-label={`Delete ${workout.name}`}
            className="focus-outline"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
