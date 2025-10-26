import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2 } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";

interface Workout {
  id: string;
  date: string;
  exercise: string;
  muscleGroup: string;
  sets: number;
  reps: number;
  weight: number;
  duration: number;
  calories: number;
}

const Workouts = () => {
  const [open, setOpen] = useState(false);
  const [workouts] = useState<Workout[]>([
    {
      id: "1",
      date: "2024-01-15",
      exercise: "Bench Press",
      muscleGroup: "Chest",
      sets: 4,
      reps: 10,
      weight: 80,
      duration: 30,
      calories: 250,
    },
    {
      id: "2",
      date: "2024-01-14",
      exercise: "Squats",
      muscleGroup: "Legs",
      sets: 4,
      reps: 12,
      weight: 100,
      duration: 40,
      calories: 320,
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Workout logged successfully!");
    setOpen(false);
  };

  return (
    <Layout title="Workouts">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">Track Your Training</h3>
            <p className="text-sm text-muted-foreground">Log and monitor your workout progress</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary text-white gap-2">
                <Plus className="w-4 h-4" />
                Log New Workout
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Log Workout</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div className="space-y-2">
                    <Label>Exercise Name</Label>
                    <Input placeholder="e.g., Bench Press" />
                  </div>
                  <div className="space-y-2">
                    <Label>Muscle Group</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select muscle group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Chest">Chest</SelectItem>
                        <SelectItem value="Back">Back</SelectItem>
                        <SelectItem value="Legs">Legs</SelectItem>
                        <SelectItem value="Shoulders">Shoulders</SelectItem>
                        <SelectItem value="Arms">Arms</SelectItem>
                        <SelectItem value="Core">Core</SelectItem>
                        <SelectItem value="Full Body">Full Body</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Sets</Label>
                    <Input type="number" placeholder="4" min="1" />
                  </div>
                  <div className="space-y-2">
                    <Label>Reps</Label>
                    <Input type="number" placeholder="10" min="1" />
                  </div>
                  <div className="space-y-2">
                    <Label>Weight (kg)</Label>
                    <Input type="number" placeholder="80" min="0" step="0.5" />
                  </div>
                  <div className="space-y-2">
                    <Label>Duration (minutes)</Label>
                    <Input type="number" placeholder="30" min="1" />
                  </div>
                  <div className="space-y-2">
                    <Label>Calories Burned</Label>
                    <Input type="number" placeholder="250" min="0" />
                  </div>
                </div>
                <Button type="submit" className="w-full gradient-primary text-white">
                  Save Workout
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Workout History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Exercise</TableHead>
                  <TableHead>Muscle Group</TableHead>
                  <TableHead>Sets × Reps</TableHead>
                  <TableHead>Weight (kg)</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Calories</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workouts.map((workout) => (
                  <TableRow key={workout.id}>
                    <TableCell>{new Date(workout.date).toLocaleDateString()}</TableCell>
                    <TableCell className="font-medium">{workout.exercise}</TableCell>
                    <TableCell>{workout.muscleGroup}</TableCell>
                    <TableCell>{workout.sets} × {workout.reps}</TableCell>
                    <TableCell>{workout.weight} kg</TableCell>
                    <TableCell>{workout.duration} min</TableCell>
                    <TableCell>{workout.calories} kcal</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Workouts;
