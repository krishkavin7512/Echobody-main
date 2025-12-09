import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2, Utensils, Clock, Flame } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { nutritionService, Meal } from "@/services/nutritionService";
import NutritionChart from "@/components/nutrition/NutritionChart";
import { motion, AnimatePresence } from "framer-motion";

const Nutrition = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: meals = [], isLoading } = useQuery({
    queryKey: ['meals'],
    queryFn: async () => {
      const res = await nutritionService.getAll();
      return res;
    },
  });

  const createMutation = useMutation({
    mutationFn: nutritionService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['meals'] });
      toast.success("Meal logged!");
      setOpen(false);
    },
    onError: () => toast.error("Failed to log meal"),
  });

  const deleteMutation = useMutation({
    mutationFn: nutritionService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['meals'] });
      toast.success("Meal deleted");
    },
    onError: () => toast.error("Failed to delete meal"),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Combining date and time for dateTime
    const date = formData.get('date') as string;
    const time = formData.get('time') as string;
    const dateTime = new Date(`${date}T${time}`).toISOString();

    const newMeal: Meal = {
      title: formData.get('title') as string,
      type: formData.get('type') as string,
      calories: Number(formData.get('calories')),
      protein: Number(formData.get('protein')),
      carbs: Number(formData.get('carbs')),
      fat: Number(formData.get('fat')),
      dateTime,
    };

    createMutation.mutate(newMeal);
  };

  // Calculate daily totals for today
  const today = new Date().toDateString();
  const todaysMeals = meals.filter((m: Meal) => new Date(m.dateTime || "").toDateString() === today);
  const dailyTotals = todaysMeals.reduce((acc: any, meal: Meal) => ({
    calories: acc.calories + meal.calories,
    protein: acc.protein + meal.protein,
    carbs: acc.carbs + meal.carbs,
    fat: acc.fat + meal.fat,
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

  return (
    <Layout>
      <div className="space-y-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 drop-shadow-sm">
              Nutrition Tracker
            </h1>
            <p className="text-muted-foreground mt-1">
              Fuel your body perfectly.
            </p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-500 text-white font-bold hover:bg-emerald-600 shadow-neon-green transition-all hover:scale-105">
                <Plus className="w-4 h-4 mr-2" />
                Log Meal
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-card border-white/10 text-white sm:max-w-xl backdrop-blur-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Log Meal</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input name="date" type="date" className="bg-black/40 border-white/10" required defaultValue={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Input name="time" type="time" className="bg-black/40 border-white/10" required defaultValue="12:00" />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label>Meal Title</Label>
                    <Input name="title" placeholder="e.g., Grilled Chicken Salad" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Type</Label>
                    <Select name="type" required>
                      <SelectTrigger className="bg-black/40 border-white/10">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/90 border-white/10">
                        <SelectItem value="Breakfast">Breakfast</SelectItem>
                        <SelectItem value="Lunch">Lunch</SelectItem>
                        <SelectItem value="Dinner">Dinner</SelectItem>
                        <SelectItem value="Snack">Snack</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Calories</Label>
                    <Input name="calories" type="number" placeholder="500" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Protein (g)</Label>
                    <Input name="protein" type="number" placeholder="30" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Carbs (g)</Label>
                    <Input name="carbs" type="number" placeholder="50" className="bg-black/40 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Fat (g)</Label>
                    <Input name="fat" type="number" placeholder="20" className="bg-black/40 border-white/10" required />
                  </div>
                </div>
                <Button type="submit" disabled={createMutation.isPending} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-neon-green">
                  {createMutation.isPending ? "Saving..." : "Save Meal"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Daily Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Calories</span>
            <span className="text-2xl font-bold text-white mt-1">{dailyTotals.calories}</span>
            <span className="text-xs text-emerald-400">kcal</span>
          </div>
          <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Protein</span>
            <span className="text-2xl font-bold text-white mt-1">{dailyTotals.protein}g</span>
            <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-blue-400" style={{ width: '60%' }} />
            </div>
          </div>
          <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Carbs</span>
            <span className="text-2xl font-bold text-white mt-1">{dailyTotals.carbs}g</span>
            <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-teal-400" style={{ width: '40%' }} />
            </div>
          </div>
          <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Fat</span>
            <span className="text-2xl font-bold text-white mt-1">{dailyTotals.fat}g</span>
            <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-rose-400" style={{ width: '30%' }} />
            </div>
          </div>
        </div>

        {/* Chart */}
        {!isLoading && meals.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <NutritionChart meals={meals} />
          </motion.div>
        )}

        {/* Meal List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {meals.map((meal: any, index: number) => (
              <motion.div
                key={meal.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="glass-card p-5 rounded-2xl relative group hover:border-emerald-500/30 transition-colors"
                layout
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center text-emerald-400">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white leading-tight">{meal.title}</h3>
                      <p className="text-xs text-emerald-400 font-medium">{meal.type}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteMutation.mutate(meal.id)}
                    className="text-muted-foreground hover:text-red-400 hover:bg-red-500/10 -mt-1 -mr-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-y-3 text-sm text-muted-foreground mt-2">
                  <div className="text-center p-2 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-blue-400 font-bold">{meal.protein}g</div>
                    <div className="text-[10px] uppercase">Prot</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-teal-400 font-bold">{meal.carbs}g</div>
                    <div className="text-[10px] uppercase">Carb</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-rose-400 font-bold">{meal.fat}g</div>
                    <div className="text-[10px] uppercase">Fat</div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/5 text-xs text-muted-foreground/60">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(meal.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div className="flex items-center gap-1 font-semibold text-white">
                    <Flame className="w-3 h-3 text-orange-400" />
                    {meal.calories} kcal
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {!isLoading && meals.length === 0 && (
            <div className="col-span-full py-20 text-center glass-card rounded-2xl">
              <Utensils className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
              <h3 className="text-xl font-semibold text-white">No meals logged</h3>
              <p className="text-muted-foreground mt-2">Start tracking your macros today!</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Nutrition;
