import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Dumbbell, PlusCircle, Trash2, RotateCcw } from 'lucide-react';
import { toast } from "sonner";

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

const SampleLogWorkout: React.FC = () => {
  const navigate = useNavigate();
  const [workoutDate, setWorkoutDate] = useState<string>('');
  const [workoutType, setWorkoutType] = useState<string>('');
  const [duration, setDuration] = useState<number | string>('');
  const [workoutNotes, setWorkoutNotes] = useState<string>('');
  const [exercises, setExercises] = useState<Exercise[]>([{ name: '', sets: 0, reps: 0, weight: 0 }]);

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const handleExerciseChange = (index: number, field: keyof Exercise, value: string | number) => {
    const newExercises = [...exercises];
    (newExercises[index][field] as any) = value;
    setExercises(newExercises);
  };

  const addExercise = () => {
    setExercises([...exercises, { name: '', sets: 0, reps: 0, weight: 0 }]);
  };

  const removeExercise = (index: number) => {
    const newExercises = exercises.filter((_, i) => i !== index);
    setExercises(newExercises);
  };

  const handleClearForm = () => {
    setWorkoutDate('');
    setWorkoutType('');
    setDuration('');
    setWorkoutNotes('');
    setExercises([{ name: '', sets: 0, reps: 0, weight: 0 }]);
    toast.info("Form cleared!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const workoutData = {
      workoutDate,
      workoutType,
      duration,
      workoutNotes,
      exercises,
    };
    console.log("Logged Workout:", workoutData);
    toast.success("Workout logged successfully! (See console for data)");
    // In a real app, you would send this data to a backend API
    handleClearForm(); // Clear form after successful submission
    // navigate(-1); // Optionally go back to dashboard after logging
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden p-8">
      {/* Glowing background gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[-20%] w-[700px] h-[700px] bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <Button
          variant="outline"
          className="bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground mb-8"
          onClick={() => navigate(-1)} // Go back to the previous page (dashboard)
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>

        <motion.h1
          className="text-4xl font-bold mb-8"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          Log Your Workout <Dumbbell className="inline-block ml-2" />
        </motion.h1>

        <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
          <Card className="bg-white/5 border-border h-full">
            <CardHeader>
              <CardTitle className="text-foreground">Workout Details</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="workoutDate" className="text-muted-foreground">Date</Label>
                    <Input
                      id="workoutDate"
                      type="date"
                      value={workoutDate}
                      onChange={(e) => setWorkoutDate(e.target.value)}
                      className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workoutType" className="text-muted-foreground">Workout Type</Label>
                    <Select onValueChange={setWorkoutType} value={workoutType} required>
                      <SelectTrigger className="bg-white/10 border-border text-foreground focus:border-primary">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-border text-foreground">
                        <SelectItem value="strength">Strength</SelectItem>
                        <SelectItem value="cardio">Cardio</SelectItem>
                        <SelectItem value="yoga">Yoga</SelectItem>
                        <SelectItem value="hiit">HIIT</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration" className="text-muted-foreground">Duration (minutes)</Label>
                    <Input
                      id="duration"
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Exercises</h3>
                  <div className="space-y-4">
                    {exercises.map((exercise, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end p-4 border-border rounded-md bg-white/5">
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor={`exercise-name-${index}`} className="text-muted-foreground">Exercise Name</Label>
                          <Input
                            id={`exercise-name-${index}`}
                            type="text"
                            value={exercise.name}
                            onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
                            className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                            placeholder="Bench Press"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`sets-${index}`} className="text-muted-foreground">Sets</Label>
                          <Input
                            id={`sets-${index}`}
                            type="number"
                            value={exercise.sets}
                            onChange={(e) => handleExerciseChange(index, 'sets', Number(e.target.value))}
                            className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                            min="1"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`reps-${index}`} className="text-muted-foreground">Reps</Label>
                          <Input
                            id={`reps-${index}`}
                            type="number"
                            value={exercise.reps}
                            onChange={(e) => handleExerciseChange(index, 'reps', Number(e.target.value))}
                            className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                            min="1"
                            required
                          />
                        </div>
                        <div className="space-y-2 flex items-end gap-2">
                          <div className="flex-grow">
                            <Label htmlFor={`weight-${index}`} className="text-muted-foreground">Weight (kg)</Label>
                            <Input
                              id={`weight-${index}`}
                              type="number"
                              value={exercise.weight}
                              onChange={(e) => handleExerciseChange(index, 'weight', Number(e.target.value))}
                              className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                              min="0"
                              required
                            />
                          </div>
                          {exercises.length > 1 && (
                            <Button type="button" variant="destructive" size="icon" onClick={() => removeExercise(index)} className="bg-red-600 hover:bg-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button type="button" variant="outline" className="mt-4 bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground" onClick={addExercise}>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Exercise
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workoutNotes" className="text-muted-foreground">Workout Notes</Label>
                  <Textarea
                    id="workoutNotes"
                    value={workoutNotes}
                    onChange={(e) => setWorkoutNotes(e.target.value)}
                    className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                    placeholder="Any additional notes about your workout..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-grow bg-gradient-to-r from-primary to-secondary text-foreground">
                    Save Workout
                  </Button>
                  <Button type="button" variant="outline" className="flex-grow bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground" onClick={handleClearForm}>
                    <RotateCcw className="mr-2 h-4 w-4" /> Clear Form
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes animate-blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .animate-blob {
          animation: animate-blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SampleLogWorkout;
