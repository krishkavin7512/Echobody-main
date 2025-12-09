import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2, Dumbbell, Calendar, Clock, Flame } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { workoutService, Workout } from "@/services/workoutService";
import WorkoutChart from "@/components/workouts/WorkoutChart";
import { motion, AnimatePresence } from "framer-motion";

const Workouts = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: workouts = [], isLoading } = useQuery({
    queryKey: ['workouts'],
    queryFn: async () => {
      const res = await workoutService.getAll();
      return res;
    },
  });

  const createMutation = useMutation({
    mutationFn: workoutService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
      toast.success("Workout logged successfully!");
      setOpen(false);
    },
    onError: () => toast.error("Failed to log workout"),
  });

  const deleteMutation = useMutation({
    mutationFn: workoutService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workouts'] });
      toast.success("Workout deleted");
    },
    onError: () => toast.error("Failed to delete workout"),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newWorkout: Workout = {
      name: formData.get('name') as string,
      muscleGroup: formData.get('muscleGroup') as string,
      sets: Number(formData.get('sets')),
      reps: Number(formData.get('reps')),
      weight: Number(formData.get('weight')),
      duration: Number(formData.get('duration')),
      caloriesBurned: Number(formData.get('calories')),
      date: formData.get('date') as string,
    };

    createMutation.mutate(newWorkout);
  };

  const muscleGroups = ["Chest", "Back", "Legs", "Shoulders", "Arms", "Core", "Full Body"];

  return (
    <Layout>
      <div className="space-y-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-sm">
              Training Log
            </h1>
            <p className="text-muted-foreground mt-1">
              Track your progress and shatter your limits.
            </p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-black font-bold hover:bg-primary/90 shadow-neon transition-all hover:scale-105">
                <Plus className="w-4 h-4 mr-2" />
                Log Workout
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-card border-white/10 text-white sm:max-w-xl backdrop-blur-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Log New Session</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input name="date" type="date" className="bg-black/40 border-white/10" required defaultValue={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div className="space-y-2">
                    <Label>Exercise Name</Label>
                    <Input name="name" placeholder="e.g., Bench Press" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Muscle Group</Label>
                    <Select name="muscleGroup" required>
                      <SelectTrigger className="bg-black/40 border-white/10">
                        <SelectValue placeholder="Select group" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-white/10">
                        {muscleGroups.map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Sets</Label>
                    <Input name="sets" type="number" placeholder="4" min="1" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Reps</Label>
                    <Input name="reps" type="number" placeholder="10" min="1" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Weight (kg)</Label>
                    <Input name="weight" type="number" placeholder="80" min="0" step="0.5" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Duration (min)</Label>
                    <Input name="duration" type="number" placeholder="45" min="1" className="bg-black/40 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label>Calories</Label>
                    <Input name="calories" type="number" placeholder="300" min="0" className="bg-black/40 border-white/10" />
                  </div>
                </div>
                <Button type="submit" disabled={createMutation.isPending} className="w-full bg-primary text-black font-bold hover:bg-primary/90 shadow-neon">
                  {createMutation.isPending ? "Saving..." : "Save Workout"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Analytics Chart */}
        {!isLoading && workouts.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <WorkoutChart workouts={workouts} />
          </motion.div>
        )}

        {/* Workout List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {workouts.map((workout: any, index: number) => (
              <motion.div
                key={workout.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="glass-card p-5 rounded-2xl relative group hover:border-primary/30 transition-colors"
                layout
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary">
                      <Dumbbell className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white leading-tight">{workout.name}</h3>
                      <p className="text-xs text-primary font-medium">{workout.muscleGroup}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteMutation.mutate(workout.id)}
                    className="text-muted-foreground hover:text-red-400 hover:bg-red-500/10 -mt-1 -mr-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{workout.sets}</span> sets × <span className="font-semibold text-white">{workout.reps}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{workout.weight}kg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" /> {workout.duration || 0} min
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="w-3 h-3 text-orange-400" /> {workout.caloriesBurned || 0} kcal
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-muted-foreground/60">
                  <Calendar className="w-3 h-3" />
                  {new Date(workout.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {!isLoading && workouts.length === 0 && (
            <div className="col-span-full py-20 text-center glass-card rounded-2xl">
              <Dumbbell className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
              <h3 className="text-xl font-semibold text-white">No workouts yet</h3>
              <p className="text-muted-foreground mt-2">Log your first session to start tracking!</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Workouts;
